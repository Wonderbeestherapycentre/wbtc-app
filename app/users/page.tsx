import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { fetchUsers, fetchCategories } from "@/lib/data";
import UserList from "@/components/settings/UserList";
import { redirect } from "next/navigation";

export default async function UsersPage() {
    const session = await auth();
    // Cast user role from DB 
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (currentUserRole !== "ADMIN") redirect("/dashboard");

    const users = await fetchUsers();
    const categories = await fetchCategories();

    return (
        <AppLayout categories={categories} role={currentUserRole}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage system users, therapists, and parents</p>
                </div>

                <UserList
                    users={users as any}
                    currentUserRole={currentUserRole}
                    currentUserId={session?.user?.id || ""}
                />
            </div>
        </AppLayout>
    );
}
