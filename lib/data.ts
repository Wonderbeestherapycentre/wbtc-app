import { db } from "./db";
import { users, children, therapies, sessions, roleEnum, childTherapies, goals, sessionNotes, homePrograms, homeProgramTasks } from "./db/schema";

import { eq, desc, asc, and, or, gte, lte, sql, ilike, count } from "drizzle-orm";
import { auth } from "@/auth";

export async function fetchUsers() {
    const session = await auth();
    if (!session?.user) return [];

    // Admin sees all? 
    const allUsers = await db.query.users.findMany({
        orderBy: [desc(users.createdAt)],
        with: {
            children: true
        }
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
        status: u.status,
        children: u.children || [] // Include children
    }));
}

export async function fetchUser(id: string) {
    const session = await auth();
    if (!session?.user) return null;

    try {
        const user = await db.query.users.findFirst({
            where: eq(users.id, id),
            with: {
                children: true
            }
        });

        if (!user) return null;

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            qualification: user.qualification,
            specialization: user.specialization,
            mobile1: user.mobile1,
            mobile2: user.mobile2,
            address: user.address,
            doj: user.doj,
            endDate: user.endDate,
            status: user.status,
            children: user.children || []
        };
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
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
        where: and(eq(users.role, "THERAPIST"), eq(users.status, "ACTIVE")),
        orderBy: [asc(users.name)]
    });

    return therapists;
}

export async function fetchParents() {
    const session = await auth();
    if (!session?.user) return [];

    const parents = await db.query.users.findMany({
        where: and(eq(users.role, "PARENT"), eq(users.status, "ACTIVE")),
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

export async function fetchGoals(childId?: string) {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];

    if (childId) {
        conditions.push(eq(goals.childId, childId));
    }

    if (session.user.role === "PARENT") {
        conditions.push(
            sql`EXISTS (
                SELECT 1 FROM "children" 
                WHERE "children"."id" = "goals"."child_id" 
                AND "children"."parent_id" = ${session.user.id}
            )`
        );
    } else if (session.user.role === "THERAPIST") {
        if (!childId) {
            conditions.push(eq(goals.therapistId, session.user.id));
        }
    }

    const data = await db.query.goals.findMany({
        where: and(...conditions),
        orderBy: [desc(goals.createdAt)],
        with: {
            child: true,
            therapy: true,
            therapist: true,
        }
    });

    return data;
}

export async function fetchGoalsPaginated(page: number, limit: number, childId?: string, search?: string, status?: string) {
    const session = await auth();
    if (!session?.user) return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } };

    const offset = (page - 1) * limit;
    const conditions = [];

    if (childId) {
        conditions.push(eq(goals.childId, childId));
    }

    if (status && status !== "ALL") {
        conditions.push(eq(goals.status, status as any));
    }

    if (session.user.role === "PARENT") {
        conditions.push(
            sql`EXISTS (
                SELECT 1 FROM "children" 
                WHERE "children"."id" = "goals"."child_id" 
                AND "children"."parent_id" = ${session.user.id}
            )`
        );
    } else if (session.user.role === "THERAPIST" && !childId) {
        conditions.push(eq(goals.therapistId, session.user.id));
    }

    if (search) {
        conditions.push(
            sql`EXISTS (
                SELECT 1 FROM "children" 
                WHERE "children"."id" = "goals"."child_id" 
                AND "children"."name" ILIKE ${`%${search}%`}
            )`
        );
    }

    // Get Total Count
    const countResult = await db
        .select({ value: count() })
        .from(goals)
        .where(and(...conditions));
    const totalCount = Number(countResult[0]?.value || 0);

    const data = await db.query.goals.findMany({
        where: and(...conditions),
        orderBy: [desc(goals.createdAt)],
        limit,
        offset,
        with: {
            child: true,
            therapy: true,
            therapist: true,
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

export async function fetchSessionNotes() {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];

    // Therapists see only their own notes
    if (session.user.role === "THERAPIST") {
        conditions.push(eq(sessionNotes.therapistId, session.user.id));
    } else if (session.user.role === "PARENT") {
        // Parents shouldn't access this, but just in case filter by their children
        conditions.push(sql`${sessionNotes.childId} IN (SELECT id FROM ${children} WHERE parent_id = ${session.user.id})`);
    }
    // Admins see all

    const data = await db.query.sessionNotes.findMany({
        where: conditions.length > 0 ? and(...conditions) : undefined,
        orderBy: [desc(sessionNotes.date)],
        with: {
            child: true,
            therapy: true,
            therapist: true,
        }
    });

    return data;
}

export async function fetchHomePrograms(childId?: string) {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];

    if (childId) {
        conditions.push(eq(homePrograms.childId, childId));
    }

    if (session.user.role === "PARENT") {
        conditions.push(sql`${homePrograms.childId} IN (SELECT id FROM ${children} WHERE parent_id = ${session.user.id})`);
    } else if (session.user.role === "THERAPIST" && !childId) {
        conditions.push(eq(homePrograms.therapistId, session.user.id));
    }

    const data = await db.query.homePrograms.findMany({
        where: conditions.length > 0 ? and(...conditions) : undefined,
        orderBy: [desc(homePrograms.createdAt)],
        with: {
            child: true,
            therapy: true,
            therapist: true,
            tasks: true,
        }
    });

    return data;
}

export async function fetchHomeProgramsPaginated(page: number, limit: number, search = "", status = "ALL") {
    const session = await auth();
    if (!session?.user) return { data: [], meta: { total: 0, page: 1, limit: 10, totalPages: 0 } };

    const offset = (page - 1) * limit;
    const conditions = [];

    if (status && status !== "ALL") {
        conditions.push(eq(homePrograms.status, status as any));
    }

    if (session.user.role === "PARENT") {
        conditions.push(sql`${homePrograms.childId} IN (SELECT id FROM ${children} WHERE parent_id = ${session.user.id})`);
    } else if (session.user.role === "THERAPIST") {
        conditions.push(eq(homePrograms.therapistId, session.user.id));
    }

    if (search) {
        conditions.push(
            or(
                ilike(homePrograms.title, `%${search}%`),
                sql`EXISTS (
                    SELECT 1 FROM ${children} 
                    WHERE ${children.id} = ${homePrograms.childId} 
                    AND ${children.name} ILIKE ${`%${search}%`}
                )`
            )
        );
    }

    const [data, totalResult] = await Promise.all([
        db.query.homePrograms.findMany({
            where: conditions.length > 0 ? and(...conditions) : undefined,
            limit,
            offset,
            orderBy: [desc(homePrograms.createdAt)],
            with: {
                child: true,
                therapy: true,
                therapist: true,
                tasks: true,
                submissions: {
                    orderBy: (submissions, { desc }) => [desc(submissions.date)],
                    with: {
                        submissionTasks: true,
                    },
                },
            }
        }),
        db.select({ count: count() }).from(homePrograms).where(conditions.length > 0 ? and(...conditions) : undefined)
    ]);

    const total = totalResult[0].count;

    return {
        data,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    };
}

export async function fetchHomeProgramDetails(id: string) {
    const session = await auth();
    if (!session?.user) return null;

    const program = await db.query.homePrograms.findFirst({
        where: eq(homePrograms.id, id),
        with: {
            child: true,
            therapy: true,
            therapist: true,
            tasks: true,
            submissions: {
                orderBy: (submissions, { desc }) => [desc(submissions.date)],
                with: {
                    submissionTasks: true,
                },
            },
        }
    });

    if (!program) return null;

    // Access check: ADMIN can see all, THERAPIST can see their own, PARENT can see their children's
    if (session.user.role === "PARENT") {
        const child = await db.query.children.findFirst({
            where: and(eq(children.id, program.childId), eq(children.parentId, session.user.id))
        });
        if (!child) return null;
    } else if (session.user.role === "THERAPIST") {
        if (program.therapistId !== session.user.id) return null;
    }

    return program;
}

export async function fetchHomeProgram(id: string) {
    const session = await auth();
    if (!session?.user) return null;

    const program = await db.query.homePrograms.findFirst({
        where: eq(homePrograms.id, id),
        with: {
            child: true,
            therapy: true,
            therapist: true,
            tasks: true,
        }
    });

    return program || null;
}
