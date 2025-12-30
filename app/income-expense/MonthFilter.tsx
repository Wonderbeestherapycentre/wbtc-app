"use client";

export default function MonthFilter({ selectedMonth, monthOptions }: {
    selectedMonth: string;
    monthOptions: { value: string; label: string }[]
}) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const form = e.currentTarget.form;
        if (form) {
            form.submit();
        }
    };

    return (
        <select
            name="month"
            defaultValue={selectedMonth}
            className="w-full border rounded-md px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800"
            onChange={handleChange}
        >
            {monthOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );
}
