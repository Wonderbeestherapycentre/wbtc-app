"use client";

import React from "react";
import { User, Stethoscope, Activity, CheckSquare, Calendar, History, ClipboardCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, isToday } from "date-fns";

import HomeProgramReportForm from "./HomeProgramReportForm";

import HomeProgramReportModal from "./HomeProgramReportModal";

interface HomeProgramDetailsProps {
    program: any;
    showTitle?: boolean;
    isParent?: boolean;
}

export default function HomeProgramDetails({
    program,
    showTitle = true,
    isParent = false
}: HomeProgramDetailsProps) {
    const [isReportModalOpen, setIsReportModalOpen] = React.useState(false);

    if (!program) return null;

    const todaySubmission = program.submissions?.find((s: any) => isToday(new Date(s.date)));
    const historySubmissions = program.submissions?.filter((s: any) => !isToday(new Date(s.date))) || [];

    return (
        <>
            <div className="space-y-3 animate-in fade-in duration-500">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    {showTitle && (
                        <div className="space-y-1">
                            <h2 className="md:text-3xl text-xl font-black text-gray-900 dark:text-white capitalize tracking-tight">
                                {program.title}
                            </h2>
                            <div className="flex items-center gap-2">
                                <span className={cn(
                                    "md:text-[10px] text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-widest",
                                    program.status === "ACTIVE"
                                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                                        : "bg-gray-100 text-gray-500 dark:bg-neutral-800"
                                )}>
                                    {program.status}
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium">
                                    Created {format(new Date(program.createdAt), "dd MMM yyyy")}
                                </span>
                            </div>
                        </div>
                    )}

                    {isParent && (
                        program.status === "COMPLETED" ? (
                            <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
                                <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-tight">Program Completed</span>
                                    <span className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest">Reporting Closed</span>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsReportModalOpen(true)}
                                className={cn(
                                    "group flex items-center gap-3 px-4 py-2 rounded-xl text-base font-black transition-all shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest",
                                    todaySubmission
                                        ? "bg-amber-500 text-white shadow-amber-500/20 hover:bg-amber-600"
                                        : "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700"
                                )}
                            >
                                {todaySubmission ? (
                                    <>
                                        <ClipboardCheck className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        Update Today's Activity
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        Add Today's Activity
                                    </>
                                )}
                            </button>
                        )
                    )}
                </div>

                {/* History Section (Visible to everyone) */}
                {
                    program.submissions?.length == 0 && (
                        <div className="mt-10 text-center py-4 bg-gray-50 dark:bg-neutral-800/20 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-neutral-800">
                            <p className="text-sm text-red-500 font-medium italic">No submissions have been made for this program yet.</p>
                        </div>
                    )
                }
                {program.submissions?.length > 0 && (
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-neutral-800">
                            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-600/20">
                                <History className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-md font-black text-gray-900 dark:text-white uppercase tracking-wider text-indigo-600">Daily Progress Report Table</h3>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-neutral-800/50">
                                        <th className="px-3 md:px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Date</th>
                                        <th className="px-3 md:px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Tasks Completed</th>
                                        <th className="px-3 md:px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center whitespace-nowrap">Total Score</th>
                                        {/* <th className="px-3 md:px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center whitespace-nowrap">Support Score</th>
                                        <th className="px-3 md:px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center whitespace-nowrap">Task Score</th> */}
                                        <th className="px-3 md:px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Performance Level</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                    {program.submissions.map((sub: any) => {
                                        const subTasks = sub.submissionTasks || [];
                                        const score = Number(sub.overallScore || 0);
                                        const taskScore = Number(sub.taskScore || 0);
                                        const supportScore = Number(sub.supportScore || 0);
                                        return (
                                            <tr key={sub.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                                <td className="px-3 md:px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">
                                                            {format(new Date(sub.date), "dd MMM yyyy")}
                                                        </span>
                                                        <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                                                            {format(new Date(sub.createdAt), "hh:mm a")}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-3 md:px-6 py-4">
                                                    <div className="flex gap-1 flex-wrap">
                                                        {subTasks.map((st: any) => (
                                                            <span key={st.id} className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-900/30 whitespace-nowrap">
                                                                Task #{program.tasks?.findIndex((t: any) => t.id === st.taskId) + 1}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-3 md:px-6 py-4 text-center">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 whitespace-nowrap">{score}%</span>
                                                        <div className="w-12 md:w-16 h-1 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-indigo-500"
                                                                style={{ width: `${score}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* <td className="px-3 md:px-6 py-4 text-center">
                                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{supportScore}</span>
                                                </td>
                                                <td className="px-3 md:px-6 py-4 text-center">
                                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{taskScore}</span>
                                                </td> */}
                                                <td className="px-3 md:px-6 py-4">
                                                    <span className={cn(
                                                        "text-[10px] font-bold px-3 py-1 rounded-full border whitespace-nowrap inline-block",
                                                        sub.performanceLevel?.includes("Needs") ? "bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30" :
                                                            sub.performanceLevel?.includes("Emerging") ? "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30" :
                                                                sub.performanceLevel?.includes("Developing") ? "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30" :
                                                                    sub.performanceLevel?.includes("Independent") ? "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-900/30" :
                                                                        "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/30"
                                                    )}>
                                                        {sub.performanceLevel}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <HomeProgramReportModal
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
                programId={program.id}
                childId={program.childId}
                tasks={program.tasks || []}
                initialData={todaySubmission?.submissionTasks}
            />
        </>
    );
}
