import { and, asc, count, desc, eq, gte, lte, ne, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { children, childTherapies, goals, homePrograms, homeProgramTasks, sessions } from "@/lib/db/schema";
import type { MobileUser } from "./auth";

/**
 * Role-scoped read queries for the mobile API.
 *
 * Access rules mirror lib/data.ts (the website), but take the user explicitly
 * instead of reading the NextAuth cookie session:
 *   - PARENT    -> only their own children (children.parent_id = user)
 *   - THERAPIST -> only their own sessions / children assigned to them in child_therapies
 *
 * Time handling: sessions.date stores IST "wall time" in a naive timestamp, so
 * the Date the driver returns has UTC components equal to the IST clock time
 * (see lib/utils/timezone.ts). We compare against "now" shifted into wall time,
 * and send the wall-time date/time as plain strings so the phone's own
 * timezone setting can't shift them.
 */

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Current IST clock time, expressed the way sessions.date stores it. */
function nowWallTime(): Date {
    return new Date(Date.now() + IST_OFFSET_MS);
}

/** "YYYY-MM-DD" (IST) -> wall-time Date at 00:00 or 23:59:59.999 of that day. */
export function wallDayStart(day: string): Date {
    return new Date(`${day}T00:00:00.000Z`);
}
export function wallDayEnd(day: string): Date {
    return new Date(`${day}T23:59:59.999Z`);
}
export function todayIST(): string {
    return nowWallTime().toISOString().slice(0, 10);
}
export function addDaysIST(day: string, days: number): string {
    return new Date(wallDayStart(day).getTime() + days * DAY_MS).toISOString().slice(0, 10);
}

/** Restricts a children query to what this user may see. */
export function childScope(user: MobileUser) {
    return user.role === "PARENT"
        ? eq(children.parentId, user.id)
        : sql`EXISTS (
            SELECT 1 FROM "child_therapies"
            WHERE "child_therapies"."child_id" = ${children.id}
            AND "child_therapies"."therapist_id" = ${user.id}
        )`;
}

/** Restricts a sessions query to what this user may see. */
export function sessionScope(user: MobileUser) {
    return user.role === "PARENT"
        ? sql`${sessions.childId} IN (SELECT "id" FROM "children" WHERE "parent_id" = ${user.id})`
        : eq(sessions.therapistId, user.id);
}

export type MobileSession = {
    id: string;
    /** IST calendar date, "YYYY-MM-DD". */
    date: string;
    /** IST clock time, "HH:mm". */
    time: string;
    durationMinutes: number;
    status: string;
    attendance: string | null;
    child: { id: string; name: string };
    therapy: { id: string; name: string };
    therapist: { id: string; name: string };
};

export function toMobileSession(s: any): MobileSession {
    const wall = (s.date as Date).toISOString();
    return {
        id: s.id,
        date: wall.slice(0, 10),
        time: wall.slice(11, 16),
        durationMinutes: s.durationMinutes ?? 45,
        status: s.status ?? "SCHEDULED",
        attendance: s.attendance ?? null,
        child: { id: s.child?.id, name: s.child?.name ?? "Unknown child" },
        therapy: { id: s.therapy?.id, name: s.therapy?.name ?? "" },
        therapist: { id: s.therapist?.id, name: s.therapist?.name ?? "" },
    };
}

/** Sessions between two IST dates (inclusive), oldest first. */
export async function getSessions(
    user: MobileUser,
    from: string,
    to: string,
    options: { childId?: string; limit?: number; newestFirst?: boolean } = {},
) {
    const rows = await db.query.sessions.findMany({
        where: and(
            sessionScope(user),
            gte(sessions.date, wallDayStart(from)),
            lte(sessions.date, wallDayEnd(to)),
            options.childId ? eq(sessions.childId, options.childId) : undefined,
        ),
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
        orderBy: [options.newestFirst ? desc(sessions.date) : asc(sessions.date)],
        limit: options.limit,
    });
    return rows.map(toMobileSession);
}

/** Scheduled sessions from now onwards (within `days`), soonest first. */
async function getUpcomingSessions(user: MobileUser, days: number, limit: number) {
    const now = nowWallTime();
    const rows = await db.query.sessions.findMany({
        where: and(
            sessionScope(user),
            eq(sessions.status, "SCHEDULED"),
            gte(sessions.date, now),
            lte(sessions.date, new Date(now.getTime() + days * DAY_MS)),
        ),
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
        orderBy: [asc(sessions.date)],
        limit,
    });
    return rows.map(toMobileSession);
}

/** Same data as the website's ParentDashboard (Total Due arrives with the Fees screen). */
export async function getParentDashboard(user: MobileUser) {
    const [kids, upcoming, goalCount, programs] = await Promise.all([
        db.query.children.findMany({
            where: childScope(user),
            orderBy: [asc(children.name)],
            columns: { id: true, name: true, dob: true, gender: true, diagnosis: true, status: true, caseNumber: true },
        }),
        getUpcomingSessions(user, 7, 1),
        db
            .select({ value: count() })
            .from(goals)
            .where(and(
                ne(goals.status, "ACHIEVED"),
                sql`${goals.childId} IN (SELECT "id" FROM "children" WHERE "parent_id" = ${user.id})`,
            )),
        db
            .select({ id: homePrograms.id, tasks: count(homeProgramTasks.id) })
            .from(homePrograms)
            .leftJoin(homeProgramTasks, eq(homeProgramTasks.programId, homePrograms.id))
            .where(sql`${homePrograms.childId} IN (SELECT "id" FROM "children" WHERE "parent_id" = ${user.id})`)
            .groupBy(homePrograms.id),
    ]);

    return {
        role: "PARENT" as const,
        nextSession: upcoming[0] ?? null,
        activeGoals: Number(goalCount[0]?.value ?? 0),
        homePrograms: {
            count: programs.length,
            activities: programs.reduce((sum, p) => sum + Number(p.tasks), 0),
        },
        children: kids,
    };
}

/** Website's StaffDashboard (upcoming sessions) plus a few at-a-glance counts. */
export async function getTherapistDashboard(user: MobileUser) {
    const today = todayIST();
    const [upcoming, todaySessions, caseload] = await Promise.all([
        getUpcomingSessions(user, 30, 30),
        getSessions(user, today, today),
        db
            .selectDistinct({ childId: childTherapies.childId })
            .from(childTherapies)
            .innerJoin(children, eq(children.id, childTherapies.childId))
            .where(and(eq(childTherapies.therapistId, user.id), eq(children.status, "ACTIVE"))),
    ]);

    return {
        role: "THERAPIST" as const,
        today: {
            total: todaySessions.length,
            completed: todaySessions.filter((s) => s.status === "COMPLETED").length,
        },
        caseloadCount: caseload.length,
        upcomingSessions: upcoming,
    };
}
