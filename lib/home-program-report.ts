import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { homeProgramSubmissions, homeProgramSubmissionTasks, homeProgramTasks } from "@/lib/db/schema";

/** Support levels offered on the daily report (website HomeProgramReportForm + mobile app). */
export const SUPPORT_LEVELS = [
    { id: 1, score: 10, name: "Full Physical Support" },
    { id: 2, score: 20, name: "Partial Physical Support" },
    { id: 3, score: 30, name: "Verbal / Gestural Cue" },
    { id: 4, score: 40, name: "Independent" },
    { id: 5, score: 50, name: "Independent + Generalized" },
] as const;

export type ReportTask = {
    taskId: string;
    supportLevelId: number;
    supportLevelName: string;
    score: number;
};

/**
 * Creates or replaces the parent's daily report for a program/date.
 * Shared by the website's submitHomeProgramReport action and the mobile API.
 */
export async function saveHomeProgramReport(data: {
    programId: string;
    childId: string;
    parentId: string;
    date: string;
    tasks: ReportTask[];
}) {
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

    // STEP 2: Support Level Score (50%) - average score of completed tasks
    const totalSupportPoints = data.tasks.reduce((acc, t) => acc + t.score, 0);
    const supportScore = completedTasksCount > 0
        ? (totalSupportPoints / completedTasksCount)
        : 0;

    // STEP 3: Final Activity Percentage
    const finalScore = Number((taskScore + supportScore).toFixed(2));

    // Performance Level Mapping
    let performanceLevel = "Needs Maximum Support";
    if (supportScore > 45) performanceLevel = "Generalization";
    else if (supportScore > 35) performanceLevel = "Independent";
    else if (supportScore > 20) performanceLevel = "Developing 🐝";
    else if (supportScore > 10) performanceLevel = "Emerging";

    // Check if a submission for this program and date already exists
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
        parentId: data.parentId,
        date: data.date,
        overallScore: finalScore.toString(),
        taskScore: taskScore.toString(),
        supportScore: supportScore.toString(),
        performanceLevel,
    };

    if (!existingSubmission) {
        const [newSubmission] = await db.insert(homeProgramSubmissions)
            .values(submissionData)
            .returning();
        submissionId = newSubmission.id;
    } else {
        await db.update(homeProgramSubmissions)
            .set(submissionData)
            .where(eq(homeProgramSubmissions.id, submissionId));

        // Clear existing tasks for this submission to replace them
        await db.delete(homeProgramSubmissionTasks)
            .where(eq(homeProgramSubmissionTasks.submissionId, submissionId));
    }

    // Create/Replace the task entries
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

    return { submissionId: submissionId!, overallScore: finalScore, performanceLevel };
}
