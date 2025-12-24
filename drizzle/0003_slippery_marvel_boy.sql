CREATE TABLE "home_program_tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"program_id" uuid NOT NULL,
	"description" text NOT NULL,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "home_programs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"child_id" uuid NOT NULL,
	"therapist_id" uuid NOT NULL,
	"therapy_id" uuid NOT NULL,
	"title" text NOT NULL,
	"status" text DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "title" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "session_notes" ALTER COLUMN "session_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "children" ADD COLUMN "case_number" text;--> statement-breakpoint
ALTER TABLE "session_notes" ADD COLUMN "child_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "session_notes" ADD COLUMN "therapy_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "session_notes" ADD COLUMN "therapist_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "session_notes" ADD COLUMN "date" date NOT NULL;--> statement-breakpoint
ALTER TABLE "session_notes" ADD COLUMN "parent_viewed_at" timestamp;--> statement-breakpoint
ALTER TABLE "session_notes" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "home_program_tasks" ADD CONSTRAINT "home_program_tasks_program_id_home_programs_id_fk" FOREIGN KEY ("program_id") REFERENCES "public"."home_programs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "home_programs" ADD CONSTRAINT "home_programs_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "home_programs" ADD CONSTRAINT "home_programs_therapist_id_users_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "home_programs" ADD CONSTRAINT "home_programs_therapy_id_therapies_id_fk" FOREIGN KEY ("therapy_id") REFERENCES "public"."therapies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_notes" ADD CONSTRAINT "session_notes_child_id_children_id_fk" FOREIGN KEY ("child_id") REFERENCES "public"."children"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_notes" ADD CONSTRAINT "session_notes_therapy_id_therapies_id_fk" FOREIGN KEY ("therapy_id") REFERENCES "public"."therapies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_notes" ADD CONSTRAINT "session_notes_therapist_id_users_id_fk" FOREIGN KEY ("therapist_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "children" ADD CONSTRAINT "children_case_number_unique" UNIQUE("case_number");