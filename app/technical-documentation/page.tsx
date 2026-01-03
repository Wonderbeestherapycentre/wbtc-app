import Link from "next/link";
import { ArrowLeft, Cpu, Database, FolderTree, Key, Layout, Palette, Settings } from "lucide-react";

export default function TechnicalDocumentationPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/docs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to Docs
                </Link>

                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Technical Documentation
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
                    Detailed overview of the Wonderbees Therapy Centre App architecture and tech stack.
                </p>

                <div className="space-y-12">
                    {/* Tech Stack */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Cpu className="text-blue-600" />
                            <h2 className="text-2xl font-bold">Tech Stack</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: "Next.js 15", desc: "Framework" },
                                { name: "PostgreSQL", desc: "Database" },
                                { name: "Drizzle ORM", desc: "ORM" },
                                { name: "NextAuth.js", desc: "Security" },
                                { name: "Tailwind CSS", desc: "Styling" },
                                { name: "Zod", desc: "Validation" },
                                { name: "Lucide", desc: "Icons" },
                                { name: "Vercel", desc: "Hosting" }
                            ].map((item) => (
                                <div key={item.name} className="glass-card p-4 rounded-xl">
                                    <div className="font-semibold">{item.name}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Project Structure */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <FolderTree className="text-indigo-600" />
                            <h2 className="text-2xl font-bold">Project Structure</h2>
                        </div>
                        <pre className="glass-card p-6 rounded-2xl overflow-x-auto text-sm font-mono leading-relaxed">
                            {`├── app/                  # Next.js App Router (Pages & API)
├── components/           # UI Components
│   ├── dashboard/        # Role-specific dashboards
│   ├── notes/            # Session notes components
│   └── ...
├── lib/                  # Backend & Utility logic
│   ├── actions.ts        # Server Actions (CRUD operations)
│   ├── data.ts           # Data fetching functions
│   ├── db/               # Database connection & schema
│   └── validations/      # Zod validation schemas
├── scripts/              # Maintenance & Utility scripts
├── auth.ts               # NextAuth configuration
├── auth.config.ts        # Shared Auth configuration
└── middleware.ts         # Route protection logic`}
                        </pre>
                    </section>

                    {/* Database Schema */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="text-blue-600" />
                            <h2 className="text-2xl font-bold">Data Architecture</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { table: "users", desc: "User accounts with role (ADMIN, THERAPIST, PARENT, ATTENDER)" },
                                { table: "children", desc: "Child profiles with assigned therapists and therapies" },
                                { table: "sessions", desc: "Scheduled therapy sessions with attendance tracking" },
                                { table: "session_notes", desc: "Detailed therapy session documentation" },
                                { table: "home_programs", desc: "Parent task assignments with scoring system" },
                                { table: "goals", desc: "Therapy goals and objectives tracking" },
                                { table: "expenses", desc: "Centre financial tracking (rent, salaries, etc.)" }
                            ].map((item) => (
                                <div key={item.table} className="flex items-start gap-4 p-4 glass-card rounded-xl">
                                    <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-mono font-bold">
                                        {item.table}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Key className="text-indigo-600" />
                            <h2 className="text-2xl font-bold">Authentication & Security</h2>
                        </div>
                        <div className="glass-card p-6 rounded-2xl space-y-4">
                            <p className="text-gray-600 dark:text-gray-300">
                                The application implements a robust RBAC (Role-Based Access Control) system using NextAuth.js.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li>Only <strong>ACTIVE</strong> users can log in</li>
                                <li>Session invalidation on user status change</li>
                                <li>Protected server actions with role verification</li>
                                <li>Middleware-level route protection</li>
                            </ul>
                        </div>
                    </section>

                    {/* Key Modules */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Settings className="text-blue-600" />
                            <h2 className="text-2xl font-bold">Core Modules</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Scheduling", desc: "Advanced calendar with conflict detection and bulk monthly generation." },
                                { title: "Attendance", desc: "Digital tracking for Present, Absent, and Excused sessions." },
                                { title: "Home Programs", desc: "Interactive task lists with 0-10 scoring for parents." },
                                { title: "Financials", desc: "Comprehensive fee management and expense tracking." }
                            ].map((item) => (
                                <div key={item.title} className="p-4 glass-card rounded-xl">
                                    <h3 className="font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
