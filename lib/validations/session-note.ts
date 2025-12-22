import { z } from "zod";

// Activity schema for session notes
export const ActivitySchema = z.object({
    description: z.string().min(1, "Activity description is required"),
    prompt: z.string().min(1, "Prompt is required"),
});

// Session Note schema for creation
export const SessionNoteSchema = z.object({
    childId: z.string().uuid("Invalid child ID"),
    therapyId: z.string().uuid("Invalid therapy ID"),
    date: z.string().min(1, "Date is required"),
    goalsAddressed: z.string().optional(), // JSON stringified array of goal IDs
    activities: z.string().optional(), // JSON stringified array of activities
});

// Session Note update schema
export const UpdateSessionNoteSchema = z.object({
    id: z.string().uuid("Invalid note ID"),
    childId: z.string().uuid("Invalid child ID").optional(),
    therapyId: z.string().uuid("Invalid therapy ID").optional(),
    date: z.string().optional(),
    goalsAddressed: z.string().optional(),
    activities: z.string().optional(),
});
