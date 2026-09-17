import { NextResponse } from "next/server";
import { fetchUnreadNotificationCount } from "@/lib/data";

export async function GET() {
    const count = await fetchUnreadNotificationCount();
    return NextResponse.json({ count });
}
