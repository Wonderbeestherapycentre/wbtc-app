-- CreateTable
CREATE TABLE IF NOT EXISTS "home_program_submissions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "program_id" UUID NOT NULL REFERENCES "home_programs"("id") ON DELETE CASCADE,
    "child_id" UUID NOT NULL REFERENCES "children"("id") ON DELETE CASCADE,
    "parent_id" UUID NOT NULL REFERENCES "users"("id"),
    "date" DATE NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now()
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "home_program_submission_tasks" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "submission_id" UUID NOT NULL REFERENCES "home_program_submissions"("id") ON DELETE CASCADE,
    "task_id" UUID NOT NULL REFERENCES "home_program_tasks"("id") ON DELETE CASCADE,
    "support_level_id" INTEGER NOT NULL,
    "support_level_name" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- Note: We might want a unique index on (program_id, date) to prevent duplicate daily reports
-- CREATE UNIQUE INDEX IF NOT EXISTS "home_program_submissions_program_id_date_idx" ON "home_program_submissions"("program_id", "date");
