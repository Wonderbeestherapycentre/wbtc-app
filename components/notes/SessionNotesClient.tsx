"use client";

import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import { Plus, Calendar, FileText, Eye, Edit, Trash2, X, ChevronLeft, ChevronRight } from "lucide-react";
import SessionNoteModal from "./SessionNoteModal";
import { format, isToday } from "date-fns";
import { deleteSessionNote } from "@/lib/actions";
import { toast } from "sonner";

interface SessionNotesClientProps {
    initialNotes: any[];
    childrenList: { id: string; name: string; caseNumber?: string; assignedTherapies: string[] }[];
    therapies: { id: string; name: string }[];
    goals: any[];
    role: "ADMIN" | "THERAPIST" | "PARENT";
    therapistSpecialization?: string | null;
}

export default function SessionNotesClient({
    initialNotes,
    childrenList,
    therapies,
    goals,
    role,
    therapistSpecialization
}: SessionNotesClientProps) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState<any>(null);
    // No date selected by default -> show all notes. Filtering only kicks in
    // once the user picks a date, and clearing the date returns to the full list.
    const [filterDate, setFilterDate] = useState("");
    const [pageSize, setPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);

    const handleCreate = () => {
        setEditingNote(null);
        setIsModalOpen(true);
    };

    const handleEdit = (note: any) => {
        setEditingNote(note);
        setIsModalOpen(true);
    };

    const handleView = (note: any) => {
        router.push(`/session-notes/${note.id}`);
    };

    const handleDelete = async (note: any) => {
        if (!confirm("Are you sure you want to delete this session note?")) return;

        const result = await deleteSessionNote(note.id);
        if (result.message.includes("success")) {
            toast.success(result.message);
            window.location.reload(); // Refresh to show updated list
        } else {
            toast.error(result.message);
        }
    };

    // Filter Logic
    const filteredNotes = filterDate
        ? initialNotes.filter(note => format(new Date(note.date), "yyyy-MM-dd") === filterDate)
        : initialNotes;

    // Pagination Logic — only admins get pagination; parents/therapists see all
    // notes for the selected date.
    const isPaginated = role === "ADMIN";
    const totalPages = Math.max(1, Math.ceil(filteredNotes.length / pageSize));
    const page = Math.min(currentPage, totalPages);
    const paginatedNotes = isPaginated
        ? filteredNotes.slice((page - 1) * pageSize, page * pageSize)
        : filteredNotes;

    // Reset to first page when the filter or page size changes
    useEffect(() => {
        setCurrentPage(1);
    }, [filterDate, pageSize]);

    return (
        <>
         
                <div className="flex flex-row  gap-4 mb-6">
                    <div className="relative flex-1">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        />
                        {filterDate && (
                            <button
                                type="button"
                                onClick={() => setFilterDate("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                title="Clear date filter"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                       {role !== "PARENT" && (
                    <button
                        onClick={handleCreate}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4" />
                        <span className=" sm:inline">New Note</span>
                    </button>
                      )}
                </div>
          
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-gray-200 dark:border-neutral-800 text-xs uppercase text-gray-500 font-medium">
                                <th className="px-3 py-4 w-px whitespace-nowrap">#</th>
                                {
                                    role != "PARENT" && <th className="px-6 py-4">Child</th>
                                }

                                <th className="px-6 py-4">Therapy</th>
                                <th className="px-6 py-4">Activities</th>
                                {role !== "PARENT" && <th className="px-6 py-4">Status</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {paginatedNotes.length > 0 ? (
                                paginatedNotes.map((note, index) => {
                                    const noteDate = new Date(note.date);
                                    const isCurrentDate = isToday(noteDate);

                                    return (
                                        <tr
                                            key={note.id}
                                            className="group hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                                        >
                                            <td className="px-3 py-4 w-px whitespace-nowrap align-top text-sm text-gray-700 dark:text-gray-200">
                                                {(isPaginated ? (page - 1) * pageSize : 0) + index + 1}
                                            </td>
                                             {
                                    role != "PARENT" &&
                                    <td className="px-6 py-4 align-top" onClick={() => handleView(note)}>
                                                <div className="font-medium text-sm text-gray-900 dark:text-white flex items-center gap-2">
                                                    {/* <Eye className="w-4 h-4 md:hidden" />  */}
                                                    {note.child.name}
                                                    {/* {note.child.caseNumber && <span className="text-xs text-gray-500 ml-1">({note.child.caseNumber})</span>} */}
                                                </div>
                                            </td>
                                }
                                            
                                            <td className="px-6 py-4 align-top">
                                                <div className="text-sm text-gray-700 dark:text-gray-200">{note.therapy.name}</div>
                                            </td>
                                            <td className="px-6 py-4 align-top">
                                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                                    <button
                                                        onClick={() => handleView(note)}
                                                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:underline transition-colors"
                                                        title="View"
                                                    >
                                                        {(() => {
                                                            try {
                                                                const activities = JSON.parse(note.activities);
                                                                return Array.isArray(activities) ? `${activities.length} activities` : "-";
                                                            } catch (e) {
                                                                return "-";
                                                            }
                                                        })()}
                                                    </button>
                                                    <button
                                                        onClick={() => handleView(note)}
                                                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                                        title="View"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    {role !== "PARENT" && isCurrentDate && (
                                                        <>
                                                            <button
                                                                onClick={() => handleEdit(note)}
                                                                className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                                                                title="Edit (Today only)"
                                                            >
                                                                <Edit className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(note)}
                                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                                title="Delete (Today only)"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                            {role !== "PARENT" && (
                                                <td className="px-6 py-4 align-top">
                                                    {note.parentViewedAt ? (
                                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" title={`Viewed at ${new Date(note.parentViewedAt).toLocaleString()}`}>
                                                            Viewed
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                            Pending
                                                        </span>
                                                    )}
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={role !== "PARENT" ? 5 : 3} className="px-6 py-12 text-center text-gray-500">
                                        <div className="w-12 h-12 bg-gray-50 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <FileText className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <p>{filterDate ? `No session notes for ${format(new Date(filterDate), "MMM d, yyyy")}` : "No session notes found"}</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isPaginated && filteredNotes.length > 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <select
                            value={pageSize}
                            onChange={(e) => setPageSize(Number(e.target.value))}
                            className="px-2 py-1 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            {[10, 20, 50].map((size) => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-3">
                        <span>
                            {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredNotes.length)} of {filteredNotes.length}
                        </span>
                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={page <= 1}
                                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                aria-label="Previous page"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="px-1">Page {page} of {totalPages}</span>
                            <button
                                type="button"
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page >= totalPages}
                                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                aria-label="Next page"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <SessionNoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                note={editingNote}
                childrenList={childrenList}
                therapies={therapies}
                goals={goals}
                therapistSpecialization={therapistSpecialization}
            />
        </>
    );
}
