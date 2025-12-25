"use server";

import { revalidatePath } from "next/cache";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { db } from "./db";
import { users, children, therapies, sessions, childTherapies, goals, sessionNotes, homePrograms, homeProgramTasks, homeProgramSubmissions, homeProgramSubmissionTasks } from "./db/schema"; // Added reporting tables

import bcrypt from "bcryptjs";
import { eq, desc, and, isNotNull, like, inArray } from "drizzle-orm"; // Added inArray
import { auth } from "@/auth";
import { CreateUserSchema, UpdateUserSchema } from "./validations/user";
import { ChildSchema } from "./validations/child";
import { GoalSchema, UpdateGoalSchema } from "./validations/goal";
import { SessionNoteSchema, UpdateSessionNoteSchema } from "./validations/session-note";
import { HomeProgramSchema, UpdateHomeProgramSchema } from "./validations/home-program";
import { generateSecurePassword } from "./utils/password";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const email = formData.get("email") as string || "";
        const password = formData.get("password") as string || "";

        await signIn("credentials", { email, password, redirectTo: "/dashboard" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

export async function register(prevState: string | undefined, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password || !name) return "Missing fields";

    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    if (existingUser) return "User already exists";

    const hashedPassword = await bcrypt.hash(password, 10);

    // Default role: PARENT? Or ADMIN for first user? 
    // Logic: If no users exist, first is ADMIN. Otherwise PARENT.
    // For now, let's hardcode PARENT unless explicitly set elsewhere usually.
    // But for this "Revamp" maybe we assume Admin creates users?
    // If this is public registration, PARENT is safer.

    const userCount = await db.select().from(users).then(res => res.length);
    const role = userCount === 0 ? "ADMIN" : "PARENT";

    await db.insert(users).values({
        name,
        email,
        passwordHash: hashedPassword,
        role: role
    });

    return "Success";
}

export async function createUser(formData: FormData) {
    try {
        const session = await auth();
        console.log("createUser: Session User:", session?.user);

        if (session?.user?.role !== "ADMIN") {
            console.log("createUser: Unauthorized access attempt by", session?.user?.id);
            return { message: "Unauthorized: You must be an Admin" };
        }

        const rawName = formData.get("name") as string || "";
        const rawEmail = formData.get("email") as string || "";
        const rawPassword = formData.get("password") as string || "";
        const rawRole = formData.get("role") as string || "";
        const rawQualification = formData.get("qualification") as string || "";
        const rawSpecialization = formData.get("specialization") as string || "";
        const rawMobile1 = formData.get("mobile1") as string || "";
        const rawMobile2 = formData.get("mobile2") as string || "";
        const rawAddress = formData.get("address") as string || "";
        const rawDoj = formData.get("doj") as string || "";
        const rawEndDate = formData.get("endDate") as string || "";
        const rawStatus = (formData.get("status") as string) || "ACTIVE";

        const validatedFields = CreateUserSchema.safeParse({
            name: rawName,
            email: rawEmail,
            password: rawPassword,
            role: rawRole,
            qualification: rawQualification,
            specialization: rawSpecialization,
            mobile1: rawMobile1,
            mobile2: rawMobile2,
            address: rawAddress,
            doj: rawDoj,
            endDate: rawEndDate,
            status: rawStatus
        });

        if (!validatedFields.success) {
            console.log("createUser: Validation failed", validatedFields.error.flatten().fieldErrors);
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { name, email, role, qualification, specialization, mobile1, mobile2, address, doj, endDate, status } = validatedFields.data;
        let { password } = validatedFields.data;

        if (!password) {
            password = generateSecurePassword();
        }

        console.log("createUser: Validated Data:", { name, email, role, password: "[REDACTED]", qualification, specialization, mobile1, mobile2, address, doj, endDate });

        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        if (existingUser) return { message: "User already exists" };

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.insert(users).values({
            name,
            email,
            passwordHash: hashedPassword,
            role,
            qualification,
            specialization,
            mobile1,
            mobile2,
            address,
            endDate,
            status,
        });

        // Handle Child Assignment
        if (role === "PARENT") {
            const childIdsStr = formData.get("childIds") as string;
            if (childIdsStr) {
                const childIds = JSON.parse(childIdsStr) as string[];
                const newUser = await db.query.users.findFirst({
                    where: eq(users.email, email),
                    columns: { id: true }
                });

                if (newUser && childIds.length > 0) {
                    // Assign selected children to this parent
                    for (const childId of childIds) {
                        await db.update(children)
                            .set({ parentId: newUser.id })
                            .where(eq(children.id, childId));
                    }
                }
            }
        }

        // Send credentials email
        try {
            const { sendCredentialsEmail } = await import('./email');
            const emailResult = await sendCredentialsEmail(email, name, email, password);

            if (!emailResult.success) {
                console.error('Failed to send credentials email:', emailResult.error);
            }
        } catch (emailError) {
            console.error('Error sending credentials email:', emailError);
            // Continue even if email fails - user is still created
        }

        revalidatePath("/settings");
        revalidatePath("/users");
        return { message: "User created and credentials sent via email" };
    } catch (error: any) {
        console.error("Create User Error:", error);
        return { message: error.message || "Failed to create user" };
    }
}



export async function deleteUser(userId: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    if (userId === session.user.id) return { message: "Cannot delete yourself" };

    await db.delete(users).where(eq(users.id, userId));
    revalidatePath("/settings");
    revalidatePath("/users");
    return { message: "User deleted" };
}


// --- Therapy Actions ---
export async function createTherapy(formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const name = formData.get("name") as string;
    const description = (formData.get("description") as string) || "";
    const price = (formData.get("price") as string) || "0";
    const status = (formData.get("status") as "ACTIVE" | "INACTIVE") || "ACTIVE";
    const duration = (formData.get("defaultDurationMinutes") as string) || "45";

    if (!name) return { message: "Name is required" };

    await db.insert(therapies).values({
        name,
        description,
        chargePerSession: price,
        status,
        defaultDurationMinutes: parseInt(duration),
    });

    revalidatePath("/therapies");
    return { message: "Therapy service created" };
}

export async function updateTherapy(id: string, formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const name = formData.get("name") as string;
    const description = (formData.get("description") as string) || "";
    const price = (formData.get("price") as string) || "0";
    const status = (formData.get("status") as "ACTIVE" | "INACTIVE") || "ACTIVE";
    const duration = (formData.get("defaultDurationMinutes") as string) || "45";

    if (!name) return { message: "Name is required" };

    await db.update(therapies).set({
        name,
        description,
        chargePerSession: price,
        status,
        defaultDurationMinutes: parseInt(duration),
    }).where(eq(therapies.id, id));

    revalidatePath("/therapies");
    return { message: "Therapy service updated" };
}

export async function deleteTherapy(id: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    try {
        await db.delete(therapies).where(eq(therapies.id, id));
        revalidatePath("/therapies");
        return { message: "Therapy service deleted" };
    } catch (error) {
        return { message: "Failed to delete therapy. It might be linked to existing sessions." };
    }
}


// --- Session Actions ---
export async function createSession(formData: FormData) {
    const session = await auth();
    // Admin or Therapist can create sessions
    if (session?.user?.role === "PARENT") return { message: "Unauthorized" };

    const childId = formData.get("childId") as string;
    const therapistId = formData.get("therapistId") as string;
    const therapyId = formData.get("therapyId") as string;
    const dateStr = formData.get("date") as string;
    const duration = formData.get("durationMinutes") as string || "45";
    const status = (formData.get("status") as "SCHEDULED" | "COMPLETED" | "CANCELLED" | "MISSED") || "SCHEDULED";

    if (!childId || !therapistId || !therapyId || !dateStr) {
        return { message: "Missing required fields" };
    }

    await db.insert(sessions).values({
        childId,
        therapistId,
        therapyId,
        date: new Date(dateStr),
        durationMinutes: parseInt(duration),
        status,
    });

    revalidatePath("/schedule");
    return { message: "Session scheduled" };
}

export async function updateSession(id: string, formData: FormData) {
    const session = await auth();
    if (session?.user?.role === "PARENT") return { message: "Unauthorized" };

    const childId = formData.get("childId") as string;
    const therapistId = formData.get("therapistId") as string;
    const therapyId = formData.get("therapyId") as string;
    const dateStr = formData.get("date") as string;
    const duration = formData.get("durationMinutes") as string || "45";
    const status = (formData.get("status") as "SCHEDULED" | "COMPLETED" | "CANCELLED" | "MISSED") || "SCHEDULED";

    await db.update(sessions).set({
        childId,
        therapistId,
        therapyId,
        date: new Date(dateStr),
        durationMinutes: parseInt(duration),
        status,
    }).where(eq(sessions.id, id));

    revalidatePath("/schedule");
    return { message: "Session updated" };
}

export async function deleteSession(id: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    await db.delete(sessions).where(eq(sessions.id, id));
    revalidatePath("/schedule");
    return { message: "Session deleted" };
}

export async function updateUser(userId: string, formData: FormData) {
    try {
        const session = await auth();
        if (session?.user?.role !== "ADMIN" && session?.user?.id !== userId) {
            return { message: "Unauthorized" };
        }

        const rawName = formData.get("name") as string || "";
        const rawEmail = formData.get("email") as string || "";
        const rawPassword = formData.get("password") as string || "";
        const rawRole = formData.get("role") as string || "";
        const rawQualification = formData.get("qualification") as string || "";
        const rawSpecialization = formData.get("specialization") as string || "";
        const rawMobile1 = formData.get("mobile1") as string || "";
        const rawMobile2 = formData.get("mobile2") as string || "";
        const rawAddress = formData.get("address") as string || "";
        const rawDoj = formData.get("doj") as string || "";
        const rawEndDate = formData.get("endDate") as string || "";
        const rawStatus = (formData.get("status") as string) || "ACTIVE";

        const validatedFields = UpdateUserSchema.safeParse({
            name: rawName,
            email: rawEmail,
            role: rawRole,
            qualification: rawQualification,
            specialization: rawSpecialization,
            mobile1: rawMobile1,
            mobile2: rawMobile2,
            address: rawAddress,
            doj: rawDoj,
            endDate: rawEndDate,
            password: rawPassword,
            status: rawStatus
        });

        if (!validatedFields.success) {
            console.log("updateUser: Validation failed", validatedFields.error.flatten().fieldErrors);
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { name, email, role, qualification, specialization, mobile1, mobile2, address, doj, endDate, password, status } = validatedFields.data;

        const updateData: any = { name, email, qualification, specialization, mobile1, mobile2, address, doj, endDate, status }; if (session.user.role === "ADMIN") {
            if (role) updateData.role = role;
            if (password && password.trim() !== "") {
                updateData.passwordHash = await bcrypt.hash(password, 10);
            }
        }

        await db.update(users)
            .set(updateData)
            .where(eq(users.id, userId));

        // Handle Child Assignment
        if (role === "PARENT" || session.user.role === "ADMIN") { // Admin can update parent's children
            // Check if we are updating a parent
            const updatedUserRole = role || (await db.query.users.findFirst({ where: eq(users.id, userId), columns: { role: true } }))?.role;

            if (updatedUserRole === "PARENT") {
                const childIdsStr = formData.get("childIds") as string;
                if (childIdsStr) {
                    const childIds = JSON.parse(childIdsStr) as string[];

                    // 1. Unassign children that were previously assigned but not in the new list
                    // Actually, simpler approach: 
                    // Set parentId=null for ALL children currently assigned to this parent
                    await db.update(children)
                        .set({ parentId: null })
                        .where(eq(children.parentId, userId));

                    // 2. Assign new list
                    if (childIds.length > 0) {
                        for (const childId of childIds) {
                            await db.update(children)
                                .set({ parentId: userId })
                                .where(eq(children.id, childId));
                        }
                    }
                }
            }
        }

        revalidatePath("/settings");
        revalidatePath("/users");
        return { message: "User updated" };
    } catch (error: any) {
        console.error("Update User Error:", error);
        return { message: error.message || "Failed to update user" };
    }
}


// --- Expense Actions --- (Update/Delete)


export async function updatePassword(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return "Unauthorized";

    const currentPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!currentPassword || !newPassword || !confirmPassword) {
        return "All fields are required";
    }

    if (newPassword !== confirmPassword) {
        return "New passwords do not match";
    }

    if (newPassword.length < 6) {
        return "Password must be at least 6 characters";
    }

    const user = await db.query.users.findFirst({
        where: eq(users.id, session.user.id),
    });

    if (!user) return "User not found";

    const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isMatch) {
        return "Incorrect current password";
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.update(users)
        .set({ passwordHash: hashedPassword })
        .where(eq(users.id, session.user.id));

    return "Success";
}

// --- Child Actions ---
export async function createChild(formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const name = formData.get("name") as string;
    const status = (formData.get("status") as "ACTIVE" | "INACTIVE") || "ACTIVE";
    const dob = (formData.get("dob") as string) || "";
    const gender = (formData.get("gender") as string) || "";
    const diagnosis = (formData.get("diagnosis") as string) || "";
    const parentId = (formData.get("parentId") as string) || "";

    const therapiesStr = (formData.get("therapies") as string) || "[]";
    const therapiesList = JSON.parse(therapiesStr);

    const validatedFields = ChildSchema.safeParse({
        name,
        status,
        dob,
        gender,
        diagnosis,
        parentId,
        therapies: therapiesList
    });

    if (!validatedFields.success) {
        return {
            message: "Validation Error",
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    const { name: vName, status: vStatus, dob: vDob, gender: vGender, diagnosis: vDiagnosis, parentId: vParentId, therapies: vTherapies } = validatedFields.data;

    // Validate that all therapies have a therapist assigned
    if (vTherapies && vTherapies.length > 0) {
        const therapiesWithoutTherapist = vTherapies.filter(
            t => !t.therapistId || t.therapistId === ""
        );

        if (therapiesWithoutTherapist.length > 0) {
            return {
                message: "Validation failed",
                errors: {
                    therapies: ["All selected therapies must have a therapist assigned"]
                }
            };
        }

        // Validate that all therapies have a session fee
        const therapiesWithoutFee = vTherapies.filter(
            t => !t.feePerSession || t.feePerSession === ""
        );

        if (therapiesWithoutFee.length > 0) {
            return {
                message: "Validation failed",
                errors: {
                    therapies: ["All selected therapies must have a session fee"]
                }
            };
        }
    }

    // Generate Case Number (Dynamic Unique ID)
    // Generate Case Number (Dynamic Unique ID)
    const currentYear = new Date().getFullYear().toString().slice(-2); // "24", "25", etc.
    const idPrefix = `WB-${currentYear}-CH`;

    // Find last child with this specific prefix
    const lastChild = await db.query.children.findFirst({
        where: like(children.caseNumber, `${idPrefix}-%`),
        orderBy: [desc(children.caseNumber)]
    });

    let nextSequence = "001";
    if (lastChild && lastChild.caseNumber) {
        const parts = lastChild.caseNumber.split('-');
        // Format is WB-YY-CH-XXX, so sequence is the last part (index 3)
        // Check if format matches length
        if (parts.length === 4) {
            const lastSeq = parseInt(parts[3]);
            if (!isNaN(lastSeq)) {
                nextSequence = String(lastSeq + 1).padStart(3, "0");
            }
        }
    }

    const nextCaseNumber = `${idPrefix}-${nextSequence}`;

    const [newChild] = await db.insert(children).values({
        name: vName,
        status: vStatus,
        dob: vDob,
        gender: vGender,
        diagnosis: vDiagnosis,
        parentId: vParentId || null,
        caseNumber: nextCaseNumber,
    }).returning({ id: children.id });

    if (newChild && vTherapies.length > 0) {
        await db.insert(childTherapies).values(
            vTherapies.map(t => ({
                childId: newChild.id,
                therapyId: t.therapyId,
                therapistId: t.therapistId,
                feePerSession: t.feePerSession
            }))
        );
    }

    revalidatePath("/childrens");
    revalidatePath("/settings");
    return { message: "Child created" };
}

export async function updateChild(id: string, formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const name = formData.get("name") as string;
    const status = (formData.get("status") as "ACTIVE" | "INACTIVE") || "ACTIVE";
    const dob = (formData.get("dob") as string) || "";
    const gender = (formData.get("gender") as string) || "";
    const diagnosis = (formData.get("diagnosis") as string) || "";
    const parentId = (formData.get("parentId") as string) || "";

    const therapiesStr = (formData.get("therapies") as string) || "[]";
    const therapiesList = JSON.parse(therapiesStr);

    const validatedFields = ChildSchema.safeParse({
        name,
        status,
        dob,
        gender,
        diagnosis,
        parentId,
        therapies: therapiesList
    });

    if (!validatedFields.success) {
        return {
            message: "Validation Error",
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    const { name: vName, status: vStatus, dob: vDob, gender: vGender, diagnosis: vDiagnosis, parentId: vParentId, therapies: vTherapies } = validatedFields.data;

    // Validate that all therapies have a therapist assigned
    if (vTherapies && vTherapies.length > 0) {
        const therapiesWithoutTherapist = vTherapies.filter(
            t => !t.therapistId || t.therapistId === ""
        );

        if (therapiesWithoutTherapist.length > 0) {
            return {
                message: "Validation failed",
                errors: {
                    therapies: ["All selected therapies must have a therapist assigned"]
                }
            };
        }

        // Validate that all therapies have a session fee
        const therapiesWithoutFee = vTherapies.filter(
            t => !t.feePerSession || t.feePerSession === ""
        );

        if (therapiesWithoutFee.length > 0) {
            return {
                message: "Validation failed",
                errors: {
                    therapies: ["All selected therapies must have a session fee"]
                }
            };
        }
    }

    await db.update(children).set({
        name: vName,
        status: vStatus,
        dob: vDob,
        gender: vGender,
        diagnosis: vDiagnosis,
        parentId: vParentId,
    }).where(eq(children.id, id));

    // Update therapies: Delete all and re-insert (simplest strategy)
    await db.delete(childTherapies).where(eq(childTherapies.childId, id));

    if (vTherapies.length > 0) {
        await db.insert(childTherapies).values(
            vTherapies.map(t => ({
                childId: id,
                therapyId: t.therapyId,
                therapistId: t.therapistId,
                feePerSession: t.feePerSession
            }))
        );
    }

    revalidatePath("/childrens");
    revalidatePath("/settings");
    return { message: "Child updated" };
}

export async function deleteChild(id: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    try {
        await db.delete(children).where(eq(children.id, id));
    } catch (e) {
        return { message: "Cannot delete child in use" };
    }

    revalidatePath("/settings");
    return { message: "Child deleted" };
}

// ----------------------------------------------------------------------
// GOAL ACTIONS
// ----------------------------------------------------------------------

export async function createGoal(formData: FormData) {
    try {
        const session = await auth();
        // Allow parents? Requirement says "therapist need goals page". Let's restrict to Therapist/Admin for now.
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized: Only therapists/admins can create goals" };
        }

        const rawData = {
            title: formData.get("title") as string,
            childId: formData.get("childId") as string,
            therapyId: formData.get("therapyId") as string,
            startDate: formData.get("startDate") as string,
            endDate: formData.get("endDate") as string,
            objectives: formData.get("objectives") as string,
            status: (formData.get("status") as any) || "IN_PROGRESS",
        };

        const validatedFields = GoalSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { title, childId, therapyId, startDate, endDate, objectives, status } = validatedFields.data;

        // Parse objectives (it's a JSON stringified array)
        let objectivesList: string[] = [];
        try {
            objectivesList = JSON.parse(objectives);
        } catch (e) {
            objectivesList = [objectives];
        }

        // Filter out empty ones just in case
        const finalObjectives = objectivesList.filter(o => o.trim() !== "");

        if (finalObjectives.length === 0) {
            return { message: "At least one valid goal is required" };
        }

        // Create a separate goal record for each objective
        for (const objectiveText of finalObjectives) {
            await db.insert(goals).values({
                title: objectiveText, // Each objective becomes a separate goal with its own title
                childId,
                therapyId,
                therapistId: session.user.id,
                startDate: new Date(startDate).toISOString(),
                endDate: new Date(endDate).toISOString(),
                objectives: JSON.stringify([objectiveText]), // Keep as array for compatibility if needed elsewhere
                status: status as any
            });
        }

        revalidatePath("/goals");
        revalidatePath(`/childrens/${childId}`);
        return { message: `${finalObjectives.length} goals created successfully` };

    } catch (error) {
        console.error("createGoal error:", error);
        return { message: "Failed to create goal" };
    }
}

export async function updateGoal(formData: FormData) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        const rawData = {
            id: formData.get("id") as string,
            title: formData.get("title") as string,
            childId: formData.get("childId") as string, // Might not update childId, but schema expects it if we use GoalSchema. UpdateGoalSchema usually partial?
            // UpdateGoalSchema extends partial GoalSchema and adds ID.
            // Let's grab what we can.
            therapyId: formData.get("therapyId") as string, // Might need to pass even if hidden or not changed
            startDate: formData.get("startDate") as string,
            endDate: formData.get("endDate") as string,
            objectives: formData.get("objectives") as string,
            status: formData.get("status") as any,
        };

        const validatedFields = UpdateGoalSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { id, title, startDate, endDate, objectives, status, childId, therapyId } = validatedFields.data;

        // When updating, we are updating a single specific goal record.
        // We use the first objective if titles aren't explicitly passed, or vice-versa.
        let finalTitle = title;
        if (!finalTitle && objectives) {
            try {
                const parsed = JSON.parse(objectives);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    finalTitle = parsed[0];
                }
            } catch (e) { }
        }

        await db.update(goals).set({
            title: finalTitle || null,
            childId: childId || undefined,
            therapyId: therapyId || undefined,
            startDate: startDate ? new Date(startDate).toISOString() : undefined,
            endDate: endDate ? new Date(endDate).toISOString() : undefined,
            objectives: objectives || undefined,
            status: status as any,
            updatedAt: new Date()
        }).where(eq(goals.id, id));

        revalidatePath("/goals");
        if (childId) revalidatePath(`/childrens/${childId}`);

        return { message: "Goal updated successfully" };

    } catch (error) {
        console.error("updateGoal error:", error);
        return { message: "Failed to update goal" };
    }
}

export async function deleteGoal(id: string) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        await db.delete(goals).where(eq(goals.id, id));
        revalidatePath("/goals");
        return { message: "Goal deleted successfully" };
    } catch (error) {
        console.error("deleteGoal error:", error);
        return { message: "Failed to delete goal" };
    }
}

// ========================================
// Session Notes Actions
// ========================================

export async function createSessionNote(formData: FormData) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        const validated = SessionNoteSchema.safeParse({
            childId: formData.get("childId"),
            therapyId: formData.get("therapyId"),
            date: formData.get("date"),
            goalsAddressed: formData.get("goalsAddressed"),
            activities: formData.get("activities"),
        });

        if (!validated.success) {
            return {
                message: "Validation failed",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { childId, therapyId, date, goalsAddressed, activities } = validated.data;

        await db.insert(sessionNotes).values({
            childId,
            therapyId,
            therapistId: session.user.id,
            date,
            goalsAddressed: goalsAddressed || null,
            activities: activities || null,
        });

        revalidatePath("/session-notes");
        return { message: "Session note created successfully" };
    } catch (error) {
        console.error("createSessionNote error:", error);
        return { message: "Failed to create session note" };
    }
}

export async function updateSessionNote(formData: FormData) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        const validated = UpdateSessionNoteSchema.safeParse({
            id: formData.get("id"),
            childId: formData.get("childId"),
            therapyId: formData.get("therapyId"),
            date: formData.get("date"),
            goalsAddressed: formData.get("goalsAddressed"),
            activities: formData.get("activities"),
        });

        if (!validated.success) {
            return {
                message: "Validation failed",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { id, ...updateData } = validated.data;

        // Filter out undefined values
        const filteredData = Object.fromEntries(
            Object.entries(updateData).filter(([_, v]) => v !== undefined)
        );

        if (Object.keys(filteredData).length === 0) {
            return { message: "No fields to update" };
        }

        await db.update(sessionNotes)
            .set({
                ...filteredData,
                updatedAt: new Date(),
            })
            .where(and(
                eq(sessionNotes.id, id),
                eq(sessionNotes.therapistId, session.user.id)
            ));

        revalidatePath("/session-notes");
        return { message: "Session note updated successfully" };
    } catch (error) {
        console.error("updateSessionNote error:", error);
        return { message: "Failed to update session note" };
    }
}

export async function deleteSessionNote(id: string) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        await db.delete(sessionNotes).where(
            and(
                eq(sessionNotes.id, id),
                eq(sessionNotes.therapistId, session.user.id)
            )
        );

        revalidatePath("/session-notes");
        return { message: "Session note deleted successfully" };
    } catch (error) {
        console.error("deleteSessionNote error:", error);
        return { message: "Failed to delete session note" };
    }
}


export async function markSessionNoteAsViewed(id: string) {
    try {
        const session = await auth();
        // Only parents trigger this tracking
        if (session?.user?.role !== "PARENT") return { success: false };

        await db.update(sessionNotes)
            .set({ parentViewedAt: new Date() })
            .where(eq(sessionNotes.id, id));

        revalidatePath("/session-notes");
        return { success: true };
    } catch (error) {
        console.error("markSessionNoteAsViewed error:", error);
        return { success: false };
    }
}

// ========================================
// Home Program Actions
// ========================================

export async function createHomeProgram(formData: FormData) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        const rawTasksStr = formData.get("tasks") as string || "[]";
        const rawTasks = JSON.parse(rawTasksStr);

        const validated = HomeProgramSchema.safeParse({
            childId: formData.get("childId"),
            therapyId: formData.get("therapyId"),
            title: formData.get("title"),
            tasks: rawTasks,
            status: formData.get("status") || "ACTIVE",
        });

        if (!validated.success) {
            return {
                message: "Validation failed",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { childId, therapyId, title, tasks, status } = validated.data;

        const [newProgram] = await db.insert(homePrograms).values({
            childId,
            therapyId,
            therapistId: session.user.id,
            title,
            status,
        }).returning({ id: homePrograms.id });

        if (newProgram && tasks.length > 0) {
            await db.insert(homeProgramTasks).values(
                tasks.map(t => ({
                    programId: newProgram.id,
                    description: t.description,
                    status: t.status || "PENDING",
                }))
            );
        }

        revalidatePath("/home-programs");
        revalidatePath(`/childrens/${childId}`);
        return { message: "Home program created successfully" };
    } catch (error) {
        console.error("createHomeProgram error:", error);
        return { message: "Failed to create home program" };
    }
}

export async function updateHomeProgram(formData: FormData) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        const id = formData.get("id") as string;
        const rawTasksStr = formData.get("tasks") as string || "[]";
        const rawTasks = JSON.parse(rawTasksStr);

        const validated = UpdateHomeProgramSchema.safeParse({
            id,
            childId: formData.get("childId"),
            therapyId: formData.get("therapyId"),
            title: formData.get("title"),
            tasks: rawTasks,
            status: formData.get("status"),
        });

        if (!validated.success) {
            return {
                message: "Validation failed",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { childId, therapyId, title, tasks, status } = validated.data;

        await db.update(homePrograms).set({
            title,
            therapyId,
            status,
            updatedAt: new Date(),
        }).where(eq(homePrograms.id, id));

        // Update tasks: simple strategy, delete and re-insert
        await db.delete(homeProgramTasks).where(eq(homeProgramTasks.programId, id));
        if (tasks && tasks.length > 0) {
            await db.insert(homeProgramTasks).values(
                tasks.map(t => ({
                    programId: id,
                    description: t.description,
                    status: t.status,
                }))
            );
        }

        revalidatePath("/home-programs");
        if (childId) revalidatePath(`/childrens/${childId}`);
        return { message: "Home program updated successfully" };
    } catch (error) {
        console.error("updateHomeProgram error:", error);
        return { message: "Failed to update home program" };
    }
}

export async function deleteHomeProgram(id: string) {
    try {
        const session = await auth();
        if (!session?.user || session.user.role === "PARENT") {
            return { message: "Unauthorized" };
        }

        // Fetch program to get childId for revalidation
        const program = await db.query.homePrograms.findFirst({
            where: eq(homePrograms.id, id),
            columns: { childId: true }
        });

        await db.delete(homePrograms).where(eq(homePrograms.id, id));

        revalidatePath("/home-programs");
        if (program?.childId) revalidatePath(`/childrens/${program.childId}`);
        return { message: "Home program deleted successfully" };
    } catch (error) {
        console.error("deleteHomeProgram error:", error);
        return { message: "Failed to delete home program" };
    }
}

export async function updateHomeProgramTaskStatus(taskId: string, status: any) {
    try {
        const session = await auth();
        if (!session?.user) return { message: "Unauthorized" };

        await db.update(homeProgramTasks)
            .set({ status, updatedAt: new Date() })
            .where(eq(homeProgramTasks.id, taskId));

        revalidatePath("/home-programs");
        return { success: true };
    } catch (error) {
        console.error("updateHomeProgramTaskStatus error:", error);
        return { message: "Failed to update task status" };
    }
}

export async function submitHomeProgramReport(data: {
    programId: string;
    childId: string;
    date: string;
    tasks: {
        taskId: string;
        supportLevelId: number;
        supportLevelName: string;
        score: number;
    }[];
}) {
    const session = await auth();
    if (!session?.user || session.user.role !== "PARENT") {
        return { error: "Only parents can submit daily reports." };
    }

    try {
        // 1. Get total tasks count for the program
        const programTasks = await db.select({ id: homeProgramTasks.id })
            .from(homeProgramTasks)
            .where(eq(homeProgramTasks.programId, data.programId));

        const totalTasksCount = programTasks.length;
        const completedTasksCount = data.tasks.length;

        // STEP 1: Task Completion Score (50%)
        const taskScore = totalTasksCount > 0
            ? (completedTasksCount / totalTasksCount) * 50
            : 0;

        // STEP 2: Support Level Score (50%)
        // We take the average score of completed tasks
        const totalSupportPoints = data.tasks.reduce((acc, t) => acc + t.score, 0);
        const supportScore = completedTasksCount > 0
            ? (totalSupportPoints / completedTasksCount)
            : 0;

        // STEP 3: Final Activity Percentage
        const finalScore = Number((taskScore + supportScore).toFixed(2));

        // 3. Performance Level Mapping
        let performanceLevel = "Needs Maximum Support";
        if (finalScore > 90) performanceLevel = "Generalization";
        else if (finalScore > 70) performanceLevel = "Independent";
        else if (finalScore > 40) performanceLevel = "Developing 🐝";
        else if (finalScore > 20) performanceLevel = "Emerging";

        // 4. Check if a submission for this program and date already exists
        const [existingSubmission] = await db.select()
            .from(homeProgramSubmissions)
            .where(
                and(
                    eq(homeProgramSubmissions.programId, data.programId),
                    eq(homeProgramSubmissions.date, data.date)
                )
            )
            .limit(1);

        let submissionId = existingSubmission?.id;

        const submissionData = {
            programId: data.programId,
            childId: data.childId,
            parentId: session.user.id,
            date: data.date,
            overallScore: finalScore.toString(),
            performanceLevel,
        };

        if (!existingSubmission) {
            // Create new submission
            const [newSubmission] = await db.insert(homeProgramSubmissions)
                .values(submissionData)
                .returning();
            submissionId = newSubmission.id;
        } else {
            // Update existing submission with new scores
            await db.update(homeProgramSubmissions)
                .set(submissionData)
                .where(eq(homeProgramSubmissions.id, submissionId));

            // Clear existing tasks for this submission to replace them
            await db.delete(homeProgramSubmissionTasks)
                .where(eq(homeProgramSubmissionTasks.submissionId, submissionId));
        }

        // 5. Create/Replace the task entries
        if (data.tasks.length > 0) {
            await db.insert(homeProgramSubmissionTasks).values(
                data.tasks.map(task => ({
                    submissionId: submissionId,
                    taskId: task.taskId,
                    supportLevelId: task.supportLevelId,
                    supportLevelName: task.supportLevelName,
                    score: task.score,
                }))
            );
        }

        revalidatePath(`/home-programs/${data.programId}`);
        revalidatePath("/home-programs");

        return { success: true, submissionId };
    } catch (error: any) {
        console.error("Failed to submit home program report:", error);
        return { error: error?.message || "Failed to submit report. Please try again." };
    }
}
