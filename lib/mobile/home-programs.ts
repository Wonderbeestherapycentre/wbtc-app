import { and, asc, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { children, childTherapies, homePrograms, homeProgramTasks } from "@/lib/db/schema";
import type { MobileUser } from "./auth";
import { childScope } from "./data";
import { getTherapistChildOptions } from "./goals";
import { HttpError, isUuid } from "./http";

/**
 * Therapist home-program management for the mobile app — same rules as the
 * website's HomeProgramForm + createHomeProgram / updateHomeProgram / deleteHomeProgram:
 *   - therapists browse by child first (fetchHomeProgramChildGroups)
 *   - edit keeps child and therapy; title, status and tasks change
 *   - tasks are only replaced when they actually changed, so existing task ids
 *     (and the parent's daily reports that point at them) survive a title/status edit
 *   - therapists only touch programs they own (therapist_id = user)
 */

const PROGRAM_STATUSES = ["ACTIVE", "INACTIVE", "COMPLETED"] as const;
const TASK_STATUSES = ["PENDING", "COMPLETED", "IN_PROGRESS", "BORED", "REFUSED"] as const;
type ProgramStatus = (typeof PROGRAM_STATUSES)[number];
type TaskStatus = (typeof TASK_STATUSES)[number];

/** Active children assigned to the therapist with how many programs they own for each. */
export async function listHomeProgramChildGroups(user: MobileUser) {
    return db
        .select({
            childId: children.id,
            childName: children.name,
            total: sql<number>`count(${homePrograms.id})::int`,
            activeCount: sql<number>`count(${homePrograms.id}) FILTER (WHERE ${homePrograms.status} = 'ACTIVE')::int`,
        })
        .from(children)
        .leftJoin(homePrograms, and(eq(homePrograms.childId, children.id), eq(homePrograms.therapistId, user.id)))
        .where(and(eq(children.status, "ACTIVE"), childScope(user)))
        .groupBy(children.id, children.name)
        .orderBy(asc(children.name));
}

export async function getHomeProgramFormOptions(user: MobileUser) {
    return { ...(await getTherapistChildOptions(user)), statuses: PROGRAM_STATUSES };
}

function readTitle(value: unknown) {
    const title = typeof value === "string" ? value.trim() : "";
    if (!title) throw new HttpError(400, "Activity name is required.");
    return title;
}

function readStatus(value: unknown): ProgramStatus {
    if (value === undefined || value === null || value === "") return "ACTIVE";
    if (!PROGRAM_STATUSES.includes(value as ProgramStatus)) throw new HttpError(400, "Invalid status.");
    return value as ProgramStatus;
}

/** [{ description, status? }] -> trimmed, blank rows dropped (same as the website form). */
function readTasks(value: unknown): { description: string; status: TaskStatus }[] {
    const list = Array.isArray(value) ? value : [];
    const tasks = list
        .map((t) => ({
            description: typeof t?.description === "string" ? t.description.trim() : "",
            status: TASK_STATUSES.includes(t?.status) ? (t.status as TaskStatus) : "PENDING",
        }))
        .filter((t) => t.description !== "");
    if (tasks.length === 0) throw new HttpError(400, "Please add at least one task.");
    return tasks;
}

/** POST body: { childId, therapyId, title, status, tasks: [{ description, status? }] } */
export async function createHomeProgramForTherapist(user: MobileUser, body: any) {
    const { childId, therapyId } = body ?? {};
    if (!isUuid(childId)) throw new HttpError(400, "Please select a child.");
    if (!isUuid(therapyId)) throw new HttpError(400, "Please select a therapy.");
    const title = readTitle(body.title);
    const status = readStatus(body.status);
    const tasks = readTasks(body.tasks);

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

    const [program] = await db
        .insert(homePrograms)
        .values({ childId, therapyId, therapistId: user.id, title, status })
        .returning({ id: homePrograms.id });
    await db.insert(homeProgramTasks).values(tasks.map((t) => ({ programId: program.id, ...t })));

    revalidatePath("/home-programs");
    revalidatePath(`/childrens/${childId}`);
    return { id: program.id, message: "Home program created successfully" };
}

async function ownProgram(user: MobileUser, id: string) {
    if (!isUuid(id)) return null;
    return db.query.homePrograms.findFirst({
        where: and(eq(homePrograms.id, id), eq(homePrograms.therapistId, user.id)),
        columns: { id: true, childId: true },
    });
}

/** PUT body: { title, status, tasks: [{ description, status }] } — child/therapy stay as they are. */
export async function updateHomeProgramForTherapist(user: MobileUser, id: string, body: any) {
    const program = await ownProgram(user, id);
    if (!program) return null;
    const title = readTitle(body?.title);
    const status = readStatus(body?.status);
    const tasks = readTasks(body?.tasks);

    await db.update(homePrograms).set({ title, status, updatedAt: new Date() }).where(eq(homePrograms.id, id));

    const existing = await db.query.homeProgramTasks.findMany({
        where: eq(homeProgramTasks.programId, id),
        orderBy: [asc(homeProgramTasks.createdAt)],
        columns: { description: true, status: true },
    });
    const changed =
        tasks.length !== existing.length ||
        tasks.some((t, i) => t.description !== existing[i].description || t.status !== existing[i].status);
    if (changed) {
        // Same as the website: replace the list (this drops report entries of removed tasks).
        await db.delete(homeProgramTasks).where(eq(homeProgramTasks.programId, id));
        await db.insert(homeProgramTasks).values(tasks.map((t) => ({ programId: id, ...t })));
    }

    revalidatePath("/home-programs");
    revalidatePath(`/home-programs/${id}`);
    revalidatePath(`/childrens/${program.childId}`);
    return { id, message: "Home program updated successfully" };
}

export async function deleteHomeProgramForTherapist(user: MobileUser, id: string) {
    const program = await ownProgram(user, id);
    if (!program) return null;
    await db.delete(homePrograms).where(eq(homePrograms.id, id));
    revalidatePath("/home-programs");
    revalidatePath(`/childrens/${program.childId}`);
    return { message: "Home program deleted successfully" };
}
