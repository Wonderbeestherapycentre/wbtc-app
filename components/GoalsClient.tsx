"use client";

import { useState } from "react";
import { Plus, Search, Calendar, CheckCircle2, Circle, Archive, Eye, EyeOff, Edit2 } from "lucide-react";
import GoalModal from "./GoalModal";
import { format } from "date-fns";

interface GoalsClientProps {
    initialGoals: any[];
    childrenList: { id: string; name: string; caseNumber?: string; assignedTherapies: string[] }[];
    therapies: { id: string; name: string }[];
    role: "ADMIN" | "THERAPIST" | "PARENT";
}

export default function GoalsClient({
    initialGoals,
    childrenList,
    therapies,
    role
}: GoalsClientProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGoal, setEditingGoal] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("ALL");
    const [expandedGoal, setExpandedGoal] = useState<string | null>(null);

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

    // Filter Logic
    const filteredGoals = initialGoals.filter(goal => {
        const matchesSearch =
            goal.child.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === "ALL" || goal.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "COMPLETED": return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case "ARCHIVED": return <Archive className="w-4 h-4 text-gray-500" />;
            default: return <Circle className="w-4 h-4 text-blue-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "COMPLETED": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
            case "ARCHIVED": return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
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
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="ALL">All Status</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="COMPLETED">Completed</option>
                        <option value="ARCHIVED">Archived</option>
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
                            <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-200 dark:border-neutral-800 text-xs uppercase text-gray-500 font-medium">
                                <th className="px-6 py-4">Child & Therapy</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {filteredGoals.length > 0 ? (
                                filteredGoals.map((goal) => (
                                    <>
                                        <tr
                                            key={goal.id}
                                            className="group hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">
                                                        {goal.child.name[0]}
                                                    </div>
                                                    <span className="font-medium text-sm text-gray-700 dark:text-gray-200">
                                                        {goal.child.name}
                                                        {goal.child.caseNumber && <span className="text-xs text-gray-500 ml-1">({goal.child.caseNumber})</span>}
                                                    </span>
                                                </div>
                                                {role === "ADMIN" && (
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 pl-8 space-y-0.5">
                                                        <div>{goal.therapy.name}</div>
                                                        <div className="text-[10px] text-gray-400">By: {goal.therapist?.name || "Unknown"}</div>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
                                                    <Calendar className="w-4 h-4 text-gray-400" />
                                                    <div className="flex flex-col text-xs">
                                                        <span>{format(new Date(goal.startDate), "MMM d, yyyy")}</span>
                                                        <span className="text-gray-400">to {format(new Date(goal.endDate), "MMM d, yyyy")}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide inline-flex items-center gap-1 ${getStatusColor(goal.status)}`}>
                                                    {getStatusIcon(goal.status)}
                                                    {goal.status.replace("_", " ")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={(e) => toggleExpand(goal.id, e)}
                                                        className="p-1.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                                        title={expandedGoal === goal.id ? "Hide goals" : "View goals"}
                                                    >
                                                        {expandedGoal === goal.id ? (
                                                            <EyeOff className="w-4 h-4" />
                                                        ) : (
                                                            <Eye className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                    {role !== "PARENT" && (
                                                        <button
                                                            onClick={() => handleEdit(goal)}
                                                            className="p-1.5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                                                            title="Edit goal"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Expanded Goals Row */}
                                        {expandedGoal === goal.id && (
                                            <tr className="bg-gray-50 dark:bg-neutral-800/30">
                                                <td colSpan={4} className="px-6 py-4">
                                                    <div className="animate-in slide-in-from-top-2 duration-200">
                                                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Therapy Goals:</h4>
                                                        <div className="space-y-2">
                                                            {(() => {
                                                                try {
                                                                    const objs = JSON.parse(goal.objectives);
                                                                    return Array.isArray(objs) && objs.length > 0 ? objs.map((obj, i) => (
                                                                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-neutral-900 rounded-lg">
                                                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                                                                                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{i + 1}</span>
                                                                            </div>
                                                                            <p className="flex-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{obj}</p>
                                                                        </div>
                                                                    )) : (
                                                                        <p className="text-sm text-gray-500 italic">No goals defined</p>
                                                                    );
                                                                } catch (e) {
                                                                    return <p className="text-sm text-gray-500 italic">No goals defined</p>;
                                                                }
                                                            })()}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
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
            </div>

            <GoalModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                goal={editingGoal}
                childrenList={childrenList}
                therapies={therapies}
            />
        </>
    );
}
