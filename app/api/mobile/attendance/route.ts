import { HttpError, mobileRoute } from "@/lib/mobile/http";
import { getTherapistAttendance } from "@/lib/mobile/attendance";
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
