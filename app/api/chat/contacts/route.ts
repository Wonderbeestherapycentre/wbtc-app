import { chatHandlers, webChatRoute } from "@/lib/chat-http";

/** GET /api/chat/contacts — people the signed-in user may message. */
export async function GET(request: Request) {
    return webChatRoute(request, (user) => chatHandlers.contacts(request, user));
}
