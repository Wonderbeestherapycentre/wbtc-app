import { chatHandlers, webChatRoute } from "@/lib/chat-http";

type Ctx = { params: Promise<{ id: string; messageId: string }> };

/** DELETE /api/chat/conversations/:id/messages/:messageId — delete your own message. */
export async function DELETE(request: Request, { params }: Ctx) {
    const { id, messageId } = await params;
    return webChatRoute(request, (user) => chatHandlers.deleteMessage(request, user, id, messageId));
}
