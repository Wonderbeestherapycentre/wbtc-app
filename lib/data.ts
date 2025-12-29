import { db } from "./db";
import { users, children, therapies, sessions, roleEnum, childTherapies, goals, sessionNotes, homePrograms, homeProgramTasks, staffAttendance, expenses } from "./db/schema";

import { eq, desc, and, asc, sql, count, gte, lte, ilike, or } from "drizzle-orm";
import { auth } from "@/auth";
import { convertUTCToIST } from "./utils/timezone";

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
        orderBy: [asc(children.name)],
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

    const sessionsData = data.map((s: any) => ({
        ...s,
        date: convertUTCToIST(s.date)
    }));

    if (session.user.role === "PARENT") {
        return sessionsData.filter((s: any) => s.child.parentId === session.user.id);
    }

    return sessionsData;
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

    return data.map((g: any) => ({
        ...g,
        startDate: convertUTCToIST(g.startDate),
        endDate: convertUTCToIST(g.endDate),
        createdAt: convertUTCToIST(g.createdAt),
        updatedAt: convertUTCToIST(g.updatedAt)
    }));
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
        data: data.map((g: any) => ({
            ...g,
            startDate: convertUTCToIST(g.startDate),
            endDate: convertUTCToIST(g.endDate),
            createdAt: convertUTCToIST(g.createdAt),
            updatedAt: convertUTCToIST(g.updatedAt)
        })),
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

    return data.map((n: any) => ({
        ...n,
        date: convertUTCToIST(n.date),
        createdAt: convertUTCToIST(n.createdAt),
        updatedAt: convertUTCToIST(n.updatedAt),
        parentViewedAt: n.parentViewedAt ? convertUTCToIST(n.parentViewedAt) : null
    }));
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

    return data.map((p: any) => ({
        ...p,
        createdAt: convertUTCToIST(p.createdAt),
        updatedAt: convertUTCToIST(p.updatedAt)
    }));
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
                    SELECT 1 FROM "children" 
                    WHERE "children"."id" = ${homePrograms.childId} 
                    AND "children"."name" ILIKE ${`%${search}%`}
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
        data: data.map((p: any) => ({
            ...p,
            createdAt: convertUTCToIST(p.createdAt),
            updatedAt: convertUTCToIST(p.updatedAt),
            submissions: p.submissions?.map((s: any) => ({
                ...s,
                date: convertUTCToIST(s.date)
            })) || []
        })),
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

    return {
        ...program,
        createdAt: convertUTCToIST(program.createdAt),
        updatedAt: convertUTCToIST(program.updatedAt),
        submissions: program.submissions?.map((s: any) => ({
            ...s,
            date: convertUTCToIST(s.date)
        })) || []
    } as any;
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

export async function fetchChildFeeDetails(
    childId: string,
    filters?: {
        startDate?: Date;
        endDate?: Date;
        therapyId?: string;
    }
) {
    const session = await auth();
    if (!session?.user) return null;

    // 1. Fetch Child Details
    const child = await db.query.children.findFirst({
        where: eq(children.id, childId),
        with: {
            parent: true,
            therapyTypes: {
                with: { // Need feePerSession
                    therapy: true
                }
            }
        }
    });

    if (!child) return null;

    // Access Control
    if (session.user.role === "PARENT" && child.parentId !== session.user.id) return null;
    if (session.user.role === "THERAPIST") {
        const isAssigned = await db.query.childTherapies.findFirst({
            where: and(
                eq(childTherapies.childId, childId),
                eq(childTherapies.therapistId, session.user.id)
            )
        });
        if (!isAssigned) return null;
    }

    // Prepare Session Filters
    const conditions = [eq(sessions.childId, childId)];

    if (filters?.startDate) {
        conditions.push(gte(sessions.date, filters.startDate));
    }
    if (filters?.endDate) {
        // Set end date to end of day to include all sessions on that day
        const endOfDay = new Date(filters.endDate);
        endOfDay.setHours(23, 59, 59, 999);
        conditions.push(lte(sessions.date, endOfDay));
    }
    if (filters?.therapyId && filters.therapyId !== "ALL") {
        conditions.push(eq(sessions.therapyId, filters.therapyId));
    }

    // Fetch all sessions
    const childSessions = await db.query.sessions.findMany({
        where: and(...conditions),
        orderBy: [desc(sessions.date)],
        with: {
            therapy: true,
            therapist: true
        }
    });

    const detailedSessions = await Promise.all(childSessions.map(async (s) => {
        // Determine Fee
        // 1. Check if there is a specific fee for this child + therapy combo
        // Note: The schema has childTherapies with feePerSession.
        // We need to look up childTherapies for (childId, therapyId).
        // Since we didn't fetch it in the main query efficiently, let's do it or map it.
        // Optimization: Fetch all childTherapies for this child once.

        return {
            ...s,
            date: convertUTCToIST(s.date),
        };
    }));

    // Re-fetching child therapies map for fee lookup
    const strategies = await db.query.childTherapies.findMany({
        where: eq(childTherapies.childId, childId)
    });

    const feeMap = new Map<string, string>(); // therapyId -> fee
    strategies.forEach(st => {
        if (st.feePerSession) {
            feeMap.set(st.therapyId, st.feePerSession);
        }
    });

    let totalFee = 0;
    let presentCount = 0;
    let absentCount = 0;
    let excusedCount = 0;

    const sessionData = detailedSessions.map(s => {
        let fee = 0;
        // Logic: Fee applicable only if PRESENT?
        // User requirements: "need attendance fees details"
        // Usually, Absent implies no fee, but sometimes late cancellation charge exists.
        // For this task, I'll assume Fee is charged only for PRESENT.

        let feePerSession = s.therapy.chargePerSession ? Number(s.therapy.chargePerSession) : 0;

        // Override with custom fee if exists
        if (feeMap.has(s.therapyId)) {
            feePerSession = Number(feeMap.get(s.therapyId));
        }

        if (s.attendance === "PRESENT") {
            fee = feePerSession;
            presentCount++;
            totalFee += fee;
        } else if (s.attendance === "ABSENT") {
            absentCount++;
        } else if (s.attendance === "EXCUSED") {
            excusedCount++;
        }

        return {
            ...s,
            fee
        };
    });

    return {
        child,
        summary: {
            totalSessions: detailedSessions.length,
            present: presentCount,
            absent: absentCount,
            excused: excusedCount,
            totalFee,
            pendingFees: 0 // Placeholder if we track payments later
        },
        sessions: sessionData
    };
}

export async function fetchChildrenFeeSummary(startDate?: Date, endDate?: Date) {
    const session = await auth();
    if (!session?.user) return [];

    const conditions = [];
    // Default to active children for the report
    conditions.push(eq(children.status, "ACTIVE"));

    if (session.user.role === "PARENT") {
        conditions.push(eq(children.parentId, session.user.id));
    } else if (session.user.role === "THERAPIST") {
        // Therapists see children they are assigned to OR have sessions with.
        // For simplicity and performance in this summary, let's stick to assigned or explicitly associated.
        conditions.push(
            sql`EXISTS (
                SELECT 1 FROM "child_therapies" 
                WHERE "child_therapies"."child_id" = ${children.id} 
                AND "child_therapies"."therapist_id" = ${session.user.id}
            )`
        );
    }

    // Fetch children with necessary relations
    const kids = await db.query.children.findMany({
        where: and(...conditions),
        orderBy: [asc(children.name)],
        with: {
            parent: true,
            therapyTypes: {
                with: {
                    therapist: true
                }
            }, // For custom fees and therapist info
            sessions: {
                where: (sessions, { and, gte, lte }) => {
                    const conditions = [];
                    if (startDate) conditions.push(gte(sessions.date, startDate));
                    if (endDate) {
                        const end = new Date(endDate);
                        end.setHours(23, 59, 59, 999);
                        conditions.push(lte(sessions.date, end));
                    }
                    return conditions.length > 0 ? and(...conditions) : undefined;
                },
                with: {
                    therapy: true
                }
            }
        }
    });

    // Calculate details for each child
    const report = kids.map(child => {
        // Create Fee Map for this child
        const feeMap = new Map<string, number>();
        const distinctTherapists = new Set<string>();

        child.therapyTypes.forEach((tt: any) => {
            if (tt.feePerSession) {
                feeMap.set(tt.therapyId, Number(tt.feePerSession));
            }
            if (tt.therapist?.name) {
                distinctTherapists.add(tt.therapist.name);
            }
        });

        let totalFee = 0;
        let presentCount = 0;
        let absentCount = 0;
        let excusedCount = 0;

        child.sessions.forEach((s: any) => {
            let fee = 0;
            // Determine base fee
            let feePerSession = s.therapy.chargePerSession ? Number(s.therapy.chargePerSession) : 0;
            // Override if custom
            if (feeMap.has(s.therapyId)) {
                feePerSession = feeMap.get(s.therapyId)!;
            }

            if (s.attendance === "PRESENT") {
                fee = feePerSession;
                presentCount++;
                totalFee += fee;
            } else if (s.attendance === "ABSENT") {
                absentCount++;
            } else if (s.attendance === "EXCUSED") {
                excusedCount++;
            }
        });

        return {
            childId: child.id,
            childName: child.name,
            caseNumber: child.caseNumber,
            parentName: child.parent?.name || "N/A",
            therapistNames: Array.from(distinctTherapists).join(", ") || "",
            totalSessions: child.sessions.length,
            present: presentCount,
            absent: absentCount,
            excused: excusedCount,
            totalFee,
            lastSessionDate: child.sessions.length > 0 ? child.sessions[child.sessions.length - 1].date : null
        };
    });


    // Sort by Total Fee Descending (High value first)
    return report.sort((a, b) => b.totalFee - a.totalFee);
}

export async function fetchGlobalSessionHistory(
    filters?: {
        startDate?: Date;
        endDate?: Date;
        therapyId?: string;
        therapistId?: string;
        childId?: string;
        status?: string;
        attendance?: string;
        page?: number;
        limit?: number;
    }
) {
    const session = await auth();
    if (!session?.user) return {
        sessions: [],
        pagination: { total: 0, pages: 0, current: 1 },
        summary: { totalFee: 0, totalPresent: 0 }
    };

    const page = filters?.page || 1;
    const limit = filters?.limit || 20;
    const offset = (page - 1) * limit;

    // Access Control
    // Parents can only see their own children
    if (session.user.role === "PARENT") {
        // If childId is provided, check if it belongs to parent
        if (filters?.childId) {
            const child = await db.query.children.findFirst({
                where: and(eq(children.id, filters.childId), eq(children.parentId, session.user.id))
            });
            if (!child) return {
                sessions: [],
                pagination: { total: 0, pages: 0, current: page },
                summary: { totalFee: 0, totalPresent: 0 }
            };
        }
        // Logic for PARENT fetching global history might be restricted effectively to their kids.
        // For now, let's assume this page is primarily for ADMIN/THERAPIST.
        // If PARENT accesses, we force filter by their children.
        // But the requirement implies "All Children", usually for Admin.
    }

    const conditions = [];

    if (filters?.startDate) {
        conditions.push(gte(sessions.date, filters.startDate));
    }
    if (filters?.endDate) {
        const endOfDay = new Date(filters.endDate);
        endOfDay.setHours(23, 59, 59, 999);
        conditions.push(lte(sessions.date, endOfDay));
    }
    if (filters?.therapyId && filters.therapyId !== "ALL") {
        conditions.push(eq(sessions.therapyId, filters.therapyId));
    }
    if (filters?.therapistId && filters.therapistId !== "ALL") {
        conditions.push(eq(sessions.therapistId, filters.therapistId));
    }
    if (filters?.childId && filters.childId !== "ALL") {
        conditions.push(eq(sessions.childId, filters.childId));
    }
    if (filters?.status && filters.status !== "ALL") {
        // Cast to any if strictly typed enum issues arise, or ensure filter values match enum
        conditions.push(eq(sessions.status, filters.status as any));
    }
    if (filters?.attendance && filters.attendance !== "ALL") {
        conditions.push(eq(sessions.attendance, filters.attendance as any));
    }

    // Role based additional filters
    if (session.user.role === "PARENT") {
        // Find all children IDs for this parent
        const parentChildren = await db.query.children.findMany({
            where: eq(children.parentId, session.user.id),
            columns: { id: true }
        });
        const kidIds = parentChildren.map(c => c.id);
        if (kidIds.length === 0) return {
            sessions: [],
            pagination: { total: 0, pages: 0, current: page },
            summary: { totalFee: 0, totalPresent: 0 }
        }; // No kids, no sessions

        // If specific child requested, check if in list
        if (filters?.childId && !kidIds.includes(filters.childId)) return {
            sessions: [],
            pagination: { total: 0, pages: 0, current: page },
            summary: { totalFee: 0, totalPresent: 0 }
        };

        if (!filters?.childId) {
            // Drizzle doesn't have `inArray` imported yet? Let's check imports.
            // If not, we iterate or use `or`. `inArray` is better.
            // Let's assume we can add `inArray` import or use `or`.
            // For now, let's stick to what we have. A parent usually has few kids.
            // conditions.push(inArray(sessions.childId, kidIds));
            // I'll add `inArray` to imports in next step if needed. 
            // For safety without `inArray`, I'll map `eq` with `or`.
            conditions.push(or(...kidIds.map(id => eq(sessions.childId, id))));
        }
    } else if (session.user.role === "THERAPIST") {
        // Therapists can generally see all sessions or just theirs? 
        // "Global Session History" typically implies Admin view. 
        // If Therapist views, maybe they can see all or just assigned.
        // Let's allow THERAPIST to see all for now, or filter by their assignment if requested.
        // Requirement said "Session History need all child seperate page".
    }

    // 1. Fetch All Matching Data (No Limit/Offset)
    // We fetch everything to ensure we can calculate accurate Total Fees and Counts for the filter.
    const history = await db.query.sessions.findMany({
        where: and(...conditions),
        orderBy: [desc(sessions.date)],
        with: {
            child: true,
            therapy: true,
            therapist: true
        }
    });

    // Calculate Fees (simple logic: feePerSession from therapy or override)
    // Let's fetch all fee overrides.
    const allOverrides = await db.query.childTherapies.findMany();
    const feeMap = new Map<string, number>(); // key: `${childId}-${therapyId}`
    allOverrides.forEach(o => {
        if (o.feePerSession) {
            feeMap.set(`${o.childId}-${o.therapyId}`, Number(o.feePerSession));
        }
    });

    let totalFee = 0;
    let totalPresent = 0;

    const enrichedSessions = history.map(s => {
        let fee = 0;
        let feePerSession = s.therapy.chargePerSession ? Number(s.therapy.chargePerSession) : 0;
        const key = `${s.childId}-${s.therapyId}`;
        if (feeMap.has(key)) {
            feePerSession = feeMap.get(key)!;
        }

        if (s.attendance === "PRESENT") {
            fee = feePerSession;
            totalPresent++;
            totalFee += fee;
        }

        return {
            ...s,
            fee
        };
    });

    const total = enrichedSessions.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedSessions = enrichedSessions.slice(start, end);

    return {
        sessions: paginatedSessions,
        pagination: {
            total,
            pages: totalPages,
            current: page
        },
        summary: {
            totalFee,
            totalPresent
        }
    };
}

export async function fetchDashboardStats() {
    const session = await auth();
    if (!session?.user || (session.user.role !== "ADMIN" && session.user.role !== "THERAPIST")) {
        return null;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const last7Days = new Date(today);
    last7Days.setDate(last7Days.getDate() - 6);

    const last30Days = new Date(today);
    last30Days.setDate(last30Days.getDate() - 29);

    // 1. Counts
    // Active Children
    const [activeChildren] = await db.select({ count: count() })
        .from(children)
        .where(eq(children.status, "ACTIVE"));

    // Active Therapists
    const [activeTherapists] = await db.select({ count: count() })
        .from(users)
        .where(and(eq(users.role, "THERAPIST"), eq(users.status, "ACTIVE")));

    // Today's Sessions
    const [todaySessions] = await db.select({ count: count() })
        .from(sessions)
        .where(and(gte(sessions.date, today), lte(sessions.date, tomorrow)));

    // 2. Weekly Trend (Last 7 Days)
    const rawTrend = await db.query.sessions.findMany({
        where: gte(sessions.date, last7Days),
        columns: { date: true }
    });

    const trendMap = new Map<string, number>();
    // Initialize last 7 days with 0
    for (let i = 0; i < 7; i++) {
        const d = new Date(last7Days);
        d.setDate(d.getDate() + i);
        const key = d.toLocaleDateString('en-IN', { weekday: 'short' }); // Mon, Tue...
        trendMap.set(key, 0);
    }

    const trendData: { name: string; sessions: number }[] = [];

    const days: { date: Date; label: string }[] = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(last7Days);
        d.setDate(d.getDate() + i);
        days.push({
            date: d,
            label: d.toLocaleDateString('en-US', { weekday: 'short' })
        });
    }

    const counts = new Array(7).fill(0);
    rawTrend.forEach(s => {
        const sDate = new Date(s.date);
        sDate.setHours(0, 0, 0, 0);

        const index = days.findIndex(d => {
            const dayDate = new Date(d.date);
            dayDate.setHours(0, 0, 0, 0);
            return dayDate.getTime() === sDate.getTime();
        });

        if (index !== -1) {
            counts[index]++;
        }
    });

    days.forEach((d, i) => {
        trendData.push({ name: d.label, sessions: counts[i] });
    });


    // 3. Attendance Distribution (Last 30 Days)
    const rawAttendance = await db.query.sessions.findMany({
        where: gte(sessions.date, last30Days),
        columns: { attendance: true, status: true }
    });

    let present = 0;
    let absent = 0;
    let excused = 0;
    let scheduled = 0;

    rawAttendance.forEach(s => {
        if (s.attendance === "PRESENT") present++;
        else if (s.attendance === "ABSENT") absent++;
        else if (s.attendance === "EXCUSED") excused++;
        else if (s.status === "SCHEDULED" || !s.attendance) scheduled++;
    });

    const attendanceData = [
        { name: "Present", value: present, color: "#22c55e" },
        { name: "Absent", value: absent, color: "#ef4444" },
        { name: "Excused", value: excused, color: "#eab308" },
    ];


    return {
        counts: {
            children: activeChildren.count,
            therapists: activeTherapists.count,
            todaySessions: todaySessions.count
        },
        charts: {
            trend: trendData,
            attendance: attendanceData.filter(d => d.value > 0)
        }
    };
}
export async function fetchCaseload() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    // 1. Fetch All Active Therapists
    const therapists = await db.query.users.findMany({
        where: and(eq(users.role, "THERAPIST"), eq(users.status, "ACTIVE")),
        orderBy: [asc(users.name)]
    });

    // 2. For each therapist, find assigned children
    const caseload = await Promise.all(therapists.map(async (therapist) => {
        // Find assigned children via childTherapies
        const assigned = await db.query.childTherapies.findMany({
            where: eq(childTherapies.therapistId, therapist.id),
            with: {
                child: true
            }
        });

        // Deduplicate children (incase assigned to same kid for multiple therapies)
        const childMap = new Map();
        assigned.forEach(a => {
            if (a.child.status === "ACTIVE") {
                childMap.set(a.childId, a.child);
            }
        });

        return {
            therapist: {
                id: therapist.id,
                name: therapist.name,
                specialization: therapist.specialization
            },
            children: Array.from(childMap.values())
        };
    }));

    // Sort by caseload size desc? or name asc? Let's keep name asc (default map order)
    return caseload;
}

export async function fetchStaffAttendance(dateStr: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    const records = await db.query.staffAttendance.findMany({
        where: eq(staffAttendance.date, dateStr),
        with: {
            user: true
        }
    });

    return records;
}

export async function fetchStaffMonthlyAttendance(startStr: string, endStr: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    const records = await db.query.staffAttendance.findMany({
        where: and(gte(staffAttendance.date, startStr), lte(staffAttendance.date, endStr)),
        with: {
            user: true
        }
    });

    return records;
}

export async function fetchExpenses(startDate: Date, endDate: Date) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    // Ensure we cover the full range
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    // Note: expenses.date is "date" type in schema, which usually maps to string "YYYY-MM-DD"
    // Drizzle's gte/lte works best with strings for "date" columns, or Date objects for "timestamp".
    // Let's convert to strings to be safe for "date" column
    const startStr = start.toISOString().split('T')[0];
    const endStr = end.toISOString().split('T')[0];

    const data = await db.query.expenses.findMany({
        where: and(gte(expenses.date, startStr), lte(expenses.date, endStr)),
        orderBy: [desc(expenses.date)]
    });

    return data;
}
