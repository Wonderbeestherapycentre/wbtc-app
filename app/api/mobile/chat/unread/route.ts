import { chatHandlers } from "@/lib/chat-http";
import { mobileRoute } from "@/lib/mobile/http";

/** GET /api/mobile/chat/unread — { count } of unread messages. */
export async function GET(request: Request) {
    return mobileRoute(request, (user) => chatHandlers.unread(request, user));
}
