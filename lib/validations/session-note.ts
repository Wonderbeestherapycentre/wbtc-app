import { z } from "zod";

// Activity schema for session notes
export const ActivitySchema = z.object({
    description: z.string().min(1, "Activity description is required"),
    prompt: z.string().min(1, "Prompt is required"),
});

// Helper to validate date is not in future
const notInFuture = (val: string | undefined) => {
    if (!val) return true;
    const date = new Date(val);
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of today
    return date <= today;
};

// Session Note schema for creation
export const SessionNoteSchema = z.object({
    childId: z.string().uuid("Invalid child ID"),
    therapyId: z.string().uuid("Invalid therapy ID"),
    date: z.string().min(1, "Date is required").refine(notInFuture, "Date cannot be in the future"),
    goalsAddressed: z.string().optional(), // JSON stringified array of goal IDs
    activities: z.string().optional(), // JSON stringified array of activities
});

// Session Note update schema
export const UpdateSessionNoteSchema = z.object({
    id: z.string().uuid("Invalid note ID"),
    childId: z.string().uuid("Invalid child ID").optional(),
    therapyId: z.string().uuid("Invalid therapy ID").optional(),
    date: z.string().optional().refine(notInFuture, "Date cannot be in the future"),
    goalsAddressed: z.string().optional(),
    activities: z.string().optional(),
});
