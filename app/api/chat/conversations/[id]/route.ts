import { chatHandlers, webChatRoute } from "@/lib/chat-http";

/** GET /api/chat/conversations/:id[?before=ISO] — messages (marks them read). */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return webChatRoute(request, (user) => chatHandlers.getConversation(request, user, id));
}
