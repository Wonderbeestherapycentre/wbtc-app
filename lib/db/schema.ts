import { pgTable, text, timestamp, uuid, integer, decimal, pgEnum, date, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 1. Enums
export const roleEnum = pgEnum("role", ["ADMIN", "THERAPIST", "PARENT"]);
export const transactionTypeEnum = pgEnum("transaction_type", ["EXPENSE", "INCOME", "DUE"]);
export const sessionStatusEnum = pgEnum("session_status", ["SCHEDULED", "COMPLETED", "CANCELLED", "RESCHEDULED"]);
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
    status: text("status", { enum: ["ACTIVE", "INACTIVE"] }).default("ACTIVE").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
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
    caseNumber: text("case_number").unique(), // Dynamic ID like WBC000001
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
    childId: uuid("child_id").references(() => children.id).notNull(),
    therapyId: uuid("therapy_id").references(() => therapies.id).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id).notNull(),
    date: date("date").notNull(),
    sessionId: uuid("session_id").references(() => sessions.id, { onDelete: "cascade" }), // Optional link to session
    goalsAddressed: text("goals_addressed"), // JSON stringified array of goal IDs
    activities: text("activities"), // JSON stringified array of {description: string, prompt: string}
    response: text("response"),
    remarks: text("remarks"),
    parentViewedAt: timestamp("parent_viewed_at"), // Track when parent viewed this note
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
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


// 10. Child Therapies Junction (Many-to-Many)
export const childTherapies = pgTable("child_therapies", {
    childId: uuid("child_id").references(() => children.id, { onDelete: "cascade" }).notNull(),
    therapyId: uuid("therapy_id").references(() => therapies.id, { onDelete: "cascade" }).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id), // Specific therapist for this therapy
    feePerSession: decimal("fee_per_session", { precision: 10, scale: 2 }), // Custom fee for this child (can differ from therapy's default charge)
}, (t) => ({
    pk: { columns: [t.childId, t.therapyId] },
}));

// 8. Goals (Therapy Objectives)
export const goals = pgTable("goals", {
    id: uuid("id").defaultRandom().primaryKey(),
    childId: uuid("child_id").references(() => children.id).notNull(),
    therapyId: uuid("therapy_id").references(() => therapies.id).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id).notNull(),
    title: text("title"),
    objectives: text("objectives"), // JSON array stringified or simple text
    startDate: date("start_date").notNull(),
    endDate: date("end_date").notNull(),
    status: text("status", { enum: ["IN_PROGRESS", "COMPLETED", "ARCHIVED"] }).default("IN_PROGRESS").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 9. Home Programs
export const homePrograms = pgTable("home_programs", {
    id: uuid("id").defaultRandom().primaryKey(),
    childId: uuid("child_id").references(() => children.id, { onDelete: "cascade" }).notNull(),
    therapistId: uuid("therapist_id").references(() => users.id).notNull(),
    therapyId: uuid("therapy_id").references(() => therapies.id).notNull(),
    title: text("title").notNull(),
    status: text("status", { enum: ["ACTIVE", "INACTIVE", "COMPLETED"] }).default("ACTIVE").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const homeProgramTasks = pgTable("home_program_tasks", {
    id: uuid("id").defaultRandom().primaryKey(),
    programId: uuid("program_id").references(() => homePrograms.id, { onDelete: "cascade" }).notNull(),
    description: text("description").notNull(),
    status: text("status", { enum: ["PENDING", "COMPLETED", "IN_PROGRESS", "BORED", "REFUSED"] }).default("PENDING").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const homeProgramSubmissions = pgTable("home_program_submissions", {
    id: uuid("id").defaultRandom().primaryKey(),
    programId: uuid("program_id").references(() => homePrograms.id, { onDelete: "cascade" }).notNull(),
    childId: uuid("child_id").references(() => children.id, { onDelete: "cascade" }).notNull(),
    parentId: uuid("parent_id").references(() => users.id).notNull(),
    date: date("date").notNull(),
    overallScore: decimal("overall_score", { precision: 5, scale: 2 }).default("0").notNull(),
    taskScore: decimal("task_score", { precision: 5, scale: 2 }).default("0").notNull(),
    supportScore: decimal("support_score", { precision: 5, scale: 2 }).default("0").notNull(),
    performanceLevel: text("performance_level"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => ({
    unq: uniqueIndex("home_program_submissions_program_date_idx").on(t.programId, t.date),
}));

export const homeProgramSubmissionTasks = pgTable("home_program_submission_tasks", {
    id: uuid("id").defaultRandom().primaryKey(),
    submissionId: uuid("submission_id").references(() => homeProgramSubmissions.id, { onDelete: "cascade" }).notNull(),
    taskId: uuid("task_id").references(() => homeProgramTasks.id, { onDelete: "cascade" }).notNull(),
    supportLevelId: integer("support_level_id").notNull(),
    supportLevelName: text("support_level_name").notNull(),
    score: integer("score").notNull(),
});

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
    notes: many(sessionNotes), // Can have multiple notes
}));

export const sessionNotesRelations = relations(sessionNotes, ({ one }) => ({
    child: one(children, { fields: [sessionNotes.childId], references: [children.id] }),
    therapy: one(therapies, { fields: [sessionNotes.therapyId], references: [therapies.id] }),
    therapist: one(users, { fields: [sessionNotes.therapistId], references: [users.id] }),
    session: one(sessions, { fields: [sessionNotes.sessionId], references: [sessions.id] }),
}));

export const homeProgramSubmissionsRelations = relations(homeProgramSubmissions, ({ one, many }) => ({
    program: one(homePrograms, { fields: [homeProgramSubmissions.programId], references: [homePrograms.id] }),
    child: one(children, { fields: [homeProgramSubmissions.childId], references: [children.id] }),
    parent: one(users, { fields: [homeProgramSubmissions.parentId], references: [users.id] }),
    submissionTasks: many(homeProgramSubmissionTasks),
}));

export const homeProgramSubmissionTasksRelations = relations(homeProgramSubmissionTasks, ({ one }) => ({
    submission: one(homeProgramSubmissions, { fields: [homeProgramSubmissionTasks.submissionId], references: [homeProgramSubmissions.id] }),
    task: one(homeProgramTasks, { fields: [homeProgramSubmissionTasks.taskId], references: [homeProgramTasks.id] }),
}));

export const goalsRelations = relations(goals, ({ one }) => ({
    child: one(children, { fields: [goals.childId], references: [children.id] }),
    therapy: one(therapies, { fields: [goals.therapyId], references: [therapies.id] }),
    therapist: one(users, { fields: [goals.therapistId], references: [users.id] }),
}));

export const homeProgramsRelations = relations(homePrograms, ({ one, many }) => ({
    child: one(children, { fields: [homePrograms.childId], references: [children.id] }),
    therapy: one(therapies, { fields: [homePrograms.therapyId], references: [therapies.id] }),
    therapist: one(users, { fields: [homePrograms.therapistId], references: [users.id] }),
    tasks: many(homeProgramTasks),
    submissions: many(homeProgramSubmissions),
}));

export const homeProgramTasksRelations = relations(homeProgramTasks, ({ one }) => ({
    program: one(homePrograms, { fields: [homeProgramTasks.programId], references: [homePrograms.id] }),
}));





