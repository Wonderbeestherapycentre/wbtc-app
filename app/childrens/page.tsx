import AppLayout from "@/components/AppLayout";
import { fetchChildren, fetchChildrenPaginated, fetchParents, fetchTherapists, fetchTherapies } from "@/lib/data";
import ChildSettings from "@/components/ChildSettings";
import Pagination from "@/components/Pagination";
import { ITEMS_PER_PAGE } from "@/lib/constants";

import { auth } from "@/auth";

export default async function ChildrenPage({ searchParams }: { searchParams: any }) {
    const session = await auth();
    const role = (session?.user?.role as "ADMIN" | "THERAPIST" | "PARENT") || "PARENT";

    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const search = params?.search || "";


    const parents = await fetchParents();
    const therapists = await fetchTherapists();
    const therapies = await fetchTherapies(true);

    // Fetch active children for the layout (dropdowns)
    const activeChildren = await fetchChildren();

    // Fetch paginated children (active & inactive) for current page
    const { data: childrenList, meta } = await fetchChildrenPaginated(page, ITEMS_PER_PAGE, true, search);

    return (
        <AppLayout familyChildren={activeChildren} role={session?.user?.role as any} user={session?.user}>
            <div className="space-y-3 animate-fade-in">

                <ChildSettings
                    children={childrenList as any}
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
