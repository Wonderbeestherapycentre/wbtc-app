"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Sparkles } from "lucide-react";
import HomeProgramReportForm from "./HomeProgramReportForm";

interface HomeProgramReportPageProps {
    programId: string;
    programTitle: string;
    childId: string;
    tasks: any[];
    initialData?: any[];
    backHref: string;
}

export default function HomeProgramReportPage({
    programId,
    programTitle,
    childId,
    tasks,
    initialData,
    backHref
}: HomeProgramReportPageProps) {
    const router = useRouter();

    return (
        <div className="w-full mx-auto space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
            >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Program
            </Link>

            <div className="bg-white dark:bg-neutral-900 rounded-[1.0rem] border border-gray-100 dark:border-neutral-800 shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden">
                <div className="p-4 md:p-6 border-b border-gray-50 dark:border-neutral-800 flex items-center gap-3">
                    <div className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-sm shadow-lg shadow-blue-500/20">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{programTitle}</p>
                        <h1 className="text-lg md:text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Report Progress</h1>
                    </div>
                </div>

                <div className="p-4 md:p-6">
                    <HomeProgramReportForm
                        programId={programId}
                        childId={childId}
                        tasks={tasks}
                        initialData={initialData}
                        onSuccess={() => router.push(backHref)}
                    />
                </div>
            </div>
        </div>
    );
}
