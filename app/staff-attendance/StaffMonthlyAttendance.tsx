"use client";

import React from "react";
import { Check, X, Clock, AlertCircle } from "lucide-react";

interface StaffMonthlyAttendanceProps {
    staff: any[];
    attendance: any[];
    monthStart: Date;
    monthEnd: Date;
}

export default function StaffMonthlyAttendance({ staff, attendance, monthStart, monthEnd }: StaffMonthlyAttendanceProps) {
    const daysInMonth = monthEnd.getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getStatus = (userId: string, day: number) => {
        const dateStr = new Date(monthStart.getFullYear(), monthStart.getMonth(), day, 12).toISOString().split('T')[0];
        // Note: Simple string comparison assumes data date matches "YYYY-MM-DD"
        // But date objects might need care. 
        // Let's construct a target YYYY-MM-DD from the year/month/day
        const year = monthStart.getFullYear();
        const month = String(monthStart.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const target = `${year}-${month}-${dayStr}`;

        const record = attendance.find(r => r.userId === userId && r.date === target);
        return record?.status;
    };

    const renderIcon = (status?: string) => {
        switch (status) {
            case "PRESENT": return <div className="mx-auto w-6 h-6 rounded bg-green-100 flex items-center justify-center text-green-700" title="Present"><Check className="w-4 h-4" /></div>;
            case "ABSENT": return <div className="mx-auto w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-700" title="Absent"><X className="w-4 h-4" /></div>;
            case "HALF_DAY": return <div className="mx-auto w-6 h-6 rounded bg-yellow-100 flex items-center justify-center text-yellow-700" title="Half Day"><Clock className="w-4 h-4" /></div>;
            case "LEAVE": return <div className="mx-auto w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-700" title="Leave"><AlertCircle className="w-4 h-4" /></div>;
            default: return <div className="w-6 h-6 mx-auto"></div>;
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm mt-8">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Overview</h3>
                <p className="text-sm text-gray-500">Attendance for {monthStart.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-xs text-center border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-left font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b min-w-[150px] sticky left-0 z-10">
                                Staff Name
                            </th>
                            {days.map(d => (
                                <th key={d} className="px-1 py-3 font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b w-8">
                                    {d}
                                </th>
                            ))}
                            {/* Summary Columns */}
                            <th className="px-2 py-3 font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b w-10">P</th>
                            <th className="px-2 py-3 font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b w-10">A</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {staff.map(user => {
                            let pCount = 0;
                            let aCount = 0;

                            return (
                                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                    <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white bg-white dark:bg-neutral-900 sticky left-0 z-10 border-r">
                                        {user.name}
                                    </td>
                                    {days.map(d => {
                                        const status = getStatus(user.id, d);
                                        if (status === 'PRESENT') pCount++;
                                        if (status === 'ABSENT') aCount++;
                                        return (
                                            <td key={d} className="border-r border-gray-50 dark:border-neutral-800">
                                                {renderIcon(status)}
                                            </td>
                                        )
                                    })}
                                    <td className="font-bold text-green-600 bg-green-50/30 border-l">{pCount}</td>
                                    <td className="font-bold text-red-600 bg-red-50/30 border-l">{aCount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
