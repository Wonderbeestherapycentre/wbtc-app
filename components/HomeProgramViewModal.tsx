"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import HomeProgramDetails from "./HomeProgramDetails";

interface HomeProgramViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    program: any;
}

export default function HomeProgramViewModal({
    isOpen,
    onClose,
    program
}: HomeProgramViewModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isOpen || !mounted || !program) return null;

    return createPortal(
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex justify-end items-center bg-gray-50/50 dark:bg-neutral-800/30 rounded-t-2xl">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors group">
                        <X className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto">
                    <HomeProgramDetails program={program} />
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 dark:border-neutral-800 flex justify-end bg-gray-50/50 dark:bg-neutral-800/30 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="px-10 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-black rounded-xl transition-all transform active:scale-95 shadow-xl shadow-gray-900/10 dark:shadow-white/5 uppercase tracking-widest"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
