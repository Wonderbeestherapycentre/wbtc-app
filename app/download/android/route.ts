import { NextResponse } from "next/server";

// Stable link for the Android app: /download/android
// Points at the latest APK in the public "wonderbees-app-releases" GitHub repo.
// Set ANDROID_APK_URL in Vercel, e.g.
//   https://github.com/<account>/wonderbees-app-releases/releases/latest/download/wonderbees.apk
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const url = process.env.ANDROID_APK_URL;
  if (!url) {
    return NextResponse.redirect(new URL("/?app=unavailable", request.url));
  }
  return NextResponse.redirect(url, 302);
}
