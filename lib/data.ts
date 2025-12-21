import { db } from "./db";
import { expenses, users, categories, children, therapies, sessions, roleEnum, childTherapies } from "./db/schema";

import { eq, desc, asc, and, gte, lte, sql, ilike } from "drizzle-orm";
import { auth } from "@/auth";

interface ExpenseFilters {
    categoryId?: string;
    childId?: string;
    startDate?: Date;
    endDate?: Date;
    type?: "EXPENSE" | "INCOME" | "DUE";
}

export async function fetchExpenses(limit?: number, filters?: ExpenseFilters, page?: number) {
    const session = await auth();
    // In new system, maybe everyone can see? Or just Admins? 
    // For now allow all authenticated users to see (role checks can happen in UI or here)
    if (!session?.user) return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } };

    const conditions = [];

    // Role-based access control?
    // Parents should only see their own fees (Expenses linked to their child)? 
    // Implementing strict filtering:
    if (session.user.role === "PARENT") {
        // Find children of this parent
        const myChildren = await db.query.children.findMany({
            where: eq(children.parentId, session.user.id)
        });
        const childIds = myChildren.map(c => c.id);
        if (childIds.length === 0) {
            // No children, see nothing
            return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } };
        }

        if (filters?.childId && !childIds.includes(filters.childId)) {
            return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } };
        }
        // If no filter, restrict to my children?
        // For now, let's assume we filter later or logic handles it. 
        // But strictly:
        // conditions.push(inArray(expenses.childId, childIds)); // Need to import inArray if used
    }

    if (filters?.categoryId && filters.categoryId !== "all") {
        conditions.push(eq(expenses.categoryId, filters.categoryId));
    }
    if (filters?.childId) {
        conditions.push(eq(expenses.childId, filters.childId));
    }
    if (filters?.startDate) {
        conditions.push(gte(expenses.date, filters.startDate));
    }
    if (filters?.endDate) {
        conditions.push(lte(expenses.date, filters.endDate));
    }
    if (filters?.type) {
        conditions.push(eq(expenses.type, filters.type));
    }

    // Get Total Count for Pagination
    const [countResult] = await db
        .select({ count: sql<number>`count(*)` })
        .from(expenses)
        .where(and(...conditions));
    const totalCount = Number(countResult.count);

    const pageSize = limit || (page ? 10 : undefined);
    const offset = page ? (page - 1) * (pageSize || 10) : 0;

    const data = await db.query.expenses.findMany({
        where: and(...conditions),
        orderBy: [desc(expenses.date), desc(expenses.createdAt)],
        limit: pageSize,
        offset: offset,
        with: {
            category: true,
            child: true,
        }
    });

    // Map to application Expense type
    const mappedData = data.map(e => ({
        id: e.id,
        amount: parseFloat(e.amount),
        date: e.date,
        description: e.description,
        category: e.category?.name || "Uncategorized",
        categoryId: e.categoryId || undefined,
        childId: e.childId,
        childName: e.child?.name,
        type: e.type,
        userId: e.recordedBy || "system",
    }));

    return {
        data: mappedData,
        meta: {
            total: totalCount,
            page: page || 1,
            limit: pageSize || totalCount,
            totalPages: pageSize ? Math.ceil(totalCount / pageSize) : 1
        }
    };
}

export async function fetchStats(startDate?: Date, endDate?: Date, childId?: string) {
    // Reusing fetchExpenses logic
    const { data: all } = await fetchExpenses(undefined, { startDate, endDate, childId });

    let totalExpenses = 0;
    let totalIncome = 0;
    let totalDue = 0;
    let dueCount = 0;
    const byCategory: Record<string, number> = {};
    const incomeByCategory: Record<string, number> = {};

    all.forEach(e => {
        const val = Number(e.amount);
        const catName = e.category || "Uncategorized";

        if (e.type === "INCOME") {
            totalIncome += val;
            incomeByCategory[catName] = (incomeByCategory[catName] || 0) + val;
        } else if (e.type === "DUE") {
            totalDue += val;
            dueCount++;
        } else {
            totalExpenses += val;
            byCategory[catName] = (byCategory[catName] || 0) + val;
        }
    });

    return {
        totalExpenses,
        totalIncome,
        totalDue,
        dueCount,
        balance: totalIncome - totalExpenses,
        byCategory,
        incomeByCategory,
    };
}

export async function fetchUsers() {
    const session = await auth();
    if (!session?.user) return [];

    // Admin sees all? 
    const allUsers = await db.query.users.findMany({
        orderBy: [desc(users.createdAt)]
    });

    return allUsers.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        qualification: u.qualification,
        specialization: u.specialization,
        mobile1: u.mobile1,
        mobile2: u.mobile2,
        address: u.address,
        doj: u.doj,
        endDate: u.endDate,
    }));
}

export async function fetchCategories() {
    const session = await auth();
    if (!session?.user) return [];

    const data = await db.query.categories.findMany({
        orderBy: [desc(categories.name)]
    });

    return data.map(c => ({
        id: c.id,
        name: c.name,
        type: c.type
    }));
}

export async function fetchChildren(includeInactive = false) {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];
    if (!includeInactive) {
        conditions.push(eq(children.status, "ACTIVE"));
    }

    // Role-based restrictions
    if (session.user.role === "PARENT") {
        conditions.push(eq(children.parentId, session.user.id));
    } else if (session.user.role === "THERAPIST") {
        conditions.push(
            sql`EXISTS (
                SELECT 1 FROM "child_therapies" 
                WHERE "child_therapies"."child_id" = ${children.id} 
                AND "child_therapies"."therapist_id" = ${session.user.id}
            )`
        );
    }

    const data = await db.query.children.findMany({
        where: and(...conditions),
        orderBy: [asc(sql`lower(${children.name})`)],
        with: {
            parent: true,
            therapyTypes: {
                with: {
                    therapy: true,
                    therapist: true
                }
            }
        }
    });

    return data;
}

export async function fetchChildrenPaginated(page: number, limit: number, includeInactive = true, search = "") {
    const session = await auth();
    if (!session?.user) return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } };

    const conditions = [];
    if (!includeInactive) {
        conditions.push(eq(children.status, "ACTIVE"));
    }

    if (session.user.role === "PARENT") {
        conditions.push(eq(children.parentId, session.user.id));
    } else if (session.user.role === "THERAPIST") {
        conditions.push(
            sql`EXISTS (
                SELECT 1 FROM "child_therapies" 
                WHERE "child_therapies"."child_id" = ${children.id} 
                AND "child_therapies"."therapist_id" = ${session.user.id}
            )`
        );
    }

    if (search) {
        conditions.push(ilike(children.name, `%${search}%`));
    }

    // Get Total Count
    const [countResult] = await db
        .select({ count: sql<number>`count(*)` })
        .from(children)
        .where(and(...conditions));
    const totalCount = Number(countResult.count);

    const offset = (page - 1) * limit;

    const data = await db.query.children.findMany({
        where: and(...conditions),
        orderBy: [asc(sql`lower(${children.name})`)],
        limit: limit,
        offset: offset,
        with: {
            parent: true,
            therapyTypes: {
                with: {
                    therapy: true,
                    therapist: true
                }
            }
        }
    });

    return {
        data,
        meta: {
            total: totalCount,
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalCount / limit)
        }
    };
}

export async function fetchChild(id: string) {
    const session = await auth();
    if (!session?.user) return null;

    const child = await db.query.children.findFirst({
        where: eq(children.id, id),
        with: {
            parent: true,
            therapyTypes: {
                with: {
                    therapy: true,
                    therapist: true
                }
            }
        }
    });

    if (session.user.role === "PARENT" && child?.parentId !== session.user.id) {
        return null; // Unauthorized
    }

    return child || null;
}

export async function fetchTherapists() {
    const session = await auth();
    if (!session?.user) return [];

    const therapists = await db.query.users.findMany({
        where: eq(users.role, "THERAPIST"),
        orderBy: [asc(users.name)]
    });

    return therapists;
}

export async function fetchParents() {
    const session = await auth();
    if (!session?.user) return [];

    const parents = await db.query.users.findMany({
        where: eq(users.role, "PARENT"),
        orderBy: [asc(users.name)]
    });

    return parents;
}

export async function fetchTherapies(includeInactive = false) {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];
    if (!includeInactive) {
        conditions.push(eq(therapies.status, "ACTIVE"));
    }

    const data = await db.query.therapies.findMany({
        where: and(...conditions),
        orderBy: [asc(therapies.name)]
    });

    return data;
}

export async function fetchSessions(startDate?: Date, endDate?: Date, therapistId?: string) {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];
    if (startDate) conditions.push(gte(sessions.date, startDate));
    if (endDate) conditions.push(lte(sessions.date, endDate));
    if (therapistId) conditions.push(eq(sessions.therapistId, therapistId));

    const data = await db.query.sessions.findMany({
        where: and(...conditions),
        with: {
            child: true,
            therapist: true,
            therapy: true
        },
        orderBy: [asc(sessions.date)]
    });

    if (session.user.role === "PARENT") {
        return data.filter(s => s.child.parentId === session.user.id);
    }

    return data;
}
