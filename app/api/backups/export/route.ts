import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { generateBackupSql, backupFilename } from "@/lib/backup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Generates a fresh database backup and sends it straight to the admin's browser,
// so the file is saved on their local machine (nothing is stored on the server).
export async function GET() {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const sql = await generateBackupSql();
        return new NextResponse(sql, {
            headers: {
                "Content-Type": "application/sql; charset=utf-8",
                "Content-Disposition": `attachment; filename="${backupFilename()}"`,
                "Cache-Control": "no-store",
            },
        });
    } catch (error) {
        console.error("Backup export failed:", error);
        return new NextResponse("Backup failed", { status: 500 });
    }
}
