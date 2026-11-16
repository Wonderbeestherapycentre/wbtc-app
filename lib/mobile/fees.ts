import { and, asc, desc, eq, gte, inArray, lte } from "drizzle-orm";
import { db } from "@/lib/db";
import { children, childTherapies, payments, sessions } from "@/lib/db/schema";
import type { MobileUser } from "./auth";
import { todayIST, wallDayEnd, wallDayStart } from "./data";

/**
 * Parent fee report for one month — same rules as the website's
 * fetchChildFeeDetails / fetchChildrenFeeSummary:
 *   - fee per session = child's custom fee for that therapy, else the therapy's default charge
 *   - "MONTH" therapies are charged once per calendar month, not per session
 *   - billed  = every session in the period
 *   - attended fee = PRESENT sessions only
 *   - pending = billed - payments made in the period
 */

const MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

export function isMonth(value: string) {
    return MONTH.test(value);
}

function monthRange(month: string) {
    const [y, m] = month.split("-").map(Number);
    const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
    return { from: `${month}-01`, to: `${month}-${String(last).padStart(2, "0")}` };
}

export async function getParentFees(user: MobileUser, month = todayIST().slice(0, 7)) {
    const { from, to } = monthRange(month);

    const kids = await db.query.children.findMany({
        where: and(eq(children.parentId, user.id), eq(children.status, "ACTIVE")),
        orderBy: [asc(children.name)],
        columns: { id: true, name: true, caseNumber: true },
    });
    const kidIds = kids.map((k) => k.id);
    if (kidIds.length === 0) return { month, totalDue: 0, totalPaid: 0, totalBilled: 0, children: [] };

    const [sessionRows, paymentRows, customFees] = await Promise.all([
        db.query.sessions.findMany({
            where: and(
                inArray(sessions.childId, kidIds),
                gte(sessions.date, wallDayStart(from)),
                lte(sessions.date, wallDayEnd(to)),
            ),
            orderBy: [desc(sessions.date)],
            with: {
                therapy: { columns: { id: true, name: true, chargePerSession: true, paymentType: true } },
                therapist: { columns: { id: true, name: true } },
            },
        }),
        db.query.payments.findMany({
            where: and(inArray(payments.childId, kidIds), gte(payments.date, from), lte(payments.date, to)),
            orderBy: [desc(payments.date)],
        }),
        db.query.childTherapies.findMany({ where: inArray(childTherapies.childId, kidIds) }),
    ]);

    const report = kids.map((kid) => {
        const feeFor = (therapyId: string, defaultCharge: string | null) => {
            const custom = customFees.find((c) => c.childId === kid.id && c.therapyId === therapyId);
            return Number(custom?.feePerSession ?? defaultCharge ?? 0);
        };

        const billedMonths = new Set<string>();
        const attendedMonths = new Set<string>();
        let billed = 0;
        let attendedFee = 0;
        const counts = { present: 0, absent: 0, excused: 0, unmarked: 0 };

        const kidSessions = sessionRows
            .filter((s) => s.childId === kid.id)
            .map((s) => {
                const wall = s.date.toISOString();
                const perSession = feeFor(s.therapyId, s.therapy.chargePerSession);
                const monthly = s.therapy.paymentType === "MONTH";
                const key = `${s.therapyId}|${wall.slice(0, 7)}`;

                if (!monthly || !billedMonths.has(key)) {
                    billedMonths.add(key);
                    billed += perSession;
                }

                let fee = 0;
                if (s.attendance === "PRESENT") {
                    counts.present++;
                    if (!monthly || !attendedMonths.has(key)) {
                        attendedMonths.add(key);
                        fee = perSession;
                        attendedFee += fee;
                    }
                } else if (s.attendance === "ABSENT") counts.absent++;
                else if (s.attendance === "EXCUSED") counts.excused++;
                else counts.unmarked++;

                return {
                    id: s.id,
                    date: wall.slice(0, 10),
                    time: wall.slice(11, 16),
                    status: s.status ?? "SCHEDULED",
                    attendance: s.attendance ?? null,
                    therapy: { id: s.therapy.id, name: s.therapy.name },
                    therapist: s.therapist ? { id: s.therapist.id, name: s.therapist.name } : null,
                    feePerSession: perSession,
                    monthly,
                    fee,
                };
            });

        const kidPayments = paymentRows
            .filter((p) => p.childId === kid.id)
            .map((p) => ({ id: p.id, date: p.date, amount: Number(p.amount), mode: p.mode, remarks: p.remarks }));
        const paid = kidPayments.reduce((sum, p) => sum + p.amount, 0);

        return {
            child: kid,
            summary: {
                totalSessions: kidSessions.length,
                ...counts,
                billed,
                attendedFee,
                paid,
                pending: billed - paid,
            },
            sessions: kidSessions,
            payments: kidPayments,
        };
    });

    return {
        month,
        totalBilled: report.reduce((s, r) => s + r.summary.billed, 0),
        totalPaid: report.reduce((s, r) => s + r.summary.paid, 0),
        totalDue: report.reduce((s, r) => s + r.summary.pending, 0),
        children: report,
    };
}
