import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const colorPaletteVariants = cva(
    "relative flex flex-col gap-2 rounded-lg p-4 transition-all",
    {
        variants: {
            variant: {
                watercolor: "bg-gradient-to-br from-blue-50 to-purple-50",
                oilpaint: "bg-gradient-to-br from-amber-50 to-red-50",
                charcoal: "bg-gradient-to-br from-gray-50 to-slate-50",
                pastel: "bg-gradient-to-br from-pink-50 to-orange-50",
                acrylic: "bg-gradient-to-br from-emerald-50 to-cyan-50",
            },
        },
        defaultVariants: {
            variant: "watercolor",
        },
    },
);

const colorSchemes = {
    watercolor: [
        { name: "primary", colors: ["#60A5FA", "#818CF8", "#A78BFA"] },
        { name: "secondary", colors: ["#C084FC", "#E879F9", "#F472B6"] },
        { name: "accent", colors: ["#38BDF8", "#22D3EE", "#2DD4BF"] },
    ],
    oilpaint: [
        { name: "primary", colors: ["#F59E0B", "#D97706", "#B45309"] },
        { name: "secondary", colors: ["#EF4444", "#DC2626", "#B91C1C"] },
        { name: "accent", colors: ["#F97316", "#EA580C", "#C2410C"] },
    ],
    charcoal: [
        { name: "primary", colors: ["#475569", "#334155", "#1E293B"] },
        { name: "secondary", colors: ["#64748B", "#475569", "#334155"] },
        { name: "accent", colors: ["#94A3B8", "#64748B", "#475569"] },
    ],
    pastel: [
        { name: "primary", colors: ["#FDA4AF", "#FB7185", "#F43F5E"] },
        { name: "secondary", colors: ["#FED7AA", "#FDBA74", "#FB923C"] },
        { name: "accent", colors: ["#FEF08A", "#FDE047", "#FACC15"] },
    ],
    acrylic: [
        { name: "primary", colors: ["#34D399", "#10B981", "#059669"] },
        { name: "secondary", colors: ["#2DD4BF", "#14B8A6", "#0D9488"] },
        { name: "accent", colors: ["#22D3EE", "#06B6D4", "#0891B2"] },
    ],
};

export interface ColorPaletteProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof colorPaletteVariants> {
    showNames?: boolean;
}

export function ColorPalette({
                                 className,
                                 variant = "watercolor",
                                 showNames = true,
                                 ...props
                             }: ColorPaletteProps) {
    const scheme = variant ? colorSchemes[variant] : colorSchemes.watercolor;

    return (
        <div
            className={cn(colorPaletteVariants({ variant }), className)}
            {...props}
        >
            {scheme.map((group) => (
                <div key={group.name} className="space-y-2">
                    {showNames && (
                        <h4 className="text-sm font-medium capitalize text-muted-foreground">
                            {group.name}
                        </h4>
                    )}
                    <div className="flex gap-2">
                        {group.colors.map((color, index) => (
                            <div
                                key={color}
                                className="group relative"
                                title={`${group.name}-${index + 1}`}
                            >
                                <div
                                    className="h-10 w-10 rounded-lg shadow-sm transition-transform hover:scale-110 hover:shadow-lg"
                                    style={{ backgroundColor: color }}
                                />
                                <div className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md">
                                        {color}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
