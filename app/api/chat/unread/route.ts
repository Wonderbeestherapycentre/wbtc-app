import { chatHandlers, webChatRoute } from "@/lib/chat-http";

/** GET /api/chat/unread — { count } of unread messages (sidebar badge). */
export async function GET(request: Request) {
    return webChatRoute(request, (user) => chatHandlers.unread(request, user));
}
