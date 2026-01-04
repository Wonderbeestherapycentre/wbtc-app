import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchSessions, fetchChildren, fetchTherapists, fetchTherapies, fetchChildMonthlyAttendance } from "@/lib/data";
import AttendanceList from "@/components/attendance/AttendanceList";
import AttendanceFilters from "@/components/attendance/AttendanceFilters";
import ChildMonthlyAttendance from "@/components/attendance/ChildMonthlyAttendance";
import { redirect } from "next/navigation";
import { Calendar } from "lucide-react";

export default async function AttendancePage(props: {
    searchParams: Promise<{ date?: string; therapyId?: string; therapistId?: string; tab?: string }>
}) {
    const searchParams = await props.searchParams;
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (currentUserRole === "PARENT") {
        redirect("/dashboard");
    }

    const dateStr = searchParams.date || new Date().toISOString().split('T')[0];
    const currentDate = new Date(dateStr);

    // Set start and end of the day
    const startDate = new Date(currentDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(currentDate);
    endDate.setHours(23, 59, 59, 999);

    const therapyId = searchParams.therapyId;
    const therapistId = searchParams.therapistId;
    const activeTab = searchParams.tab || "daily";

    let sessions = await fetchSessions(startDate, endDate);
    const therapies = await fetchTherapies();
    const therapists = await fetchTherapists();

    // Filter by Therapy if selected
    if (therapyId) {
        sessions = sessions.filter((s: any) => s.therapyId === therapyId);
    }

    // Filter by Therapist if selected (and if user is ADMIN, otherwise enforced by fetchSessions logic depending on impl)
    // fetchSessions already filters by therapist if passed, but here we got all for the day and are filtering in memory or passing params?
    // Actually fetchSessions definition: fetchSessions(startDate, endDate, therapistId)
    // So we should re-fetch with therapistId if we wanted optimized query, but list is small for one day.

    if (currentUserRole === "THERAPIST") {
        // Therapists stick to their own sessions usually?
        // fetchSessions handles logic: "if (session.user.role === "PARENT")". 
        // It does NOT restrict THERAPIST to only their sessions in fetchSessions unless we pass therapistId.
        // But wait, the previous implementation of fetchSessions in data.ts:
        /*
           if (session.user.role === "PARENT") {
                return data.filter((s: any) => s.child.parentId === session.user.id);
           }
           return data;
        */
        // It returns ALL sessions for ADMIN and THERAPIST unless filtered.
        // So we should filter for therapist if they are logged in as therapist to see only theirs? 
        // Often attendance needs to be marked by Admin or specific therapist.

        // If I am a therapist, I probably only want to mark my own students.
        sessions = sessions.filter((s: any) => s.therapistId === session?.user?.id);
    } else if (therapistId) {
        sessions = sessions.filter((s: any) => s.therapistId === therapistId);
    }

    // Monthly Overview Data
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const [allChildren, monthlyAttendance] = await Promise.all([
        fetchChildren(true),
        fetchChildMonthlyAttendance(firstDay, lastDay, therapyId)
    ]);

    // Flatten children by their therapy assignments for the overview
    let displayRows: any[] = [];
    allChildren.forEach((child: any) => {
        child.therapyTypes.forEach((tt: any) => {
            displayRows.push({
                id: `${child.id}-${tt.therapyId}-${tt.therapistId}`,
                childId: child.id,
                childName: child.name,
                therapyId: tt.therapyId,
                therapyName: tt.therapy?.name || "Unknown",
                therapistId: tt.therapistId,
                therapistName: tt.therapist?.name || "Unknown"
            });
        });
    });

    // Apply Filters to the flattened rows
    if (therapyId && therapyId !== "ALL") {
        displayRows = displayRows.filter(row => row.therapyId === therapyId);
    }

    // Sort by Therapist Name, then Child Name
    displayRows.sort((a, b) => {
        const therapistCompare = a.therapistName.localeCompare(b.therapistName);
        if (therapistCompare !== 0) return therapistCompare;
        return a.childName.localeCompare(b.childName);
    });

    return (
        <AppLayout role={currentUserRole} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance</h2>
                    </div>
                </div>




                {
                    currentUserRole === "ADMIN" ? <AttendanceFilters
                        therapies={therapies as any}
                        therapists={therapists as any}
                        currentDate={currentDate}
                        currentUserRole={currentUserRole}
                        selectedTherapyId={therapyId}
                        selectedTherapistId={therapistId}
                        activeTab={activeTab}
                        searchParams={searchParams}
                    /> : <></>
                }


                <div className="min-h-[400px]">
                    {activeTab === "daily" ? (
                        <AttendanceList
                            sessions={sessions as any}
                            currentUserRole={currentUserRole}
                        />
                    ) : (
                        <>
                            {therapyId && therapyId !== "ALL" ? (
                                <ChildMonthlyAttendance
                                    children={displayRows}
                                    attendance={monthlyAttendance}
                                    monthStart={firstDay}
                                    monthEnd={lastDay}
                                />
                            ) : (
                                <div className="bg-white dark:bg-neutral-900 border border-dashed border-gray-300 dark:border-neutral-800 rounded-2xl p-16 text-center shadow-sm">
                                    <div className="mx-auto w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                                        <Calendar className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Select a Therapy</h3>
                                    <p className="text-gray-500 dark:text-neutral-400 max-w-sm mx-auto mb-8">
                                        Please select a therapy from the filters to view the monthly attendance overview for all assigned children and therapists.
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
