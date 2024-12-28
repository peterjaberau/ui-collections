import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const canvasButtonVariants = cva(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80",
                watercolor:
                    "bg-gradient-to-r from-blue-400 to-purple-500 text-white transition-all hover:shadow-lg hover:saturate-150 dark:from-blue-500 dark:to-purple-600",
                oil: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white hover:shadow-lg hover:saturate-150 dark:from-amber-600 dark:via-orange-600 dark:to-red-600",
                charcoal:
                    "bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-black hover:shadow-lg dark:from-gray-800 dark:to-black dark:hover:from-gray-900",
                pastel:
                    "bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 text-gray-700 hover:shadow-md hover:saturate-150 dark:from-pink-300 dark:via-rose-300 dark:to-purple-300 dark:text-gray-900",
                neon: "border-2 border-transparent bg-black text-white shadow-[0_0_2em_#646cffaa] transition-shadow hover:border-current hover:shadow-[0_0_2em_#7c83ffcc] dark:bg-gray-950 dark:shadow-[0_0_2em_#868eff] dark:hover:shadow-[0_0_2em_#a1a7ff]",
                sketch:
                    "border-2 border-gray-950 bg-white text-gray-950 [background-image:repeating-linear-gradient(45deg,transparent_0,transparent_2px,currentColor_2px,currentColor_2.5px)] hover:bg-gray-100 hover:shadow-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
                acrylic:
                    "border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/20 dark:border-white/10 dark:bg-black/10 dark:hover:bg-white/10",
                vintage:
                    "border border-amber-900/20 bg-[#f0e6d3] text-gray-800 shadow-inner hover:bg-[#e6dcc9] hover:shadow-md dark:border-amber-100/20 dark:bg-[#2a251f] dark:text-gray-200 dark:hover:bg-[#332e27]",
                ink: "bg-white text-gray-900 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTQuNjI3IDQuNjI3YTQgNCAwIDAgMC01LjY1NiAwTDQgNDkuNjI3YTQgNCAwIDEgMCA1LjY1NiA1LjY1Nkw1NC42MjcgMTAuMjgzYTQgNCAwIDAgMCAwLTUuNjU2eiIgZmlsbD0icmdiYSgwLDAsMCwwLjEpIi8+PC9zdmc+')] hover:bg-gray-100 hover:shadow-md dark:bg-gray-900 dark:text-gray-100 dark:[background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTQuNjI3IDQuNjI3YTQgNCAwIDAgMC01LjY1NiAwTDQgNDkuNjI3YTQgNCAwIDEgMCA1LjY1NiA1LjY1Nkw1NC42MjcgMTAuMjgzYTQgNCAwIDAgMCAwLTUuNjU2eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] dark:hover:bg-gray-800",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-11 rounded-md px-8 text-base",
                xl: "h-14 rounded-lg px-10 text-lg",
                icon: "h-10 w-10 rounded-full p-0",
            },
            effect: {
                none: "",
                splash: "overflow-hidden",
                brush: "overflow-hidden",
                ripple: "overflow-hidden",
                glow: "transition-shadow duration-300",
                shake: "hover:animate-wiggle",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            effect: "none",
        },
    },
);

export interface CanvasButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof canvasButtonVariants> {
    asChild?: boolean;
}

const CanvasButton = React.forwardRef<HTMLButtonElement, CanvasButtonProps>(
    ({ className, variant, size, effect, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const [splashPosition, setSplashPosition] = React.useState<{
            x: number;
            y: number;
        } | null>(null);
        const [ripples, setRipples] = React.useState<
            Array<{ id: number; x: number; y: number }>
        >([]);
        const rippleCount = React.useRef(0);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (effect === "splash") {
                const button = event.currentTarget;
                const rect = button.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                setSplashPosition({ x, y });
                setTimeout(() => setSplashPosition(null), 1000);
            } else if (effect === "ripple") {
                const button = event.currentTarget;
                const rect = button.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const id = rippleCount.current++;
                setRipples((prev) => [...prev, { id, x, y }]);
                setTimeout(() => {
                    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
                }, 1000);
            }
            props.onClick?.(event);
        };

        return (
            <Comp
                className={cn(
                    canvasButtonVariants({ variant, size, effect, className }),
                    effect === "glow" && "hover:shadow-[0_0_1em_rgba(0,0,0,0.2)]",
                )}
                ref={ref}
                onClick={handleClick}
                {...props}
            >
                {props.children}

                {effect === "splash" && splashPosition && (
                    <motion.span
                        initial={{ scale: 0, opacity: 0.75 }}
                        animate={{ scale: 4, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-none absolute rounded-full bg-white/30"
                        style={{
                            width: 20,
                            height: 20,
                            left: splashPosition.x - 10,
                            top: splashPosition.y - 10,
                        }}
                    />
                )}

                {effect === "brush" && (
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                            transformOrigin: "left",
                        }}
                    />
                )}

                {effect === "ripple" &&
                    ripples.map((ripple) => (
                        <motion.span
                            key={ripple.id}
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="pointer-events-none absolute rounded-full bg-current"
                            style={{
                                width: 20,
                                height: 20,
                                left: ripple.x - 10,
                                top: ripple.y - 10,
                                opacity: 0.2,
                            }}
                        />
                    ))}
            </Comp>
        );
    },
);
CanvasButton.displayName = "CanvasButton";

export { CanvasButton, canvasButtonVariants };
