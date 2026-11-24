import { and, asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { children, childTherapies, goals, therapies } from "@/lib/db/schema";
import { getTodayIST } from "@/lib/utils/timezone";
import type { MobileUser } from "./auth";
import { childScope } from "./data";
import { HttpError, isUuid } from "./http";

/**
 * Therapist goal create/edit for the mobile app — same rules as the website's
 * GoalForm + createGoal/updateGoal actions:
 *   - create: one goal record per objective (each objective becomes its own goal)
 *   - edit:   child and therapy are fixed; dates, description and status change
 *   - therapists only touch goals they own (therapist_id = user)
 */

const STATUSES = ["EMERGING", "PARTIALLY_ACHIEVED", "ACHIEVED"] as const;
type GoalStatus = (typeof STATUSES)[number];
const DAY = /^\d{4}-\d{2}-\d{2}$/;

const ref = (row: { id: string; name: string } | null | undefined) =>
    row ? { id: row.id, name: row.name } : null;

function parseObjectives(text: string | null): string[] {
    try {
        const parsed = JSON.parse(text ?? "");
        if (Array.isArray(parsed)) return parsed.map(String).filter((o) => o.trim() !== "");
    } catch {
        // plain text
    }
    return text?.trim() ? [text.trim()] : [];
}

/** Same shape as listGoals() in records.ts, so the app can show it right away. */
function toMobileGoal(g: any) {
    return {
        id: g.id,
        title: g.title || parseObjectives(g.objectives)[0] || "Goal",
        objectives: parseObjectives(g.objectives),
        status: g.status,
        startDate: g.startDate,
        endDate: g.endDate,
        child: ref(g.child),
        therapy: ref(g.therapy),
        therapist: ref(g.therapist),
    };
}

/**
 * Active children assigned to the therapist, each with the therapies it is enrolled in.
 * Shared by the goal and home-program forms (both default the therapy like the website).
 */
export async function getTherapistChildOptions(user: MobileUser) {
    const [kids, therapyRows] = await Promise.all([
        db.query.children.findMany({
            where: and(eq(children.status, "ACTIVE"), childScope(user)),
            orderBy: [asc(children.name)],
            columns: { id: true, name: true, caseNumber: true },
            with: { therapyTypes: { columns: { therapyId: true, therapistId: true } } },
        }),
        db.query.therapies.findMany({ columns: { id: true, name: true }, orderBy: [asc(therapies.name)] }),
    ]);

    return {
        today: getTodayIST(),
        children: kids.map((c) => ({
            id: c.id,
            name: c.name,
            caseNumber: c.caseNumber,
            therapies: therapyRows.filter((t) => c.therapyTypes.some((ct) => ct.therapyId === t.id)),
            /** The therapy this therapist handles for the child — the default, like the website. */
            myTherapyId: c.therapyTypes.find((ct) => ct.therapistId === user.id)?.therapyId ?? null,
        })),
    };
}

export async function getGoalFormOptions(user: MobileUser) {
    return { ...(await getTherapistChildOptions(user)), statuses: STATUSES };
}

function readDates(body: any) {
    const { startDate, endDate } = body ?? {};
    if (typeof startDate !== "string" || !DAY.test(startDate)) throw new HttpError(400, "Invalid start date.");
    if (typeof endDate !== "string" || !DAY.test(endDate)) throw new HttpError(400, "Invalid end date.");
    if (endDate < startDate) throw new HttpError(400, "End date can't be before the start date.");
    return { startDate, endDate };
}

function readStatus(value: unknown): GoalStatus {
    if (value === undefined || value === null || value === "") return "EMERGING";
    if (!STATUSES.includes(value as GoalStatus)) throw new HttpError(400, "Invalid status.");
    return value as GoalStatus;
}

function readObjectives(value: unknown): string[] {
    const list = Array.isArray(value) ? value : [];
    const clean = list.filter((o): o is string => typeof o === "string").map((o) => o.trim()).filter(Boolean);
    if (clean.length === 0) throw new HttpError(400, "Please add at least one goal.");
    return clean;
}

/** POST body: { childId, therapyId, startDate, endDate, objectives: string[], status } */
export async function createGoalsForTherapist(user: MobileUser, body: any) {
    const { childId, therapyId } = body ?? {};
    if (!isUuid(childId)) throw new HttpError(400, "Please select a child.");
    if (!isUuid(therapyId)) throw new HttpError(400, "Please select a therapy.");
    const { startDate, endDate } = readDates(body);
    const status = readStatus(body.status);
    const objectives = readObjectives(body.objectives);

    // The child must be one of the therapist's active children, enrolled in that therapy.
    const child = await db.query.children.findFirst({
        where: and(eq(children.id, childId), eq(children.status, "ACTIVE"), childScope(user)),
        columns: { id: true },
    });
    if (!child) throw new HttpError(403, "This child isn't assigned to you.");
    const enrolled = await db.query.childTherapies.findFirst({
        where: and(eq(childTherapies.childId, childId), eq(childTherapies.therapyId, therapyId)),
        columns: { childId: true },
    });
    if (!enrolled) throw new HttpError(400, "This child isn't enrolled in that therapy.");

    await db.insert(goals).values(
        objectives.map((text) => ({
            title: text,
            childId,
            therapyId,
            therapistId: user.id,
            startDate,
            endDate,
            objectives: JSON.stringify([text]),
            status,
        })),
    );

    revalidatePath("/goals");
    revalidatePath(`/childrens/${childId}`);
    return { created: objectives.length, message: `${objectives.length} goal${objectives.length > 1 ? "s" : ""} created` };
}

/** PUT body: { startDate, endDate, objectives: string[], status } — child/therapy stay as they are. */
export async function updateGoalForTherapist(user: MobileUser, id: string, body: any) {
    if (!isUuid(id)) throw new HttpError(400, "Invalid goal.");
    const own = and(eq(goals.id, id), eq(goals.therapistId, user.id));
    const existing = await db.query.goals.findFirst({ where: own, columns: { id: true, childId: true } });
    if (!existing) return null;

    const { startDate, endDate } = readDates(body);
    const status = readStatus(body?.status);
    const objectives = readObjectives(body?.objectives);

    await db
        .update(goals)
        .set({
            title: objectives[0],
            objectives: JSON.stringify(objectives),
            startDate,
            endDate,
            status,
            updatedAt: new Date(),
        })
        .where(own);

    revalidatePath("/goals");
    revalidatePath(`/childrens/${existing.childId}`);

    const updated = await db.query.goals.findFirst({
        where: own,
        with: {
            child: { columns: { id: true, name: true } },
            therapy: { columns: { id: true, name: true } },
            therapist: { columns: { id: true, name: true } },
        },
    });
    return updated ? toMobileGoal(updated) : null;
}
