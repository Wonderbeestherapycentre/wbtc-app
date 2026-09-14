import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { fetchUser, fetchChildren, fetchTherapies } from "@/lib/data";
import UserForm from "@/components/UserForm";

export const metadata = {
    title: "Edit User | WBTC Settings",
};

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER") || "PARENT";
    const { id } = await params;

    if (currentUserRole !== "ADMIN" && session?.user?.id !== id) redirect("/dashboard");

    const [userToEdit, children, therapies] = await Promise.all([
        fetchUser(id),
        fetchChildren(true),
        fetchTherapies(true),
    ]);

    if (!userToEdit) notFound();

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="animate-fade-in pb-10">
                <UserForm
                    user={userToEdit as any}
                    currentUserRole={currentUserRole}
                    allChildren={children as any}
                    therapies={therapies as any}
                />
            </div>
        </AppLayout>
    );
}
