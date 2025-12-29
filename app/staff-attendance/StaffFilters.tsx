"use client";

import { useRouter } from "next/navigation";
import { formatDateToLocal } from "@/lib/utils";

interface StaffFiltersProps {
    currentDate: string;
}

export default function StaffFilters({ currentDate }: StaffFiltersProps) {
    const router = useRouter();

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/staff-attendance?date=${e.target.value}`);
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value; // YYYY-MM
        if (value) {
            const [year, month] = value.split('-');
            const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
            const dateStr = formatDateToLocal(newDate); // Helper handles local time "YYYY-MM-DD"
            router.push(`/staff-attendance?date=${dateStr}`);
        }
    };

    // Extract YYYY-MM from currentDate for the month picker
    const currentMonth = currentDate.slice(0, 7);

    return (
        <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-neutral-900 p-4 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <div className="flex-1">
                <label className="block text-xs font-medium text-gray-500 mb-1">Daily Register Date</label>
                <input
                    type="date"
                    value={currentDate}
                    onChange={handleDateChange}
                    className="w-full border rounded-md px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700"
                />
            </div>
            <div className="flex-1">
                <label className="block text-xs font-medium text-gray-500 mb-1">Jump to Month</label>
                <input
                    type="month"
                    value={currentMonth}
                    onChange={handleMonthChange}
                    className="w-full border rounded-md px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700"
                />
            </div>
        </div>
    );
}
