import React from "react";
import AppLayout from "@/components/AppLayout";
import { fetchChildren } from "@/lib/data";
import { auth } from "@/auth";
import { Baby, Users } from "lucide-react";

export default async function AdminDashboard() {
    const session = await auth();
    const children = await fetchChildren(true);

    const activeChildCount = children.filter(c => c.status === "ACTIVE").length;
    const inactiveChildCount = children.filter(c => c.status === "INACTIVE").length;

    return (
        <AppLayout familyChildren={children} role="ADMIN">
            <div className="space-y-6 animate-fade-in">
                {/* Header Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Welcome back, {session?.user?.name}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Children</p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{activeChildCount}</p>
                            </div>
                            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-xl">
                                <Baby className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Inactive Children</p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{inactiveChildCount}</p>
                            </div>
                            <div className="p-3 bg-gray-100 dark:bg-gray-900/20 rounded-xl">
                                <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
