import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const sketchInputVariants = cva(
    "relative w-full rounded-lg border bg-transparent px-4 py-2 text-base ring-offset-background transition-all duration-200 ease-in-out placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "border-input/20 bg-black/[0.02] shadow-sm backdrop-blur-sm hover:bg-black/[0.04] focus:border-input dark:bg-white/5 dark:hover:bg-white/10",
                brush:
                    "border-input/20 bg-gradient-to-br from-black/[0.03] to-transparent shadow-sm backdrop-blur-sm hover:from-black/[0.05] hover:to-transparent focus:border-input dark:from-white/10 dark:to-transparent dark:hover:from-white/15",
                ink: "border-input/20 bg-gradient-to-r from-black/[0.02] via-transparent to-black/[0.02] shadow-sm backdrop-blur-sm hover:from-black/[0.04] hover:via-transparent hover:to-black/[0.04] focus:border-input dark:from-white/5 dark:via-transparent dark:to-white/5 dark:hover:from-white/10 dark:hover:via-transparent dark:hover:to-white/10",
            },
            state: {
                default:
                    "border-input/20 focus:border-primary focus:ring-1 focus:ring-primary/20",
                error:
                    "border-destructive/50 focus:border-destructive focus:ring-1 focus:ring-destructive/20",
                success:
                    "border-green-500/50 focus:border-green-500 focus:ring-1 focus:ring-green-500/20",
            },
        },
        defaultVariants: {
            variant: "default",
            state: "default",
        },
    },
);

export interface SketchInputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof sketchInputVariants> {
    inkFlow?: boolean;
}

const SketchInput = React.forwardRef<
    HTMLInputElement,
    SketchInputProps & MotionProps
>(({ className, variant, state, inkFlow, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [value, setValue] = React.useState(props.value || "");

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange?.(e);
    };

    return (
        <div className="group relative">
            <motion.input
                ref={ref}
                className={cn(sketchInputVariants({ variant, state }), className)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                {...props}
            />
            {inkFlow && (
                <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary/50"
                    initial={{ width: "0%", opacity: 0 }}
                    animate={{
                        width: `${Math.min((value?.toString().length || 0) * 8, 100)}%`,
                        opacity: isFocused ? 0.5 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        mass: 0.5,
                    }}
                    style={{
                        background:
                            "linear-gradient(90deg, var(--primary) 0%, transparent 100%)",
                        filter: "blur(2px)",
                    }}
                />
            )}
            {state === "error" && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                        className="size-5 text-destructive"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            )}
            {state === "success" && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
});
SketchInput.displayName = "SketchInput";

export { SketchInput, sketchInputVariants };
