import { isUuid, mobileRoute } from "@/lib/mobile/http";
import { getChild } from "@/lib/mobile/children";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(request, async (user) => (isUuid(id) ? getChild(user, id) : null));
}
