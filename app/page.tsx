"use client";

import { useActionState, useState } from "react";
import { authenticate } from "@/lib/actions";

import NextImage from "next/image";
import logo from "./assets/logo.png";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Stethoscope,
  Users,
  GraduationCap,
  Heart,
} from "lucide-react";

const ROLES = [
  { key: "THERAPIST", label: "Therapist", icon: Stethoscope, bg: "bg-blue-50", ring: "ring-blue-200", text: "text-blue-600" },
  { key: "PARENT", label: "Parent", icon: Users, bg: "bg-orange-50", ring: "ring-orange-200", text: "text-orange-500" },
  { key: "ATTENDER", label: "Special Educator", icon: GraduationCap, bg: "bg-purple-50", ring: "ring-purple-200", text: "text-purple-600" },
] as const;

export default function LoginPage() {
  const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="lg:flex lg:h-dvh">
      {/* Left banner — desktop only */}
      <div className="max-lg:hidden lg:w-1/2 lg:h-dvh relative overflow-hidden">
        <NextImage
          src="/banner1.png"
          alt="WonderBees Therapy Centre — Play, Learn, Grow"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
      </div>

      {/* Right side — the login experience, identical to mobile */}
      <div className="h-dvh overflow-hidden relative bg-gradient-to-b from-amber-50 via-sky-50 to-emerald-50 flex flex-col items-center px-4 py-3 lg:w-1/2">
        {/* Decorative clouds */}
        <div className="pointer-events-none absolute -top-6 -left-8 w-40 h-24 bg-white/70 rounded-full blur-[2px]" />
        <div className="pointer-events-none absolute top-6 -right-10 w-48 h-28 bg-white/60 rounded-full blur-[2px]" />
        <div className="pointer-events-none absolute top-0 right-14 w-16 h-10 bg-white/70 rounded-full blur-[1px]" />

        <div className="w-full max-w-sm flex-1 min-h-0 flex flex-col items-center justify-center relative z-10">
          {/* Tagline badge */}
          <div className="self-end -rotate-6 mr-3 text-right flex items-start gap-1">
            <p className="text-[11px] font-semibold text-slate-500 leading-tight">
              Little Steps
              <br />
              Build
              <br />
              Big Futures
            </p>
            <Heart className="w-3 h-3 text-pink-400 fill-pink-400 mt-0.5" />
          </div>

          {/* Logo */}
          <div className="relative animate-fade-in">
            <NextImage src={logo} alt="WonderBees Therapy Centre Logo" width={72} height={72} placeholder="blur" priority />
          </div>

          <h1 className="text-xl font-extrabold text-center tracking-tight leading-none mt-1">
            <span className="text-amber-500">Wonder</span>
            <span className="text-blue-900">Bees</span>
          </h1>
          <p className="text-[9px] tracking-[0.3em] font-semibold text-blue-900/70 mt-1">THERAPY CENTRE</p>
          <p className="text-[9.5px] text-slate-500 text-center mt-1.5 leading-snug px-2">
            Occupational Therapy &nbsp;|&nbsp; Speech Therapy &nbsp;|&nbsp; Special Education
            <br />
            Behaviour Therapy &nbsp;|&nbsp; Parent Support
          </p>

          {/* Card */}
          <div className="w-full bg-white rounded-3xl shadow-xl shadow-amber-900/10 p-4 mt-3 animate-fade-in animate-delay-100">
            <div className="text-center mb-3">
              <h2 className="text-lg font-bold text-blue-900">Welcome Back!</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Login to your WonderBees account</p>
            </div>

            <form action={dispatch} className="space-y-2.5">
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="email"
                  type="text"
                  required
                  placeholder="Username or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {errorMessage && (
                <div className="p-2 rounded-xl bg-red-50 text-red-500 text-xs text-center border border-red-100">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-400/40 transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isPending ? "Logging in..." : "Login"}
                {!isPending && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            <div className="flex items-center gap-3 my-3">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[11px] font-medium text-slate-400">Login as</span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {ROLES.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.key}
                    className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl border border-slate-100 ${role.bg}`}
                  >
                    <Icon className={`w-4 h-4 ${role.text}`} />
                    <span className="text-[8.5px] font-semibold text-slate-600 text-center leading-tight">
                      {role.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="relative w-full mt-3 h-16 select-none">
            {/* Signpost */}
            <div className="absolute left-2 bottom-3 flex flex-col items-center">
              <div className="flex flex-col gap-0.5 mb-0.5">
                <span className="-rotate-3 bg-orange-400 text-white text-[8px] font-bold px-2 py-0.5 rounded-r-md rounded-l-sm shadow-sm">
                  Play
                </span>
                <span className="rotate-2 bg-sky-400 text-white text-[8px] font-bold px-2 py-0.5 rounded-r-md rounded-l-sm shadow-sm">
                  Learn
                </span>
                <span className="-rotate-2 bg-emerald-400 text-white text-[8px] font-bold px-2 py-0.5 rounded-r-md rounded-l-sm shadow-sm">
                  Grow
                </span>
              </div>
              <div className="w-1 h-5 bg-amber-800 rounded-full" />
            </div>

            {/* Flowers */}
            <div className="absolute right-4 bottom-3 text-base">🌼</div>
            <div className="absolute right-12 bottom-4 text-sm">🌸</div>
            <div className="absolute right-20 bottom-3 text-[13px]">🌷</div>

            {/* Grass mound */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-[50%]" />

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] italic font-medium text-amber-600 whitespace-nowrap">
              ~ Together for a Brighter Tomorrow ~
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
