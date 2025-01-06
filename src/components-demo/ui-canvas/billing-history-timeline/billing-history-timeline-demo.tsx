import * as React from "react";
import {
    BillingEvent, BillingHistoryTimeline,
} from "@/components/ui-canvas/billing-history-timeline";
const demoEvents: BillingEvent[] = [] = [
    {
        date: "2024-01-20",
        type: "payment" as const,
        status: "completed" as const,
        amount: 199.99,
        description: "Premium Plan Payment",
        details:
            "Successfully processed monthly subscription payment via Credit Card ending in 4242",
    },
    {
        date: "2024-01-15",
        type: "usage" as const,
        description: "Usage Spike Detected",
        details:
            "API calls increased by 250% - Peak usage period detected between 2PM-4PM UTC",
    },
    {
        date: "2024-01-10",
        type: "invoice" as const,
        status: "pending" as const,
        amount: 249.99,
        description: "Monthly Service Invoice",
        details: "Invoice includes base subscription and additional usage charges",
    },
    {
        date: "2024-01-05",
        type: "subscription" as const,
        description: "Plan Upgrade",
        details:
            "Upgraded from Basic to Premium Plan - New features unlocked: Advanced Analytics, Priority Support",
    },
    {
        date: "2024-01-01",
        type: "payment" as const,
        status: "failed" as const,
        amount: 149.99,
        description: "Failed Payment Attempt",
        details:
            "Transaction declined - Insufficient funds. Please update payment method.",
    },
];
const variants = [
    { name: "Default", value: "default" },
    { name: "Minimal", value: "minimal" },
    { name: "Gradient", value: "gradient" },
    { name: "Neon", value: "neon" },
    { name: "Watercolor", value: "watercolor" },
    { name: "Sketch", value: "sketch" },
] as const;
export function BillingHistoryTimelineDemo() {
    return (
        <div className="h-full space-y-16 py-8">
            {variants.map((variant) => (
                <div
                    key={variant.value}
                    className="mx-auto h-full w-full max-w-4xl space-y-4"
                >
                    <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {variant.name} Variant
                    </h3>
                    <BillingHistoryTimeline
                        events={demoEvents}
                        variant={variant.value}
                        className="h-full rounded-xl shadow-xl"
                    />
                </div>
            ))}
        </div>
    );
}

