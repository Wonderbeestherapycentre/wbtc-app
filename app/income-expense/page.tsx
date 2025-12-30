import React from "react";
import { fetchGlobalSessionHistory, fetchExpenses } from "@/lib/data";
import { auth } from "@/auth";
import ProfitLossClient from "./ProfitLossClient";

export default async function ProfitLossPage(props: { searchParams: Promise<any> }) {
    const searchParams = await props.searchParams;
    const session = await auth();
    const today = new Date();

    // Get month from query params or default to current month
    const selectedMonth = searchParams?.month || `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

    // Parse selected month to get start and end dates
    const [year, month] = selectedMonth.split('-').map(Number);
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0); // Last day of the month

    // Fetch Income (Session Fees) logic
    const incomeData = await fetchGlobalSessionHistory({
        startDate,
        endDate,
        attendance: "PRESENT",
        limit: 10000
    });

    const income = incomeData.summary?.totalFee ?? 0;

    // Fetch Expenses
    const expenses = await fetchExpenses(startDate, endDate);
    const totalExpenses = expenses.reduce((sum: number, e: any) => sum + parseFloat(e.amount), 0);

    const profit = income - totalExpenses;
    const isProfit = profit >= 0;

    // Generate month options for the last 12 months
    const monthOptions = [];
    for (let i = 0; i < 12; i++) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
        const label = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        monthOptions.push({ value, label });
    }

    return (
        <ProfitLossClient
            session={session}
            startDate={startDate}
            income={income}
            totalExpenses={totalExpenses}
            expenses={expenses}
            profit={profit}
            isProfit={isProfit}
            selectedMonth={selectedMonth}
            monthOptions={monthOptions}
        />
    );
}
