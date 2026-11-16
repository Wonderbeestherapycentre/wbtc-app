import { and, asc, count, eq, ne, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { children, goals, homePrograms, sessionNotes } from "@/lib/db/schema";
import type { MobileUser } from "./auth";
import { addDaysIST, childScope, getSessions, todayIST } from "./data";

/** Children list — same scope as the website's fetchChildren (active + inactive). */
export async function listChildren(user: MobileUser) {
    const rows = await db.query.children.findMany({
        where: childScope(user),
        orderBy: [asc(children.name)],
        with: {
            therapyTypes: {
                with: {
                    therapy: { columns: { id: true, name: true } },
                    therapist: { columns: { id: true, name: true } },
                },
            },
        },
    });

    return rows.map((c) => ({
        id: c.id,
        name: c.name,
        dob: c.dob,
        gender: c.gender,
        diagnosis: c.diagnosis,
        status: c.status,
        caseNumber: c.caseNumber,
        therapies: c.therapyTypes.map((t) => ({
            id: t.therapy.id,
            name: t.therapy.name,
            therapist: t.therapist?.name ?? null,
        })),
    }));
}

/**
 * One child with therapies, upcoming/recent sessions and section counts.
 * Parent details are not included (the website hides them from therapists,
 * and for parents it is themselves).
 */
export async function getChild(user: MobileUser, childId: string) {
    const child = await db.query.children.findFirst({
        where: and(eq(children.id, childId), childScope(user)),
        with: {
            therapyTypes: {
                with: {
                    therapy: { columns: { id: true, name: true } },
                    therapist: { columns: { id: true, name: true } },
                },
            },
        },
    });
    if (!child) return null;

    const today = todayIST();
    const ownGoals = user.role === "THERAPIST" ? eq(goals.therapistId, user.id) : undefined;
    const ownPrograms = user.role === "THERAPIST" ? eq(homePrograms.therapistId, user.id) : undefined;
    const ownNotes = user.role === "THERAPIST" ? eq(sessionNotes.therapistId, user.id) : undefined;

    const [upcoming, recent, goalCount, programCount, noteCount] = await Promise.all([
        getSessions(user, today, addDaysIST(today, 90), { childId, limit: 5 }),
        getSessions(user, addDaysIST(today, -60), addDaysIST(today, -1), { childId, limit: 5, newestFirst: true }),
        db.select({ value: count() }).from(goals)
            .where(and(eq(goals.childId, childId), ne(goals.status, "ACHIEVED"), ownGoals)),
        db.select({ value: count() }).from(homePrograms)
            .where(and(eq(homePrograms.childId, childId), eq(homePrograms.status, "ACTIVE"), ownPrograms)),
        db.select({ value: count() }).from(sessionNotes)
            .where(and(eq(sessionNotes.childId, childId), ownNotes)),
    ]);

    return {
        id: child.id,
        name: child.name,
        dob: child.dob,
        gender: child.gender,
        diagnosis: child.diagnosis,
        status: child.status,
        caseNumber: child.caseNumber,
        therapies: child.therapyTypes.map((t) => ({
            id: t.therapy.id,
            name: t.therapy.name,
            therapist: t.therapist?.name ?? null,
        })),
        counts: {
            activeGoals: Number(goalCount[0]?.value ?? 0),
            activeHomePrograms: Number(programCount[0]?.value ?? 0),
            sessionNotes: Number(noteCount[0]?.value ?? 0),
        },
        upcomingSessions: upcoming,
        recentSessions: recent,
    };
}

/** True if this user may see data for the child. */
export async function canAccessChild(user: MobileUser, childId: string) {
    const row = await db.query.children.findFirst({
        where: and(eq(children.id, childId), childScope(user)),
        columns: { id: true },
    });
    return !!row;
}

/** SQL fragment: column holds one of this parent's children. */
export function parentOwnsChild(column: any, parentId: string) {
    return sql`${column} IN (SELECT "id" FROM "children" WHERE "parent_id" = ${parentId})`;
}
