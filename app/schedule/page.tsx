import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchSessions, fetchChildren, fetchTherapists } from "@/lib/data";
import ScheduleCalendar from "@/components/schedule/ScheduleCalendar";

export default async function SchedulePage() {
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";
    const userId = session?.user?.id || "";

    // Fetch data for the scheduling modal
    const children = await fetchChildren();
    const therapists = await fetchTherapists();

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 90);

    const sessions = await fetchSessions(startDate, endDate);

    return (
        <AppLayout role={currentUserRole} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {currentUserRole === "PARENT" ? "Your child's therapy sessions" : "Manage therapy schedule"}
                    </p>
                </div>

                <ScheduleCalendar
                    sessions={sessions as any}
                    childrenData={children as any}
                    allTherapists={therapists as any}
                    currentUserRole={currentUserRole}
                    userId={userId}
                />
            </div>
        </AppLayout>
    );
}
