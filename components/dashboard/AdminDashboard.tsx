import React from "react";
import AppLayout from "@/components/AppLayout";
import { fetchChildren, fetchDashboardStats } from "@/lib/data";
import { auth } from "@/auth";
import { Baby, Users, Calendar, Activity } from "lucide-react";
import SessionTrendChart from "./SessionTrendChart";
import AttendanceChart from "./AttendanceChart";

export default async function AdminDashboard({ searchParams }: { searchParams: any }) {
    const session = await auth();
    const [children, stats] = await Promise.all([
        fetchChildren(true),
        fetchDashboardStats()
    ]);

    const inactiveChildCount = children.filter((c: any) => c.status === "INACTIVE").length;

    // Use fetched stats or fallback
    const activeChildCount = stats?.counts.children || children.filter((c: any) => c.status === "ACTIVE").length;
    const activeTherapistCount = stats?.counts.therapists || 0;
    const todaySessions = stats?.counts.todaySessions || 0;
    const trendData = stats?.charts.trend || [];
    const attendanceData = stats?.charts.attendance || [];

    return (
        <AppLayout familyChildren={children} role="ADMIN" user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                {/* Header Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Welcome back, {session?.user?.name}
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Active Children */}
                    <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Children</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{activeChildCount}</p>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Baby className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </div>

                    {/* Active Therapists */}
                    <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Staff</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{activeTherapistCount}</p>
                            </div>
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                        </div>
                    </div>

                    {/* Today's Sessions */}
                    <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Sessions Today</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{todaySessions}</p>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                    </div>

                    {/* Inactive Children (Maybe less important, can be replaced or kept) */}
                    <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Inactive Children</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{inactiveChildCount}</p>
                            </div>
                            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <Activity className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Weekly Trend - Takes up 2 cols */}
                    <div className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6">Weekly Session Trend</h3>
                        <SessionTrendChart data={trendData} />
                    </div>

                    {/* Attendance Breakdown - Takes up 1 col */}
                    <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6">Attendance (Last 30 Days)</h3>
                        <AttendanceChart data={attendanceData} />
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
