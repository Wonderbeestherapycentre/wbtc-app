"use client";

import React, { useState, useTransition } from "react";
import HomeProgramModal from "./HomeProgramModal";
import HomeProgramViewModal from "./HomeProgramViewModal";
import { Plus, Search, Filter, Edit2, Trash2, Eye } from "lucide-react";
import Pagination from "./Pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { format } from "date-fns";
import { deleteHomeProgram } from "@/lib/actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface HomeProgramListProps {
    programs: any[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    childrenList: any[];
    therapies: any[];
    canAdd?: boolean;
    userRole?: string;
}

export default function HomeProgramList({
    programs,
    meta,
    childrenList,
    therapies,
    canAdd = true,
    userRole
}: HomeProgramListProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editingProgram, setEditingProgram] = useState<any>(null);
    const [viewingProgram, setViewingProgram] = useState<any>(null);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        params.set("page", "1");
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleStatusFilter = (status: string) => {
        const params = new URLSearchParams(searchParams);
        if (status && status !== "ALL") {
            params.set("status", status);
        } else {
            params.delete("status");
        }
        params.set("page", "1");
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleEdit = (program: any) => {
        setEditingProgram(program);
        setIsModalOpen(true);
    };

    const handleView = (program: any) => {
        if (userRole === "PARENT") {
            router.push(`/home-programs/${program.id}`);
        } else {
            setViewingProgram(program);
            setViewModalOpen(true);
        }
    };

    const handleAdd = () => {
        setEditingProgram(null);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this program?")) return;
        setIsDeleting(id);
        try {
            const result = await deleteHomeProgram(id);
            if (result.message.includes("success")) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("Failed to delete program");
        } finally {
            setIsDeleting(null);
        }
    };

    return (
        <div className="space-y-6">
            {/* Filters Header */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by activity name or child..."
                        defaultValue={searchParams.get("search") || ""}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <select
                        defaultValue={searchParams.get("status") || "ALL"}
                        onChange={(e) => handleStatusFilter(e.target.value)}
                        className="flex-1 md:flex-none px-4 py-2 bg-gray-50 dark:bg-neutral-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="ALL">All Status</option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                    {canAdd && (
                        <button
                            onClick={handleAdd}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" /> New Program
                        </button>
                    )}
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                                <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider min-w-[200px]">Activity Name</th>
                                {userRole !== "PARENT" && (
                                    <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Child</th>
                                )}
                                <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Therapy</th>
                                <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-3 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {programs.length > 0 ? (
                                programs.map((program) => (
                                    <tr key={program.id} className="group hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                        <td className="px-3 py-4" onClick={() => handleView(program)}>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors capitalize">
                                                    {program.title}
                                                </span>
                                                <span className="text-[10px] text-gray-400 mt-0.5">
                                                    Created {format(new Date(program.createdAt), "dd MMM yyyy")}
                                                </span>
                                            </div>
                                        </td>
                                        {userRole !== "PARENT" && (
                                            <td className="px-3 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                                                            {program.child?.name?.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        {program.child?.name}
                                                    </span>
                                                </div>
                                            </td>
                                        )}
                                        <td className="px-3 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                                                {program.therapy?.name}
                                            </span>
                                        </td>
                                        <td className="px-3 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${program.status === 'ACTIVE'
                                                ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                                                : 'bg-gray-50 dark:bg-neutral-800 text-gray-500'
                                                }`}>
                                                {program.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleView(program)}
                                                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                                    title="View Tasks"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                {userRole !== "PARENT" && (
                                                    <>
                                                        <button
                                                            onClick={() => handleEdit(program)}
                                                            className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                                            title="Edit Program"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        {canAdd && (
                                                            <button
                                                                onClick={() => handleDelete(program.id)}
                                                                disabled={isDeleting === program.id}
                                                                className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all disabled:opacity-50"
                                                                title="Delete Program"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="bg-gray-100 dark:bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                                <Filter className="w-6 h-6 text-gray-400" />
                                            </div>
                                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">No home programs found</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Try adjusting your search or filters.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Pagination currentPage={meta.page} totalPages={meta.totalPages} />

            <HomeProgramModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingProgram(null);
                }}
                program={editingProgram}
                childrenList={childrenList}
                therapies={therapies}
            />

            <HomeProgramViewModal
                isOpen={viewModalOpen}
                onClose={() => {
                    setViewModalOpen(false);
                    setViewingProgram(null);
                }}
                program={viewingProgram}
            />
        </div>
    );
}
