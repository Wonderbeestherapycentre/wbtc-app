"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Target, Calendar, Edit2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import GoalModal from "./GoalModal";
import { useRouter, usePathname } from "next/navigation";

interface ChildGoalsTableProps {
    goals: any[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    role: "ADMIN" | "THERAPIST" | "PARENT";
    childrenList: any[];
    therapies: any[];
}

export default function ChildGoalsTable({ goals, meta, role, childrenList, therapies }: ChildGoalsTableProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGoal, setEditingGoal] = useState<any>(null);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "IN_PROGRESS": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
            case "COMPLETED": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            case "ARCHIVED": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const handleEdit = (goal: any) => {
        setEditingGoal(goal);
        setIsModalOpen(true);
    };

    return (
        <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-4">
                <Target className="w-5 h-5 text-blue-600" />
                Therapy Goals
            </h3>

            {goals.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-200 dark:border-neutral-800 text-xs uppercase text-gray-500 font-medium tracking-wider whitespace-nowrap">
                                <th className="px-6 py-4 w-12">S.No</th>
                                <th className="px-6 py-4 min-w-[200px]">Goal Description</th>
                                <th className="px-6 py-4">Therapy</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Status</th>
                                {role !== "PARENT" && <th className="px-6 py-4 text-right">Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {goals.map((goal, index) => (
                                <tr key={goal.id} className="group hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-400 font-medium">
                                        {(meta.page - 1) * meta.limit + index + 1}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed line-clamp-2" title={goal.title}>
                                            {goal.title || "No description"}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="text-[10px] bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide">
                                            {goal.therapy?.name}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex flex-col text-[10px]">
                                            <span>{format(new Date(goal.startDate), "MMM d, yyyy")}</span>
                                            <span className="text-gray-400">to {format(new Date(goal.endDate), "MMM d, yyyy")}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${getStatusColor(goal.status)}`}>
                                            {goal.status.replace("_", " ")}
                                        </span>
                                    </td>
                                    {role !== "PARENT" && (
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleEdit(goal)}
                                                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                                title="Edit goal"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="py-12 text-center text-gray-500 bg-gray-50/50 dark:bg-neutral-800/30 rounded-xl border-2 border-dashed border-gray-100 dark:border-neutral-800">
                    <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-gray-300" />
                    </div>
                    <p className="text-sm font-medium">No active therapy goals found</p>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Track objectives here</p>
                </div>
            )}

            {/* Pagination Controls */}
            {meta?.totalPages > 1 && (
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide">
                        Showing Page <span className="text-gray-900 dark:text-white">{meta.page}</span> of <span className="text-gray-900 dark:text-white">{meta.totalPages}</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => router.push(`${pathname}?page=${meta.page - 1}`)}
                            disabled={meta.page <= 1}
                            className="p-1.5 rounded-lg border border-gray-100 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => router.push(`${pathname}?page=${meta.page + 1}`)}
                            disabled={meta.page >= meta.totalPages}
                            className="p-1.5 rounded-lg border border-gray-100 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            )}

            <GoalModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingGoal(null);
                }}
                goal={editingGoal}
                childrenList={childrenList}
                therapies={therapies}
            />
        </div>
    );
}
