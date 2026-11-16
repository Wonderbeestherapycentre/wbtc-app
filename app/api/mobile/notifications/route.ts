import { mobileRoute } from "@/lib/mobile/http";
import { listNotifications } from "@/lib/mobile/notifications";

/** GET /api/mobile/notifications[?page=1] — received notifications, newest first. */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const page = Math.max(1, Math.floor(Number(new URL(request.url).searchParams.get("page") ?? 1)) || 1);
        return listNotifications(user, page);
    });
}
