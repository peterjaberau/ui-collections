import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

const positionVariants = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
} as const;

const inkAlertVariants = cva(
    "ease-\\[cubic-bezier\\(0.4,0,0.2,1\\)\\] fixed w-full max-w-md p-4 text-sm shadow-lg backdrop-blur-[2px] transition-all duration-300 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
        variants: {
            variant: {
                default:
                    "rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/80 via-blue-500/70 to-blue-600/60 text-primary-foreground dark:from-blue-400/70 dark:via-blue-400/60 dark:to-blue-500/50",
                destructive:
                    "rounded-lg border border-red-500/20 bg-gradient-to-r from-red-500/80 via-red-500/70 to-red-600/60 text-destructive-foreground dark:from-red-400/70 dark:via-red-400/60 dark:to-red-500/50",
                success:
                    "text-success-foreground rounded-lg border border-green-500/20 bg-gradient-to-r from-green-500/80 via-green-500/70 to-green-600/60 dark:from-green-400/70 dark:via-green-400/60 dark:to-green-500/50",
                warning:
                    "text-warning-foreground rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/80 via-yellow-500/70 to-yellow-600/60 dark:from-yellow-400/70 dark:via-yellow-400/60 dark:to-yellow-500/50",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

const enterAnimationVariants = {
    "top-right": "translate-x-[120%] opacity-0",
    "top-left": "translate-x-[-120%] opacity-0",
    "bottom-right": "translate-x-[120%] opacity-0",
    "bottom-left": "translate-x-[-120%] opacity-0",
    "top-center": "translate-y-[-120%] opacity-0",
    "bottom-center": "translate-y-[120%] opacity-0",
};

const exitAnimationVariants = {
    "top-right": "translate-x-[120%] opacity-0",
    "top-left": "translate-x-[-120%] opacity-0",
    "bottom-right": "translate-x-[120%] opacity-0",
    "bottom-left": "translate-x-[-120%] opacity-0",
    "top-center": "translate-y-[-120%] opacity-0",
    "bottom-center": "translate-y-[120%] opacity-0",
};

export interface InkAlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof inkAlertVariants> {
    onClose?: () => void;
    duration?: number;
    position?: keyof typeof positionVariants;
}

export function InkAlert({
                             className,
                             variant,
                             children,
                             onClose,
                             duration,
                             position = "top-right",
                             ...props
                         }: InkAlertProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const handleClose = useCallback(() => {
        if (isRemoving) return; // Prevent multiple close attempts
        setIsRemoving(true);
        setIsVisible(false);
        const timeout = setTimeout(() => {
            setIsMounted(false);
            onClose?.();
        }, 300);
        return () => clearTimeout(timeout);
    }, [isRemoving, onClose]);

    useEffect(() => {
        let enterTimeout: number;
        let durationTimeout: number;

        // Mount and start enter animation
        enterTimeout = window.setTimeout(() => {
            setIsMounted(true);
            window.requestAnimationFrame(() => {
                setIsVisible(true);
            });
        }, 0);

        // Set up duration-based auto-close if specified
        if (duration && duration > 0) {
            durationTimeout = window.setTimeout(() => {
                handleClose();
            }, duration);
        }

        // Cleanup function
        return () => {
            window.clearTimeout(enterTimeout);
            window.clearTimeout(durationTimeout);
        };
    }, [duration, handleClose]);

    // Don't render if not mounted
    if (!isMounted) return null;

    return (
        <div
            className={cn(
                inkAlertVariants({ variant }),
                "ink-flow",
                positionVariants[position],
                enterAnimationVariants[position],
                isVisible && "translate-x-0 translate-y-0 opacity-100",
                isRemoving && exitAnimationVariants[position],
                className,
            )}
            {...props}
        >
            {onClose && (
                <button
                    className="absolute right-3 top-3 rounded-full p-1.5 opacity-70 ring-offset-background transition-all hover:bg-white/10 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={handleClose}
                    type="button"
                    aria-label="Close alert"
                >
                    <X className="h-3.5 w-3.5" />
                    <span className="sr-only">Close</span>
                </button>
            )}
            {children}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: `radial-gradient(circle at ${Math.random() * 100}% ${
                        Math.random() * 100
                    }%, rgba(255,255,255,0.12) 0%, transparent 50%)`,
                }}
            />
            <div className="absolute inset-0 -z-20 rounded-lg bg-black/5 dark:bg-white/5" />
        </div>
    );
}
