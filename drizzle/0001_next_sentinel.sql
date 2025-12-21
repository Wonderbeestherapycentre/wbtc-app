CREATE TYPE "public"."attendance_status" AS ENUM('PRESENT', 'ABSENT', 'EXCUSED');--> statement-breakpoint
CREATE TYPE "public"."session_status" AS ENUM('SCHEDULED', 'COMPLETED', 'CANCELLED', 'MISSED');--> statement-breakpoint
ALTER TYPE "public"."transaction_type" ADD VALUE 'DUE';--> statement-breakpoint
CREATE TABLE "assessments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"therapist_id" uuid NOT NULL,
	"title" text NOT NULL,
	"date" date NOT NULL,
	"notes" text,
	"attachment_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "child_therapies" (
	"child_id" uuid NOT NULL,
	"therapy_id" uuid NOT NULL,
	"therapist_id" uuid,
	"fee_per_session" numeric(10, 2)
);
--> statement-breakpoint
CREATE TABLE "children" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"dob" date,
	"gender" text,
	"diagnosis" text,
	"parent_id" uuid,
	"status" text DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session_notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"session_id" uuid NOT NULL,
	"goals_addressed" text,
	"activities" text,
	"response" text,
	"remarks" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"therapist_id" uuid NOT NULL,
	"therapy_id" uuid NOT NULL,
	"date" timestamp NOT NULL,
	"duration_minutes" integer DEFAULT 45,
	"status" "session_status" DEFAULT 'SCHEDULED',
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "therapies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"charge_per_session" numeric(10, 2),
	"status" text DEFAULT 'ACTIVE' NOT NULL,
	"default_duration_minutes" integer DEFAULT 45 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "budgets" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "families" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "budgets" CASCADE;--> statement-breakpoint
DROP TABLE "families" CASCADE;--> statement-breakpoint
ALTER TABLE "categories" DROP CONSTRAINT "categories_family_id_families_id_fk";
--> statement-breakpoint
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_family_id_families_id_fk";
--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_family_id_families_id_fk";
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'PARENT'::text;--> statement-breakpoint
DROP TYPE "public"."role";--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('ADMIN', 'THERAPIST', 'PARENT');--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'PARENT'::"public"."role";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE "public"."role" USING "role"::"public"."role";--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "category_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "type" SET DEFAULT 'EXPENSE'::"public"."transaction_type";--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "type" SET DATA TYPE "public"."transaction_type" USING "type"::"public"."transaction_type";--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "type" "transaction_type" DEFAULT 'EXPENSE';--> statement-breakpoint
ALTER TABLE "expenses" ADD COLUMN "child_id" uuid;--> statement-breakpoint
ALTER TABLE "expenses" ADD COLUMN "recorded_by" uuid;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "mobile1" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "mobile2" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "address" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "doj" date;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "end_date" date;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "qualification" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "specialization" text;--> statement-breakpoint
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_therapist_id_users_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "child_therapies" ADD CONSTRAINT "child_therapies_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "child_therapies" ADD CONSTRAINT "child_therapies_therapy_id_therapies_id_fk" FOREIGN KEY ("therapy_id") REFERENCES "public"."therapies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "child_therapies" ADD CONSTRAINT "child_therapies_therapist_id_users_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_parent_id_users_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_notes" ADD CONSTRAINT "session_notes_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_therapist_id_users_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_therapy_id_therapies_id_fk" FOREIGN KEY ("therapy_id") REFERENCES "public"."therapies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_recorded_by_users_id_fk" FOREIGN KEY ("recorded_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN "family_id";--> statement-breakpoint
ALTER TABLE "expenses" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "expenses" DROP COLUMN "family_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "family_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "color";