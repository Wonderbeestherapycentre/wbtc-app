import React from "react";
import AppLayout from "@/components/AppLayout";
import { fetchChildren, fetchGlobalSessionHistory, fetchExpenses } from "@/lib/data";
import { auth } from "@/auth";
import { IndianRupee, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import AddExpenseForm from "./AddExpenseForm";
import ExpensesList from "./ExpensesList";
import { formatDateToLocal } from "@/lib/utils";

export default async function ProfitLossPage(props: { searchParams: Promise<any> }) {
    const searchParams = await props.searchParams;
    const session = await auth();
    const today = new Date();
    // Default to current month if no dates provided
    const startDateStr = searchParams?.startDate || formatDateToLocal(new Date(today.getFullYear(), today.getMonth(), 1));
    const endDateStr = searchParams?.endDate || formatDateToLocal(new Date(today.getFullYear(), today.getMonth() + 1, 0));

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Fetch Income (Session Fees) logic
    // We reuse fetchGlobalSessionHistory to reuse the fee calculation logic
    // But we need to fetch ALL for this period to calc total.
    // fetchGlobalSessionHistory calculates 'totalFee' in summary.
    const incomeData = await fetchGlobalSessionHistory({
        startDate,
        endDate,
        attendance: "PRESENT", // Income only from PRESENT sessions? Or all scheduled? 
        // Business rule: Usually ACTUAL income is from PRESENT sessions.
        // Let's assume Present = Billable.
        limit: 10000 // High limit to get accurate summary
    });

    const income = incomeData.summary?.totalFee ?? 0;

    // Fetch Expenses
    const expenses = await fetchExpenses(startDate, endDate);
    const totalExpenses = expenses.reduce((sum: number, e: any) => sum + parseFloat(e.amount), 0);

    const profit = income - totalExpenses;
    const isProfit = profit >= 0;

    return (
        <AppLayout familyChildren={[]} role="ADMIN" user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profit & Loss</h2>
                        <p className="text-gray-500 text-sm">Financial overview for {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Filter Controls (Basic Date) */}
                <form className="flex gap-4 items-end bg-white dark:bg-neutral-900 p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Start Date</label>
                        <input type="date" name="startDate" defaultValue={startDateStr} className="border rounded-md px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">End Date</label>
                        <input type="date" name="endDate" defaultValue={endDateStr} className="border rounded-md px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-800" />
                    </div>
                    <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">Filter</button>
                </form>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-green-100 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-gray-500">Total Income</p>
                            <div className="p-2 bg-green-50 rounded-lg"><TrendingUp className="w-4 h-4 text-green-600" /></div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">₹{income.toLocaleString()}</p>
                        <p className="text-xs text-green-600 mt-1">From Present Sessions</p>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-red-100 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-gray-500">Total Expenses</p>
                            <div className="p-2 bg-red-50 rounded-lg"><TrendingDown className="w-4 h-4 text-red-600" /></div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">₹{totalExpenses.toLocaleString()}</p>
                        <p className="text-xs text-red-600 mt-1">{expenses.length} Records</p>
                    </div>

                    <div className={`bg-white dark:bg-neutral-900 p-6 rounded-xl border shadow-sm ${isProfit ? 'border-blue-100' : 'border-orange-100'}`}>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-gray-500">Net Profit</p>
                            <div className={`p-2 rounded-lg ${isProfit ? 'bg-blue-50' : 'bg-orange-50'}`}><DollarSign className={`w-4 h-4 ${isProfit ? 'text-blue-600' : 'text-orange-600'}`} /></div>
                        </div>
                        <p className={`text-3xl font-bold ${isProfit ? 'text-blue-600' : 'text-orange-600'}`}>
                            {isProfit ? '+' : ''}₹{profit.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Income - Expenses</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add Expense Form */}
                    <div className="lg:col-span-1">
                        <AddExpenseForm />
                    </div>

                    {/* Expenses List */}
                    <div className="lg:col-span-2">
                        <ExpensesList expenses={expenses} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
