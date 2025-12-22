import { fetchUser } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, User, Users } from "lucide-react";
import Link from "next/link";
export const metadata = {
    title: "User Details | WBTC Settings",
};

import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";

export default async function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    const { id } = await params;
    const user = await fetchUser(id);

    if (!user) {
        notFound();
    }

    return (
        <AppLayout role={session?.user?.role as any}>
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-10">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/users"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors text-gray-500"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                        <p className="text-gray-500 dark:text-gray-400 capitalize">{user.role.toLowerCase()} Profile</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Info Card */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="glass-card p-6 rounded-2xl">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-500" />
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 uppercase tracking-wide">Email Address</label>
                                    <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        {user.email}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 uppercase tracking-wide">Phone Number</label>
                                    <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        {user.mobile1 || "N/A"}
                                    </div>
                                </div>
                                {user.mobile2 && (
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-500 uppercase tracking-wide">Alternate Phone</label>
                                        <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                            <Phone className="w-4 h-4 text-gray-400" />
                                            {user.mobile2}
                                        </div>
                                    </div>
                                )}
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-xs text-gray-500 uppercase tracking-wide">Address</label>
                                    <div className="flex items-start gap-2 text-gray-900 dark:text-white font-medium">
                                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                        {user.address || "N/A"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Work/Role Specific Info */}
                        {(user.role === "THERAPIST" || user.role === "ADMIN") && (
                            <div className="glass-card p-6 rounded-2xl">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-purple-500" />
                                    Professional Details
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-500 uppercase tracking-wide">Qualification</label>
                                        <p className="text-gray-900 dark:text-white font-medium">{user.qualification || "N/A"}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-500 uppercase tracking-wide">Specialization</label>
                                        <p className="text-gray-900 dark:text-white font-medium">{user.specialization || "N/A"}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-500 uppercase tracking-wide">Date of Joining</label>
                                        <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            {user.doj ? new Date(user.doj).toLocaleDateString() : "N/A"}
                                        </div>
                                    </div>
                                    {user.endDate && (
                                        <div className="space-y-1">
                                            <label className="text-xs text-gray-500 uppercase tracking-wide">End Date</label>
                                            <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                {new Date(user.endDate).toLocaleDateString()}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Parent Specific Info - Children */}
                        {user.role === "PARENT" && (
                            <div className="glass-card p-6 rounded-2xl">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-500" />
                                    Assigned Children
                                </h2>
                                {user.children && user.children.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {user.children.map((child: any) => (
                                            <div key={child.id} className="p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                                        {child.name[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900 dark:text-white">{child.name}</p>
                                                        <p className="text-xs text-gray-500">{child.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">No children assigned.</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar Card (Quick Stats or Actions) */}
                    <div className="space-y-6">
                        <div className="glass-card p-6 rounded-2xl">
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-4"
                                    style={{ backgroundColor: '#3b82f6' }} // You might want to pass color from fetchUser if available
                                >
                                    {user.name[0]}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                                <p className="text-blue-600 dark:text-blue-400 font-medium">{user.role}</p>
                                <div className="mt-6 w-full pt-6 border-t border-gray-100 dark:border-neutral-800 flex justify-between text-sm">
                                    <span className="text-gray-500">Status</span>
                                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
