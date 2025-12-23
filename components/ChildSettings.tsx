"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteChild } from "@/lib/actions";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import { intervalToDuration } from "date-fns";
import ChildModal from "./ChildModal";
import ConfirmModal from "./ConfirmModal";


interface Child {
    id: string;
    caseNumber?: string | null;
    name: string;
    status: "ACTIVE" | "INACTIVE";
    dob?: string | null;
    gender?: string | null;
    diagnosis?: string | null;
    parentId?: string | null;
    parent?: { name: string } | null;
    therapyTypes?: {
        therapyId: string,
        therapy: { id: string, name: string },
        therapist?: { id: string, name: string } | null
    }[];
}

interface ChildSettingsProps {
    children: Child[];
    parents?: { id: string; name: string }[];
    therapists?: { id: string; name: string }[];
    therapies?: { id: string; name: string }[];
    role?: "ADMIN" | "THERAPIST" | "PARENT";
}

export default function ChildSettings({
    children,
    parents = [],
    therapists = [],
    therapies = [],
    role = "PARENT"
}: ChildSettingsProps) {
    const [isPending, startTransition] = useTransition();

    // Modal states
    const [isChildModalOpen, setIsChildModalOpen] = useState(false);
    const [editingChild, setEditingChild] = useState<Child | null>(null);
    const [deletingChild, setDeletingChild] = useState<string | null>(null);

    const handleDeleteClick = (id: string) => {
        setDeletingChild(id);
    };

    const handleConfirmDelete = () => {
        if (!deletingChild) return;

        startTransition(async () => {
            const result = await deleteChild(deletingChild);
            if (result.message.includes("deleted")) {
                toast.success(result.message);
                setDeletingChild(null);
            } else {
                toast.error(result.message);
            }
        });
    };

    const handleEditClick = (child: Child) => {
        setEditingChild(child);
        setIsChildModalOpen(true);
    };

    const handleAddClick = () => {
        setEditingChild(null);
        setIsChildModalOpen(true);
    };



    const calculateAge = (dob: string | null) => {
        if (!dob) return null;
        const duration = intervalToDuration({
            start: new Date(dob),
            end: new Date()
        });
        const parts = [];
        if (duration.years) parts.push(`${duration.years} yrs`);
        if (duration.months) parts.push(`${duration.months} mos`);
        return parts.join(' ') || "0 mos";
    };

    const generateAvatarColor = (name: string) => {
        const colors = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef', '#f43f5e'];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <>
            <ChildModal
                isOpen={isChildModalOpen}
                onClose={() => setIsChildModalOpen(false)}
                child={editingChild}
                parents={parents}
                therapists={therapists}
                therapies={therapies}
            />

            <ConfirmModal
                isOpen={!!deletingChild}
                onClose={() => setDeletingChild(null)}
                onConfirm={handleConfirmDelete}
                title="Delete Child"
                description="Are you sure you want to delete this child? This action might affect existing expenses linked to them."
                confirmLabel="Delete"
                isPending={isPending}
            />



            <div className="glass-card rounded-2xl overflow-hidden animate-fade-in p-4 md:p-6">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Family Members</h3>
                    {role === "ADMIN" && (
                        <button
                            onClick={handleAddClick}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add Child</span>
                        </button>
                    )}
                </div>

                <div className="overflow-x-auto -mx-4 px-4 md:-mx-6 md:px-6 pb-4">
                    <table className="w-full md:min-w-[600px]">
                        <thead className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                            <tr>
                                <th className="text-left py-1 px-1 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Name</th>
                                <th className="text-left py-1 px-3 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Child ID</th>
                                <th className="hidden lg:table-cell text-left py-1 px-3 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Parent</th>
                                <th className="hidden md:table-cell text-left py-1 px-3 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Gender / Age</th>
                                <th className="hidden xl:table-cell text-left py-1 px-3 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Diagnosis</th>
                                {role === "ADMIN" && (
                                    <th className="hidden lg:table-cell text-left py-1 px-3 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Therapist(s)</th>
                                )}
                                <th className="hidden md:table-cell text-left py-1 px-3 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Status</th>
                                <th className="text-right py-1 px-1 md:py-2 md:px-6 text-xs font-semibold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {children.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-gray-500">No children added yet.</td>
                                </tr>
                            ) : (
                                children.map((child) => (
                                    <tr key={child.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                        <td className="py-1 px-1 md:py-2 md:px-6">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-bold shadow-sm"
                                                    style={{ backgroundColor: generateAvatarColor(child.name) }}
                                                >
                                                    {child.name[0]?.toUpperCase()}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-900 dark:text-white">
                                                        {child.name}
                                                    </span>
                                                    <span className="md:hidden text-[10px] text-gray-500">
                                                        {child.gender || "N/A"}{child.dob && ` • ${calculateAge(child.dob)}`}
                                                    </span>
                                                    <span className={`md:hidden mt-0.5 inline-flex w-fit items-center px-2 py-0.5 rounded text-[10px] font-medium ${child.status === 'ACTIVE'
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                                                        }`}>
                                                        {child.status === 'ACTIVE' ? 'Active' : 'Inactive'}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-1 px-3 md:py-2 md:px-6">
                                            <span className="text-sm font-mono text-gray-600 dark:text-gray-300">
                                                {child.caseNumber || "-"}
                                            </span>
                                        </td>
                                        <td className="hidden lg:table-cell py-1 px-3 md:py-2 md:px-6">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {child.parent?.name || "N/A"}
                                            </span>
                                        </td>
                                        <td className="hidden md:table-cell py-1 px-3 md:py-2 md:px-6">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {child.gender || "N/A"}
                                                {child.dob && ` / ${calculateAge(child.dob)}`}
                                            </span>
                                        </td>
                                        <td className="hidden xl:table-cell py-1 px-3 md:py-2 md:px-6">
                                            <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-[150px] block" title={child.diagnosis || ""}>
                                                {child.diagnosis || "N/A"}
                                            </span>
                                        </td>
                                        {role === "ADMIN" && (
                                            <td className="hidden lg:table-cell py-1 px-3 md:py-2 md:px-6">
                                                <div className="flex flex-wrap gap-1">
                                                    {child.therapyTypes && child.therapyTypes.length > 0 ? (
                                                        child.therapyTypes.map((tt, idx) => (
                                                            <span key={idx} className="text-xs font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                                                {tt.therapist?.name || "N/A"}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-sm text-gray-400 italic">None</span>
                                                    )}
                                                </div>
                                            </td>
                                        )}
                                        <td className="hidden md:table-cell py-1 px-3 md:py-2 md:px-6">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${child.status === 'ACTIVE'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                                                }`}>
                                                {child.status === 'ACTIVE' ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="py-1 px-1 md:py-2 md:px-6 text-right">
                                            <div className="flex items-center justify-end gap-1 md:gap-2">
                                                <Link
                                                    href={`/childrens/${child.id}`}
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                {role === "ADMIN" && (
                                                    <>
                                                        <button
                                                            onClick={() => handleEditClick(child)}
                                                            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                                                            title="Edit"
                                                        >
                                                            <Pencil className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteClick(child.id)}
                                                            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-600 transition-colors"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}


