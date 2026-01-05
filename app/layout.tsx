import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wonderbees Therapy Centre",
  description: "Wonderbees Therapy Centre Management System",
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/logo.png",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Toaster
          position="top-right"
          richColors
          closeButton
          visibleToasts={3}
          toastOptions={{
            classNames: {
              toast: "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-gray-200 dark:border-neutral-800 shadow-xl rounded-xl p-4",
              description: "text-gray-500 dark:text-gray-400 mt-1 text-sm font-medium",
              actionButton: "bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg transition-transform hover:scale-105 shadow-sm",
              cancelButton: "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-gray-100 font-medium px-3 py-1.5 rounded-lg",
              title: "text-base font-bold text-gray-900 dark:text-white",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
