import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchNotificationsPaginated } from "@/lib/data";
import NotificationList from "@/components/notifications/NotificationList";
import Pagination from "@/components/Pagination";
import { ITEMS_PER_PAGE } from "@/lib/constants";

export default async function NotificationsPage({ searchParams }: { searchParams: any }) {
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER") || "PARENT";
    const canSend = role === "ADMIN" || role === "THERAPIST";

    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const view: "sent" | "received" = canSend && params?.view !== "received" ? "sent" : "received";

    const { data, meta } = await fetchNotificationsPaginated(page, ITEMS_PER_PAGE, view);

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-3 animate-fade-in pb-10">
                <NotificationList
                    notifications={data as any}
                    canSend={canSend}
                    view={view}
                    isAdmin={role === "ADMIN"}
                />
                <Pagination currentPage={meta.page} totalPages={meta.totalPages} />
            </div>
        </AppLayout>
    );
}
