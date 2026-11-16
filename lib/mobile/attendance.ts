import type { MobileUser } from "./auth";
import { getSessions } from "./data";

/**
 * Therapist attendance (read-only), like the website's Attendance page with
 * the therapist filter applied: the day's sessions plus a per-child summary
 * for that month.
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
