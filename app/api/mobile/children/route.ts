import { mobileRoute } from "@/lib/mobile/http";
import { listChildren } from "@/lib/mobile/children";

export async function GET(request: Request) {
    return mobileRoute(request, async (user) => ({ children: await listChildren(user) }));
}
