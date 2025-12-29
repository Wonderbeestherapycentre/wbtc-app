"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";

interface FeeFilterControlsProps {
    therapies: { id: string; name: string }[];
    initialStartDate?: string;
    initialEndDate?: string;
    initialTherapyId?: string;
}

export default function FeeFilterControls({
    therapies,
    initialStartDate,
    initialEndDate,
    initialTherapyId
}: FeeFilterControlsProps) {
    const router = useRouter();
    const [startDate, setStartDate] = useState(initialStartDate || "");
    const [endDate, setEndDate] = useState(initialEndDate || "");
    const [therapyId, setTherapyId] = useState(initialTherapyId || "ALL");

    useEffect(() => {
        applyFilters();
    }, [startDate, endDate, therapyId]);

    const applyFilters = () => {
        const params = new URLSearchParams();
        if (startDate) params.set("startDate", startDate);
        if (endDate) params.set("endDate", endDate);
        if (therapyId && therapyId !== "ALL") params.set("therapyId", therapyId);

        // Preserve current path, update params
        router.replace(`?${params.toString()}`);
    };

    const clearFilters = () => {
        setStartDate("");
        setEndDate("");
        setTherapyId("ALL");
    };

    return (
        <div className="flex flex-wrap items-end gap-3 bg-gray-50 dark:bg-neutral-800/50 p-4 rounded-xl border border-gray-100 dark:border-neutral-800">
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="block w-full px-3 py-2 text-sm bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">End Date</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="block w-full px-3 py-2 text-sm bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">Therapy</label>
                <select
                    value={therapyId}
                    onChange={(e) => setTherapyId(e.target.value)}
                    className="block w-full px-3 py-2 text-sm bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="ALL">All Therapies</option>
                    {therapies.map((t) => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>
            </div>
            <button
                onClick={clearFilters}
                className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-1 h-[38px]"
                title="Clear Filters"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
