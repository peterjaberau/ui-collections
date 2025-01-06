import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface ArtisticCursorEffectsProps {
    variant?: "glow" | "trail" | "magnetic";
    color?: string;
    size?: number;
    trailLength?: number;
    magneticStrength?: number;
    glowIntensity?: number;
    children?: React.ReactNode;
}

export function ArtisticCursorEffects({
                                          variant = "glow",
                                          color = "#6366f1",
                                          size = 20,
                                          trailLength = 8,
                                          magneticStrength = 0.5,
                                          glowIntensity = 1,
                                          children,
                                      }: ArtisticCursorEffectsProps) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorVisible, setCursorVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const scale = useMotionValue(1);

    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    const springScale = useSpring(scale, { damping: 15, stiffness: 150 });

    const [trails] = useState(() =>
        Array.from({ length: trailLength }, (_, i) => ({
            delay: i * 0.05,
            opacity: 1 - i / trailLength,
            scale: 1 - i * 0.05,
        })),
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX - size / 2;
            const y = e.clientY - size / 2;
            mouseX.set(x);
            mouseY.set(y);
            setCursorVisible(true);
        };

        const handleMouseLeave = () => {
            setCursorVisible(false);
        };

        const handleMouseDown = () => {
            scale.set(0.9);
        };

        const handleMouseUp = () => {
            scale.set(1);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY, scale, size]);

    const renderCursorEffect = () => {
        switch (variant) {
            case "trail":
                return (
                    <>
                        {trails.map((trail, index) => (
                            <motion.div
                                key={index}
                                className="pointer-events-none absolute rounded-full"
                                style={{
                                    width: size,
                                    height: size,
                                    x: springX,
                                    y: springY,
                                    backgroundColor: color,
                                    opacity: trail.opacity,
                                    scale: springScale.get() * trail.scale,
                                }}
                            />
                        ))}
                        <motion.div
                            className="pointer-events-none absolute rounded-full border-2"
                            style={{
                                width: size,
                                height: size,
                                x: springX,
                                y: springY,
                                borderColor: color,
                                scale: springScale,
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </>
                );

            case "magnetic":
                return (
                    <>
                        <motion.div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: size * 3,
                                height: size * 3,
                                x: springX,
                                y: springY,
                                scale: springScale,
                            }}
                            animate={{
                                backgroundColor: `${color}10`,
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                        <motion.div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: size * 2,
                                height: size * 2,
                                x: springX,
                                y: springY,
                                scale: springScale,
                            }}
                            animate={{
                                backgroundColor: `${color}20`,
                                scale: [1.1, 0.9, 1.1],
                                rotate: [180, 360, 540],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                        <motion.div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: size,
                                height: size,
                                x: springX,
                                y: springY,
                                backgroundColor: color,
                                scale: springScale,
                            }}
                        />
                    </>
                );

            case "glow":
            default:
                return (
                    <>
                        <motion.div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: size * 2,
                                height: size * 2,
                                x: springX,
                                y: springY,
                                scale: springScale,
                            }}
                            animate={{
                                backgroundColor: `${color}20`,
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                        <motion.div
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: size,
                                height: size,
                                x: springX,
                                y: springY,
                                backgroundColor: color,
                                scale: springScale,
                            }}
                            animate={{
                                boxShadow: [
                                    `0 0 ${20 * glowIntensity}px ${10 * glowIntensity}px ${color}50`,
                                    `0 0 ${30 * glowIntensity}px ${15 * glowIntensity}px ${color}30`,
                                    `0 0 ${20 * glowIntensity}px ${10 * glowIntensity}px ${color}50`,
                                ],
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                    </>
                );
        }
    };

    return (
        <div ref={cursorRef} className="relative">
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            >
                {renderCursorEffect()}
            </motion.div>
            {children}
        </div>
    );
}
