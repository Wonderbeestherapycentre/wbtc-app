import AppLayout from "@/components/AppLayout";
import { fetchCategories } from "@/lib/data";
import CategoryList from "@/components/settings/CategoryList";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CategoriesPage() {
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    if (role !== "ADMIN") redirect("/dashboard");

    const categories = await fetchCategories();

    return (
        <AppLayout categories={categories} role={role}>
            <div className="space-y-6 animate-fade-in">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Categories</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage transaction categories</p>
                </div>

                <CategoryList categories={categories} />
            </div>
        </AppLayout>
    );
}
