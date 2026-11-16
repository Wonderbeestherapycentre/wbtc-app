import { isUuid, mobileRoute } from "@/lib/mobile/http";
import { getNotification } from "@/lib/mobile/notifications";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(request, async (user) => (isUuid(id) ? getNotification(user, id) : null));
}
