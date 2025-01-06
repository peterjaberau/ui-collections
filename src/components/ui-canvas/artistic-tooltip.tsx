import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const tooltipVariants = cva(
    "pointer-events-none fixed left-1/2 top-1/2 z-50 select-none px-3 py-1.5 text-sm font-medium",
    {
        variants: {
            style: {
                watercolor:
                    "rounded-lg border border-white/20 bg-gradient-to-br from-[#7FB3D5]/95 to-[#5499C7]/90 text-white shadow-md shadow-[#7FB3D5]/20 backdrop-blur-md [mask-image:paint(watercolor)]",
                oil: "rounded-lg border border-white/10 bg-gradient-to-br from-[#2C3E50]/95 to-[#34495E]/90 text-white shadow-md shadow-[#2C3E50]/30 backdrop-blur-md [mask-image:paint(oil)]",
                pencil:
                    "rounded-lg border border-white/10 bg-gradient-to-br from-zinc-800/95 to-zinc-900/90 text-white/90 shadow-md shadow-zinc-900/30 backdrop-blur-md [mask-image:paint(pencil)]",
            },
        },
        defaultVariants: {
            style: "watercolor",
        },
    },
);

export type ArtisticTooltipProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof tooltipVariants> & {
    content: string;
    show?: boolean;
    children: React.ReactNode;
};

export function ArtisticTooltip({
                                    className,
                                    style,
                                    content,
                                    show = false,
                                    children,
                                    ...props
                                }: ArtisticTooltipProps) {
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const updateTooltipPosition = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!tooltipRef.current || !triggerRef.current) return;

        const trigger = triggerRef.current.getBoundingClientRect();
        const tooltip = tooltipRef.current;
        const mouseX = e.clientX - trigger.left;
        const mouseY = e.clientY - trigger.top;

        // Calculate position relative to mouse but with some offset
        const offsetX = 15;
        const offsetY = -30;

        tooltip.style.transform = `translate(${mouseX + offsetX}px, ${mouseY + offsetY}px)`;
    };

    return (
        <div
            ref={triggerRef}
            className="relative inline-flex"
            onMouseMove={show ? updateTooltipPosition : undefined}
        >
            {children}
            {show && (
                <div
                    ref={tooltipRef}
                    className={cn(
                        tooltipVariants({ style }),
                        "whitespace-pre-wrap break-words transition-opacity duration-150",
                        show ? "opacity-100" : "opacity-0",
                        className,
                    )}
                    {...props}
                >
                    {content}
                </div>
            )}
        </div>
    );
}
