import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchSessions, fetchChildren, fetchTherapists, fetchTherapies, fetchChildMonthlyAttendance } from "@/lib/data";
import AttendanceList from "@/components/attendance/AttendanceList";
import ChildMonthlyAttendance from "@/components/attendance/ChildMonthlyAttendance";
import { redirect } from "next/navigation";

export default async function AttendancePage(props: {
    searchParams: Promise<{ date?: string; therapyId?: string; therapistId?: string }>
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
                id: `${child.id}-${tt.therapyId}`,
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
            <div className="space-y-3 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance</h2>
                    </div>
                </div>

                <AttendanceList
                    sessions={sessions as any}
                    therapies={therapies as any}
                    therapists={therapists as any}
                    currentDate={currentDate}
                    currentUserRole={currentUserRole}
                    selectedTherapyId={therapyId}
                    selectedTherapistId={therapistId}
                />

                {therapyId && therapyId !== "ALL" && (
                    <ChildMonthlyAttendance
                        children={displayRows}
                        attendance={monthlyAttendance}
                        monthStart={firstDay}
                        monthEnd={lastDay}
                    />
                )}
            </div>
        </AppLayout>
    );
}
