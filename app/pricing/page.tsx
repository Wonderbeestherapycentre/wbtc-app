import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export default function PricingPage() {
    const plans = [
        {
            name: "Single Session",
            price: "₹800",
            period: "/session",
            description: "Ideal for occasional therapy needs or evaluations.",
            features: [
                "45-minute session",
                "Expert Consultation",
                "Digital Session Note",
                "Home Program Recommendations"
            ]
        },
        {
            name: "Monthly Package",
            price: "₹6,000",
            period: "/month",
            description: "Best for regular therapy with consistent progress tracking.",
            features: [
                "8 Sessions per month",
                "Priority Scheduling",
                "Detailed Goal Tracking",
                "Full Home Program Access",
                "Monthly Progress Report"
            ],
            popular: true
        },
        {
            name: "Quarterly Care",
            price: "₹16,000",
            period: "/3 months",
            description: "Long-term commitment for developmental growth.",
            features: [
                "24 Sessions total",
                "Dedicated Case Manager",
                "Quarterly Assessment",
                "Personalized Skill Plans",
                "Direct Therapist Chat"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
            <div className="max-w-6xl mx-auto">
                <Link href="/docs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group">
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Back to Docs
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Service Plans & Pricing
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Transparent pricing designed to support your child's journey at every stage.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`glass-card p-8 rounded-3xl relative flex flex-col ${plan.popular ? 'border-2 border-blue-600 scale-105 z-10' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-500 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                        <Check size={18} className="text-green-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                                    : 'bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700'
                                }`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-sm text-gray-400">
                    <p>Need a custom plan? <Link href="/" className="text-blue-600 hover:underline">Contact our center</Link> for detailed evaluations.</p>
                </div>
            </div>
        </div>
    );
}
