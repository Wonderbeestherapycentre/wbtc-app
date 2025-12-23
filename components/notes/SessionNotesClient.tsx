"use client";

import { useState } from "react";
import { Plus, Search, Calendar, FileText, Eye, Edit, Trash2 } from "lucide-react";
import SessionNoteModal from "./SessionNoteModal";
import SessionNoteViewModal from "./SessionNoteViewModal";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState<any>(null);
    const [viewingNote, setViewingNote] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleCreate = () => {
        setEditingNote(null);
        setIsModalOpen(true);
    };

    const handleEdit = (note: any) => {
        setEditingNote(note);
        setIsModalOpen(true);
    };

    const handleView = (note: any) => {
        setViewingNote(note);
        setIsViewModalOpen(true);
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
    const filteredNotes = initialNotes.filter(note =>
        note.child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.therapy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by child or therapy..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    />
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
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Child</th>
                                <th className="px-6 py-4">Therapy</th>
                                <th className="px-6 py-4">Activities</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {filteredNotes.length > 0 ? (
                                filteredNotes.map((note) => {
                                    const noteDate = new Date(note.date);
                                    const isCurrentDate = isToday(noteDate);

                                    return (
                                        <tr
                                            key={note.id}
                                            className="group hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                                        >
                                            <td className="px-6 py-4 align-top">
                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                    <Calendar className="w-4 h-4 text-gray-400" />
                                                    {format(noteDate, "MMM d, yyyy")}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 align-top">
                                                <div className="font-medium text-sm text-gray-900 dark:text-white">
                                                    {note.child.name}
                                                    {note.child.caseNumber && <span className="text-xs text-gray-500 ml-1">({note.child.caseNumber})</span>}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 align-top">
                                                <div className="text-sm text-gray-700 dark:text-gray-200">{note.therapy.name}</div>
                                            </td>
                                            <td className="px-6 py-4 align-top">
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    {(() => {
                                                        try {
                                                            const activities = JSON.parse(note.activities);
                                                            return Array.isArray(activities) ? `${activities.length} activities` : "-";
                                                        } catch (e) {
                                                            return "-";
                                                        }
                                                    })()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 align-top text-right">
                                                <div className="flex items-center justify-end gap-2">
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
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        <div className="w-12 h-12 bg-gray-50 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <FileText className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <p>No session notes found</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <SessionNoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                note={editingNote}
                childrenList={childrenList}
                therapies={therapies}
                goals={goals}
                therapistSpecialization={therapistSpecialization}
            />

            <SessionNoteViewModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                note={viewingNote}
                goals={goals}
            />
        </>
    );
}
