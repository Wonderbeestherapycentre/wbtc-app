import { fetchChildFeeDetails, fetchChildren } from "@/lib/data";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";

export default async function ChildFeePage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session) return <div>Please sign in</div>;

    const { id } = await params;
    const data = await fetchChildFeeDetails(id);

    if (!data) {
        notFound();
    }

    const { child, summary, sessions } = data;

    // Fetch data for AppLayout
    const activeChildren = await fetchChildren();

    return (
        <AppLayout familyChildren={activeChildren} role={session.user.role as any} user={session.user}>
            <div className="container mx-auto py-6 space-y-8 animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{child.name}</h1>
                        <p className="text-gray-500">Case No: {child.caseNumber || "N/A"} • Status: <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${child.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{child.status}</span></p>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Total Fees</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-gray-900">₹{summary.totalFee.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Total Sessions</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-gray-900">{summary.totalSessions}</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Present</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-green-600">{summary.present}</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Absent / Excused</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-bold text-red-600">{summary.absent}</span>
                            <span className="ml-2 text-sm text-gray-500">/ {summary.excused}</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">Session History</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Therapy</th>
                                    <th className="px-6 py-3">Therapist</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3 text-right">Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {sessions.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                            No sessions found.
                                        </td>
                                    </tr>
                                ) : (
                                    sessions.map((session) => (
                                        <tr key={session.id} className="hover:bg-gray-50/50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {new Date(session.date).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                            <td className="px-6 py-4">{session.therapy.name}</td>
                                            <td className="px-6 py-4">{session.therapist.name}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                                    ${session.attendance === 'PRESENT' ? 'bg-green-50 text-green-700' :
                                                        session.attendance === 'ABSENT' ? 'bg-red-50 text-red-700' :
                                                            session.attendance === 'EXCUSED' ? 'bg-yellow-50 text-yellow-700' :
                                                                'bg-gray-100 text-gray-600'}`}>
                                                    {session.attendance || session.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-gray-900">
                                                {session.attendance === 'PRESENT' ? `₹${session.fee.toLocaleString()}` : <span className="text-gray-400">-</span>}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
