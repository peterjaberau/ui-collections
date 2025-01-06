import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextureOverlayProps
    extends React.HTMLAttributes<HTMLDivElement> {
    texture?:
        | "watercolor"
        | "oil"
        | "charcoal"
        | "canvas"
        | "noise"
        | "grain"
        | "paper"
        | "glass"
        | "frost"
        | "holographic";
    opacity?: number;
    blendMode?:
        | "multiply"
        | "screen"
        | "overlay"
        | "soft-light"
        | "hard-light"
        | "color-dodge"
        | "color-burn";
    intensity?: "light" | "medium" | "heavy";
    animate?: boolean;
    children?: React.ReactNode;
}

export function TextureOverlay({
                                   texture = "watercolor",
                                   opacity = 0.2,
                                   blendMode = "soft-light",
                                   intensity = "medium",
                                   animate = false,
                                   className,
                                   children,
                                   ...props
                               }: TextureOverlayProps) {
    const intensityVariants = {
        light: "opacity-[0.15]",
        medium: "opacity-[0.3]",
        heavy: "opacity-[0.45]",
    };

    const textureStyles = {
        watercolor:
            "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_50%)] before:opacity-50 before:bg-[length:4rem_4rem] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_40%)] after:opacity-30 after:bg-[length:6rem_6rem] after:animate-texture-float",
        oil: "before:absolute before:inset-0 before:bg-[repeating-conic-gradient(from_45deg,rgba(255,255,255,0.1)_0deg_90deg,rgba(0,0,0,0.1)_90deg_180deg)] before:bg-[length:1rem_1rem] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_70%)] after:bg-[length:4rem_4rem]",
        charcoal:
            "before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0px_2px,transparent_2px_4px)] before:bg-[length:0.5rem_0.5rem] after:absolute after:inset-0 after:bg-noise after:opacity-20",
        canvas:
            "before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.1)_0px_1px,transparent_1px_4px)] before:bg-[length:0.25rem_0.25rem] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.1)_0px_1px,transparent_1px_4px)] after:bg-[length:0.25rem_0.25rem]",
        noise:
            "before:absolute before:inset-0 before:bg-noise before:opacity-[0.07] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_70%)]",
        grain:
            "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] before:opacity-[0.12] before:bg-repeat before:bg-[length:100px_100px] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_70%)]",
        paper:
            "before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] before:bg-[length:4px_4px] after:absolute after:inset-0 after:bg-noise after:opacity-[0.15]",
        glass:
            "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_40%)] before:opacity-50 after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)] after:opacity-30",
        frost:
            "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9InR1cmJ1bGVuY2UiIGJhc2VGcmVxdWVuY3k9Ii4yIiBudW1PY3RhdmVzPSI0Ii8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjEgMCIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')] before:opacity-30 before:bg-[length:200px_200px] after:absolute after:inset-0 after:backdrop-blur-[1px] after:backdrop-brightness-110",
        holographic:
            "before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%)] before:bg-[length:4px_4px] before:animate-rainbow after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.1),rgba(0,0,255,0.1))] after:animate-hue-rotate",
    };

    const blendModeStyles = {
        multiply: "mix-blend-multiply",
        screen: "mix-blend-screen",
        overlay: "mix-blend-overlay",
        "soft-light": "mix-blend-soft-light",
        "hard-light": "mix-blend-hard-light",
        "color-dodge": "mix-blend-color-dodge",
        "color-burn": "mix-blend-color-burn",
    };

    const animationStyles = animate
        ? "transition-opacity duration-300 hover:opacity-0"
        : "";

    return (
        <div
            className={cn(
                "relative isolate overflow-hidden backdrop-blur-0 transition-all duration-300",
                className,
            )}
            {...props}
        >
            {children}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 transition-all duration-300",
                    textureStyles[texture],
                    blendModeStyles[blendMode],
                    intensityVariants[intensity],
                    animationStyles,
                )}
                aria-hidden="true"
            />
        </div>
    );
}
