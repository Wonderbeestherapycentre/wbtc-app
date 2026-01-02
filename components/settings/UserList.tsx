"use client";

import { useState, useTransition } from "react";
import { Edit2, Trash2, Plus, Eye } from "lucide-react";
import Link from "next/link";
import { deleteUser } from "@/lib/actions";
import { intervalToDuration } from "date-fns";
import UserModal from "./UserModal";
import ConfirmModal from "@/components/ConfirmModal";

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
    color?: string | null;
    qualification?: string | null;
    specialization?: string | null;
    mobile1?: string | null;
    mobile2?: string | null;
    address?: string | null;
    doj?: string | null;
    endDate?: string | null;
    status: "ACTIVE" | "INACTIVE";
    children?: { id: string; name: string, dob?: string | null }[];
}

interface UserListProps {
    users: User[];
    currentUserRole: "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER";
    currentUserId: string;
    allChildren?: { id: string; name: string; caseNumber?: string; dob?: string | null; parent?: { id: string; name: string } | null }[];
    therapies?: { id: string; name: string; status: string }[];
}

export default function UserList({ users, currentUserRole, currentUserId, allChildren = [], therapies = [] }: UserListProps) {
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

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

    const [selectedRole, setSelectedRole] = useState<"ALL" | "ADMIN" | "THERAPIST" | "PARENT" | "ATTENDER">("ALL");

    // Filter users based on selected role
    const filteredUsers = users.filter(user => {
        if (selectedRole === "ALL") return true;
        return user.role === selectedRole;
    });

    return (
        <>
            <div className="p-2 flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4  dark:bg-neutral-900">
                <h2 className="text-md md:text-xl font-bold text-gray-900 dark:text-white">Users</h2>
                <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as any)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
                >
                    <option value="ALL">All Roles</option>
                    <option value="ADMIN">Admins</option>
                    <option value="THERAPIST">Therapists</option>
                    <option value="PARENT">Parents</option>
                    <option value="ATTENDER">Attenders</option>
                </select>
                {currentUserRole === "ADMIN" && (
                    <button
                        onClick={() => {
                            setEditingUser(null);
                            setIsModalOpen(true);
                        }}
                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                    >
                        <Plus className="w-4 h-4 mx-2" />
                        <span className="hidden md:block">Add User</span>
                    </button>
                )}
            </div>
            <div className="glass-card rounded-2xl overflow-hidden animate-fade-in animate-delay-100">
                <UserModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={editingUser}
                    currentUserRole={currentUserRole}
                    allChildren={allChildren}
                    therapies={therapies}
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



                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800">
                            <tr>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone 1</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">DOJ</th>
                                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {filteredUsers.map((user) => (
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
                                                        {[
                                                            user.qualification,
                                                            user.specialization ? (therapies.find(t => t.id === user.specialization)?.name || user.specialization) : null
                                                        ].filter(Boolean).join(' • ')}
                                                    </p>
                                                )}
                                                {user.role === 'PARENT' && user.children && user.children.length > 0 && (
                                                    <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5 font-medium flex flex-wrap gap-x-2">
                                                        <span className="shrink-0">Children:</span>
                                                        <div className="flex flex-wrap gap-x-1 underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-2">
                                                            {user.children.map((c, i) => (
                                                                <span key={c.id}>
                                                                    {c.name}
                                                                    {c.dob && (
                                                                        <span className="ml-1 text-[10px] opacity-75">
                                                                            ({calculateAge(c.dob)})
                                                                        </span>
                                                                    )}
                                                                    {i < (user.children?.length ?? 0) - 1 ? "," : ""}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === 'ADMIN'
                                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                            : user.role === 'THERAPIST'
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                                : user.role === 'PARENT'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'ACTIVE'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {user.status}
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
                                                <Link
                                                    href={`/users/${user.id}`}
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
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
        </>

    );
}
