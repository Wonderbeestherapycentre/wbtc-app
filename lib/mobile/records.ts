import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import {
    children,
    goals,
    homeProgramSubmissions,
    homeProgramTasks,
    homePrograms,
    sessionNotes,
    therapies,
    users,
} from "@/lib/db/schema";
import { PROMPT_OPTIONS } from "@/lib/constants";
import { revalidatePath } from "next/cache";
import { SUPPORT_LEVELS, saveHomeProgramReport, type ReportTask } from "@/lib/home-program-report";
import { getTodayIST } from "@/lib/utils/timezone";
import type { MobileUser } from "./auth";
import { parentOwnsChild } from "./children";
import { childScope } from "./data";
import { HttpError, isUuid } from "./http";

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
    const goalsAddressed = parseJson<Record<string, unknown>>(note.goalsAddressed, {});
    const goalIds = Object.keys(goalsAddressed);
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
                promptKey: a.prompt ?? null,
                prompt: a.prompt
                    ? { label: option?.value ?? a.prompt, description: option?.desc ?? null }
                    : null,
            };
        }),
        goals: goalIds.map((gid) => {
            const g = goalRows.find((r) => r.id === gid);
            const ticked = goalsAddressed[gid];
            const objectives = Array.isArray(ticked) ? ticked.map(String) : [];
            return g
                ? { id: g.id, title: g.title || parseObjectives(g.objectives)[0] || "Goal", status: g.status, objectives }
                : { id: gid, title: "Unknown Goal", status: null, objectives };
        }),
        parentViewedAt: iso(note.parentViewedAt),
        /** Website rule: therapists may edit/delete a note only on its own day. */
        canEdit: user.role === "THERAPIST" && note.date === getTodayIST(),
    };
}

// ---------------------------------------------------------------- Session notes (therapist writes)

/**
 * Everything the "New / Edit Session Note" form needs — same sources as the
 * website's new-note page: active children assigned to the therapist, the
 * therapy from their specialization, their goals, and the prompt levels.
 */
export async function getSessionNoteFormOptions(user: MobileUser) {
    const [me, kids, goalRows] = await Promise.all([
        db.query.users.findFirst({ where: eq(users.id, user.id), columns: { specialization: true } }),
        db.query.children.findMany({
            where: and(eq(children.status, "ACTIVE"), childScope(user)),
            orderBy: [asc(children.name)],
            columns: { id: true, name: true, caseNumber: true },
            with: { therapyTypes: { columns: { therapyId: true } } },
        }),
        db.query.goals.findMany({
            where: eq(goals.therapistId, user.id),
            orderBy: [desc(goals.createdAt)],
            columns: { id: true, title: true, objectives: true, childId: true, therapyId: true },
        }),
    ]);

    const therapy = await specializationTherapy(me?.specialization);

    return {
        today: getTodayIST(),
        therapy,
        children: kids.map((c) => ({
            id: c.id,
            name: c.name,
            caseNumber: c.caseNumber,
            therapyIds: c.therapyTypes.map((t) => t.therapyId),
        })),
        goals: goalRows
            .map((g) => ({
                id: g.id,
                childId: g.childId,
                therapyId: g.therapyId,
                title: g.title || parseObjectives(g.objectives)[0] || "Goal",
                objectives: parseObjectives(g.objectives),
            }))
            .filter((g) => g.objectives.length > 0),
        prompts: PROMPT_OPTIONS.map((o) => ({ key: o.key, label: o.value, description: o.desc })),
    };
}

async function specializationTherapy(specialization: string | null | undefined) {
    if (!isUuid(specialization)) return null;
    const row = await db.query.therapies.findFirst({
        where: eq(therapies.id, specialization),
        columns: { id: true, name: true },
    });
    return row ?? null;
}

type NoteBody = { childId?: unknown; date?: unknown; goalsAddressed?: unknown; activities?: unknown; littleWins?: unknown };

/** Validates the shared fields, using the same rules as SessionNoteSchema. */
async function parseNoteFields(user: MobileUser, childId: string, therapyId: string, body: NoteBody) {
    const date = typeof body.date === "string" ? body.date : "";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) throw new HttpError(400, "Date is required");
    if (date > getTodayIST()) throw new HttpError(400, "Date cannot be in the future");

    const rawActivities = Array.isArray(body.activities) ? body.activities : [];
    const activities: { description: string; prompt: string }[] = [];
    for (const a of rawActivities) {
        const description = typeof a?.description === "string" ? a.description.trim() : "";
        const prompt = typeof a?.prompt === "string" ? a.prompt : "";
        if (!description && !prompt) continue; // blank row, same as the website
        if (!description) throw new HttpError(400, "Activity description is required");
        if (!PROMPT_OPTIONS.some((o) => o.key === prompt)) throw new HttpError(400, "Prompt is required");
        activities.push({ description, prompt });
    }
    if (activities.length === 0) throw new HttpError(400, "Please add at least one activity");

    // Only objectives of this therapist's goals for this child + therapy are kept.
    const ownGoals = await db.query.goals.findMany({
        where: and(eq(goals.therapistId, user.id), eq(goals.childId, childId), eq(goals.therapyId, therapyId)),
        columns: { id: true, objectives: true },
    });
    const picked = body.goalsAddressed && typeof body.goalsAddressed === "object" ? (body.goalsAddressed as Record<string, unknown>) : {};
    const goalsAddressed: Record<string, string[]> = {};
    for (const g of ownGoals) {
        const allowed = parseObjectives(g.objectives);
        const chosen = Array.isArray(picked[g.id]) ? (picked[g.id] as unknown[]).map(String).filter((o) => allowed.includes(o)) : [];
        if (chosen.length) goalsAddressed[g.id] = chosen;
    }

    const littleWins = typeof body.littleWins === "string" ? body.littleWins.trim() : "";

    return {
        date,
        activities: JSON.stringify(activities),
        goalsAddressed: JSON.stringify(goalsAddressed),
        littleWins: littleWins || null,
    };
}

export async function createSessionNoteForTherapist(user: MobileUser, body: NoteBody) {
    const childId = typeof body.childId === "string" ? body.childId : "";
    if (!isUuid(childId)) throw new HttpError(400, "Please select a child");
    const child = await db.query.children.findFirst({
        where: and(eq(children.id, childId), eq(children.status, "ACTIVE"), childScope(user)),
        columns: { id: true },
    });
    if (!child) throw new HttpError(400, "Please select a child");

    // Website: therapy is auto-selected from the therapist's specialization.
    const me = await db.query.users.findFirst({ where: eq(users.id, user.id), columns: { specialization: true } });
    const therapy = await specializationTherapy(me?.specialization);
    if (!therapy) throw new HttpError(400, "Your therapy specialization isn't set. Please contact the admin.");

    const fields = await parseNoteFields(user, childId, therapy.id, body);
    const [row] = await db
        .insert(sessionNotes)
        .values({ childId, therapyId: therapy.id, therapistId: user.id, ...fields })
        .returning({ id: sessionNotes.id });

    revalidatePath("/session-notes");
    return { id: row.id, message: "Session note created successfully" };
}

async function ownTodayNote(user: MobileUser, id: string) {
    const note = await db.query.sessionNotes.findFirst({
        where: and(eq(sessionNotes.id, id), eq(sessionNotes.therapistId, user.id)),
        columns: { id: true, childId: true, therapyId: true, date: true },
    });
    if (!note) return null;
    if (note.date !== getTodayIST()) throw new HttpError(403, "Notes can only be changed on the day they were written.");
    return note;
}

export async function updateSessionNoteForTherapist(user: MobileUser, id: string, body: NoteBody) {
    const note = await ownTodayNote(user, id);
    if (!note) return null;
    // Child and therapy are locked on edit (same as the website form).
    const fields = await parseNoteFields(user, note.childId, note.therapyId, body);
    await db.update(sessionNotes).set({ ...fields, updatedAt: new Date() }).where(eq(sessionNotes.id, id));
    revalidatePath("/session-notes");
    return { id, message: "Session note updated successfully" };
}

export async function deleteSessionNoteForTherapist(user: MobileUser, id: string) {
    const note = await ownTodayNote(user, id);
    if (!note) return null;
    await db.delete(sessionNotes).where(eq(sessionNotes.id, id));
    revalidatePath("/session-notes");
    return { message: "Session note deleted successfully" };
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
            submissions: {
                orderBy: [desc(homeProgramSubmissions.date)],
                limit: 15,
                with: { submissionTasks: { columns: { taskId: true, supportLevelId: true } } },
            },
        },
    });
    if (!p) return null;

    return {
        id: p.id,
        title: p.title,
        status: p.status,
        createdAt: iso(p.createdAt),
        /** IST calendar date, so the app knows which submission is "today's activity". */
        today: getTodayIST(),
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
            tasks: s.submissionTasks.map((t) => ({ taskId: t.taskId, supportLevelId: t.supportLevelId })),
        })),
    };
}

/**
 * Parent's "Add / Update Today's Activity" — same scoring and storage as the
 * website's HomeProgramReportForm. The child and support-level scores come from
 * the server, never from the client.
 */
export async function submitHomeProgramReportForParent(
    user: MobileUser,
    programId: string,
    body: { date?: unknown; tasks?: unknown },
) {
    const program = await db.query.homePrograms.findFirst({
        where: and(eq(homePrograms.id, programId), programScope(user)),
        columns: { id: true, childId: true, status: true },
        with: { tasks: { columns: { id: true } } },
    });
    if (!program) return null;
    if (program.status === "COMPLETED") throw new HttpError(400, "This program is completed. Reporting is closed.");

    const date = typeof body.date === "string" ? body.date : "";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
        throw new HttpError(400, "Invalid date.");
    }
    if (date > getTodayIST()) throw new HttpError(400, "You can't report activity for a future date.");

    const taskIds = new Set(program.tasks.map((t) => t.id));
    const raw = Array.isArray(body.tasks) ? body.tasks : [];
    const seen = new Set<string>();
    const tasks: ReportTask[] = [];
    for (const item of raw) {
        const taskId = typeof item?.taskId === "string" ? item.taskId : "";
        const level = SUPPORT_LEVELS.find((l) => l.id === Number(item?.supportLevelId));
        if (!taskIds.has(taskId) || seen.has(taskId)) throw new HttpError(400, "Invalid task.");
        if (!level) throw new HttpError(400, "Please select a support level for all checked tasks.");
        seen.add(taskId);
        tasks.push({ taskId, supportLevelId: level.id, supportLevelName: level.name, score: level.score });
    }
    if (tasks.length === 0) throw new HttpError(400, "Please select at least one task to report.");

    const result = await saveHomeProgramReport({
        programId: program.id,
        childId: program.childId,
        parentId: user.id,
        date,
        tasks,
    });
    revalidatePath(`/home-programs/${program.id}`);
    revalidatePath("/home-programs");
    return result;
}
