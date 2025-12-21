"use client";

import { useState, useTransition } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import { deleteUser } from "@/lib/actions";
import UserModal from "./UserModal";
import ConfirmModal from "@/components/ConfirmModal";

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "THERAPIST" | "PARENT";
    color?: string | null;
    qualification?: string | null;
    specialization?: string | null;
    mobile1?: string | null;
    mobile2?: string | null;
    address?: string | null;
    doj?: string | null;
    endDate?: string | null;
}

interface UserListProps {
    users: User[];
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT";
    currentUserId: string;
}

export default function UserList({ users, currentUserRole, currentUserId }: UserListProps) {
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Delete confirmation state
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<string | null>(null);

    const handleDeleteClick = (id: string) => {
        setUserToDelete(id);
        setDeleteConfirmOpen(true);
    };

    const onConfirmDelete = () => {
        if (!userToDelete) return;

        startTransition(async () => {
            await deleteUser(userToDelete);
            setDeleteConfirmOpen(false);
            setUserToDelete(null);
        });
    };

    return (
        <div className="glass-card rounded-2xl overflow-hidden animate-fade-in animate-delay-100">
            <UserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={editingUser}
                currentUserRole={currentUserRole}
            />

            <ConfirmModal
                isOpen={deleteConfirmOpen}
                onClose={() => {
                    setDeleteConfirmOpen(false);
                    setUserToDelete(null);
                }}
                onConfirm={onConfirmDelete}
                title="Delete User"
                description="Are you sure you want to delete this user? This action cannot be undone."
                confirmLabel="Delete User"
                isPending={isPending}
            />

            <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-neutral-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team & Parents</h3>
                {currentUserRole === "ADMIN" && (
                    <button
                        onClick={() => {
                            setEditingUser(null);
                            setIsModalOpen(true);
                        }}
                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add User
                    </button>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                        <tr>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone 1</th>
                            <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">DOJ</th>
                            <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-sm"
                                            style={{ backgroundColor: user.color || '#3b82f6' }}
                                        >
                                            {user.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                            {user.role === 'THERAPIST' && (user.qualification || user.specialization) && (
                                                <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                                                    {[user.qualification, user.specialization].filter(Boolean).join(' • ')}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === 'ADMIN'
                                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                        : user.role === 'THERAPIST'
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="py-4 px-6">
                                    <p className="text-sm text-gray-900 dark:text-white">
                                        {user.mobile1 || '-'}
                                    </p>
                                </td>
                                <td className="py-4 px-6">
                                    <p className="text-sm text-gray-900 dark:text-white">
                                        {user.doj ? new Date(user.doj).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}
                                    </p>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    {(currentUserRole === "ADMIN" || currentUserId === user.id) && (
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => {
                                                    setEditingUser(user);
                                                    setIsModalOpen(true);
                                                }}
                                                className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            {currentUserRole === "ADMIN" && currentUserId !== user.id && (
                                                <button
                                                    onClick={() => handleDeleteClick(user.id)}
                                                    disabled={isPending}
                                                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-600 transition-colors disabled:opacity-50"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
