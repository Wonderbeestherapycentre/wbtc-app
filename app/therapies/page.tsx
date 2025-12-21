import AppLayout from "@/components/AppLayout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { fetchTherapies } from "@/lib/data";
import TherapyList from "@/components/therapy/TherapyList";

export default async function TherapiesPage() {
    const session = await auth();
    // Allow Admins to manage, others to maybe view (later)
    // For now, only Admin and Therapists should probably see this list?
    // Parents don't need to see the service list directly unless booking?

    // Fetch all therapies (including inactive if Admin, but fetchTherapies defaults to active unless filtered)
    // Let's modify fetchTherapies or just fetch all for this management page.
    const therapies = await fetchTherapies(true); // true = include inactive


    const currentUserRole = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (currentUserRole !== "ADMIN" && currentUserRole !== "THERAPIST") redirect("/dashboard");

    return (
        <AppLayout role={session?.user?.role as any}>
            <div className="space-y-6 animate-fade-in pb-10">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage therapy services and pricing</p>
                </div>

                <TherapyList
                    therapies={therapies as any}
                    currentUserRole={currentUserRole}
                />
            </div>
        </AppLayout>
    );
}
