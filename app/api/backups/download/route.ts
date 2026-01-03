import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import fs from "fs";
import path from "path";

export async function GET(
    request: NextRequest
) {
    const session = await auth();

    if (session?.user?.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");

    if (!filename) {
        return new NextResponse("Filename is required", { status: 400 });
    }

    const filePath = path.join(process.cwd(), "backups", filename);

    // Security check: ensure the file is within the backups directory
    if (!filePath.startsWith(path.join(process.cwd(), "backups"))) {
        return new NextResponse("Invalid file path", { status: 400 });
    }

    if (!fs.existsSync(filePath)) {
        return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": "application/sql",
            "Content-Disposition": `attachment; filename="${filename}"`,
        },
    });
}
