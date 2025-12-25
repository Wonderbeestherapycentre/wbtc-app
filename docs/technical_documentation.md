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
└── middleware.ts         # Route protection logic
```

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

## 📋 Core Modules
1. **Child Management**: Profile creation, therapist assignment, and diagnosis tracking.
2. **Session Notes**: Structured documentation of therapy sessions with goal tracking.
3. **Home Programs**: Customizable task lists for parents to follow at home.
4. **Scheduling**: Calendar-based session scheduling with Week and Month views. Supports conflict prevention and bulk "Monthly Recurring" session generation.
5. **Finances**: Management of therapy fees, income, and centre expenses.

## 🚀 Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables in `.env`.
4. Run migrations: `npx drizzle-kit push`.
5. Start development server: `npm run dev`.
