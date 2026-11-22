import { chatHandlers } from "@/lib/chat-http";
import { mobileRoute } from "@/lib/mobile/http";

type Ctx = { params: Promise<{ id: string; messageId: string }> };

/** DELETE /api/mobile/chat/conversations/:id/messages/:messageId — delete your own message. */
export async function DELETE(request: Request, { params }: Ctx) {
    const { id, messageId } = await params;
    return mobileRoute(request, (user) => chatHandlers.deleteMessage(request, user, id, messageId));
}
