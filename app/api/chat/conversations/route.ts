import { chatHandlers, webChatRoute } from "@/lib/chat-http";

/** GET /api/chat/conversations[?scope=all&page=1] — conversations, newest activity first. */
export async function GET(request: Request) {
    return webChatRoute(request, (user) => chatHandlers.listConversations(request, user));
}

/** POST /api/chat/conversations { userId } — open (find or create) a conversation. */
export async function POST(request: Request) {
    return webChatRoute(request, (user) => chatHandlers.openConversation(request, user));
}
