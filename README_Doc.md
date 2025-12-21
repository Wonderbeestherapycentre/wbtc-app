📘 Wonderbees Therapy Centre App
Developer Documentation – Functional Requirements
1. Overview
The Wonderbees Therapy Centre App is a role-based mobile/web application designed to improve communication and workflow between Admins, Therapists, and Parents while managing therapy services for children with special needs.
Primary Goals:
Centralized child therapy management


Transparent therapist–parent communication


Efficient scheduling, documentation, and reporting


Secure data handling and role-based access



2. User Roles & Permissions
2.1 Admin
Access Level: Full
Responsibilities:
System configuration


User management


Financial tracking


Reporting & analytics


Permissions:
Create / Edit / Delete users (Therapist, Parent)


Create & manage child profiles


Assign therapists to children


Create therapy schedules


View & export all reports


Manage fees, income, and expenses


Send broadcast notifications



2.2 Therapist
Access Level: Restricted to assigned children
Responsibilities:
Therapy planning & documentation


Parent communication


Progress tracking


Permissions:
View assigned child profiles


Add daily session notes


Upload assessments


Create and assign home programs


Log therapy activities


Mark attendance


Send messages to parents



2.3 Parent
Access Level: Own child(ren) only
Responsibilities:
Follow therapy plans


Home program implementation


Communication with therapists


Permissions:
View child profile & goals


View session notes & assessments


Access home programs & activities


View attendance & fee details


Receive notifications


Message therapist



3. Core Modules
3.1 Authentication & Authorization
Secure login for Admin, Therapist, Parent


Role-based access control (RBAC)


Password reset & session management


Optional OTP / Email verification



3.2 Child Profile Module
Entities:
Child Personal Info


Diagnosis & Therapy Types


Assigned Therapist(s)


Goals / IEP


Assessment Records


Progress Summary


Functions:
Create & update child profile (Admin)


Read-only access for Therapist & Parent (scope-based)


Archive child profile if discontinued



3.3 Therapy Services Module
Supported services:
Occupational Therapy


Speech Therapy


Sensory Integration


Behaviour Therapy


Special Education


Each service should support:
Goal setting


Activity tracking


Progress notes


Home programs



3.4 Scheduling Module
Features:
Session creation (date, time, therapist, child, therapy type)


Calendar view (daily/weekly/monthly)


Reschedule & cancel sessions


Auto reminders (push/email/SMS)


Constraints:
Prevent therapist double booking


Track completed vs missed sessions



3.5 Daily Session Notes
Data Fields:
Session date


Therapy type


Goals addressed


Activities performed


Child response


Therapist remarks


Next session plan


Rules:
Editable only by therapist


Read-only for parents


Time-stamped entries



3.6 Assessment Module
Types:
Initial assessment


Periodic review


Discharge summary


Features:
Upload PDF/images


Structured score entry


Version control


Progress comparison



3.7 Home Program Module
Features:
Assign home activities per child


Activity instructions (text, image, video)


Frequency & duration


Parent acknowledgment tracking



3.8 Activities Library
Purpose:
 Reusable therapy activities.
Features:
Categorized by therapy type


Age & skill level tagging


Therapist can reuse across children



3.9 Attendance Module
Features:
Session-based attendance


Present / Absent / Cancelled


Auto-link to scheduling


Parent view access



3.10 Fees & Finance Module
Admin Only:
Fee structure setup


Invoice generation


Payment tracking


Income reports


Expense entry


Monthly summaries


Parent View:
Fee details


Payment history


Pending dues



3.11 Notifications & Messaging
Types:
Session reminders


Home program updates


Payment alerts


Admin announcements


Channels:
In-app


Push notification


Optional Email/SMS



4. Data Model (High-Level)
Key Tables / Collections
Users (Admin, Therapist, Parent)


Children


Therapies


Sessions


SessionNotes


Assessments


HomePrograms


Activities


Attendance


Payments


Expenses


Notifications


Messages



5. Security & Compliance
Role-based access enforcement


Data encryption (at rest & in transit)


Audit logs for admin actions


Secure file storage


Regular backups



6. Reporting & Analytics
Child progress reports


Therapist workload reports


Attendance trends


Financial summaries


Export to PDF/Excel



7. Non-Functional Requirements
Mobile-first responsive design


Offline draft support for session notes


Fast load time (<3s)


Scalable architecture


User-friendly UI for non-technical parents



8. Future Enhancements (Optional)
Video session uploads


AI-based progress insights


Parent feedback forms


Multi-branch support


Multi-language support



9. Success Criteria
✔ Improved parent–therapist communication
 ✔ Accurate therapy documentation
 ✔ Transparent progress & finances
 ✔ Better therapy outcomes for children

