"use client";

import { addExpense, updateExpense } from "@/lib/actions";
import { Loader2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type ExpenseFormProps = {
    expense?: any; // If provided, we are in Edit mode
    onClose: () => void;
    onSuccess?: () => void; // Callback to clear selection or close cart
};

export default function ExpenseForm({ expense, onClose, onSuccess }: ExpenseFormProps) {
    const [loading, setLoading] = useState(false);

    // Key to reset form when expense changes (switching from edit to add or between edits)
    const formKey = expense ? expense.id : 'new';

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        let res;

        if (expense) {
            // Edit Mode
            res = await updateExpense(expense.id, formData);
        } else {
            // Add Mode
            res = await addExpense(formData);
        }

        if (res?.message === "Expense added" || res?.message === "Expense updated") {
            toast.success(res.message + " successfully");
            // Only reset if adding new, or just close
            if (!expense) {
                (document.getElementById("expense-form") as HTMLFormElement)?.reset();
            }
            if (onSuccess) onSuccess();
            onClose();
        } else {
            toast.error(res?.message || "Failed");
        }
        setLoading(false);
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">
                    {expense ? "Edit Expense" : "Add Expense"}
                </h3>
                {/* Only show close button if not inside the main flow or if needed */}
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            <form key={formKey} id="expense-form" action={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                    <select
                        name="category"
                        defaultValue={expense?.category || ""}
                        className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800"
                    >
                        <option value="">Select Category</option>
                        <option value="Staff Sal.">Staff Sal.</option>
                        <option value="Rent">Rent</option>
                        <option value="Elec. Bill.">Elec. Bill.</option>
                        <option value="Stat.">Stat.</option>
                        <option value="Ther. Mat.">Ther. Mat.</option>
                        <option value="Clean. Sup.">Clean. Sup.</option>
                        <option value="Celebr. Exp.">Celebr. Exp.</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                        <input
                            name="amount"
                            type="number"
                            step="0.01"
                            required
                            defaultValue={expense?.amount || ""}
                            placeholder="0.00"
                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                        <input
                            name="date"
                            type="date"
                            required
                            defaultValue={expense?.date ? new Date(expense.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
                            className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (Optional)</label>
                    <textarea
                        name="description"
                        rows={3}
                        defaultValue={expense?.description || ""}
                        className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800"
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-gray-900 text-white rounded-lg py-2 hover:bg-gray-800 disabled:opacity-50 flex justify-center items-center"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (expense ? "Update Expense" : "Add Expense")}
                    </button>
                </div>
            </form>
        </div>
    );
}
