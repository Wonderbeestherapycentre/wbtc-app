import { chatHandlers } from "@/lib/chat-http";
import { mobileRoute } from "@/lib/mobile/http";

/** GET /api/mobile/chat/contacts — people the signed-in user may message. */
export async function GET(request: Request) {
    return mobileRoute(request, (user) => chatHandlers.contacts(request, user));
}
