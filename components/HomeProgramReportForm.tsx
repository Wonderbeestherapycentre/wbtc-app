"use client";

import React, { useState, useTransition } from "react";
import { CheckSquare, ChevronDown, Save, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitHomeProgramReport } from "@/lib/actions";
import { toast } from "sonner";

interface Task {
    id: string;
    description: string;
}

interface HomeProgramReportFormProps {
    programId: string;
    childId: string;
    tasks: Task[];
    initialData?: {
        taskId: string;
        supportLevelId: number;
    }[];
    onSuccess?: () => void;
}

const SUPPORT_LEVELS = [
    { id: 1, score: 10, name: "Full Physical Support" },
    { id: 2, score: 20, name: "Partial Physical Support" },
    { id: 3, score: 30, name: "Verbal / Gestural Cue" },
    { id: 4, score: 40, name: "Independent" },
    { id: 5, score: 50, name: "Independent + Generalized" }
];

export default function HomeProgramReportForm({
    programId,
    childId,
    tasks,
    initialData,
    onSuccess
}: HomeProgramReportFormProps) {
    const [isPending, startTransition] = useTransition();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lastSubmission, setLastSubmission] = useState<{ score: number, level: string } | null>(null);
    const [selectedTasks, setSelectedTasks] = useState<Record<string, { supportLevelId: number }>>(() => {
        if (initialData) {
            const data: Record<string, { supportLevelId: number }> = {};
            initialData.forEach(item => {
                data[item.taskId] = { supportLevelId: item.supportLevelId };
            });
            return data;
        }
        return {};
    });

    const totalTasksCount = tasks.length;
    const completedTasksCount = Object.keys(selectedTasks).length;

    // STEP 1: Task Completion Score (50%)
    const taskScore = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 50 : 0;

    // STEP 2: Support Level Score (50%)
    const selectedTaskDetails = Object.keys(selectedTasks)
        .map(tid => SUPPORT_LEVELS.find(l => l.id === selectedTasks[tid].supportLevelId))
        .filter((l): l is typeof SUPPORT_LEVELS[number] => !!l);

    const totalSupportPoints = selectedTaskDetails.reduce((acc, l) => acc + l.score, 0);
    const validLevelsCount = selectedTaskDetails.length;
    const supportScore = validLevelsCount > 0 ? (totalSupportPoints / validLevelsCount) : 0;

    // STEP 3: Final Activity Percentage
    const currentScore = Number((taskScore + supportScore).toFixed(0));
    // const currentScore = Number((supportScore).toFixed(0));

    // Performance Level Mapping
    const getPerformanceLevel = (score: number) => {
        if (score > 45) return { name: "Generalization", color: "text-purple-600 bg-purple-50 border-purple-100", emoji: "🌟" };
        if (score > 35) return { name: "Independent", color: "text-emerald-600 bg-emerald-50 border-emerald-100", emoji: "✅" };
        if (score > 20) return { name: "Developing", color: "text-blue-600 bg-blue-50 border-blue-100", emoji: "🐝" };
        if (score > 10) return { name: "Emerging", color: "text-amber-600 bg-amber-50 border-amber-100", emoji: "🌱" };
        return { name: "Needs Maximum Support", color: "text-red-600 bg-red-50 border-red-100", emoji: "🆘" };
    };

    const performance = getPerformanceLevel(supportScore);

    const toggleTask = (taskId: string) => {
        setSelectedTasks(prev => {
            const next = { ...prev };
            if (next[taskId]) {
                delete next[taskId];
            } else {
                next[taskId] = { supportLevelId: 0 }; // Default to 'Select' (0)
            }
            return next;
        });
    };

    const updateSupportLevel = (taskId: string, levelId: number) => {
        setSelectedTasks(prev => ({
            ...prev,
            [taskId]: { supportLevelId: levelId }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const selectedIds = Object.keys(selectedTasks);
        if (selectedIds.length === 0) {
            toast.error("Please select at least one task to report.");
            return;
        }

        // Check if all selected tasks have a support level
        const hasEmptyLevels = selectedIds.some(id => selectedTasks[id].supportLevelId === 0);
        if (hasEmptyLevels) {
            toast.error("Please select a support level for all checked tasks.");
            return;
        }

        const today = new Date().toISOString().split('T')[0];

        const payload = {
            programId,
            childId,
            date: today,
            tasks: selectedIds.map(taskId => {
                const level = SUPPORT_LEVELS.find(l => l.id === selectedTasks[taskId].supportLevelId)!;
                return {
                    taskId,
                    supportLevelId: level.id,
                    supportLevelName: level.name,
                    score: level.score
                };
            })
        };

        startTransition(async () => {
            const result = await submitHomeProgramReport(payload);
            if (result.success) {
                toast.success("Progress report saved successfully!");
                setLastSubmission({ score: currentScore, level: performance.name });
                setIsSubmitted(true);
                if (onSuccess) {
                    setTimeout(() => onSuccess(), 1500); // Small delay to show success state
                }
            } else {
                toast.error(result.error || "Failed to submit report.");
            }
        });
    };

    if (isSubmitted && lastSubmission) {
        return (
            <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">Report Submitted!</h3>
                    <p className="text-gray-500 dark:text-gray-400">Score: <span className="font-bold text-indigo-600">{lastSubmission.score}%</span></p>
                    <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold uppercase tracking-wider", getPerformanceLevel(lastSubmission.score).color)}>
                        {getPerformanceLevel(lastSubmission.score).emoji} {lastSubmission.level}
                    </div>
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 italic max-w-sm mx-auto">
                    "Your child is improving. Try reducing cues next time."
                </p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        if (!initialData) setSelectedTasks({});
                    }}
                    className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-blue-600 transition-colors"
                >
                    Back to Form
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-sm shadow-lg shadow-blue-500/20">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Daily Progress Report</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">Live Scoring Active</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 dark:bg-neutral-800/50 p-2 pr-4 rounded-xl border border-gray-100 dark:border-neutral-700/50">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Score</span>
                        <span className="text-lg font-black text-indigo-600 dark:text-indigo-400 leading-none">{currentScore}%</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200 dark:border-neutral-700" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Level</span>
                        <div className={cn("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase transition-all duration-500", performance.color)}>
                            <span>{performance.emoji}</span>
                            <span>{performance.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {tasks.map((task, idx) => {
                    const isSelected = !!selectedTasks[task.id];
                    return (
                        <div
                            key={task.id}
                            className={cn(
                                "group relative overflow-hidden transition-all duration-300 rounded-[1rem] border p-2 flex flex-col md:flex-row md:items-center gap-6",
                                isSelected
                                    ? "bg-blue-50/50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-900/30 shadow-md"
                                    : "bg-white border-gray-100 dark:bg-neutral-900 dark:border-neutral-800 hover:border-blue-100 dark:hover:border-blue-900/20"
                            )}
                        >
                            <label className="flex flex-1 items-start gap-4 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => toggleTask(task.id)}
                                    className="sr-only"
                                />
                                <div className={cn(
                                    "flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all",
                                    isSelected
                                        ? "bg-blue-600 border-blue-600 scale-110 shadow-lg shadow-blue-600/30"
                                        : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                                )}>
                                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                                    {!isSelected && <span className="text-[10px] font-black text-gray-300">{idx + 1}</span>}
                                </div>
                                <p className={cn(
                                    "text-base font-bold transition-colors leading-relaxed",
                                    isSelected ? "text-blue-900 dark:text-blue-300" : "text-gray-700 dark:text-gray-400"
                                )}>
                                    {task.description}
                                </p>
                            </label>

                            {isSelected && (
                                <div className="md:w-72 relative animate-in zoom-in-95 duration-200">
                                    <select
                                        value={selectedTasks[task.id].supportLevelId}
                                        onChange={(e) => updateSupportLevel(task.id, parseInt(e.target.value))}
                                        className={cn(
                                            "w-full h-12 pl-4 pr-10 bg-white dark:bg-neutral-800 border-2 rounded-2xl text-sm font-bold appearance-none focus:outline-none transition-all cursor-pointer shadow-sm",
                                            selectedTasks[task.id].supportLevelId === 0
                                                ? "border-amber-200 dark:border-amber-900/40 text-gray-400"
                                                : "border-blue-200 dark:border-blue-900/40 text-gray-900 dark:text-white focus:border-blue-500"
                                        )}
                                    >
                                        <option value={0} disabled>Select Support Level</option>
                                        {SUPPORT_LEVELS.map(level => (
                                            <option key={level.id} value={level.id}>
                                                {level.name}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className={cn(
                                        "absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors",
                                        selectedTasks[task.id].supportLevelId === 0 ? "text-amber-500" : "text-blue-500"
                                    )} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 text-right">
                <button
                    onClick={handleSubmit}
                    disabled={isPending || Object.keys(selectedTasks).length === 0}
                    className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-base font-black rounded-2xl transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group active:scale-95 uppercase tracking-widest",
                        !isPending && "hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white hover:-translate-y-1"
                    )}
                >
                    {isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <Save className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    )}
                    {isPending ? "Submitting..." : "Save Progress Report"}
                </button>
            </div>
        </form>
    );
}
