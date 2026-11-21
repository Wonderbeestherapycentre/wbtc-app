import { chatHandlers } from "@/lib/chat-http";
import { mobileRoute } from "@/lib/mobile/http";

/** GET /api/mobile/chat/conversations[?page=1] — the user's conversations, newest activity first. */
export async function GET(request: Request) {
    return mobileRoute(request, (user) => chatHandlers.listConversations(request, user));
}

/** POST /api/mobile/chat/conversations { userId } — open (find or create) a conversation. */
export async function POST(request: Request) {
    return mobileRoute(request, (user) => chatHandlers.openConversation(request, user));
}
