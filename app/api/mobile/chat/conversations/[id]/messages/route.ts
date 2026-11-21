import { chatHandlers } from "@/lib/chat-http";
import { mobileRoute } from "@/lib/mobile/http";

/** POST /api/mobile/chat/conversations/:id/messages { body } — send a text message. */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(request, (user) => chatHandlers.sendMessage(request, user, id));
}
