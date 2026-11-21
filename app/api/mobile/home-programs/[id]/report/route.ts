import { HttpError, isUuid, mobileRoute } from "@/lib/mobile/http";
import { submitHomeProgramReportForParent } from "@/lib/mobile/records";

/**
 * POST /api/mobile/home-programs/:id/report
 * Body: { date: "YYYY-MM-DD", tasks: [{ taskId, supportLevelId }] }
 * Parents only — same as the website's "Add Today's Activity".
 */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return mobileRoute(
        request,
        async (user) => {
            if (!isUuid(id)) return null;
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request.");
            return submitHomeProgramReportForParent(user, id, body);
        },
        { roles: ["PARENT"] },
    );
}
