import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchUsers, fetchChildren, fetchTherapies } from "@/lib/data";
import UserList from "@/components/settings/UserList";
import { redirect } from "next/navigation";

export default async function UsersPage() {
    const session = await auth();
    // Cast user role from DB 
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER") || "PARENT";

    if (currentUserRole !== "ADMIN") redirect("/dashboard");

    const users = await fetchUsers();
    const children = await fetchChildren(true); // Fetch all children, including inactive for admin reference if needed
    const therapies = await fetchTherapies(true); // Fetch all therapies for specialization selection


    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-3 animate-fade-in pb-10">
                <UserList
                    users={users as any}
                    allChildren={children as any}
                    therapies={therapies as any}
                    currentUserRole={currentUserRole}
                    currentUserId={session?.user?.id || ""}
                />
            </div>
        </AppLayout>
    );
}
