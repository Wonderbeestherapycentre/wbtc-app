"use client";

import { deleteExpense, updateExpense } from "@/lib/actions";
import { Trash2, Eye, Pencil } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import MonthFilter from "./MonthFilter";
import AddExpenseButton from "./AddExpenseButton";

type ExpensesListProps = {
    expenses: any[];
    selectedMonth: string;
    monthOptions: { value: string; label: string }[];
    onEdit: (expense: any) => void;
    onAdd: () => void;
};

export default function ExpensesList({ expenses, selectedMonth, monthOptions, onEdit, onAdd }: ExpensesListProps) {
    const [viewExpense, setViewExpense] = useState<any>(null);
    const [currentMonth, setCurrentMonth] = useState(selectedMonth);

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMonth = e.target.value;
        setCurrentMonth(newMonth);
        // Submit the form to navigate to the new month
        const form = e.currentTarget.form;
        if (form) {
            // Create a hidden input for the month value
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'month';
            input.value = newMonth;
            form.appendChild(input);
            form.submit();
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this expense?")) return;
        const res = await deleteExpense(id);
        if (res?.message === "Expense deleted") {
            toast.success("Expense deleted successfully");
        } else {
            toast.error("Failed to delete expense");
        }
    };


    return (
        <>
            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Expense History</h3>
                    <form className="flex items-center gap-2">
                        {/* <label className="text-xs font-medium text-gray-500">Jump to Month:</label>
                        <MonthFilter selectedMonth={selectedMonth} monthOptions={monthOptions} /> */}
                        <div className="flex-1">
                            <label className="block text-xs font-medium text-gray-500 mb-1">Jump to Month</label>
                            <input
                                type="month"
                                value={currentMonth}
                                onChange={handleMonthChange}
                                className="w-full border rounded-md px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700"
                            />
                        </div>
                    </form>
                    <AddExpenseButton onOpenCart={onAdd} />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-neutral-800/50">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {expenses.map((expense) => (
                                <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                    <td className="px-6 py-4 text-sm text-gray-500">{new Date(expense.date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                                            {expense.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-red-600">-₹{parseFloat(expense.amount).toLocaleString()}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => setViewExpense(expense)}
                                                className="text-gray-400 hover:text-blue-500 transition-colors p-1"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => onEdit(expense)}
                                                className="text-gray-400 hover:text-green-500 transition-colors p-1"
                                                title="Edit"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(expense.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {expenses.length === 0 && (
                        <div className="p-10 text-center text-gray-500 text-sm">No expenses recorded for this period.</div>
                    )}
                </div>
            </div>

            {/* View Modal */}
            {viewExpense && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setViewExpense(null)}>
                    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-lg font-semibold mb-4">Expense Details</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-gray-500">Date</label>
                                <p className="font-medium">{new Date(viewExpense.date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Category</label>
                                <p className="font-medium">{viewExpense.category}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Amount</label>
                                <p className="font-medium text-red-600">₹{parseFloat(viewExpense.amount).toLocaleString()}</p>
                            </div>
                            {viewExpense.description && (
                                <div>
                                    <label className="text-xs text-gray-500">Description</label>
                                    <p className="font-medium">{viewExpense.description}</p>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setViewExpense(null)}
                            className="mt-6 w-full bg-gray-900 text-white rounded-lg py-2 hover:bg-gray-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}
