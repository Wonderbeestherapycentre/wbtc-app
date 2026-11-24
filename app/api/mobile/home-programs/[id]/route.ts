import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { getHomeProgram } from "@/lib/mobile/records";
import { deleteHomeProgramForTherapist, updateHomeProgramForTherapist } from "@/lib/mobile/home-programs";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Ctx) {
    const { id } = await params;
    return mobileRoute(request, async (user) => (isUuid(id) ? getHomeProgram(user, id) : null));
}

/** PUT /api/mobile/home-programs/:id — therapist edits their program. Body: { title, status, tasks }. */
export async function PUT(request: Request, { params }: Ctx) {
    const { id } = await params;
    return mobileRoute(
        request,
        async (user) => {
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return updateHomeProgramForTherapist(user, id, body);
        },
        { roles: ["THERAPIST"] },
    );
}

/** DELETE /api/mobile/home-programs/:id — therapist deletes their program (and its reports). */
export async function DELETE(request: Request, { params }: Ctx) {
    const { id } = await params;
    return mobileRoute(request, (user) => deleteHomeProgramForTherapist(user, id), { roles: ["THERAPIST"] });
}
