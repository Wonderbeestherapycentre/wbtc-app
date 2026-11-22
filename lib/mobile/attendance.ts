import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { sessions } from "@/lib/db/schema";
import type { MobileUser } from "./auth";
import { getSessions, toMobileSession } from "./data";
import { HttpError, isUuid } from "./http";

export const ATTENDANCE_VALUES = ["PRESENT", "ABSENT", "EXCUSED"] as const;
export type AttendanceValue = (typeof ATTENDANCE_VALUES)[number];

/**
 * Mark attendance on one of the therapist's own sessions. Same rule as the
 * website's updateAttendance action: PRESENT also completes the session.
 */
export async function markSessionAttendance(user: MobileUser, sessionId: unknown, attendance: unknown) {
    if (typeof sessionId !== "string" || !isUuid(sessionId)) throw new HttpError(400, "Invalid session.");
    if (!ATTENDANCE_VALUES.includes(attendance as AttendanceValue)) {
        throw new HttpError(400, "Attendance must be PRESENT, ABSENT or EXCUSED.");
    }

    const own = and(eq(sessions.id, sessionId), eq(sessions.therapistId, user.id));
    const existing = await db.query.sessions.findFirst({ where: own, columns: { id: true, status: true } });
    if (!existing) return null; // not found, or someone else's session
    if (existing.status === "CANCELLED") throw new HttpError(409, "This session was cancelled.");

    const update: { attendance: AttendanceValue; status?: "COMPLETED" } = { attendance: attendance as AttendanceValue };
    if (attendance === "PRESENT") update.status = "COMPLETED";
    await db.update(sessions).set(update).where(own);

    const updated = await db.query.sessions.findFirst({
        where: own,
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
    });
    return updated ? toMobileSession(updated) : null;
}

/**
 * Therapist attendance, like the website's Attendance page with the therapist
 * filter applied: the day's sessions plus a per-child summary for that month.
 */
export async function getTherapistAttendance(user: MobileUser, day: string) {
    const month = day.slice(0, 7);
    const [y, m] = month.split("-").map(Number);
    const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate();

    const [daySessions, monthSessions] = await Promise.all([
        getSessions(user, day, day),
        getSessions(user, `${month}-01`, `${month}-${String(lastDay).padStart(2, "0")}`),
    ]);

    const count = (list: typeof daySessions) => ({
        total: list.length,
        present: list.filter((s) => s.attendance === "PRESENT").length,
        absent: list.filter((s) => s.attendance === "ABSENT").length,
        excused: list.filter((s) => s.attendance === "EXCUSED").length,
        unmarked: list.filter((s) => !s.attendance && s.status !== "CANCELLED").length,
    });

    const byChild = new Map<string, { child: { id: string; name: string }; sessions: typeof monthSessions }>();
    for (const s of monthSessions) {
        const entry = byChild.get(s.child.id) ?? { child: s.child, sessions: [] };
        entry.sessions.push(s);
        byChild.set(s.child.id, entry);
    }

    return {
        date: day,
        month,
        day: { ...count(daySessions), sessions: daySessions },
        monthSummary: [...byChild.values()]
            .map((e) => ({ child: e.child, ...count(e.sessions) }))
            .sort((a, b) => a.child.name.localeCompare(b.child.name)),
    };
}
