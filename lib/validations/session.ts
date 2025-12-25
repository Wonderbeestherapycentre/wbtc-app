import { z } from "zod";

// Helper to validate date is not too far in the past (e.g., more than 1 year)
const isReasonableDate = (val: string | undefined) => {
    if (!val) return true;
    const date = new Date(val);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return date >= oneYearAgo;
};

// Session schema for creating single sessions
export const SessionSchema = z.object({
    childId: z.string().uuid("Invalid child ID"),
    therapistId: z.string().uuid("Invalid therapist ID"),
    therapyId: z.string().uuid("Invalid therapy ID"),
    date: z.string().min(1, "Date and time is required").refine(
        (val) => !isNaN(new Date(val).getTime()),
        "Invalid date format"
    ).refine(isReasonableDate, "Date cannot be more than 1 year in the past"),
    durationMinutes: z.number().int().positive().refine(
        (val) => [30, 45, 60, 90].includes(val),
        "Duration must be 30, 45, 60, or 90 minutes"
    ),
    status: z.enum(["SCHEDULED", "COMPLETED", "CANCELLED", "RESCHEDULED"]).default("SCHEDULED"),
});

// Session update schema
export const UpdateSessionSchema = z.object({
    id: z.string().uuid("Invalid session ID"),
    childId: z.string().uuid("Invalid child ID").optional(),
    therapistId: z.string().uuid("Invalid therapist ID").optional(),
    therapyId: z.string().uuid("Invalid therapy ID").optional(),
    date: z.string().optional().refine(
        (val) => !val || !isNaN(new Date(val).getTime()),
        "Invalid date format"
    ).refine(isReasonableDate, "Date cannot be more than 1 year in the past"),
    durationMinutes: z.number().int().positive().optional().refine(
        (val) => !val || [30, 45, 60, 90].includes(val),
        "Duration must be 30, 45, 60, or 90 minutes"
    ),
    status: z.enum(["SCHEDULED", "COMPLETED", "CANCELLED", "RESCHEDULED"]).optional(),
});

// Monthly schedule schema for recurring sessions
export const MonthlyScheduleSchema = z.object({
    childId: z.string().uuid("Invalid child ID"),
    therapistId: z.string().uuid("Invalid therapist ID"),
    therapyId: z.string().uuid("Invalid therapy ID"),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (use HH:mm)"),
    startDate: z.string().min(1, "Start date is required").refine(
        (val) => !isNaN(new Date(val).getTime()),
        "Invalid date format"
    ),
    weeks: z.number().int().min(1, "Must schedule for at least 1 week").max(52, "Cannot schedule for more than 52 weeks"),
    selectedDays: z.array(z.number().int().min(0).max(6)).min(1, "At least one day must be selected"),
    durationMinutes: z.number().int().positive().refine(
        (val) => [30, 45, 60, 90].includes(val),
        "Duration must be 30, 45, 60, or 90 minutes"
    ),
});

export type SessionFormValues = z.infer<typeof SessionSchema>;
export type UpdateSessionFormValues = z.infer<typeof UpdateSessionSchema>;
export type MonthlyScheduleFormValues = z.infer<typeof MonthlyScheduleSchema>;
