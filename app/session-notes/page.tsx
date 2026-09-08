import { fetchSessionNotes } from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import SessionNotesClient from "@/components/notes/SessionNotesClient";

export const metadata = {
    title: "Session Notes | WBTC",
};

export default async function SessionNotesPage() {
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    const notes = await fetchSessionNotes();

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Session Notes</h2>
                    </div>
                </div>

                <SessionNotesClient initialNotes={notes} role={role} />
            </div>
        </AppLayout>
    );
}
