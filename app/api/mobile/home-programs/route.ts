import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { listHomePrograms } from "@/lib/mobile/records";

/** GET /api/mobile/home-programs[?childId=] */
export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const childId = new URL(request.url).searchParams.get("childId") ?? undefined;
        if (childId && !isUuid(childId)) throw new HttpError(400, "Invalid child.");
        return { programs: await listHomePrograms(user, childId) };
    });
}
