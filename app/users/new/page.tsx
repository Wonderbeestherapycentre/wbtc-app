import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { fetchChildren, fetchTherapies } from "@/lib/data";
import UserForm from "@/components/UserForm";

export const metadata = {
    title: "New User | WBTC Settings",
};

export default async function NewUserPage() {
    const session = await auth();
    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER") || "PARENT";

    if (currentUserRole !== "ADMIN") redirect("/dashboard");

    const [children, therapies] = await Promise.all([
        fetchChildren(true),
        fetchTherapies(true),
    ]);

    return (
        <AppLayout role={session?.user?.role as any} user={session?.user}>
            <div className="animate-fade-in pb-10">
                <UserForm
                    currentUserRole={currentUserRole}
                    allChildren={children as any}
                    therapies={therapies as any}
                />
            </div>
        </AppLayout>
    );
}
