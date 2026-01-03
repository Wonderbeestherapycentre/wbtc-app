"use client";

import { useState, useTransition } from "react";
import { format } from "date-fns";
import { updateAttendance } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getTodayIST } from "@/lib/utils/timezone";
import { Loader2, Calendar, Check, X, Clock, AlertCircle } from "lucide-react";
import { convertUTCToIST } from "@/lib/utils/timezone";

interface Session {
    id: string;
    date: string | Date;
    status: string;
    attendance: "PRESENT" | "ABSENT" | "EXCUSED" | null;
    durationMinutes: number;
    child: { id: string; name: string; caseNumber?: string };
    therapist: { id: string; name: string };
    therapy: { id: string; name: string };
}

interface AttendanceListProps {
    sessions: Session[];
}

export default function AttendanceList({
    sessions
}: AttendanceListProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    const markAttendance = async (sessionId: string, status: "PRESENT" | "ABSENT" | "EXCUSED") => {
        setUpdatingId(sessionId);
        startTransition(async () => {
            const result = await updateAttendance(sessionId, status);
            if (result.message === "Attendance updated") {
                toast.success(`Marked as ${status}`);
            } else {
                toast.error("Failed to update attendance");
            }
            setUpdatingId(null);
        });
    };

    return (
        <div className="space-y-6">

            {/* List */}
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-neutral-800 border-b border-gray-100 dark:border-neutral-800">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Child</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Therapy</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Attendance</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {sessions.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    No sessions found for this date.
                                </td>
                            </tr>
                        ) : (
                            sessions.map((session) => (
                                <tr key={session.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            {format(session.date as Date, "h:mm a")}
                                        </div>
                                        <div className="text-xs text-gray-500 ml-6">
                                            {session.durationMinutes} mins
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">{session.child.name}</div>
                                        <div className="text-xs text-brand-600 dark:text-brand-400">{session.child.caseNumber}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                            {session.therapy.name}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            {session.therapist.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {updatingId === session.id ? (
                                                <Loader2 className="w-5 h-5 animate-spin text-brand-600" />
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => markAttendance(session.id, "PRESENT")}
                                                        className={`p-2 rounded-lg transition-all ${session.attendance === "PRESENT"
                                                            ? "bg-green-100 text-green-700 ring-2 ring-green-600 ring-offset-1 dark:ring-offset-neutral-900"
                                                            : "bg-gray-100 text-gray-400 hover:bg-green-50 hover:text-green-600 dark:bg-neutral-800"
                                                            }`}
                                                        title="Present"
                                                    >
                                                        <Check className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => markAttendance(session.id, "ABSENT")}
                                                        className={`p-2 rounded-lg transition-all ${session.attendance === "ABSENT"
                                                            ? "bg-red-100 text-red-700 ring-2 ring-red-600 ring-offset-1 dark:ring-offset-neutral-900"
                                                            : "bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-600 dark:bg-neutral-800"
                                                            }`}
                                                        title="Absent"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => markAttendance(session.id, "EXCUSED")}
                                                        className={`p-2 rounded-lg transition-all ${session.attendance === "EXCUSED"
                                                            ? "bg-yellow-100 text-yellow-700 ring-2 ring-yellow-600 ring-offset-1 dark:ring-offset-neutral-900"
                                                            : "bg-gray-100 text-gray-400 hover:bg-yellow-50 hover:text-yellow-600 dark:bg-neutral-800"
                                                            }`}
                                                        title="Excused"
                                                    >
                                                        <AlertCircle className="w-5 h-5" />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
