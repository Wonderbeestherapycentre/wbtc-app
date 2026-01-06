"use client";

import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { PROMPT_OPTIONS } from "@/lib/constants";

interface SessionNoteViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    note: any;
    goals: any[];
}

export default function SessionNoteViewModal({ isOpen, onClose, note, goals }: SessionNoteViewModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "EMERGING": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
            case "PARTIALLY_ACHIEVED": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
            case "ACHIEVED": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    if (!isOpen || !mounted || !note) return null;

    let objectives = {};
    try {
        objectives = JSON.parse(note.goalsAddressed || "{}");
    } catch (e) {
        objectives = {};
    }

    let activities = [];
    try {
        activities = JSON.parse(note.activities || "[]");
    } catch (e) {
        activities = [];
    }

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md  p-2 md:p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-3xl rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 max-h-[90vh] overflow-y-auto">

                <div className="p-2 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-10 flex justify-between items-center">
                    <div>
                        <h2 className="md:text-xl text-sm font-bold text-gray-900 dark:text-white">
                            {note.child.name} Session Note ({format(new Date(note.date), "MMM d, yyyy")})
                        </h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {note.therapy.name}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>


                <div className="p-2 md:p-4 space-y-3">

                    {/* Little Wins */}
                    {note.littleWins && (
                        <div>
                            <label className="text-sm font-medium text-green-700 dark:text-green-300 mb-3 block">Little Wins Today</label>
                            <div className="border border-green-200 dark:border-neutral-700 rounded-xl p-2 bg-yellow-50/50 dark:bg-yellow-900/10">
                                <p className="text-sm text-green-900 dark:text-white whitespace-pre-wrap leading-relaxed">
                                    {note.littleWins}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Objectives */}
                    {Object.keys(objectives).length > 0 && (
                        <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block"> Today Goals</label>
                            <div className="space-y-2 border border-gray-200 dark:border-neutral-700 rounded-xl p-4">
                                {Object.entries(objectives).map(([goalId, objectivesList]: [string, any]) => {
                                    // Find the goal to get its details
                                    const goal = goals.find(g => g.id === goalId);
                                    const goalTitle = goal ? goal.title : "Unknown Goal";

                                    return (
                                        <div key={goalId} className="border-b border-gray-100 dark:border-neutral-800 pb-1 last:border-b-0 last:pb-0">
                                            <div className="flex items-start justify-between mb-1">
                                                <div className="flex-1">
                                                    <div className="font-medium text-sm text-gray-900 dark:text-white">{goalTitle}</div>
                                                    {goal && (
                                                        <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                                            {/* <span>{format(new Date(goal.startDate), "MMM d, yyyy")} - {format(new Date(goal.endDate), "MMM d, yyyy")}</span> */}
                                                            <span className={`px-2 py-0.5 rounded-full font-medium ${getStatusColor(goal.status)}`}>
                                                                {goal.status.replace('_', ' ')}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {/* {Array.isArray(objectivesList) && objectivesList.length > 0 && (
                                                <div className="space-y-1.5 ml-4">
                                                    {objectivesList.map((objective, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-sm">
                                                            <span className="text-blue-500 mt-0.5">✓</span>
                                                            <span className="text-gray-700 dark:text-gray-200">{objective}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )} */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Activities */}
                    {Array.isArray(activities) && activities.length > 0 && (
                        <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Activities</label>
                            <div className="space-y-3">
                                {activities.map((activity, idx) => (
                                    <div key={idx} className="border border-gray-200 dark:border-neutral-700 rounded-xl p-4">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded">{idx + 1}</span>
                                            <div className="flex-1 space-y-2">
                                                <p className="text-md text-gray-900 dark:text-white">{activity.description}</p>
                                                {activity.prompt && (() => {
                                                    const option = PROMPT_OPTIONS.find(opt => opt.key === activity.prompt);
                                                    if (!option) return (
                                                        <span className="inline-block text-md font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded">
                                                            {activity.prompt}
                                                        </span>
                                                    );
                                                    return (
                                                        <div className="space-y-1">
                                                            <span className="inline-block text-xs font-bold px-2 py-1 bg-orange-200 text-gray-700 rounded shadow-sm">
                                                                {option.value}
                                                            </span>
                                                            {option.desc && (
                                                                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed italic">
                                                                    {option.desc}
                                                                </p>
                                                            )}
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                    <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-neutral-800">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
