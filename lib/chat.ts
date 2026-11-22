import { and, count, desc, eq, inArray, isNotNull, isNull, lt, ne, or } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { db } from "@/lib/db";
import { chatConversations, chatMessages, children, childTherapies, therapies, users } from "@/lib/db/schema";
import { HttpError } from "@/lib/mobile/http";

/**
 * One-to-one chat shared by the website (/messages, /api/chat/*) and the
 * mobile app (/api/mobile/chat/*). Not real-time: clients poll.
 *
 * Who can message whom:
 *   PARENT    -> Admins, and the therapists assigned to their (active) children
 *   THERAPIST -> Admins, and the parents of (active) children assigned to them
 *   ADMIN     -> any active Parent or Therapist; can also read every conversation
 *   ATTENDER  -> no chat
 * The link is `child_therapies.therapist_id` + `children.parent_id`, so it follows
 * assignments automatically. If an assignment ends, the old conversation stays
 * readable but can no longer be replied to.
 */

export type ChatRole = "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
export type ChatUser = { id: string; role: ChatRole | string };

export type ChatContact = {
    id: string;
    name: string;
    role: ChatRole;
    /** e.g. "Occupational Therapy • Aarav" or "Parent of Aarav, Diya". */
    detail: string | null;
};

export const MAX_MESSAGE_LENGTH = 2000;
const MESSAGE_PAGE = 50;
const CONVERSATION_PAGE = 30;

const ROLE_ORDER: Record<string, number> = { ADMIN: 0, THERAPIST: 1, PARENT: 2 };

function uniqueJoin(values: (string | null)[]) {
    return [...new Set(values.filter(Boolean))].join(", ");
}

/**
 * Parents are shown by their child's name ("Aadhish"), not their own account
 * name ("Aadhish mom"). Active children are preferred; a parent with no
 * children keeps their account name.
 */
async function parentLabels(parentIds: string[]): Promise<Map<string, string>> {
    const ids = [...new Set(parentIds)];
    if (ids.length === 0) return new Map();
    const rows = await db.select({ parentId: children.parentId, name: children.name, status: children.status })
        .from(children)
        .where(inArray(children.parentId, ids))
        .orderBy(children.name);

    const byParent = new Map<string, { active: string[]; all: string[] }>();
    for (const r of rows) {
        const entry = byParent.get(r.parentId!) ?? { active: [], all: [] };
        entry.all.push(r.name);
        if (r.status === "ACTIVE") entry.active.push(r.name);
        byParent.set(r.parentId!, entry);
    }
    const labels = new Map<string, string>();
    for (const [id, { active, all }] of byParent) {
        labels.set(id, uniqueJoin(active.length ? active : all));
    }
    return labels;
}

// ---------------------------------------------------------------------------
// Contacts / permissions
// ---------------------------------------------------------------------------

async function activeAdmins(excludeId: string): Promise<ChatContact[]> {
    const rows = await db.select({ id: users.id, name: users.name }).from(users)
        .where(and(eq(users.role, "ADMIN"), eq(users.status, "ACTIVE"), ne(users.id, excludeId)));
    return rows.map((r) => ({ ...r, role: "ADMIN" as const, detail: null }));
}

/** Everyone `me` is allowed to start (or continue) a conversation with. */
export async function listContacts(me: ChatUser): Promise<ChatContact[]> {
    let contacts: ChatContact[] = [];

    if (me.role === "PARENT") {
        const therapist = alias(users, "therapist");
        const rows = await db.select({
            id: therapist.id,
            name: therapist.name,
            therapy: therapies.name,
            child: children.name,
        })
            .from(childTherapies)
            .innerJoin(children, eq(childTherapies.childId, children.id))
            .innerJoin(therapist, eq(childTherapies.therapistId, therapist.id))
            .innerJoin(therapies, eq(childTherapies.therapyId, therapies.id))
            .where(and(eq(children.parentId, me.id), eq(children.status, "ACTIVE"), eq(therapist.status, "ACTIVE")));

        const byId = new Map<string, { name: string; parts: string[] }>();
        for (const r of rows) {
            const entry = byId.get(r.id) ?? { name: r.name, parts: [] };
            entry.parts.push(`${r.therapy} • ${r.child}`);
            byId.set(r.id, entry);
        }
        contacts = [
            ...(await activeAdmins(me.id)),
            ...[...byId].map(([id, v]) => ({ id, name: v.name, role: "THERAPIST" as const, detail: uniqueJoin(v.parts) })),
        ];
    } else if (me.role === "THERAPIST") {
        const parent = alias(users, "parent");
        const rows = await db.select({ id: parent.id, name: parent.name, child: children.name })
            .from(childTherapies)
            .innerJoin(children, eq(childTherapies.childId, children.id))
            .innerJoin(parent, eq(children.parentId, parent.id))
            .where(and(eq(childTherapies.therapistId, me.id), eq(children.status, "ACTIVE"), eq(parent.status, "ACTIVE")));

        const byId = new Map<string, string[]>();
        for (const r of rows) {
            byId.set(r.id, [...(byId.get(r.id) ?? []), r.child]);
        }
        contacts = [
            ...(await activeAdmins(me.id)),
            ...[...byId].map(([id, kids]) => ({ id, name: uniqueJoin(kids), role: "PARENT" as const, detail: null })),
        ];
    } else if (me.role === "ADMIN") {
        const [people, kids] = await Promise.all([
            db.select({ id: users.id, name: users.name, role: users.role, specialization: users.specialization })
                .from(users)
                .where(and(inArray(users.role, ["PARENT", "THERAPIST"]), eq(users.status, "ACTIVE"))),
            db.select({ parentId: children.parentId, name: children.name })
                .from(children)
                .where(and(isNotNull(children.parentId), eq(children.status, "ACTIVE"))),
        ]);
        const kidsByParent = new Map<string, string[]>();
        for (const k of kids) {
            kidsByParent.set(k.parentId!, [...(kidsByParent.get(k.parentId!) ?? []), k.name]);
        }
        contacts = people.map((p) => ({
            id: p.id,
            name: p.role === "PARENT" && kidsByParent.has(p.id) ? uniqueJoin(kidsByParent.get(p.id)!) : p.name,
            role: p.role as ChatRole,
            detail: p.role === "PARENT" ? null : (p.specialization || null),
        }));
    }

    return contacts.sort((a, b) =>
        (ROLE_ORDER[a.role] ?? 9) - (ROLE_ORDER[b.role] ?? 9) || a.name.localeCompare(b.name));
}

/** Same rules as listContacts, checked for one person (runs on every send / thread poll). */
async function canMessage(me: ChatUser, otherId: string) {
    if (otherId === me.id || !["ADMIN", "THERAPIST", "PARENT"].includes(me.role)) return false;

    const other = await db.query.users.findFirst({
        where: eq(users.id, otherId),
        columns: { role: true, status: true },
    });
    if (!other || other.status !== "ACTIVE") return false;

    if (me.role === "ADMIN") return other.role === "PARENT" || other.role === "THERAPIST";
    if (other.role === "ADMIN") return true;

    const [parentId, therapistId] =
        me.role === "PARENT" && other.role === "THERAPIST" ? [me.id, otherId]
            : me.role === "THERAPIST" && other.role === "PARENT" ? [otherId, me.id]
                : [null, null];
    if (!parentId || !therapistId) return false;

    const [link] = await db.select({ childId: children.id })
        .from(childTherapies)
        .innerJoin(children, eq(childTherapies.childId, children.id))
        .where(and(
            eq(children.parentId, parentId),
            eq(childTherapies.therapistId, therapistId),
            eq(children.status, "ACTIVE"),
        ))
        .limit(1);
    return !!link;
}

// ---------------------------------------------------------------------------
// Conversations
// ---------------------------------------------------------------------------

const userOne = alias(users, "user_one");
const userTwo = alias(users, "user_two");

type Person = { id: string; name: string; role: ChatRole };

function conversationShape(
    me: ChatUser,
    row: { id: string; oneId: string; oneName: string; oneRole: string; twoId: string; twoName: string; twoRole: string },
) {
    const one: Person = { id: row.oneId, name: row.oneName, role: row.oneRole as ChatRole };
    const two: Person = { id: row.twoId, name: row.twoName, role: row.twoRole as ChatRole };
    const isParticipant = me.id === one.id || me.id === two.id;
    const other = !isParticipant ? null : me.id === one.id ? two : one;
    return {
        id: row.id,
        participants: [one, two],
        /** The person on the other side, or null when an admin is viewing someone else's chat. */
        other,
        title: other ? other.name : `${one.name} ↔ ${two.name}`,
        isParticipant,
    };
}

const conversationColumns = {
    id: chatConversations.id,
    lastMessageAt: chatConversations.lastMessageAt,
    oneId: userOne.id, oneName: userOne.name, oneRole: userOne.role,
    twoId: userTwo.id, twoName: userTwo.name, twoRole: userTwo.role,
};

type ConversationRow = { oneId: string; oneName: string; oneRole: string; twoId: string; twoName: string; twoRole: string };

/** Replaces parent account names with their children's names (see parentLabels). */
async function withParentLabels<T extends ConversationRow>(rows: T[]): Promise<T[]> {
    const parentIds = rows.flatMap((r) => [
        ...(r.oneRole === "PARENT" ? [r.oneId] : []),
        ...(r.twoRole === "PARENT" ? [r.twoId] : []),
    ]);
    const labels = await parentLabels(parentIds);
    return rows.map((r) => ({
        ...r,
        oneName: labels.get(r.oneId) ?? r.oneName,
        twoName: labels.get(r.twoId) ?? r.twoName,
    }));
}

function involves(userId: string) {
    return or(eq(chatConversations.userOneId, userId), eq(chatConversations.userTwoId, userId));
}

/**
 * Conversations that have at least one message, newest activity first.
 * `scope: "all"` (admins only) lists every conversation in the centre.
 */
export async function listConversations(me: ChatUser, options: { scope?: "mine" | "all"; page?: number } = {}) {
    const scope = options.scope === "all" && me.role === "ADMIN" ? "all" : "mine";
    const page = Math.max(1, options.page ?? 1);

    const where = scope === "all"
        ? isNotNull(chatConversations.lastMessageAt)
        : and(isNotNull(chatConversations.lastMessageAt), involves(me.id));

    const rows = await db.select(conversationColumns)
        .from(chatConversations)
        .innerJoin(userOne, eq(chatConversations.userOneId, userOne.id))
        .innerJoin(userTwo, eq(chatConversations.userTwoId, userTwo.id))
        .where(where)
        .orderBy(desc(chatConversations.lastMessageAt))
        .limit(CONVERSATION_PAGE + 1)
        .offset((page - 1) * CONVERSATION_PAGE);

    const hasMore = rows.length > CONVERSATION_PAGE;
    const pageRows = await withParentLabels(rows.slice(0, CONVERSATION_PAGE));
    const ids = pageRows.map((r) => r.id);

    const [lastMessages, unreadRows] = ids.length === 0 ? [[], []] : await Promise.all([
        db.selectDistinctOn([chatMessages.conversationId], {
            conversationId: chatMessages.conversationId,
            body: chatMessages.body,
            senderId: chatMessages.senderId,
            createdAt: chatMessages.createdAt,
        })
            .from(chatMessages)
            .where(inArray(chatMessages.conversationId, ids))
            .orderBy(chatMessages.conversationId, desc(chatMessages.createdAt)),
        db.select({ conversationId: chatMessages.conversationId, value: count() })
            .from(chatMessages)
            .where(and(inArray(chatMessages.conversationId, ids), ne(chatMessages.senderId, me.id), isNull(chatMessages.readAt)))
            .groupBy(chatMessages.conversationId),
    ]);

    const lastById = new Map(lastMessages.map((m) => [m.conversationId, m]));
    const unreadById = new Map(unreadRows.map((u) => [u.conversationId, Number(u.value)]));

    return {
        scope,
        page,
        hasMore,
        conversations: pageRows.map((r) => {
            const c = conversationShape(me, r);
            const last = lastById.get(r.id);
            return {
                ...c,
                lastMessage: last ? {
                    body: last.body.length > 120 ? `${last.body.slice(0, 120)}…` : last.body,
                    fromMe: last.senderId === me.id,
                    senderName: c.participants.find((p) => p.id === last.senderId)?.name ?? "",
                    createdAt: last.createdAt.toISOString(),
                } : null,
                lastMessageAt: r.lastMessageAt?.toISOString() ?? null,
                // Admins viewing others' chats don't have "unread" messages there.
                unread: c.isParticipant ? (unreadById.get(r.id) ?? 0) : 0,
            };
        }),
    };
}

async function findConversation(id: string) {
    const [row] = await db.select(conversationColumns)
        .from(chatConversations)
        .innerJoin(userOne, eq(chatConversations.userOneId, userOne.id))
        .innerJoin(userTwo, eq(chatConversations.userTwoId, userTwo.id))
        .where(eq(chatConversations.id, id))
        .limit(1);
    return row ? (await withParentLabels([row]))[0] : null;
}

/**
 * A conversation and its latest messages (oldest first). Pass `before`
 * (ISO timestamp of the oldest loaded message) to load older ones.
 * Opening the latest page marks the other person's messages as read.
 * Returns null if it doesn't exist or `me` may not see it.
 */
export async function getConversation(me: ChatUser, id: string, options: { before?: string | null } = {}) {
    const row = await findConversation(id);
    if (!row) return null;

    const c = conversationShape(me, row);
    if (!c.isParticipant && me.role !== "ADMIN") return null;

    const before = options.before ? new Date(options.before) : null;
    if (before && Number.isNaN(before.getTime())) throw new HttpError(400, "Invalid 'before' date.");

    const rows = await db.select({
        id: chatMessages.id,
        body: chatMessages.body,
        senderId: chatMessages.senderId,
        readAt: chatMessages.readAt,
        createdAt: chatMessages.createdAt,
    })
        .from(chatMessages)
        .where(before
            ? and(eq(chatMessages.conversationId, id), lt(chatMessages.createdAt, before))
            : eq(chatMessages.conversationId, id))
        .orderBy(desc(chatMessages.createdAt))
        .limit(MESSAGE_PAGE + 1);

    const hasMore = rows.length > MESSAGE_PAGE;
    const messages = rows.slice(0, MESSAGE_PAGE).reverse();

    if (c.isParticipant && !before && messages.some((m) => m.senderId !== me.id && !m.readAt)) {
        await db.update(chatMessages)
            .set({ readAt: new Date() })
            .where(and(eq(chatMessages.conversationId, id), ne(chatMessages.senderId, me.id), isNull(chatMessages.readAt)));
    }

    const canSend = c.isParticipant && !!c.other && await canMessage(me, c.other.id);

    return {
        conversation: c,
        canSend,
        /** Why the reply box is hidden, if it is. */
        sendDisabledReason: canSend ? null
            : !c.isParticipant ? "You are viewing this conversation as Admin (read only)."
                : "You can no longer message this person.",
        hasMore,
        messages: messages.map((m) => ({
            id: m.id,
            body: m.body,
            senderId: m.senderId,
            senderName: c.participants.find((p) => p.id === m.senderId)?.name ?? "",
            fromMe: m.senderId === me.id,
            createdAt: m.createdAt.toISOString(),
            readAt: m.readAt?.toISOString() ?? null,
        })),
    };
}

/** Finds or creates the conversation between `me` and `otherUserId`. */
export async function openConversation(me: ChatUser, otherUserId: string) {
    if (!(await canMessage(me, otherUserId))) {
        throw new HttpError(403, "You can't message this person.");
    }
    const [userOneId, userTwoId] = [me.id, otherUserId].sort();

    await db.insert(chatConversations).values({ userOneId, userTwoId }).onConflictDoNothing();
    const [conv] = await db.select({ id: chatConversations.id }).from(chatConversations)
        .where(and(eq(chatConversations.userOneId, userOneId), eq(chatConversations.userTwoId, userTwoId)))
        .limit(1);
    if (!conv) throw new Error("Failed to open conversation");
    return { id: conv.id };
}

export async function sendMessage(me: ChatUser, conversationId: string, rawBody: unknown) {
    const body = typeof rawBody === "string" ? rawBody.trim() : "";
    if (!body) throw new HttpError(400, "Message can't be empty.");
    if (body.length > MAX_MESSAGE_LENGTH) {
        throw new HttpError(400, `Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`);
    }

    const row = await findConversation(conversationId);
    if (!row) throw new HttpError(404, "Conversation not found.");
    const c = conversationShape(me, row);
    if (!c.isParticipant) throw new HttpError(403, "You can't send messages in this conversation.");
    if (!c.other || !(await canMessage(me, c.other.id))) {
        throw new HttpError(403, "You can no longer message this person.");
    }

    const [message] = await db.insert(chatMessages)
        .values({ conversationId, senderId: me.id, body })
        .returning();
    await db.update(chatConversations)
        .set({ lastMessageAt: message.createdAt })
        .where(eq(chatConversations.id, conversationId));

    return {
        id: message.id,
        body: message.body,
        senderId: message.senderId,
        senderName: c.participants.find((p) => p.id === me.id)?.name ?? "",
        fromMe: true,
        createdAt: message.createdAt.toISOString(),
        readAt: null,
    };
}

/**
 * Deletes one of `me`'s own messages (e.g. sent by mistake). Only the sender
 * can delete, and only while they're still a participant. The message is
 * removed for both people; the conversation's "last activity" falls back to
 * the newest remaining message (or clears, hiding an emptied conversation).
 */
export async function deleteMessage(me: ChatUser, conversationId: string, messageId: string) {
    const [message] = await db.select({ id: chatMessages.id, senderId: chatMessages.senderId })
        .from(chatMessages)
        .where(and(eq(chatMessages.id, messageId), eq(chatMessages.conversationId, conversationId)))
        .limit(1);
    if (!message) return null;
    if (message.senderId !== me.id) throw new HttpError(403, "You can only delete your own messages.");

    await db.delete(chatMessages).where(eq(chatMessages.id, messageId));

    const [latest] = await db.select({ createdAt: chatMessages.createdAt })
        .from(chatMessages)
        .where(eq(chatMessages.conversationId, conversationId))
        .orderBy(desc(chatMessages.createdAt))
        .limit(1);
    await db.update(chatConversations)
        .set({ lastMessageAt: latest?.createdAt ?? null })
        .where(eq(chatConversations.id, conversationId));

    return { id: messageId, deleted: true };
}

/** Unread messages sent to `userId` across all their conversations. */
export async function unreadMessageCount(userId: string) {
    const [result] = await db.select({ value: count() })
        .from(chatMessages)
        .innerJoin(chatConversations, eq(chatMessages.conversationId, chatConversations.id))
        .where(and(involves(userId), ne(chatMessages.senderId, userId), isNull(chatMessages.readAt)));
    return Number(result?.value ?? 0);
}
