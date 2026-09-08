import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

async function getUser(email: string) {
    try {
        const user = await db.query.users.findFirst({
            where: eq(users.email, email),
        });
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}

// How often (ms) to re-check the DB that the logged-in user still exists and is
// ACTIVE. The check runs in the `jwt` callback (only fires on token refresh),
// not in `session` (fires on every request) - this keeps the Neon HTTP round
// trip off the hot path and stops transient DB errors from spamming the console.
const USER_REVALIDATE_INTERVAL = 5 * 60 * 1000;

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    callbacks: {
        ...authConfig.callbacks,
        async jwt({ token, user, trigger }) {
            // Sign-in: seed the token from the authorized user.
            if (user) {
                token.id = user.id!;
                token.role = (user as any).role;
                if (user.name) token.name = user.name;
                if (user.email) token.email = user.email;
                token.verifiedAt = Date.now();
                return token;
            }

            if (!token.id) return token;

            const verifiedAt = typeof token.verifiedAt === "number" ? token.verifiedAt : 0;
            const isStale = Date.now() - verifiedAt > USER_REVALIDATE_INTERVAL;
            if (trigger !== "update" && !isStale) return token;

            try {
                const dbUser = await db.query.users.findFirst({
                    where: eq(users.id, token.id as string),
                    columns: { name: true, status: true },
                });

                if (!dbUser || dbUser.status !== "ACTIVE") {
                    // Deactivated/removed - drop role so `authorized` bounces them to login.
                    token.role = undefined;
                    token.deactivated = true;
                    return token;
                }

                token.name = dbUser.name;
                token.deactivated = false;
                token.verifiedAt = Date.now();
            } catch (error) {
                // Transient DB error - keep the token as-is and back off so we
                // don't retry (and log) on every single request.
                token.verifiedAt = Date.now() - USER_REVALIDATE_INTERVAL + 30 * 1000;
                console.warn("jwt callback: user revalidation skipped (DB unavailable)");
            }

            return token;
        },
        async session({ session, token }) {
            if (token?.deactivated || !token?.id) {
                return null as any; // Force logout for deactivated/removed users
            }

            session.user.id = token.id as string;
            session.user.role = token.role as any;
            if (token.name) session.user.name = token.name as string;
            if (token.email) session.user.email = token.email as string;

            return session;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    if (user.status !== "ACTIVE") {
                        console.log("Access denied: User is not active");
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
                    if (passwordsMatch) return user;
                }

                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
});
