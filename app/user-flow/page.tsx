import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, UserPlus, Users, Zap } from "lucide-react";

export default function UserFlowPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/docs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to Docs
                </Link>

                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    User Flows
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
                    Visualizing the core journeys and role-based interactions within the platform.
                </p>

                <div className="space-y-16">
                    {/* Auth Flow */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="text-blue-600" />
                            <h2 className="text-2xl font-bold">Authentication & Security</h2>
                        </div>
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="text-center p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700 w-full md:w-32">
                                    <div className="text-xs font-bold text-blue-600 uppercase mb-1">User</div>
                                    <div className="text-sm">Access /dashboard</div>
                                </div>
                                <ArrowRight className="hidden md:block text-gray-300" />
                                <div className="text-center p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700 w-full md:w-40">
                                    <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Middleware</div>
                                    <div className="text-sm">Validate Session</div>
                                </div>
                                <ArrowRight className="hidden md:block text-gray-300" />
                                <div className="text-center p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700 w-full md:w-40">
                                    <div className="text-xs font-bold text-green-600 uppercase mb-1">Database</div>
                                    <div className="text-sm">Check Active Status</div>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                                <p className="text-sm text-blue-800 dark:text-blue-300">
                                    <strong>Note:</strong> Real-time status checks ensure that inactive users are logged out immediately, even if they have an active session token.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Admin Flow */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <UserPlus className="text-indigo-600" />
                            <h2 className="text-2xl font-bold">Admin: Onboarding Journey</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { step: 1, title: "Register Staff/Parents", desc: "Create accounts for therapists and parents." },
                                { step: 2, title: "Create Child Profile", desc: "Input child details and history." },
                                { step: 3, title: "Assign Resources", desc: "Link therapists and therapies to the child." },
                                { step: 4, title: "Schedule Sessions", desc: "Set up the recurring therapy timetable." }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 items-start glass-card p-6 rounded-2xl">
                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Role Dashboards */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-blue-600" />
                            <h2 className="text-2xl font-bold">Role-Based Experiences</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass-card p-6 rounded-2xl border-t-4 border-blue-600">
                                <h3 className="font-bold mb-4">Therapists</h3>
                                <ul className="space-y-3 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-blue-600" /> View Schedule</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-blue-600" /> Write Session Notes</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-blue-600" /> Set Goals</li>
                                </ul>
                            </div>
                            <div className="glass-card p-6 rounded-2xl border-t-4 border-indigo-600">
                                <h3 className="font-bold mb-4">Parents</h3>
                                <ul className="space-y-3 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-indigo-600" /> Track Child Progress</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-indigo-600" /> Home Program Submissions</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-indigo-600" /> View Attendance</li>
                                </ul>
                            </div>
                            <div className="glass-card p-6 rounded-2xl border-t-4 border-green-600">
                                <h3 className="font-bold mb-4">Attenders</h3>
                                <ul className="space-y-3 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-green-600" /> Mark Attendance</li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-green-600" /> View Daily Schedule</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
