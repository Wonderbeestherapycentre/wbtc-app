"use client";

import { useState, useTransition } from "react";
import { Edit2, Trash2, Plus, Clock, IndianRupee } from "lucide-react";
import { deleteTherapy } from "@/lib/actions";
import TherapyModal from "./TherapyModal";
import ConfirmModal from "@/components/ConfirmModal";

interface Therapy {
    id: string;
    name: string;
    description: string | null;
    chargePerSession: string | null;
    status: "ACTIVE" | "INACTIVE";
    defaultDurationMinutes: number;
}

interface TherapyListProps {
    therapies: Therapy[];
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT";
}

export default function TherapyList({ therapies, currentUserRole }: TherapyListProps) {
    const [editingTherapy, setEditingTherapy] = useState<Therapy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Delete confirmation state
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [therapyToDelete, setTherapyToDelete] = useState<string | null>(null);

    const handleDeleteClick = (id: string) => {
        setTherapyToDelete(id);
        setDeleteConfirmOpen(true);
    };

    const onConfirmDelete = () => {
        if (!therapyToDelete) return;

        startTransition(async () => {
            await deleteTherapy(therapyToDelete);
            setDeleteConfirmOpen(false);
            setTherapyToDelete(null);
        });
    };

    return (
        <div className="glass-card rounded-2xl overflow-hidden animate-fade-in animate-delay-100">
            <TherapyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                therapy={editingTherapy}
            />

            <ConfirmModal
                isOpen={deleteConfirmOpen}
                onClose={() => {
                    setDeleteConfirmOpen(false);
                    setTherapyToDelete(null);
                }}
                onConfirm={onConfirmDelete}
                title="Delete Service"
                description="Are you sure you want to delete this therapy service? This might affect historical data if not handled carefully."
                confirmLabel="Delete"
                isPending={isPending}
            />

            <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-neutral-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Therapy Services</h3>
                {currentUserRole === "ADMIN" && (
                    <button
                        onClick={() => {
                            setEditingTherapy(null);
                            setIsModalOpen(true);
                        }}
                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Service
                    </button>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                        <tr>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service Name</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Duration</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Default Charge</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            {currentUserRole === "ADMIN" && (
                                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {therapies.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="py-8 text-center text-gray-500">No therapy services defined.</td>
                            </tr>
                        ) : (
                            therapies.map((therapy) => (
                                <tr key={therapy.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                    <td className="py-4 px-6">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{therapy.name}</p>
                                            {therapy.description && (
                                                <p className="text-xs text-gray-500 truncate max-w-[200px]">{therapy.description}</p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                            <Clock className="w-3 h-3 mr-1.5" />
                                            {therapy.defaultDurationMinutes} mins
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center text-gray-900 dark:text-white font-medium">
                                            <IndianRupee className="w-3 h-3 mr-1" />
                                            {therapy.chargePerSession || "0.00"}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${therapy.status === 'ACTIVE'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                                            }`}>
                                            {therapy.status === 'ACTIVE' ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    {currentUserRole === "ADMIN" && (
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => {
                                                        setEditingTherapy(therapy);
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(therapy.id)}
                                                    disabled={isPending}
                                                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-600 transition-colors disabled:opacity-50"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
