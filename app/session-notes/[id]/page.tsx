import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchSessionNote, fetchGoals } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import SessionNoteView from "@/components/notes/SessionNoteView";

export const metadata = {
    title: "Session Note | WBTC",
};

export default async function SessionNotePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const session = await auth();

    const [note, goals] = await Promise.all([
        fetchSessionNote(id),
        fetchGoals(),
    ]);

    if (!note) {
        notFound();
    }

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center gap-4">
                    <Link href="/session-notes">
                        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Session Note</h2>
                </div>

                <SessionNoteView note={note} goals={goals} />
            </div>
        </AppLayout>
    );
}
