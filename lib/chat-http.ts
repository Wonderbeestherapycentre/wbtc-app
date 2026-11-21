import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { HttpError, isUuid } from "@/lib/mobile/http";
import {
    getConversation, listContacts, listConversations, openConversation, sendMessage, unreadMessageCount,
    type ChatUser,
} from "@/lib/chat";

/**
 * Request handlers shared by the website routes (/api/chat/*, cookie session)
 * and the mobile routes (/api/mobile/chat/*, bearer token). Each returns JSON
 * data, or null for 404.
 */

async function readJson(request: Request): Promise<Record<string, unknown>> {
    try {
        const data = await request.json();
        return data && typeof data === "object" ? data : {};
    } catch {
        throw new HttpError(400, "Invalid request body.");
    }
}

export const chatHandlers = {
    /** GET ?scope=mine|all&page=1 */
    listConversations: async (request: Request, user: ChatUser) => {
        const params = new URL(request.url).searchParams;
        const page = Math.max(1, Math.floor(Number(params.get("page") ?? 1)) || 1);
        return listConversations(user, { scope: params.get("scope") === "all" ? "all" : "mine", page });
    },

    /** POST { userId } -> { id } (find or create) */
    openConversation: async (request: Request, user: ChatUser) => {
        const { userId } = await readJson(request);
        if (typeof userId !== "string" || !isUuid(userId)) throw new HttpError(400, "Choose who to message.");
        return openConversation(user, userId);
    },

    /** GET ?before=<ISO> */
    getConversation: async (request: Request, user: ChatUser, id: string) => {
        if (!isUuid(id)) return null;
        return getConversation(user, id, { before: new URL(request.url).searchParams.get("before") });
    },

    /** POST { body } -> message */
    sendMessage: async (request: Request, user: ChatUser, id: string) => {
        if (!isUuid(id)) return null;
        const { body } = await readJson(request);
        return { message: await sendMessage(user, id, body) };
    },

    contacts: async (_request: Request, user: ChatUser) => ({ contacts: await listContacts(user) }),

    unread: async (_request: Request, user: ChatUser) => ({ count: await unreadMessageCount(user.id) }),
};

/** Website wrapper: NextAuth session; 401/403/404/500 like the mobile wrapper. */
export async function webChatRoute(request: Request, handler: (user: ChatUser) => Promise<unknown>) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Session expired. Please sign in again." }, { status: 401 });
        }
        const role = session.user.role as string;
        if (!["ADMIN", "THERAPIST", "PARENT"].includes(role)) {
            return NextResponse.json({ error: "Messages aren't available for your account." }, { status: 403 });
        }
        const data = await handler({ id: session.user.id, role });
        if (data === null || data === undefined) {
            return NextResponse.json({ error: "Not found." }, { status: 404 });
        }
        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof HttpError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
        }
        console.error(`chat API ${new URL(request.url).pathname} failed`, error);
        return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }
}
