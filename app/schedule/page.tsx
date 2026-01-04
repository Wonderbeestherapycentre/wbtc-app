import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchSessions, fetchChildren, fetchTherapists } from "@/lib/data";
import Link from "next/link";
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
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule</h2>

                    </div>
                    <Link
                        href="/schedule/timetable"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-table"><path d="M12 3v18" /><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>
                        Weekly View
                    </Link>
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
