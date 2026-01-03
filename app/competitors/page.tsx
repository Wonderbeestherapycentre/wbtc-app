import Link from "next/link";
import { ArrowLeft, Check, Minus, Search, Trophy } from "lucide-react";

export default function CompetitorsPage() {
    const competitors = [
        {
            name: "Wonderbees",
            focus: "Comprehensive Rehab",
            scheduling: true,
            homeProgram: "Advanced (Scoring)",
            financials: "End-to-End",
            parentPortal: "High Touch",
            highlight: true
        },
        {
            name: "Halemind",
            focus: "General EMR",
            scheduling: true,
            homeProgram: "Basic",
            financials: "Billing focus",
            parentPortal: "Standard",
        },
        {
            name: "WebPT",
            focus: "Physical Therapy",
            scheduling: true,
            homeProgram: "Optional Add-on",
            financials: "Insurance-heavy",
            parentPortal: "Clinical",
        },
        {
            name: "Carepatron",
            focus: "Multi-Specialty",
            scheduling: true,
            homeProgram: "Standard Tasks",
            financials: "Payment focused",
            parentPortal: "Standard",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
            <div className="max-w-5xl mx-auto">
                <Link href="/docs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to Docs
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Market Comparison
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        See how Wonderbees stacks up against leading therapy management platforms in India and globally.
                    </p>
                </div>

                {/* Feature Comparison Table */}
                <div className="glass-card rounded-3xl overflow-hidden mb-16">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-800/50">
                                    <th className="p-6 font-bold">Feature</th>
                                    {competitors.map(c => (
                                        <th key={c.name} className={`p-6 font-bold ${c.highlight ? 'text-blue-600' : ''}`}>
                                            {c.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-900">
                                <tr>
                                    <td className="p-6 font-medium">Core Focus</td>
                                    {competitors.map(c => (
                                        <td key={c.name} className="p-6 text-sm text-gray-500">{c.focus}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">Scheduling</td>
                                    {competitors.map(c => (
                                        <td key={c.name} className="p-6">
                                            <Check className="text-green-500" size={18} />
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">Home Program</td>
                                    {competitors.map(c => (
                                        <td key={c.name} className={`p-6 text-sm ${c.highlight ? 'font-bold text-blue-600' : 'text-gray-500'}`}>
                                            {c.homeProgram}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">Financials</td>
                                    {competitors.map(c => (
                                        <td key={c.name} className="p-6 text-sm text-gray-500">{c.financials}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">Parent Portal</td>
                                    {competitors.map(c => (
                                        <td key={c.name} className="p-6 text-sm text-gray-500">{c.parentPortal}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Differentiation Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Superior Home Care</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our unique 0-10 support scoring system for home programs provides deeper clinical insight than generic "task completed" checkboxes.
                        </p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                            <Search size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Therapy-Specific UI</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Built specifically for OT, ST, and Rehab specialists, not adapted from general practitioner software.
                        </p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Localized for India</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Optimized for local center workflows, staffing models, and financial tracking needs.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm">
                        Interested in a detailed breakdown against a specific platform? <Link href="/" className="text-blue-600 hover:underline">Connect with our team</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
