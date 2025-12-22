"use server";

import { revalidatePath } from "next/cache";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { db } from "./db";
import { users, children, therapies, sessions, childTherapies, goals, sessionNotes } from "./db/schema"; // Removed families, staffs, budgets, expenses, categories

import bcrypt from "bcryptjs";
import { eq, desc, and, isNotNull } from "drizzle-orm";
import { auth } from "@/auth";
import { CreateUserSchema, UpdateUserSchema } from "./validations/user";
import { ChildSchema } from "./validations/child";
import { GoalSchema, UpdateGoalSchema } from "./validations/goal";
import { SessionNoteSchema, UpdateSessionNoteSchema } from "./validations/session-note";
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
            endDate: rawEndDate
        });

        if (!validatedFields.success) {
            console.log("createUser: Validation failed", validatedFields.error.flatten().fieldErrors);
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { name, email, role, qualification, specialization, mobile1, mobile2, address, doj, endDate } = validatedFields.data;
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
            password: rawPassword
        });

        if (!validatedFields.success) {
            console.log("updateUser: Validation failed", validatedFields.error.flatten().fieldErrors);
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { name, email, role, qualification, specialization, mobile1, mobile2, address, doj, endDate, password } = validatedFields.data;

        const updateData: any = { name, email, qualification, specialization, mobile1, mobile2, address, doj, endDate }; if (session.user.role === "ADMIN") {
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
    let nextCaseNumber = "WBC000001";
    const lastChild = await db.query.children.findFirst({
        where: isNotNull(children.caseNumber),
        orderBy: [desc(children.caseNumber)]
    });

    if (lastChild && lastChild.caseNumber) {
        const lastNum = parseInt(lastChild.caseNumber.replace("WBC", ""));
        if (!isNaN(lastNum)) {
            nextCaseNumber = `WBC${String(lastNum + 1).padStart(6, "0")}`;
        }
    }

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

        await db.insert(goals).values({
            title,
            childId,
            therapyId,
            therapistId: session.user.id,
            startDate: new Date(startDate).toISOString(),
            endDate: new Date(endDate).toISOString(),
            objectives,
            status: status as any
        });

        revalidatePath("/goals");
        revalidatePath(`/childrens/${childId}`);
        return { message: "Goal created successfully" };

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

        await db.update(goals).set({
            title,
            childId: childId || undefined,
            therapyId: therapyId || undefined,
            startDate: startDate ? new Date(startDate).toISOString() : undefined,
            endDate: endDate ? new Date(endDate).toISOString() : undefined,
            objectives,
            status: status as any,
            updatedAt: new Date()
        }).where(eq(goals.id, id));

        revalidatePath("/goals");
        if (childId) revalidatePath(`/childrens/${childId}`); // Also revalidate new child page if changed

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

