import { pgTable, text, timestamp, uuid, integer, decimal, pgEnum, date } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 1. Enums
export const roleEnum = pgEnum("role", ["ADMIN", "THERAPIST", "PARENT"]);
export const transactionTypeEnum = pgEnum("transaction_type", ["EXPENSE", "INCOME", "DUE"]);
export const sessionStatusEnum = pgEnum("session_status", ["SCHEDULED", "COMPLETED", "CANCELLED", "MISSED"]);
export const attendanceStatusEnum = pgEnum("attendance_status", ["PRESENT", "ABSENT", "EXCUSED"]);

// 2. Users Table (Admin, Therapist, Parent)
export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    role: roleEnum("role").default("PARENT").notNull(),
    mobile1: text("mobile1"),
    mobile2: text("mobile2"),
    address: text("address"),
    doj: date("doj"),
    endDate: date("end_date"),
    qualification: text("qualification"), // For Therapists
    specialization: text("specialization"), // For Therapists
    createdAt: timestamp("created_at").defaultNow().notNull(),
    // Relation for Parents -> Children is defined in children table
});

// 3. Children Table
export const children = pgTable("children", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    dob: date("dob"),
    gender: text("gender"),
    diagnosis: text("diagnosis"),
    parentId: uuid("parent_id").references(() => users.id), // Link to Parent User
    status: text("status", { enum: ["ACTIVE", "INACTIVE"] }).default("ACTIVE").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 4. Therapy Services (OT, ST, etc.)
export const therapies = pgTable("therapies", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(), // e.g., "Occupational Therapy"
    description: text("description"),
    chargePerSession: decimal("charge_per_session", { precision: 10, scale: 2 }), // Default charge
    status: text("status", { enum: ["ACTIVE", "INACTIVE"] }).default("ACTIVE").notNull(),
    defaultDurationMinutes: integer("default_duration_minutes").default(45).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 5. Sessions (Scheduling)
export const sessions = pgTable("sessions", {
    id: uuid("id").defaultRandom().primaryKey(),
    childId: uuid("child_id").references(() => children.id).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id).notNull(),
    therapyId: uuid("therapy_id").references(() => therapies.id).notNull(),
    date: timestamp("date").notNull(), // Date and Time
    durationMinutes: integer("duration_minutes").default(45),
    status: sessionStatusEnum("status").default("SCHEDULED"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 6. Session Notes (Documentation)
export const sessionNotes = pgTable("session_notes", {
    id: uuid("id").defaultRandom().primaryKey(),
    sessionId: uuid("session_id").references(() => sessions.id, { onDelete: "cascade" }).notNull(),
    goalsAddressed: text("goals_addressed"),
    activities: text("activities"),
    response: text("response"),
    remarks: text("remarks"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 7. Assessments
export const assessments = pgTable("assessments", {
    id: uuid("id").defaultRandom().primaryKey(),
    childId: uuid("child_id").references(() => children.id).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id).notNull(),
    title: text("title").notNull(), // e.g., "Initial Assessment"
    date: date("date").notNull(),
    notes: text("notes"),
    attachmentUrl: text("attachment_url"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 8. Categories (For Expenses/Income - kept from original but simplified)
export const categories = pgTable("categories", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    type: transactionTypeEnum("type").default("EXPENSE"), // To distinguish Expense vs Income categories
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 9. Expenses (Finance Module)
// 9. Expenses (Finance Module)
export const expenses = pgTable("expenses", {
    id: uuid("id").defaultRandom().primaryKey(),
    description: text("description").notNull(),
    amount: decimal("amount", { precision: 15, scale: 2 }).notNull(),
    date: timestamp("date").notNull(),
    type: transactionTypeEnum("type").default("EXPENSE").notNull(),
    categoryId: uuid("category_id").references(() => categories.id),

    // Optional links to entity
    childId: uuid("child_id").references(() => children.id),
    recordedBy: uuid("recorded_by").references(() => users.id), // Admin who recorded it

    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 10. Child Therapies Junction (Many-to-Many)
export const childTherapies = pgTable("child_therapies", {
    childId: uuid("child_id").references(() => children.id, { onDelete: "cascade" }).notNull(),
    therapyId: uuid("therapy_id").references(() => therapies.id, { onDelete: "cascade" }).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id), // Specific therapist for this therapy
}, (t) => ({
    pk: { columns: [t.childId, t.therapyId] },
}));

// Relations
export const usersRelations = relations(users, ({ many }) => ({
    sessionsAsTherapist: many(sessions, { relationName: "therapistSessions" }),
    children: many(children), // Parent's children
    assignedTherapies: many(childTherapies),
}));

export const childrenRelations = relations(children, ({ one, many }) => ({
    parent: one(users, {
        fields: [children.parentId],
        references: [users.id],
    }),
    sessions: many(sessions),
    assessments: many(assessments),
    therapyTypes: many(childTherapies),
}));

export const therapiesRelations = relations(therapies, ({ many }) => ({
    children: many(childTherapies),
}));

export const childTherapiesRelations = relations(childTherapies, ({ one }) => ({
    child: one(children, {
        fields: [childTherapies.childId],
        references: [children.id],
    }),
    therapy: one(therapies, {
        fields: [childTherapies.therapyId],
        references: [therapies.id],
    }),
    therapist: one(users, {
        fields: [childTherapies.therapistId],
        references: [users.id],
    }),
}));

export const sessionsRelations = relations(sessions, ({ one, many }) => ({
    child: one(children, { fields: [sessions.childId], references: [children.id] }),
    therapist: one(users, { fields: [sessions.therapistId], references: [users.id], relationName: "therapistSessions" }),
    therapy: one(therapies, { fields: [sessions.therapyId], references: [therapies.id] }),
    notes: one(sessionNotes, { fields: [sessions.id], references: [sessionNotes.sessionId] }), // 1-to-1 usually
}));

export const expensesRelations = relations(expenses, ({ one }) => ({
    category: one(categories, { fields: [expenses.categoryId], references: [categories.id] }),
    child: one(children, { fields: [expenses.childId], references: [children.id] }),
}));



