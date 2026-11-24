import { mobileRoute } from "@/lib/mobile/http";
import { listHomeProgramChildGroups } from "@/lib/mobile/home-programs";

/** GET /api/mobile/home-programs/children — therapist's first step (website: HomeProgramChildList). */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => ({ groups: await listHomeProgramChildGroups(user) }), {
        roles: ["THERAPIST"],
    });
}
