import { notFound } from "next/navigation";
import { fetchChild, fetchExpenses, fetchStats, fetchCategories, fetchChildren } from "@/lib/data";
import ExpenseList from "@/components/ExpenseList";
import Pagination from "@/components/Pagination";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { ArrowLeft, TrendingUp, PiggyBank, Calendar, User, Activity } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

interface ChildPageProps {
    params: Promise<{
        id: string;
    }>;
    searchParams?: Promise<{
        page?: string;
    }>;
}

export default async function ChildPage({ params, searchParams }: ChildPageProps) {
    const { id } = await params;
    const resolvedSearchParams = await searchParams;
    const page = Number(resolvedSearchParams?.page) || 1;

    const child = await fetchChild(id);

    if (!child) {
        notFound();
    }

    // Fetch stats specific to this child
    const stats = await fetchStats(undefined, undefined, id);

    // Fetch expenses specific to this child
    const { data: expenses, meta } = await fetchExpenses(ITEMS_PER_PAGE, { childId: id }, page);

    // Fetch other data needed for ExpenseList
    const categories = await fetchCategories();
    const children = await fetchChildren();

    return (
        <div className="space-y-6 px-2 md:px-4 ">
            <div className="flex items-center gap-4">
                <Link href="/childrens">
                    <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                        <ArrowLeft className="h-4 w-4" />
                    </button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {child.name}
                    </h1>
                    <p className="text-muted-foreground text-sm text-gray-500">
                        View profile and financial details
                    </p>
                </div>
            </div>

            {/* Profile Overview */}
            <div className="glass-card rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Date of Birth</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {child.dob ? format(new Date(child.dob), "dd MMM yyyy") : "Not set"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Gender</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {child.gender || "Not set"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                        <Activity className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Diagnosis</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-[200px]" title={child.diagnosis || ""}>
                            {child.diagnosis || "Not set"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2">
                <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Paid Amount</h3>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-green-600">
                            ₹{stats.totalIncome.toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Due Amount</h3>
                        <PiggyBank className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-orange-600">
                            ₹{stats.totalDue.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions List */}
            <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Financial History</h3>
                <ExpenseList
                    expenses={expenses}
                    categories={categories}
                    familyChildren={children}
                    defaultChildId={id}
                />

                <Pagination currentPage={meta.page} totalPages={meta.totalPages} />
            </div>
        </div>
    );
}
