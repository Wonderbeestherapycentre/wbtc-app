"use client";

import { addExpense } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AddExpenseForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        const res = await addExpense(formData);
        if (res?.message === "Expense added") {
            toast.success("Expense added successfully");
            // Reset form? Simple native reset works if we key it or ref it, 
            // but for now page reloads via revalidatePath so fields might persist.
            // Better to clear manually.
            (document.getElementById("add-expense-form") as HTMLFormElement)?.reset();
        } else {
            toast.error(res?.message || "Failed");
        }
        setLoading(false);
    };

    return (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm sticky top-6">
            <h3 className="font-semibold text-lg mb-4">Add Expense</h3>
            <form id="add-expense-form" action={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                    <input name="title" required placeholder="e.g. Office Rent" className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                        <input name="amount" type="number" step="0.01" required placeholder="0.00" className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                        <input name="date" type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                    <select name="category" className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800">
                        <option value="OTHER">Other</option>
                        <option value="SALARY">Salary</option>
                        <option value="RENT">Rent</option>
                        <option value="MAINTENANCE">Maintenance</option>
                        <option value="EQUIPMENT">Equipment</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (Optional)</label>
                    <textarea name="description" rows={3} className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800" />
                </div>

                <button
                    disabled={loading}
                    className="w-full bg-gray-900 text-white rounded-lg py-2.5 font-medium hover:bg-gray-800 flex justify-center items-center"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Add Expense"}
                </button>
            </form>
        </div>
    );
}
