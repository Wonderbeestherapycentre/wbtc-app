"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { db } from "./db";
import { users, expenses, categories, children, therapies, sessions, childTherapies } from "./db/schema"; // Removed families, staffs, budgets

import bcrypt from "bcryptjs";
import { eq, desc, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { CreateUserSchema, UpdateUserSchema } from "./validations/user";
import { ChildSchema } from "./validations/child";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const credentials = Object.fromEntries(formData);
        await signIn("credentials", { ...credentials, redirectTo: "/dashboard" });
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

        const rawData = Object.fromEntries(formData.entries());
        const validatedFields = CreateUserSchema.safeParse(rawData);

        if (!validatedFields.success) {
            console.log("createUser: Validation failed", validatedFields.error.flatten().fieldErrors);
            return {
                message: "Validation Error",
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { name, email, password, role, qualification, specialization, mobile1, mobile2, address, doj, endDate } = validatedFields.data;

        console.log("createUser: Validated Data:", { name, email, role, qualification, specialization, mobile1, mobile2, address, doj, endDate });

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
            doj,
            endDate,
        });

        revalidatePath("/settings");
        revalidatePath("/users");
        return { message: "User created" };
    } catch (error: any) {
        console.error("Create User Error:", error);
        return { message: error.message || "Failed to create user" };
    }
}

export async function addExpenseAction(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user) return { message: "Unauthorized" };
    // Only Admin can add expenses? Or Therapist?
    // Let's allow Admin and maybe Therapist.
    if (session.user.role === "PARENT") return { message: "Unauthorized" };


    const amount = parseFloat(formData.get("amount") as string);
    const description = (formData.get("description") as string) || "";
    const dateStr = formData.get("date") as string;
    const type = (formData.get("type") as "EXPENSE" | "INCOME" | "DUE") || "EXPENSE";
    const childId = (formData.get("childId") as string) || null;
    // staffId removed. type is enough? Or maybe recordedBy?


    if (!amount || !dateStr) {
        return { message: "Missing fields" };
    }

    if (!formData.get("categoryId")) {
        return { message: "Category is required" };
    }

    await db.insert(expenses).values({
        // userId: session.user.id, // Removed userId constraint from schema? No, keep it as 'recorded by' if needed? 
        // Schema definition: "userId" removed? Let's check schema.ts content I wrote.
        // I kept 'expense' table but refactoring.
        // Wait, I changed 'userId' to 'recordedBy' (optional) in my thought, but let's check what I actually wrote.
        // I wrote: recordedBy: uuid("recorded_by").references(() => users.id), // Admin who recorded it

        description,
        amount: amount.toString(),
        date: new Date(dateStr),
        type: type,
        categoryId: (formData.get("categoryId") as string),
        childId: childId,
        recordedBy: session.user.id
    });

    revalidatePath("/dashboard");
    revalidatePath("/expenses");
    return { message: "Transaction added" };
}

export async function markDueAsPaid(id: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const expense = await db.query.expenses.findFirst({
        where: eq(expenses.id, id)
    });

    if (!expense) return { message: "Record not found" };

    await db.update(expenses).set({
        type: "INCOME"
    }).where(eq(expenses.id, id));

    revalidatePath("/dashboard");
    revalidatePath("/expenses");
    return { message: "Payment marked as paid" };
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

        const rawData = Object.fromEntries(formData.entries());
        const validatedFields = UpdateUserSchema.safeParse(rawData);

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

        revalidatePath("/settings");
        revalidatePath("/users");
        return { message: "User updated" };
    } catch (error: any) {
        console.error("Update User Error:", error);
        return { message: error.message || "Failed to update user" };
    }
}

// --- Category Actions ---
export async function createCategory(formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const name = formData.get("name") as string;
    if (!name) return { message: "Name is required" };

    await db.insert(categories as any).values({
        name,
        // familyId removed
    });

    revalidatePath("/settings");
    return { message: "Category created" };
}

export async function updateCategory(id: string, formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const name = formData.get("name") as string;
    if (!name) return { message: "Name is required" };

    await db.update(categories).set({ name }).where(eq(categories.id, id));
    revalidatePath("/settings");
    revalidatePath("/");
    revalidatePath("/expenses");
    return { message: "Category updated" };
}

export async function deleteCategory(id: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    try {
        await db.delete(categories).where(eq(categories.id, id));
    } catch (e) {
        return { message: "Cannot delete category in use" };
    }

    revalidatePath("/settings");
    revalidatePath("/");
    revalidatePath("/expenses");
    return { message: "Category deleted" };
}

// --- Expense Actions --- (Update/Delete)
export async function deleteExpense(id: string) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    // Parent can't delete? Yes.

    await db.delete(expenses).where(eq(expenses.id, id));
    revalidatePath("/");
    revalidatePath("/expenses");
    return { message: "Expense deleted" };
}

export async function updateExpense(id: string, formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return { message: "Unauthorized" };

    const amount = parseFloat(formData.get("amount") as string);
    const description = (formData.get("description") as string) || "";
    const dateStr = formData.get("date") as string;
    const categoryId = formData.get("categoryId") as string;

    if (!amount || !dateStr || !categoryId) {
        return { message: "Missing fields" };
    }

    await db.update(expenses).set({
        amount: amount.toString(),
        description,
        date: new Date(dateStr),
        categoryId: categoryId,
        childId: (formData.get("childId") as string) || null,
        type: (formData.get("type") as "EXPENSE" | "INCOME" | "DUE") || "EXPENSE",

    }).where(eq(expenses.id, id));

    revalidatePath("/");
    revalidatePath("/expenses");
    return { message: "Transaction updated" };
}

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

    const [newChild] = await db.insert(children).values({
        name: vName,
        status: vStatus,
        dob: vDob,
        gender: vGender,
        diagnosis: vDiagnosis,
        parentId: vParentId,
    }).returning({ id: children.id });

    if (newChild && vTherapies.length > 0) {
        await db.insert(childTherapies).values(
            vTherapies.map(t => ({
                childId: newChild.id,
                therapyId: t.therapyId,
                therapistId: t.therapistId
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
                therapistId: t.therapistId
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
