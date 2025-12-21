import React from "react";
import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchChildren } from "@/lib/data";

export default async function ParentDashboard() {
    const session = await auth();
    const children = await fetchChildren(true);

    return (
        <AppLayout role="PARENT" familyChildren={children} user={session?.user}>
            <div className="space-y-6 animate-fade-in">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Parent Dashboard</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Welcome back, {session?.user?.name}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children.length > 0 ? (
                        children.map((child: any) => (
                            <div key={child.id} className="p-6 bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{child.name}</h3>
                                <div className="mt-2 space-y-1">
                                    <p className="text-sm text-gray-500">Gender: {child.gender || "N/A"}</p>
                                    <p className="text-sm text-gray-500">Diagnosis: {child.diagnosis || "None"}</p>
                                    <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${child.status === 'ACTIVE'
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                        }`}>
                                        {child.status}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full p-8 text-center bg-gray-50 dark:bg-neutral-900/50 rounded-xl border border-dashed border-gray-300 dark:border-neutral-700">
                            <p className="text-gray-500">No children linked to your account.</p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
