"use client";

import { useState } from "react";
import { useTransition } from "react";
import { ChevronDown, ChevronUp, Edit2, Trash2, CheckCircle2, Circle, Clock, AlertCircle, Meh, Ban } from "lucide-react";
import { updateHomeProgramTaskStatus, deleteHomeProgram } from "@/lib/actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface HomeProgramCardProps {
    program: any;
    onEdit: (program: any) => void;
    canEdit?: boolean;
}

const statusIcons: Record<string, any> = {
    PENDING: Circle,
    IN_PROGRESS: Clock,
    COMPLETED: CheckCircle2,
    BORED: Meh,
    REFUSED: Ban,
};

const statusColors: Record<string, string> = {
    PENDING: "text-gray-400",
    IN_PROGRESS: "text-blue-500",
    COMPLETED: "text-green-500",
    BORED: "text-yellow-500",
    REFUSED: "text-red-500",
};

export default function HomeProgramCard({ program, onEdit, canEdit = true }: HomeProgramCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleStatusChange = async (taskId: string, newStatus: string) => {
        startTransition(async () => {
            const result = await updateHomeProgramTaskStatus(taskId, newStatus);
            if (result.success) {
                toast.success("Task status updated");
            } else {
                toast.error("Failed to update task status");
            }
        });
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this program?")) return;

        startTransition(async () => {
            const result = await deleteHomeProgram(program.id);
            if (result.message.includes("successfully")) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        });
    };

    const StatusIcon = (status: string) => {
        const Icon = statusIcons[status] || Circle;
        return <Icon className={cn("w-4 h-4", statusColors[status])} />;
    };

    const completedTasks = program.tasks.filter((t: any) => t.status === "COMPLETED").length;
    const progress = Math.round((completedTasks / program.tasks.length) * 100);

    return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-gray-900 dark:text-white">{program.title}</h3>
                            <span className={cn(
                                "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                                program.status === "ACTIVE" ? "bg-green-100 text-green-600 dark:bg-green-900/30" : "bg-gray-100 text-gray-600 dark:bg-neutral-800"
                            )}>
                                {program.status}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {program.therapy?.name} • {program.child?.name}
                        </p>
                    </div>

                    {canEdit && (
                        <div className="flex gap-1">
                            <button
                                onClick={() => onEdit(program)}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-blue-600 dark:text-blue-400">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-blue-600 h-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full mt-4 py-2 flex items-center justify-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors border-t border-gray-50 dark:border-neutral-800"
                >
                    {isExpanded ? (
                        <>Hide Tasks <ChevronUp className="w-4 h-4" /></>
                    ) : (
                        <>Show Tasks ({program.tasks.length}) <ChevronDown className="w-4 h-4" /></>
                    )}
                </button>
            </div>

            {isExpanded && (
                <div className="bg-gray-50 dark:bg-neutral-900/50 p-4 border-t border-gray-50 dark:border-neutral-800 space-y-3 animate-in slide-in-from-top-2 duration-300">
                    {program.tasks.map((task: any) => (
                        <div key={task.id} className="flex items-center gap-3">
                            <div className="dropdown relative group">
                                <button className="p-1 hover:bg-white dark:hover:bg-neutral-800 rounded-md transition-colors border border-transparent hover:border-gray-200 dark:hover:border-neutral-700">
                                    {StatusIcon(task.status)}
                                </button>
                                <div className="absolute left-0 mt-1 hidden group-hover:block z-20 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl shadow-xl p-1 min-w-[120px]">
                                    {Object.keys(statusIcons).map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => handleStatusChange(task.id, s)}
                                            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700 rounded-lg text-[10px] font-bold text-gray-600 dark:text-gray-300 transition-colors"
                                        >
                                            {StatusIcon(s)}
                                            {s.replace('_', ' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <span className={cn(
                                "text-sm flex-1",
                                task.status === "COMPLETED" ? "text-gray-400 line-through" : "text-gray-700 dark:text-gray-300"
                            )}>
                                {task.description}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
