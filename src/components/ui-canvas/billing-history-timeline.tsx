import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BillingEvent {
    date: string;
    type: "payment" | "invoice" | "usage" | "subscription";
    status?: "pending" | "completed" | "failed";
    amount?: number;
    description: string;
    details?: string;
}

interface BillingHistoryTimelineProps {
    events: BillingEvent[];
    className?: string;
    variant?:
        | "default"
        | "minimal"
        | "gradient"
        | "neon"
        | "watercolor"
        | "sketch";
}

export function BillingHistoryTimeline({
                                           events,
                                           className,
                                           variant = "default",
                                       }: BillingHistoryTimelineProps) {
    const [hoveredEvent, setHoveredEvent] = React.useState<number | null>(null);

    const getVariantStyles = () => {
        const baseStyles = {
            background: "bg-white dark:bg-gray-900",
            text: "text-gray-900 dark:text-gray-100",
            line: "bg-gray-200 dark:bg-gray-700",
            card: "bg-white dark:bg-gray-800",
            cardHover: "hover:shadow-lg dark:hover:shadow-gray-700/30",
            status: {
                completed:
                    "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-100",
                pending:
                    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-100",
                failed: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-100",
            },
        };

        switch (variant) {
            case "minimal":
                return {
                    ...baseStyles,
                    background: "bg-gray-50 dark:bg-gray-900",
                    card: "bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-700",
                    line: "bg-gray-300 dark:bg-gray-600",
                };
            case "gradient":
                return {
                    ...baseStyles,
                    background:
                        "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
                    card: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
                    line: "bg-gradient-to-b from-purple-200 via-pink-300 to-purple-200 dark:from-purple-700 dark:via-pink-600 dark:to-purple-700",
                };
            case "neon":
                return {
                    ...baseStyles,
                    background: "bg-gray-900 dark:bg-black",
                    text: "text-gray-100",
                    card: "bg-gray-800/50 dark:bg-black/50 border border-purple-500/20 dark:border-purple-400/20",
                    line: "bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500",
                    cardHover:
                        "hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
                };
            case "watercolor":
                return {
                    ...baseStyles,
                    background:
                        "bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20",
                    card: "bg-white/60 dark:bg-gray-800/60 backdrop-blur-md",
                    line: "bg-gradient-to-b from-blue-200/80 via-purple-200/80 to-pink-200/80 dark:from-blue-700/80 dark:via-purple-700/80 dark:to-pink-700/80",
                };
            case "sketch":
                return {
                    ...baseStyles,
                    background: "bg-gray-50 dark:bg-gray-900",
                    card: "bg-white dark:bg-gray-800 border-2 border-gray-900/10 dark:border-white/10",
                    line: "bg-gray-900/80 dark:bg-white/80",
                    cardHover: "hover:border-gray-900/30 dark:hover:border-white/30",
                };
            default:
                return baseStyles;
        }
    };

    const getEventColor = (
        type: BillingEvent["type"],
        status?: BillingEvent["status"],
    ) => {
        if (status === "failed")
            return "from-red-500 to-red-600 dark:from-red-600 dark:to-red-700";
        if (status === "pending")
            return "from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700";

        switch (type) {
            case "payment":
                return "from-green-500 to-green-600 dark:from-green-600 dark:to-green-700";
            case "invoice":
                return "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700";
            case "usage":
                return "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700";
            case "subscription":
                return "from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700";
            default:
                return "from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700";
        }
    };

    const getNodeStyles = (
        type: BillingEvent["type"],
        status?: BillingEvent["status"],
    ) => {
        const baseStyles =
            "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-lg";

        if (variant === "neon") {
            return cn(
                baseStyles,
                "shadow-[0_0_10px_rgba(168,85,247,0.3)] dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]",
                getEventColor(type, status),
            );
        }

        if (variant === "sketch") {
            return cn(
                baseStyles,
                "border-2 border-gray-900/20 dark:border-white/20",
                getEventColor(type, status),
            );
        }

        return cn(baseStyles, getEventColor(type, status));
    };

    const getEventIcon = (type: BillingEvent["type"]) => {
        switch (type) {
            case "payment":
                return "💸";
            case "invoice":
                return "📜";
            case "usage":
                return "📊";
            case "subscription":
                return "✨";
            default:
                return "•";
        }
    };

    const styles = getVariantStyles();

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl p-8",
                styles.background,
                styles.text,
                variant === "neon" && "shadow-inner",
                className,
            )}
        >
            {variant === "gradient" && (
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-purple-200/30 blur-xl dark:bg-purple-700/20" />
                    <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-pink-200/30 blur-xl dark:bg-pink-700/20" />
                </div>
            )}

            <div className="absolute left-1/2 h-[calc(100%-4rem)] w-1 -translate-x-1/2 rounded-full">
                <div className={cn("h-full w-full rounded-full", styles.line)} />
            </div>

            <div className="relative">
                <AnimatePresence>
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                            onHoverStart={() => setHoveredEvent(index)}
                            onHoverEnd={() => setHoveredEvent(null)}
                            className={cn(
                                "relative mb-12 flex items-center last:mb-0",
                                index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                            )}
                        >
                            <motion.div
                                className={cn(
                                    "w-[45%] rounded-xl px-6 py-4 shadow-md transition-all",
                                    styles.card,
                                    styles.cardHover,
                                    hoveredEvent === index && "scale-105",
                                )}
                                animate={{
                                    boxShadow:
                                        hoveredEvent === index
                                            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                }}
                            >
                                <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                    {event.date}
                                </div>
                                <div className="font-medium">{event.description}</div>
                                {event.details && (
                                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                        {event.details}
                                    </div>
                                )}
                                {event.amount && (
                                    <div className="mt-2 text-lg font-semibold">
                                        ${event.amount.toFixed(2)}
                                    </div>
                                )}
                                {event.status && (
                                    <div
                                        className={cn(
                                            "mt-2 inline-block rounded-full px-2 py-1 text-xs font-medium",
                                            styles.status[event.status],
                                        )}
                                    >
                                        {event.status.charAt(0).toUpperCase() +
                                            event.status.slice(1)}
                                    </div>
                                )}
                            </motion.div>

                            <motion.div
                                className="absolute left-1/2 -translate-x-1/2"
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <motion.div
                                    className={getNodeStyles(event.type, event.status)}
                                    initial={false}
                                    animate={{
                                        scale: hoveredEvent === index ? 1.1 : 1,
                                        rotate: hoveredEvent === index ? 360 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-xl">{getEventIcon(event.type)}</span>
                                </motion.div>

                                <motion.div
                                    className={cn(
                                        "absolute top-1/2 h-[2px] w-8",
                                        index % 2 === 0 ? "-left-8" : "-right-8",
                                        "bg-gradient-to-r",
                                        getEventColor(event.type, event.status),
                                    )}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                />
                            </motion.div>

                            <div className="w-[45%]" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
