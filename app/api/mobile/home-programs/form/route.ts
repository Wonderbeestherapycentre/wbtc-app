import { mobileRoute } from "@/lib/mobile/http";
import { getHomeProgramFormOptions } from "@/lib/mobile/home-programs";

/** GET /api/mobile/home-programs/form — options for the therapist's New / Edit Program form. */
export async function GET(request: Request) {
    return mobileRoute(request, (user) => getHomeProgramFormOptions(user), { roles: ["THERAPIST"] });
}
