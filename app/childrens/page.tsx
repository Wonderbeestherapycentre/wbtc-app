import AppLayout from "@/components/AppLayout";
import { fetchCategories, fetchChildren, fetchChildrenPaginated, fetchParents, fetchTherapists, fetchTherapies } from "@/lib/data";
import ChildSettings from "@/components/ChildSettings";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import { ITEMS_PER_PAGE } from "@/lib/constants";

import { auth } from "@/auth";

export default async function ChildrenPage({ searchParams }: { searchParams: any }) {
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const search = params?.search || "";

    const categories = await fetchCategories();
    const parents = await fetchParents();
    const therapists = await fetchTherapists();
    const therapies = await fetchTherapies(true);

    // Fetch active children for the layout (dropdowns)
    const activeChildren = await fetchChildren();

    // Fetch paginated children (active & inactive) for current page
    const { data: childrenList, meta } = await fetchChildrenPaginated(page, ITEMS_PER_PAGE, true, search);

    return (
        <AppLayout categories={categories} familyChildren={activeChildren} role={role}>
            <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Children</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage child profiles</p>
                    </div>
                    {role !== "PARENT" && <SearchInput placeholder="Search by name..." />}
                </div>

                <ChildSettings
                    children={childrenList as any}
                    categories={categories}
                    parents={parents}
                    therapists={therapists}
                    therapies={therapies as any}
                    role={role}
                />

                <Pagination currentPage={meta.page} totalPages={meta.totalPages} />
            </div>
        </AppLayout>
    );
}
