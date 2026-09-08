import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
    fetchSessionNote,
    fetchChildren,
    fetchTherapies,
    fetchGoals,
    fetchUsers,
} from "@/lib/data";
import { auth } from "@/auth";
import AppLayout from "@/components/AppLayout";
import SessionNoteForm from "@/components/notes/SessionNoteForm";

export const metadata = {
    title: "Edit Session Note | WBTC",
};

export default async function EditSessionNotePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (role === "PARENT") {
        redirect("/session-notes");
    }

    const [note, childrenList, therapies, goals] = await Promise.all([
        fetchSessionNote(id),
        fetchChildren(true),
        fetchTherapies(true),
        fetchGoals(),
    ]);

    if (!note) {
        notFound();
    }

    let currentUserSpecialization = null;
    if (session?.user?.id) {
        const users = await fetchUsers();
        const currentUser = users.find((u: any) => u.id === session.user.id);
        currentUserSpecialization = currentUser?.specialization ?? null;
    }

    const childrenOptions = childrenList
        .filter((c: any) => c.status === "ACTIVE" || c.id === (note as any).childId)
        .map((c: any) => ({
        id: c.id,
        name: c.name,
        caseNumber: c.caseNumber,
        assignedTherapies: c.therapyTypes?.map((t: any) => t.therapyId) || [],
    }));
    const therapyOptions = therapies.map((t: any) => ({ id: t.id, name: t.name }));

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex items-center gap-4">
                    <Link href="/session-notes">
                        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Session Note</h2>
                </div>

                <SessionNoteForm
                    mode="edit"
                    note={note}
                    childrenList={childrenOptions}
                    therapies={therapyOptions}
                    goals={goals}
                    therapistSpecialization={currentUserSpecialization}
                />
            </div>
        </AppLayout>
    );
}
