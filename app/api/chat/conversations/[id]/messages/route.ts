import { chatHandlers, webChatRoute } from "@/lib/chat-http";

/** POST /api/chat/conversations/:id/messages { body } — send a text message. */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return webChatRoute(request, (user) => chatHandlers.sendMessage(request, user, id));
}
