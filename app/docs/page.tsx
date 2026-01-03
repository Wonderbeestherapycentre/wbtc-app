import Link from "next/link";
import NextImage from "next/image";
import logo from "../assets/logo.jpeg";

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <NextImage
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-lg"
                    />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Documentation
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Link href="/technical-documentation" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all">
                        <h2 className="text-xl font-semibold mb-2">Technical Documentation</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            In-depth technical details about the system architecture, database schema, and development workflows.
                        </p>
                    </Link>

                    <Link href="/user-flow" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all">
                        <h2 className="text-xl font-semibold mb-2">User Flow</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Visualizing the journey of different user roles within the application.
                        </p>
                    </Link>

                    <Link href="/pricing" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all">
                        <h2 className="text-xl font-semibold mb-2">Pricing</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Details about our service plans and fee structure.
                        </p>
                    </Link>

                    <Link href="/admin-documentation" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all">
                        <h2 className="text-xl font-semibold mb-2">Admin Guide</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Specialized documentation for system administrators and center managers.
                        </p>
                    </Link>

                    <Link href="/competitors" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all">
                        <h2 className="text-xl font-semibold mb-2">Competitors</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Market analysis and comparison between Wonderbees and other therapy platforms.
                        </p>
                    </Link>

                    <Link href="/" className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all border-dashed border-2 border-gray-200 dark:border-neutral-800">
                        <h2 className="text-xl font-semibold mb-2">Go to App</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Ready to start? Sign in to your account.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
