import React from "react";
import AppLayout from "@/components/AppLayout";
import { fetchChildren, fetchUsers, fetchStaffAttendance, fetchStaffMonthlyAttendance } from "@/lib/data";
import { auth } from "@/auth";
import StaffAttendanceList from "./StaffAttendanceList";
import StaffMonthlyAttendance from "./StaffMonthlyAttendance";
import StaffFilters from "./StaffFilters";
import { formatDateToLocal } from "@/lib/utils";

export default async function StaffAttendancePage(props: { searchParams: Promise<any> }) {
    const searchParams = await props.searchParams;
    const session = await auth();
    const dateStr = searchParams?.date || formatDateToLocal(new Date());
    const dateObj = new Date(dateStr);

    // Month range
    const firstDay = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
    const lastDay = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);
    const startStr = formatDateToLocal(firstDay);
    const endStr = formatDateToLocal(lastDay);

    const [children, therapists, attendance, monthlyAttendance] = await Promise.all([
        fetchChildren(true),
        fetchUsers(), // Need to filter for Therapists/Staff
        fetchStaffAttendance(dateStr),
        fetchStaffMonthlyAttendance(startStr, endStr)
    ]);

    const activeStaff = therapists.filter((u: any) => (u.role === "THERAPIST" || u.role === "ATTENDER") && u.status === "ACTIVE");

    return (
        <AppLayout familyChildren={children} role="ADMIN" user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Staff Attendance</h2>
                        <p className="text-gray-500 text-sm">Mark attendance for staff and therapists.</p>
                    </div>
                    <div className="flex-1 max-w-lg">
                        <StaffFilters currentDate={dateStr} />
                    </div>
                </div>

                <StaffAttendanceList
                    staff={activeStaff}
                    attendance={attendance}
                    date={dateStr}
                />

                <StaffMonthlyAttendance
                    staff={activeStaff}
                    attendance={monthlyAttendance}
                    monthStart={firstDay}
                    monthEnd={lastDay}
                />
            </div>
        </AppLayout>
    );
}
