"use client";

import React from "react";
import { Check, X, Clock, AlertCircle } from "lucide-react";
import { formatDateToLocal } from "@/lib/utils";

interface ChildMonthlyAttendanceProps {
    children: any[];
    attendance: any[];
    monthStart: Date;
    monthEnd: Date;
}

export default function ChildMonthlyAttendance({ children, attendance, monthStart, monthEnd }: ChildMonthlyAttendanceProps) {
    const daysInMonth = monthEnd.getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getStatus = (childId: string, therapyId: string, therapistId: string, day: number) => {
        const year = monthStart.getFullYear();
        const month = String(monthStart.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const target = `${year}-${month}-${dayStr}`;

        const records = attendance.filter(r =>
            r.childId === childId &&
            r.therapyId === therapyId &&
            r.therapistId === therapistId &&
            formatDateToLocal(r.date) === target
        );

        if (records.length === 0) return undefined;

        // Priority: PRESENT > EXCUSED > ABSENT
        if (records.some(r => r.attendance === "PRESENT")) return "PRESENT";
        if (records.some(r => r.attendance === "EXCUSED")) return "EXCUSED";
        if (records.some(r => r.attendance === "ABSENT")) return "ABSENT";

        return undefined;
    };

    const renderIcon = (status?: string) => {
        switch (status) {
            case "PRESENT": return <div className="mx-auto w-6 h-6 rounded bg-green-100 flex items-center justify-center text-green-700" title="Present"><Check className="w-4 h-4" /></div>;
            case "ABSENT": return <div className="mx-auto w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-700" title="Absent"><X className="w-4 h-4" /></div>;
            case "EXCUSED": return <div className="mx-auto w-6 h-6 rounded bg-yellow-100 flex items-center justify-center text-yellow-700" title="Excused"><Clock className="w-4 h-4" /></div>;
            default: return <div className="w-6 h-6 mx-auto"></div>;
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm mt-8">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Child Monthly Overview</h3>
                    <p className="text-sm text-gray-500">Attendance for {monthStart.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-100 rounded"></div> Present</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-100 rounded"></div> Absent</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-100 rounded"></div> Excused</div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-xs text-center border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-left font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b min-w-[150px] sticky left-0 z-10">
                                Child Name
                            </th>
                            {/* <th className="px-4 py-3 text-left font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b min-w-[100px]">
                                Therapy
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b min-w-[100px]">
                                Therapist
                            </th> */}
                            {days.map(d => (
                                <th key={d} className="px-1 py-3 font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b w-8">
                                    {d}
                                </th>
                            ))}
                            <th className="px-2 py-3 font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b w-10">P</th>
                            <th className="px-2 py-3 font-medium text-gray-500 bg-gray-50 dark:bg-neutral-800 border-b w-10">A</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {children.map(child => {
                            let pCount = 0;
                            let aCount = 0;

                            return (
                                <tr key={child.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                    <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white bg-white dark:bg-neutral-900 sticky left-0 z-10 border-r">
                                        <div className="font-bold">{child.childName}</div>
                                    </td>
                                    {/* <td className="px-4 py-3 text-left text-xs text-gray-500 border-r">
                                        {child.therapyName}
                                    </td>
                                    <td className="px-4 py-3 text-left text-xs text-gray-500 border-r">
                                        {child.therapistName}
                                    </td> */}
                                    {days.map(d => {
                                        const status = getStatus(child.childId, child.therapyId, child.therapistId, d);
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
                    <tfoot className="bg-gray-50 dark:bg-neutral-800 font-bold border-t-2 border-gray-200 dark:border-neutral-700">
                        <tr>
                            <td colSpan={1} className="px-4 py-3  text-gray-700 dark:text-neutral-300 sticky left-0 z-10 bg-gray-50 dark:bg-neutral-800 border-r-2"> Total Sessions</td>
                            {days.map(d => {
                                const dailyTotal = children.reduce((sum, child) => {
                                    return sum + (getStatus(child.childId, child.therapyId, child.therapistId, d) === 'PRESENT' ? 1 : 0);
                                }, 0);
                                return (
                                    <td key={d} className="border-r border-gray-200 dark:border-neutral-700 text-green-600">
                                        {dailyTotal > 0 ? dailyTotal : ""}
                                    </td>
                                );
                            })}
                            {(() => {
                                let totalP = 0;
                                let totalA = 0;
                                children.forEach(child => {
                                    days.forEach(d => {
                                        const status = getStatus(child.childId, child.therapyId, child.therapistId, d);
                                        if (status === 'PRESENT') totalP++;
                                        if (status === 'ABSENT') totalA++;
                                    });
                                });
                                return (
                                    <>
                                        <td className="bg-green-50/50 dark:bg-green-900/20 border-l-2 border-gray-200 dark:border-neutral-700 text-green-700">{totalP}</td>
                                        <td className="bg-red-50/50 dark:bg-red-900/20 border-l border-gray-200 dark:border-neutral-700 text-red-700">{totalA}</td>
                                    </>
                                );
                            })()}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
