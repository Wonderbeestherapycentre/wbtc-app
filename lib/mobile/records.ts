import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { goals, homeProgramSubmissions, homeProgramTasks, homePrograms, sessionNotes } from "@/lib/db/schema";
import { PROMPT_OPTIONS } from "@/lib/constants";
import type { MobileUser } from "./auth";
import { parentOwnsChild } from "./children";

/**
 * Goals, session notes and home programs for the mobile app.
 * Scope (same as the website's goals/notes/home-programs pages):
 *   PARENT    -> records of their own children
 *   THERAPIST -> records they own (therapist_id = user)
 * An optional childId narrows the list further.
 */

const ref = (row: { id: string; name: string } | null | undefined) =>
    row ? { id: row.id, name: row.name } : null;

function parseJson<T>(text: string | null | undefined, fallback: T): T {
    if (!text) return fallback;
    try {
        return JSON.parse(text) as T;
    } catch {
        return fallback;
    }
}

function parseObjectives(text: string | null): string[] {
    const parsed = parseJson<unknown>(text, null);
    if (Array.isArray(parsed)) return parsed.map(String).filter((o) => o.trim() !== "");
    return text?.trim() ? [text.trim()] : [];
}

const iso = (d: Date | null | undefined) => (d ? d.toISOString() : null);

// ---------------------------------------------------------------- Goals

export async function listGoals(user: MobileUser, childId?: string) {
    const rows = await db.query.goals.findMany({
        where: and(
            user.role === "PARENT" ? parentOwnsChild(goals.childId, user.id) : eq(goals.therapistId, user.id),
            childId ? eq(goals.childId, childId) : undefined,
        ),
        orderBy: [desc(goals.createdAt)],
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
    });

    return rows.map((g) => ({
        id: g.id,
        title: g.title || parseObjectives(g.objectives)[0] || "Goal",
        objectives: parseObjectives(g.objectives),
        status: g.status,
        startDate: g.startDate,
        endDate: g.endDate,
        child: ref(g.child),
        therapy: ref(g.therapy),
        therapist: ref(g.therapist),
    }));
}

// ---------------------------------------------------------------- Session notes

function noteScope(user: MobileUser) {
    return user.role === "PARENT"
        ? parentOwnsChild(sessionNotes.childId, user.id)
        : eq(sessionNotes.therapistId, user.id);
}

export async function listSessionNotes(user: MobileUser, childId?: string) {
    const rows = await db.query.sessionNotes.findMany({
        where: and(noteScope(user), childId ? eq(sessionNotes.childId, childId) : undefined),
        orderBy: [desc(sessionNotes.date), desc(sessionNotes.createdAt)],
        limit: 200,
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
    });

    return rows.map((n) => ({
        id: n.id,
        date: n.date,
        child: ref(n.child),
        therapy: ref(n.therapy),
        therapist: ref(n.therapist),
        littleWins: n.littleWins,
        activityCount: parseJson<unknown[]>(n.activities, []).length,
        parentViewed: !!n.parentViewedAt,
    }));
}

/**
 * Same content as the website's SessionNoteView (little wins, activities with
 * prompt level, goals addressed). Opening a note as a parent records the view,
 * exactly like the website does.
 */
export async function getSessionNote(user: MobileUser, id: string) {
    const note = await db.query.sessionNotes.findFirst({
        where: and(eq(sessionNotes.id, id), noteScope(user)),
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
    });
    if (!note) return null;

    if (user.role === "PARENT" && !note.parentViewedAt) {
        note.parentViewedAt = new Date();
        await db.update(sessionNotes).set({ parentViewedAt: note.parentViewedAt }).where(eq(sessionNotes.id, id));
    }

    const activities = parseJson<{ description?: string; prompt?: string }[]>(note.activities, []);
    const goalIds = Object.keys(parseJson<Record<string, unknown>>(note.goalsAddressed, {}));
    const goalRows = goalIds.length
        ? await db.query.goals.findMany({
            where: inArray(goals.id, goalIds),
            columns: { id: true, title: true, objectives: true, status: true },
        })
        : [];

    return {
        id: note.id,
        date: note.date,
        child: ref(note.child),
        therapy: ref(note.therapy),
        therapist: ref(note.therapist),
        littleWins: note.littleWins,
        activities: (Array.isArray(activities) ? activities : []).map((a) => {
            const option = PROMPT_OPTIONS.find((o) => o.key === a.prompt);
            return {
                description: a.description ?? "",
                prompt: a.prompt
                    ? { label: option?.value ?? a.prompt, description: option?.desc ?? null }
                    : null,
            };
        }),
        goals: goalIds.map((gid) => {
            const g = goalRows.find((r) => r.id === gid);
            return g
                ? { id: g.id, title: g.title || parseObjectives(g.objectives)[0] || "Goal", status: g.status }
                : { id: gid, title: "Unknown Goal", status: null };
        }),
        parentViewedAt: iso(note.parentViewedAt),
    };
}

// ---------------------------------------------------------------- Home programs

function programScope(user: MobileUser) {
    return user.role === "PARENT"
        ? parentOwnsChild(homePrograms.childId, user.id)
        : eq(homePrograms.therapistId, user.id);
}

export async function listHomePrograms(user: MobileUser, childId?: string) {
    const rows = await db.query.homePrograms.findMany({
        where: and(programScope(user), childId ? eq(homePrograms.childId, childId) : undefined),
        orderBy: [desc(homePrograms.createdAt)],
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
            tasks: { columns: { id: true } },
            submissions: { columns: { date: true }, orderBy: [desc(homeProgramSubmissions.date)], limit: 1 },
        },
    });

    return rows.map((p) => ({
        id: p.id,
        title: p.title,
        status: p.status,
        child: ref(p.child),
        therapy: ref(p.therapy),
        therapist: ref(p.therapist),
        taskCount: p.tasks.length,
        lastSubmission: p.submissions[0]?.date ?? null,
    }));
}

export async function getHomeProgram(user: MobileUser, id: string) {
    const p = await db.query.homePrograms.findFirst({
        where: and(eq(homePrograms.id, id), programScope(user)),
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
            tasks: { orderBy: [asc(homeProgramTasks.createdAt)] },
            submissions: { orderBy: [desc(homeProgramSubmissions.date)], limit: 15 },
        },
    });
    if (!p) return null;

    return {
        id: p.id,
        title: p.title,
        status: p.status,
        child: ref(p.child),
        therapy: ref(p.therapy),
        therapist: ref(p.therapist),
        tasks: p.tasks.map((t) => ({ id: t.id, description: t.description, status: t.status })),
        submissions: p.submissions.map((s) => ({
            id: s.id,
            date: s.date,
            overallScore: Number(s.overallScore),
            taskScore: Number(s.taskScore),
            supportScore: Number(s.supportScore),
            performanceLevel: s.performanceLevel,
        })),
    };
}
