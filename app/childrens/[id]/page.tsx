import { notFound } from "next/navigation";
import { fetchChild } from "@/lib/data";

import { ArrowLeft, Calendar, User, Activity, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { auth } from "@/auth";

interface ChildPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ChildPage({ params }: ChildPageProps) {
    const { id } = await params;
    const session = await auth();

    const child = await fetchChild(id);

    if (!child) {
        notFound();
    }

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
            <div className="glass-card rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate" title={child.diagnosis || ""}>
                            {child.diagnosis || "Not set"}
                        </p>
                    </div>
                </div>
                {session?.user?.role !== "THERAPIST" && (
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Parent</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                {child.parent?.name || "Not set"}
                            </p>
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Total Therapies</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {child.therapyTypes?.length || 0}
                        </p>
                    </div>
                </div>
            </div>

            {/* Parent Details - Hidden for Therapists */}
            {child.parent && session?.user?.role !== "THERAPIST" && (
                <div className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        <User className="w-5 h-5 text-indigo-600" />
                        Parent Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                                <User className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium uppercase">Name</p>
                                <p className="text-sm font-semibold">{child.parent.name}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Mail className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium uppercase">Email</p>
                                <p className="text-sm font-semibold">{child.parent.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <Phone className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium uppercase">Mobile</p>
                                <p className="text-sm font-semibold">
                                    {child.parent.mobile1}
                                    {child.parent.mobile2 ? ` / ${child.parent.mobile2}` : ""}
                                </p>
                            </div>
                        </div>
                        {child.parent.address && (
                            <div className="flex items-center gap-3 md:col-span-2 lg:col-span-3">
                                <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                    <MapPin className="w-4 h-4 text-amber-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-gray-500 font-medium uppercase">Address</p>
                                    <p className="text-sm font-semibold">{child.parent.address}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Assigned Therapies Detailed List */}
            {child.therapyTypes && child.therapyTypes.length > 0 && (
                <div className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-4">
                        <Activity className="w-5 h-5 text-emerald-600" />
                        Assigned Therapies Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {child.therapyTypes.map((tt: any) => (
                            <div key={tt.therapyId} className="relative p-6 rounded-2xl bg-white/50 dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-200">
                                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Therapy</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">{tt.therapy.name}</p>
                                    </div>
                                    <div className="pt-4 border-t border-gray-50 dark:border-neutral-800">
                                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Assigned Therapist</p>
                                        {tt.therapist ? (
                                            <div className="space-y-2">
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">{tt.therapist.name}</p>
                                                <div className="flex flex-wrap gap-2 text-xs">
                                                    {tt.therapist.specialization && (
                                                        <span className="px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
                                                            {tt.therapist.specialization}
                                                        </span>
                                                    )}
                                                    {tt.therapist.qualification && (
                                                        <span className="px-2 py-1 rounded bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium">
                                                            {tt.therapist.qualification}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-sm italic text-gray-400">No therapist assigned</p>
                                        )}
                                    </div>
                                    {session?.user?.role === "ADMIN" && (
                                        <div className="pt-4 border-t border-gray-50 dark:border-neutral-800">
                                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Fee Structure</p>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">Original Fee:</span>
                                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                        ₹{tt.therapy.chargePerSession || 'N/A'}
                                                    </span>
                                                </div>
                                                {tt.feePerSession && tt.feePerSession !== tt.therapy.chargePerSession && (
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs text-gray-500 dark:text-gray-400">Custom Fee:</span>
                                                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                                            ₹{tt.feePerSession}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-neutral-700">
                                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Payable:</span>
                                                    <span className="text-base font-bold text-gray-900 dark:text-white">
                                                        ₹{tt.feePerSession || tt.therapy.chargePerSession || 'N/A'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}
