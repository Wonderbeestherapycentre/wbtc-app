import { db } from "./db";
import { users, children, therapies, sessions, roleEnum, childTherapies } from "./db/schema";

import { eq, desc, asc, and, gte, lte, sql, ilike } from "drizzle-orm";
import { auth } from "@/auth";

export async function fetchUsers() {
    const session = await auth();
    if (!session?.user) return [];

    // Admin sees all? 
    const allUsers = await db.query.users.findMany({
        orderBy: [desc(users.createdAt)]
    });

    return allUsers.map((u: any) => ({
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
        orderBy: [desc(children.createdAt)],
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
        orderBy: [desc(children.createdAt)],
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
        return data.filter((s: any) => s.child.parentId === session.user.id);
    }

    return data;
}
