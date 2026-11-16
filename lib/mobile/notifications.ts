import { and, count, desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { notificationRecipients, notifications, users } from "@/lib/db/schema";
import type { MobileUser } from "./auth";

/** Received notifications (same as the website's "received" view). */
export async function listNotifications(user: MobileUser, page: number, limit = 20) {
    const mine = eq(notificationRecipients.userId, user.id);

    const [[total], [unread], rows] = await Promise.all([
        db.select({ value: count() }).from(notificationRecipients).where(mine),
        db.select({ value: count() }).from(notificationRecipients)
            .where(and(mine, eq(notificationRecipients.isRead, false))),
        db.select({
            id: notifications.id,
            title: notifications.title,
            createdAt: notifications.createdAt,
            senderName: users.name,
            isRead: notificationRecipients.isRead,
        })
            .from(notificationRecipients)
            .innerJoin(notifications, eq(notificationRecipients.notificationId, notifications.id))
            .innerJoin(users, eq(notifications.senderId, users.id))
            .where(mine)
            .orderBy(desc(notifications.createdAt))
            .limit(limit)
            .offset((page - 1) * limit),
    ]);

    const totalCount = Number(total?.value ?? 0);
    return {
        page,
        hasMore: page * limit < totalCount,
        total: totalCount,
        unread: Number(unread?.value ?? 0),
        notifications: rows.map((r) => ({ ...r, createdAt: r.createdAt.toISOString() })),
    };
}

/** The website stores notification bodies as rich-text HTML; the app shows plain text. */
function htmlToText(html: string) {
    return html
        .replace(/<\s*br\s*\/?>/gi, "\n")
        .replace(/<\s*li[^>]*>/gi, "\n• ")
        .replace(/<\/\s*(p|div|h[1-6]|li|ul|ol|blockquote)\s*>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

/** Opening a received notification marks it read, like the website. */
export async function getNotification(user: MobileUser, id: string) {
    const n = await db.query.notifications.findFirst({
        where: eq(notifications.id, id),
        with: {
            sender: { columns: { id: true, name: true } },
            recipients: { where: eq(notificationRecipients.userId, user.id) },
        },
    });
    if (!n) return null;

    const recipient = n.recipients[0];
    const isSender = n.senderId === user.id;
    if (!recipient && !(user.role === "THERAPIST" && isSender)) return null;

    if (recipient && !recipient.isRead) {
        await db.update(notificationRecipients)
            .set({ isRead: true, readAt: new Date() })
            .where(eq(notificationRecipients.id, recipient.id));
    }

    return {
        id: n.id,
        title: n.title,
        body: htmlToText(n.description),
        senderName: n.sender?.name ?? "-",
        createdAt: n.createdAt.toISOString(),
    };
}
