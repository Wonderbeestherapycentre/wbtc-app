"use client";

import React, { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { IndianRupee, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import ExpensesList from "./ExpensesList";
import Cart from "./Cart";

interface ProfitLossClientProps {
    session: any;
    startDate: Date;
    income: number;
    totalExpenses: number;
    expenses: any[];
    profit: number;
    isProfit: boolean;
    selectedMonth: string;
    monthOptions: { value: string; label: string }[];
}

export default function ProfitLossClient({
    session,
    startDate,
    income,
    totalExpenses,
    expenses,
    profit,
    isProfit,
    selectedMonth,
    monthOptions
}: ProfitLossClientProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [editingExpense, setEditingExpense] = useState<any>(null);

    const handleEdit = (expense: any) => {
        setEditingExpense(expense);
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
        setEditingExpense(null);
    };

    return (
        <AppLayout familyChildren={[]} role="ADMIN" user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Income & Expense</h2>
                        <p className="text-gray-500 text-sm">Financial overview for {startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </div>
                </div>

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

                <div className="grid grid-cols-1 gap-8">
                    {/* Expenses List */}
                    <div>
                        <ExpensesList
                            expenses={expenses}
                            selectedMonth={selectedMonth}
                            monthOptions={monthOptions}
                            onEdit={handleEdit}
                            onAdd={() => {
                                setEditingExpense(null);
                                setIsCartOpen(true);
                            }}
                        />
                    </div>
                </div>

                {/* Global Add Expense Button */}

            </div>

            <Cart
                isOpen={isCartOpen}
                onClose={handleCloseCart}
                expenseToEdit={editingExpense}
                onSuccess={handleCloseCart}
            />
        </AppLayout>
    );
}
