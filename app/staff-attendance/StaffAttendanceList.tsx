"use client";

import { useState } from "react";
import { markStaffAttendance } from "@/lib/actions";
import { Loader2, Check, X, Coffee } from "lucide-react";
import { toast } from "sonner";

export default function StaffAttendanceList({ staff, attendance, date }: { staff: any[], attendance: any[], date: string }) {
    const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});

    const handleMark = async (userId: string, status: "PRESENT" | "ABSENT" | "LEAVE") => {
        setLoadingMap(prev => ({ ...prev, [userId]: true }));
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("date", date);
        formData.append("status", status);

        const res = await markStaffAttendance(formData);
        if (res?.message) {
            toast.success(`Marked as ${status}`);
        } else {
            toast.error("Failed to update");
        }
        setLoadingMap(prev => ({ ...prev, [userId]: false }));
    };

    return (
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Daily Register <span className="text-gray-400 font-normal text-sm ml-2">{new Date(date).toLocaleDateString('en-IN', { dateStyle: 'long' })}</span></h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-500 border-b border-gray-100 dark:border-neutral-800">
                            <th className="pb-3 px-4">Staff Name</th>
                            <th className="pb-3 px-4">Status</th>
                            <th className="pb-3 px-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-neutral-800">
                        {staff.map(user => {
                            const record = attendance.find(a => a.userId === user.id);
                            const currentStatus = record?.status;
                            const isLoading = loadingMap[user.id];

                            return (
                                <tr key={user.id} className="group hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                                    <td className="py-4 px-4 font-medium">{user.name}</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${currentStatus === "PRESENT" ? "bg-green-100 text-green-700" :
                                            currentStatus === "ABSENT" ? "bg-red-100 text-red-700" :
                                                currentStatus === "LEAVE" ? "bg-yellow-100 text-yellow-700" :
                                                    "bg-gray-100 text-gray-500"
                                            }`}>
                                            {currentStatus || "Not Marked"}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                onClick={() => handleMark(user.id, "PRESENT")}
                                                disabled={isLoading}
                                                className={`p-2 rounded-lg transition-colors ${currentStatus === "PRESENT" ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400 hover:bg-green-50 hover:text-green-600'}`}
                                                title="Present"
                                            >
                                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                            </button>
                                            <button
                                                onClick={() => handleMark(user.id, "ABSENT")}
                                                disabled={isLoading}
                                                className={`p-2 rounded-lg transition-colors ${currentStatus === "ABSENT" ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-600'}`}
                                                title="Absent"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleMark(user.id, "LEAVE")}
                                                disabled={isLoading}
                                                className={`p-2 rounded-lg transition-colors ${currentStatus === "LEAVE" ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-yellow-50 hover:text-yellow-600'}`}
                                                title="Leave"
                                            >
                                                <Coffee className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {staff.length === 0 && (
                    <div className="text-center py-10 text-gray-500">No active staff found.</div>
                )}
            </div>
        </div>
    );
}
