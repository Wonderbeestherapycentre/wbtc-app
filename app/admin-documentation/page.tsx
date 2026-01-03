import Link from "next/link";
import { ArrowLeft, BookOpen, Database, DollarSign, Settings, Users, Wallet } from "lucide-react";

export default function AdminDocumentationPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/docs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to Docs
                </Link>

                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Admin Documentation
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
                    A comprehensive guide for system administrators to manage the Wonderbees Therapy Centre platform.
                </p>

                <div className="space-y-12">
                    {/* User Management */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-blue-600" />
                            <h2 className="text-2xl font-bold">User & Child Management</h2>
                        </div>
                        <div className="glass-card p-6 rounded-2xl space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2">Staff Onboarding</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Admins can register new Therapists and Attenders via the <strong>Settings {">"} User List</strong>.
                                        Ensure roles are assigned correctly to maintain system security.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Child Profiles</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Create child profiles and assign primary therapists. This linkage is crucial for automated session generation and note visibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Financial Operations */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="text-green-600" />
                            <h2 className="text-2xl font-bold">Financial Operations</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 glass-card rounded-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <Wallet className="text-blue-500" size={18} />
                                    <h3 className="font-semibold">Fee Management</h3>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Track child fees based on therapy sessions. The system calculates totals automatically. Admins can view payment histories and outstanding balances.
                                </p>
                            </div>
                            <div className="p-6 glass-card rounded-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="text-indigo-500" size={18} />
                                    <h3 className="font-semibold">Expense Tracking</h3>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Record center expenses like rent, electricity, and salaries. View consolidated Profit & Loss statements to monitor business health.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* System Settings */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="text-indigo-600" />
                            <h2 className="text-2xl font-bold">System Configuration</h2>
                        </div>
                        <div className="glass-card p-6 rounded-2xl">
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                                    <div>
                                        <h4 className="font-medium">Session Intervals</h4>
                                        <p className="text-sm text-gray-500">The default session length is 45 minutes. Schedules are optimized on this grid to prevent overlaps.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-600" />
                                    <div>
                                        <h4 className="font-medium">Security Policies</h4>
                                        <p className="text-sm text-gray-500">Inactivating a user profile immediately terminates all active sessions for that account.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Database Maintenance */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Database className="text-red-600" size={24} />
                            <h2 className="text-2xl font-bold">Database Maintenance</h2>
                        </div>
                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="font-semibold mb-2">Manual Backups</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Admins can perform a manual database backup at any time by running the following command in the terminal:
                            </p>
                            <div className="bg-gray-100 dark:bg-neutral-800 p-3 rounded-xl font-mono text-sm text-red-600 dark:text-red-400 mb-4">
                                npm run db:backup
                            </div>
                            <p className="text-xs text-gray-400">
                                Backups are stored in the <code>/backups</code> directory and are kept for a 7-day rolling period.
                            </p>
                        </div>
                    </section>

                    {/* Quick Support */}
                    <div className="bg-blue-600 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Need help with complex tasks?</h3>
                            <p className="text-blue-100 text-sm">Consult the technical team for database-level changes or API integrations.</p>
                        </div>
                        <Link href="/" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
