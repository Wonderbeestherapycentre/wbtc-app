import { HttpError, mobileRoute } from "@/lib/mobile/http";
import { getTherapistAttendance, markSessionAttendance } from "@/lib/mobile/attendance";
import { todayIST } from "@/lib/mobile/data";

/** GET /api/mobile/attendance[?date=YYYY-MM-DD] — therapists only (website THERAPIST_NAV). */
export async function GET(request: Request) {
    return mobileRoute(
        request,
        async (user) => {
            const date = new URL(request.url).searchParams.get("date") ?? todayIST();
            if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new HttpError(400, "Invalid date (use YYYY-MM-DD).");
            return getTherapistAttendance(user, date);
        },
        { roles: ["THERAPIST"] },
    );
}

/** PUT /api/mobile/attendance  { sessionId, attendance: PRESENT|ABSENT|EXCUSED } — returns the updated session. */
export async function PUT(request: Request) {
    return mobileRoute(
        request,
        async (user) => {
            const body = await request.json().catch(() => null);
            if (!body || typeof body !== "object") throw new HttpError(400, "Invalid request body.");
            return markSessionAttendance(user, body.sessionId, body.attendance);
        },
        { roles: ["THERAPIST"] },
    );
}
