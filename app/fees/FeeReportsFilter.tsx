"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";

interface FeeReportsFilterProps {
    defaultStartDate: string;
    defaultEndDate: string;
    therapies: any[];
}

export default function FeeReportsFilter({ defaultStartDate, defaultEndDate, therapies }: FeeReportsFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initial state from URL params or defaults
    const [startDate, setStartDate] = useState(searchParams.get("startDate") || defaultStartDate);
    const [endDate, setEndDate] = useState(searchParams.get("endDate") || defaultEndDate);
    const [therapyId, setTherapyId] = useState(searchParams.get("therapyId") || "ALL");

    const applyFilters = (start: string, end: string, therapy: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (start) params.set("startDate", start);
        else params.delete("startDate");

        if (end) params.set("endDate", end);
        else params.delete("endDate");

        if (therapy && therapy !== "ALL") params.set("therapyId", therapy);
        else params.delete("therapyId");

        router.replace(`?${params.toString()}`);
    };

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setStartDate(val);
        applyFilters(val, endDate, therapyId);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEndDate(val);
        applyFilters(startDate, val, therapyId);
    };

    const handleTherapyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setTherapyId(val);
        applyFilters(startDate, endDate, val);
    };

    const clearFilters = () => {
        setStartDate("");
        setEndDate("");
        setTherapyId("ALL");
        router.replace("?");
    };

    return (
        <div className="flex flex-wrap items-end gap-3 bg-white dark:bg-neutral-900 mb-6 p-4 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                    Start Date
                </label>
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="block w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                    End Date
                </label>
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="block w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
            </div>

            <div className="space-y-1 min-w-[200px]">
                <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                    Therapy Type
                </label>
                <select
                    value={therapyId}
                    onChange={handleTherapyChange}
                    className="block w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none appearance-none"
                >
                    <option value="ALL">All Therapies</option>
                    {therapies.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>
            </div>

            {/* {(startDate || endDate) && (
                <button
                    onClick={clearFilters}
                    className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-1 h-[38px] border border-transparent hover:border-red-100"
                    title="Clear Filters"
                >
                    <X className="w-4 h-4" />
                    Clear
                </button>
            )} */}
        </div>
    );
}
