import { fetchSessionNotes, fetchChildren, fetchTherapies, fetchGoals, fetchUsers } from "@/lib/data";
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
    const childrenList = await fetchChildren(true);
    const therapies = await fetchTherapies(true);
    const goals = await fetchGoals();

    // Fetch current user's full data to get specialization
    let currentUserSpecialization = null;
    if (session?.user?.id) {
        const users = await fetchUsers();
        const currentUser = users.find((u: any) => u.id === session.user.id);
        currentUserSpecialization = currentUser?.specialization;
    }

    // Map data for modal
    const childrenOptions = childrenList.map((c: any) => ({
        id: c.id,
        name: c.name,
        caseNumber: c.caseNumber,
        assignedTherapies: c.therapyTypes?.map((t: any) => t.therapyId) || []
    }));
    const therapyOptions = therapies.map((t: any) => ({ id: t.id, name: t.name }));

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Session Notes</h2>
                    </div>
                </div>

                <SessionNotesClient
                    initialNotes={notes}
                    childrenList={childrenOptions}
                    therapies={therapyOptions}
                    goals={goals}
                    role={role}
                    therapistSpecialization={currentUserSpecialization}
                />
            </div>
        </AppLayout>
    );
}
