import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const userRole = (auth?.user as any)?.role;
            const isValidRole = ["ADMIN", "THERAPIST", "PARENT", "ATTENDER"].includes(userRole);

            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard") || nextUrl.pathname.startsWith("/expenses") || nextUrl.pathname.startsWith("/settings") || nextUrl.pathname.startsWith("/profile");
            const isOnHome = nextUrl.pathname === "/";
            const isOnRegister = nextUrl.pathname.startsWith("/register");
            const isPublicPage = nextUrl.pathname.startsWith("/docs") ||
                nextUrl.pathname.startsWith("/technical-documentation") ||
                nextUrl.pathname.startsWith("/user-flow") ||
                nextUrl.pathname.startsWith("/pricing");

            if (isOnHome || isOnRegister || isPublicPage) {
                if (isLoggedIn && isValidRole && isOnHome) return Response.redirect(new URL("/dashboard", nextUrl));
                return true; // Allow access to login/register/public pages
            }

            if (isOnDashboard) {
                if (isLoggedIn && isValidRole) return true;
                return false; // Redirect unauthenticated or invalid users to login page
            }

            // Default protection for other routes? Or allow?
            // Let's assume everything else is protected if not explicitly allowed above?
            // Actually, nextUrl.pathname.startsWith("/") matches everything.
            // Let's simplify:
            // If logged in, and on root, go to dashboard.
            // If not logged in, and on protected route, go to root.

            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id!;
                // @ts-ignore - we know our schema
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
    },
    providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
