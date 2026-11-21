import { chatHandlers } from "@/lib/chat-http";
import { mobileRoute } from "@/lib/mobile/http";

/** GET /api/mobile/chat/conversations/:id[?before=ISO] — messages (marks them read). */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(request, (user) => chatHandlers.getConversation(request, user, id));
}
