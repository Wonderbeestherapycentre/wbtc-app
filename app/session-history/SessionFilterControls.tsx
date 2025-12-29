"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Filter, X, RefreshCw } from "lucide-react";

interface SessionFilterControlsProps {
    childrenList: { id: string; name: string }[];
    therapies: { id: string; name: string }[];
    therapists: { id: string; name: string }[];
    initialState: {
        startDate?: string;
        endDate?: string;
        childId?: string;
        therapyId?: string;
        therapistId?: string;
        status?: string;
        attendance?: string;
    }
}

export default function SessionFilterControls({
    childrenList,
    therapies,
    therapists,
    initialState
}: SessionFilterControlsProps) {
    const router = useRouter();
    const [filters, setFilters] = useState(initialState);
    const [isPending, setIsPending] = useState(false);

    const handleChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        // Debounce or just wait for explicit apply?
        // Let's apply on change like others for consistency, 
        // or add an "Apply" button if many filters. 
        // Given the number of filters, maybe a small delay or just apply.
        // Let's apply immediately for now.
        const timer = setTimeout(() => {
            applyFilters();
        }, 500);
        return () => clearTimeout(timer);
    }, [filters]);

    const applyFilters = () => {
        setIsPending(true);
        const params = new URLSearchParams();
        if (filters.startDate) params.set("startDate", filters.startDate);
        if (filters.endDate) params.set("endDate", filters.endDate);
        if (filters.childId && filters.childId !== "ALL") params.set("childId", filters.childId);
        if (filters.therapyId && filters.therapyId !== "ALL") params.set("therapyId", filters.therapyId);
        if (filters.therapistId && filters.therapistId !== "ALL") params.set("therapistId", filters.therapistId);
        if (filters.status && filters.status !== "ALL") params.set("status", filters.status);
        if (filters.attendance && filters.attendance !== "ALL") params.set("attendance", filters.attendance);

        router.replace(`?${params.toString()}`);
        setTimeout(() => setIsPending(false), 500); // Visual delay
    };

    const clearFilters = () => {
        setFilters({
            startDate: "",
            endDate: "",
            childId: "ALL",
            therapyId: "ALL",
            therapistId: "ALL",
            status: "ALL",
            attendance: "ALL"
        });
    };

    return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-4 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filters
                </h3>
                <div className="flex gap-2">
                    {isPending && <RefreshCw className="w-4 h-4 animate-spin text-gray-400" />}
                    <button onClick={clearFilters} className="text-xs text-red-600 hover:underline">Clear All</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Start Date</label>
                    <input
                        type="date"
                        value={filters.startDate || ""}
                        onChange={(e) => handleChange("startDate", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">End Date</label>
                    <input
                        type="date"
                        value={filters.endDate || ""}
                        onChange={(e) => handleChange("endDate", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Child</label>
                    <select
                        value={filters.childId || "ALL"}
                        onChange={(e) => handleChange("childId", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    >
                        <option value="ALL">All Children</option>
                        {childrenList.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Therapy</label>
                    <select
                        value={filters.therapyId || "ALL"}
                        onChange={(e) => handleChange("therapyId", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    >
                        <option value="ALL">All Therapies</option>
                        {therapies.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Therapist</label>
                    <select
                        value={filters.therapistId || "ALL"}
                        onChange={(e) => handleChange("therapistId", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    >
                        <option value="ALL">All Therapists</option>
                        {therapists.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Status</label>
                    <select
                        value={filters.status || "ALL"}
                        onChange={(e) => handleChange("status", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    >
                        <option value="ALL">All Statuses</option>
                        <option value="SCHEDULED">Scheduled</option>
                        <option value="COMPLETED">Completed</option>
                        <option value="CANCELLED">Cancelled</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">Attendance</label>
                    <select
                        value={filters.attendance || "ALL"}
                        onChange={(e) => handleChange("attendance", e.target.value)}
                        className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                    >
                        <option value="ALL">All Attendance</option>
                        <option value="PRESENT">Present</option>
                        <option value="ABSENT">Absent</option>
                        <option value="EXCUSED">Excused</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
