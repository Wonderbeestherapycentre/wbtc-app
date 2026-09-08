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

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    callbacks: {
        ...authConfig.callbacks,
        async session({ session, token }) {
            if (token?.id) {
                // Hydrate from the JWT first so the header/sidebar always have the
                // user, even when the verification query below is slow or fails.
                session.user.id = token.id as string;
                session.user.role = token.role as any;
                if (token.name) session.user.name = token.name as string;
                if (token.email) session.user.email = token.email as string;

                try {
                    const user = await db.query.users.findFirst({
                        where: eq(users.id, token.id as string),
                        columns: { name: true, status: true },
                    });

                    if (!user || user.status !== "ACTIVE") {
                        return null as any; // Force logout for deactivated/removed users
                    }

                    session.user.name = user.name;
                } catch (error) {
                    // Transient DB error - keep the session alive using token data
                    // instead of logging the user out / showing them as a guest.
                    console.error("session callback: user verification failed, using token data", error);
                }
            }
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
