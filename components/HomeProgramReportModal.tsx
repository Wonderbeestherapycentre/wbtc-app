"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import HomeProgramReportForm from "./HomeProgramReportForm";

interface HomeProgramReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    programId: string;
    childId: string;
    tasks: any[];
    initialData?: any[];
}

export default function HomeProgramReportModal({
    isOpen,
    onClose,
    programId,
    childId,
    tasks,
    initialData
}: HomeProgramReportModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-[1rem] shadow-2xl border border-gray-100 dark:border-neutral-800 flex flex-col max-h-[95vh] overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-50 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-neutral-900 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-100 dark:bg-neutral-800 rounded-b-full" />
                    <h2 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Report Progress</h2>
                    <button onClick={onClose} className="p-2.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-all group">
                        <X className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-8 py-4 overflow-y-auto custom-scrollbar">
                    <HomeProgramReportForm
                        programId={programId}
                        childId={childId}
                        tasks={tasks}
                        initialData={initialData}
                        onSuccess={onClose}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
