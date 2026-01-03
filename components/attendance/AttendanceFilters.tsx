"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { getTodayIST } from "@/lib/utils/timezone";

interface AttendanceFiltersProps {
    therapies: { id: string; name: string }[];
    therapists: { id: string; name: string }[];
    currentDate: Date;
    currentUserRole: string;
    selectedTherapyId?: string;
    selectedTherapistId?: string;
    activeTab: string;
    searchParams: any;
}

export default function AttendanceFilters({
    therapies,
    therapists,
    currentDate,
    currentUserRole,
    selectedTherapyId,
    selectedTherapistId,
    activeTab,
    searchParams
}: AttendanceFiltersProps) {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(() => {
        return currentDate ? format(currentDate, "yyyy-MM-dd") : getTodayIST();
    });

    useEffect(() => {
        if (currentDate) {
            setSelectedDate(format(currentDate, "yyyy-MM-dd"));
        }
    }, [currentDate]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        const params = new URLSearchParams(window.location.search);
        if (date) params.set("date", date);
        else params.delete("date");
        setSelectedDate(date);
        router.push(`/attendance?${params.toString()}`);
    };

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(window.location.search);
        if (value && value !== "ALL") params.set(key, value);
        else params.delete(key);
        router.push(`/attendance?${params.toString()}`);
    };

    return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-2 shadow-sm flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
                {/* Tab Switcher */}
                <div className="flex p-1 bg-gray-100 dark:bg-neutral-800 rounded-xl w-fit shadow-inner">
                    <a
                        href={`/attendance?${new URLSearchParams({
                            ...searchParams,
                            tab: "daily"
                        }).toString()}`}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === "daily"
                            ? "bg-white dark:bg-neutral-700 text-brand-600 dark:text-brand-400 shadow-sm ring-1 ring-black/5"
                            : "text-gray-500 hover:text-gray-700 dark:hover:text-neutral-300"
                            }`}
                    >
                        Daily
                    </a>
                    <a
                        href={`/attendance?${new URLSearchParams({
                            ...searchParams,
                            tab: "monthly"
                        }).toString()}`}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === "monthly"
                            ? "bg-white dark:bg-neutral-700 text-brand-600 dark:text-brand-400 shadow-sm ring-1 ring-black/5"
                            : "text-gray-500 hover:text-gray-700 dark:hover:text-neutral-300"
                            }`}
                    >
                        Monthly
                    </a>
                </div>

                <div className="h-6 w-px bg-gray-200 dark:bg-neutral-800 hidden md:block" />

                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white font-medium"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <select
                    className="px-3 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-sm"
                    value={selectedTherapyId || "ALL"}
                    onChange={(e) => handleFilterChange("therapyId", e.target.value)}
                >
                    <option value="ALL">All Therapies</option>
                    {therapies.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>

                {currentUserRole === "ADMIN" && (
                    <select
                        className="px-3 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-sm"
                        value={selectedTherapistId || "ALL"}
                        onChange={(e) => handleFilterChange("therapistId", e.target.value)}
                    >
                        <option value="ALL">All Therapists</option>
                        {therapists.map(t => (
                            <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                    </select>
                )}
            </div>
        </div>
    );
}
