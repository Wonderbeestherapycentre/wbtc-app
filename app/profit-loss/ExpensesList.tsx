"use client";

import { deleteExpense } from "@/lib/actions";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function ExpensesList({ expenses }: { expenses: any[] }) {
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        const res = await deleteExpense(id);
        if (res?.message === "Expense deleted") {
            toast.success("Deleted");
        } else {
            toast.error("Failed");
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="font-semibold text-lg">Expense History</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-neutral-800/50">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/50">
                                <td className="px-6 py-4 text-sm text-gray-500">{new Date(expense.date).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                    {expense.title}
                                    <div className="text-xs text-gray-400 font-normal">{expense.description}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                                        {expense.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-red-600">-₹{parseFloat(expense.amount).toLocaleString()}</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => handleDelete(expense.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
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
    );
}
