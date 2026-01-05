"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Search, Calendar, CheckCircle2, Circle, Archive, Eye, EyeOff, Edit2, ChevronLeft, ChevronRight } from "lucide-react";
import GoalModal from "./GoalModal";
import { format } from "date-fns";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface GoalsClientProps {
    initialGoals: any[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    childrenList: { id: string; name: string; caseNumber?: string; assignedTherapies: string[] }[];
    therapies: { id: string; name: string }[];
    role: "ADMIN" | "THERAPIST" | "PARENT";
}

export default function GoalsClient({
    initialGoals,
    meta,
    childrenList,
    therapies,
    role
}: GoalsClientProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGoal, setEditingGoal] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    const [filterStatus, setFilterStatus] = useState<string>(searchParams.get("status") || "ALL");
    const [expandedGoal, setExpandedGoal] = useState<string | null>(null);

    const updateFilters = useCallback((newSearch: string, newStatus: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newSearch) params.set("search", newSearch);
        else params.delete("search");

        if (newStatus && newStatus !== "ALL") params.set("status", newStatus);
        else params.delete("status");

        params.set("page", "1"); // Reset to page 1 on filter
        router.push(`${pathname}?${params.toString()}`);
    }, [pathname, router, searchParams]);

    // Handle search debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== (searchParams.get("search") || "")) {
                updateFilters(searchTerm, filterStatus);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm, filterStatus, updateFilters, searchParams]);

    const handleStatusChange = (status: string) => {
        setFilterStatus(status);
        updateFilters(searchTerm, status);
    };

    const handleCreate = () => {
        setEditingGoal(null);
        setIsModalOpen(true);
    };

    const handleEdit = (goal: any) => {
        setEditingGoal(goal);
        setIsModalOpen(true);
    };

    const toggleExpand = (goalId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedGoal(expandedGoal === goalId ? null : goalId);
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "ACHIEVED": return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case "PARTIALLY_ACHIEVED": return <Edit2 className="w-4 h-4 text-orange-500" />;
            default: return <Circle className="w-4 h-4 text-blue-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ACHIEVED": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
            case "PARTIALLY_ACHIEVED": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
            default: return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
        }
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by child name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        value={filterStatus}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="ALL">All Status</option>
                        <option value="EMERGING">Emerging</option>
                        <option value="PARTIALLY_ACHIEVED">Partially achieved</option>
                        <option value="ACHIEVED">Achieved</option>
                    </select>

                    {role !== "PARENT" && (
                        <button
                            onClick={handleCreate}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 whitespace-nowrap"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">New Goal</span>
                        </button>
                    )}
                </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-200 dark:border-neutral-800 text-xs uppercase text-gray-500 font-medium whitespace-nowrap">
                                <th className="px-6 py-4 w-12">S.No</th>
                                <th className="px-6 py-4 min-w-[200px]">Goal Description</th>
                                <th className="px-6 py-4">Child Name</th>
                                <th className="px-6 py-4">Therapy</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Status</th>
                                {
                                    role !== "PARENT" && (
                                        <th className="px-6 py-4 text-center">Actions</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {initialGoals.length > 0 ? (
                                initialGoals.map((goal, index) => (
                                    <tr
                                        key={goal.id}
                                        className="group hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-400 font-medium">
                                            {(meta.page - 1) * meta.limit + index + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-medium line-clamp-2" title={goal.title}>
                                                {goal.title || "No goal description"}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="flex flex-col min-w-0">
                                                    <span className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                                                        {goal.child.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-gray-500 dark:text-gray-400 font-bold tracking-wide w-fit uppercase">
                                                    {goal.therapy.name}
                                                </span>
                                                {role === "ADMIN" && (
                                                    <span className="text-[10px] text-gray-400 font-medium">
                                                        By: {goal.therapist?.name || "Unknown"}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
                                                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                                <div className="flex flex-col text-[10px]">
                                                    <span>{format(new Date(goal.startDate), "MMM d, yyyy")}</span>
                                                    <span className="text-gray-400 italic">to {format(new Date(goal.endDate), "MMM d, yyyy")}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide inline-flex items-center gap-1 ${getStatusColor(goal.status)}`}>
                                                {getStatusIcon(goal.status)}
                                                {goal.status.toLowerCase().replace("_", " ")}
                                            </span>
                                        </td>
                                        {role !== "PARENT" && (
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => handleEdit(goal)}
                                                        className="p-1.5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors border border-transparent hover:border-gray-200 dark:hover:border-neutral-700"
                                                        title="Edit goal"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>

                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                        <div className="w-12 h-12 bg-gray-50 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <CheckCircle2 className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <p>No goals found matching your criteria</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                {meta?.totalPages > 1 && (
                    <div className="px-6 py-4 bg-gray-50/50 dark:bg-neutral-900/50 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between">
                        <p className="text-xs text-gray-500 font-medium">
                            Showing Page <span className="text-gray-900 dark:text-white">{meta.page}</span> of <span className="text-gray-900 dark:text-white">{meta.totalPages}</span>
                            <span className="ml-2 text-gray-400">({meta.total} total items)</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    const params = new URLSearchParams(searchParams.toString());
                                    params.set("page", (meta.page - 1).toString());
                                    router.push(`${pathname}?${params.toString()}`);
                                }}
                                disabled={meta.page <= 1}
                                className="p-2 rounded-lg border border-gray-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => {
                                    const params = new URLSearchParams(searchParams.toString());
                                    params.set("page", (meta.page + 1).toString());
                                    router.push(`${pathname}?${params.toString()}`);
                                }}
                                disabled={meta.page >= meta.totalPages}
                                className="p-2 rounded-lg border border-gray-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <GoalModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                goal={editingGoal}
                childrenList={childrenList}
                therapies={therapies}
                role={role}
            />
        </>
    );
}
