# Wonderbees Therapy Centre App - Technical Documentation

## 🚀 Overview
The Wonderbees Therapy Centre App is a management system built with Next.js 15, tailored for therapy centres. It facilitates interaction between Admins, Therapists, and Parents.

## 🛠 Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/))
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [NextAuth.js v5](https://authjs.dev/)
- **Styling**: Tailwind CSS
- **Components**: Custom Vanilla CSS + Lucide Icons
- **Validation**: Zod

## 📂 Project Structure
```text
├── app/                  # Next.js App Router (Pages & API)
├── components/           # UI Components
│   ├── dashboard/        # Role-specific dashboards
│   ├── notes/            # Session notes components
│   └── ...
├── lib/                  # Backend & Utility logic
│   ├── actions.ts        # Server Actions (CRUD operations)
│   ├── data.ts           # Data fetching functions
│   ├── db/               # Database connection & schema
│   └── validations/      # Zod validation schemas
├── scripts/              # Maintenance & Utility scripts
├── auth.ts               # NextAuth configuration (Server-side)
├── auth.config.ts        # Shared Auth configuration (Middleware-compatible)
├── middleware.ts         # Route protection logic
```

## 🗄️ Data Architecture & Validation

### Database Schema (`lib/db/schema.ts`)
Key tables include:
- **users**: User accounts with role (ADMIN, THERAPIST, PARENT) and status (ACTIVE, INACTIVE)
- **children**: Child profiles with assigned therapists and therapies
- **sessions**: Scheduled therapy sessions with attendance tracking
- **session_notes**: Detailed therapy session documentation
- **home_programs**: Parent task assignments with therapy-specific goals
- **home_program_tasks**: Individual tasks within programs
- **home_program_submissions**: Daily progress reports with task and support scores
- **goals**: Therapy goals with optional titles and expandable objectives
- **therapies**: Available therapy services (e.g., Speech Therapy, Occupational Therapy)

### Validation Schemas (`lib/validations/`)
- **User Schema**: User creation/update with status validation
- **Session Schema**: Single sessions, updated sessions, and recurring monthly schedules
- **Goal Schema**: Therapy goals with nullable title field
- **Home Program Schema**: Program status validation (ACTIVE, COMPLETED)
- Zod-based validation for consistent data entry and error handling

### Server Actions (`lib/actions.ts`)
- CRUD operations for all major entities
- `updateAttendance`: Mark session attendance (Present, Absent, Excused)
- `submitHomeProgramReport`: Calculate and store task/support scores
- `createMonthlySchedule`: Bulk recurring session generation
- Field-specific validation and error messages

## 🔐 Authentication & Session Management

### Login Restrictions
The application only allows users with an **`ACTIVE`** status to log in. This is enforced in the `authorize` callback within `auth.ts`.

### Active Session Invalidation (Force Logout)
To ensure security, the application periodically validates the user's status against the live database during session checks.
- If a user's status is changed to `INACTIVE` while they are already logged in, their session is invalidated on the next request.
- This logic is handled in the `session` callback of `auth.ts`.

### Role-Based Access Control (RBAC)
- **ADMIN**: Full system access, user management, financial tracking.
- **THERAPIST**: Access to assigned children, session notes, home programs.
- **PARENT**: View-only access for their own children's progress and notes.

## 🎨 UI/UX Features

### Responsive Top Header
- Profile link/button for quick access to user settings
- Notification display/icon for system alerts
- Logout functionality
- Responsive design for various screen sizes
- Integrated into `AppLayout.tsx`

### Enhanced Filters
- **Searchable Dropdowns**: Therapist and child filters with search functionality
- **Auto-filtering**: Therapist users automatically see only their sessions
- **Role-based Visibility**: Filter options adapt based on user role

### Navigation
- Sidebar navigation with role-based menu items
- Quick access to all major modules
- Active route highlighting

## 📋 Core Modules

### 1. Child Management
- Profile creation with comprehensive child information
- Therapist assignment filtered by therapy specialization
- Diagnosis tracking and therapy type management
- User status management (Active/Inactive) with automatic session invalidation

### 2. Session Notes
- Structured documentation of therapy sessions
- Goal tracking with expandable objectives
- Auto-selection of therapy type based on therapist specialization
- Role-based visibility controls

### 3. Home Programs
- Customizable task lists for parents to follow at home
- Multiple programs per child with therapy-specific assignments
- Task and support scoring system (0-10 scale)
- Daily progress reports with detailed score breakdowns
- Program lifecycle management (Active, Completed statuses)
- Role-based access: Therapists create/manage, Parents submit reports

### 4. Scheduling
- Calendar-based session scheduling with Week and Month views
- 45-minute time interval grid for precise scheduling
- Conflict prevention and validation
- Bulk "Monthly Recurring" session generation
- **Filters**: Searchable dropdowns for therapist and child selection
- Auto-filtering for therapist role (shows only their sessions)
- **Weekly Timetable**: Table view with PDF export functionality
- PDF generation using `@react-pdf/renderer`

### 5. Attendance System
- Digital attendance tracking for scheduled sessions
- Three status options: Present, Absent, Excused
- Attendance field stored in `sessions` table
- Dedicated `/attendance` page with session list view
- Role-based access control for marking attendance
- Real-time attendance updates via server actions

### 6. Goal Plans
- Therapy-specific goal setting and tracking
- Expandable objectives view (hidden by default)
- Optional goal titles (nullable in database)
- Role-based display: Therapy name and therapist shown only to Admins
- Validation schemas for consistent data entry

### 7. Finances
- Management of therapy fees and income tracking
- Centre expense monitoring
- Financial reporting and analytics

## 🚀 Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables in `.env`.
4. Run migrations: `npx drizzle-kit push`.
5. Start development server: `npm run dev`.
