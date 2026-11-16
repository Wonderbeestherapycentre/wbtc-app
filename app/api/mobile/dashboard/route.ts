import { mobileRoute } from "@/lib/mobile/http";
import { getParentDashboard, getTherapistDashboard } from "@/lib/mobile/data";
import { getParentFees } from "@/lib/mobile/fees";
import { listNotifications } from "@/lib/mobile/notifications";

export async function GET(request: Request) {
    return mobileRoute(request, async (user) => {
        const notes = listNotifications(user, 1, 1);
        if (user.role === "PARENT") {
            const [dashboard, fees, inbox] = await Promise.all([getParentDashboard(user), getParentFees(user), notes]);
            // Website "Total Due" = this month's billed fees minus this month's payments.
            return { ...dashboard, totalDue: fees.totalDue, unreadNotifications: inbox.unread };
        }
        const [dashboard, inbox] = await Promise.all([getTherapistDashboard(user), notes]);
        return { ...dashboard, unreadNotifications: inbox.unread };
    });
}
