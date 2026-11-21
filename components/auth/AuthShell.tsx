import NextImage from "next/image";
import logo from "@/app/assets/logo.png";

// Shared layout for the public auth pages (forgot / reset password), matching the login page look
export default function AuthShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
    return (
        <div className="lg:flex lg:h-dvh">
            <div className="max-lg:hidden lg:w-1/2 lg:h-dvh relative overflow-hidden">
                <NextImage src="/banner1.png" alt="WonderBees Therapy Centre — Play, Learn, Grow" fill className="object-cover" sizes="50vw" priority />
            </div>

            <div className="min-h-dvh relative bg-gradient-to-b from-amber-50 via-sky-50 to-emerald-50 flex flex-col items-center justify-center px-4 py-6 lg:w-1/2">
                <div className="pointer-events-none absolute -top-6 -left-8 w-40 h-24 bg-white/70 rounded-full blur-[2px]" />
                <div className="pointer-events-none absolute top-6 -right-10 w-48 h-28 bg-white/60 rounded-full blur-[2px]" />

                <div className="w-full max-w-sm flex flex-col items-center relative z-10">
                    <NextImage src={logo} alt="WonderBees Therapy Centre Logo" width={64} height={64} placeholder="blur" priority />
                    <h1 className="text-xl font-extrabold text-center tracking-tight leading-none mt-1">
                        <span className="text-amber-500">Wonder</span>
                        <span className="text-blue-900">Bees</span>
                    </h1>
                    <p className="text-[9px] tracking-[0.3em] font-semibold text-blue-900/70 mt-1">THERAPY CENTRE</p>

                    <div className="w-full bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-5 mt-4 animate-fade-in">
                        <div className="text-center mb-4">
                            <h2 className="text-lg font-bold text-blue-900">{title}</h2>
                            {subtitle && <p className="text-[11px] text-slate-400 mt-0.5">{subtitle}</p>}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
