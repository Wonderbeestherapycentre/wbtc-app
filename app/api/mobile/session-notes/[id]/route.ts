import { isUuid, mobileRoute } from "@/lib/mobile/http";
import { getSessionNote } from "@/lib/mobile/records";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(request, async (user) => (isUuid(id) ? getSessionNote(user, id) : null));
}
