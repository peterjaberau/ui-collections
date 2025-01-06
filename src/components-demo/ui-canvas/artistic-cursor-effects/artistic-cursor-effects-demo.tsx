import * as React from "react";
import {useState} from "react";
import {Button} from "@/components/ui-shadcn/button";
import {Slider} from "@/components/ui-shadcn/slider";
import {Label} from "@/components/ui-shadcn/label";
import {ArtisticCursorEffects} from "@/components/ui-canvas/artistic-cursor-effects";
const variants = ["glow", "trail", "magnetic"] as const;
const colors = [
    {name: "Indigo", value: "#6366f1"},
    {name: "Rose", value: "#f43f5e"},
    {name: "Emerald", value: "#10b981"},
    {name: "Amber", value: "#f59e0b"},
] as const;

export const ArtisticCursorEffectsDemo = () => {
    const [variant, setVariant] = useState<(typeof variants)[number]>("glow");
    const [color, setColor] = useState<string>(colors[0].value);
    const [size, setSize] = useState(20);
    const [intensity, setIntensity] = useState(1);

    return (
        <div className="z-30 w-full space-y-6 bg-white p-2 dark:bg-black 2xl:p-6">
            <div className="grid gap-4 2xl:grid-cols-2">
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {variants.map((v) => (
                            <Button
                                key={v}
                                onClick={() => setVariant(v)}
                                variant={variant === v ? "default" : "outline"}
                                className="min-w-[100px]"
                            >
                                {v.charAt(0).toUpperCase() + v.slice(1)}
                            </Button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {colors.map((c) => (
                            <Button
                                key={c.name}
                                onClick={() => setColor(c.value)}
                                variant={color === c.value ? "default" : "outline"}
                                className="min-w-[100px]"
                                style={{
                                    backgroundColor: color === c.value ? c.value : "transparent",
                                    borderColor: c.value,
                                    color: color === c.value ? "white" : undefined,
                                }}
                            >
                                {c.name}
                            </Button>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <Label>Cursor Size</Label>
                        <div className="flex items-center gap-4">
                            <Slider
                                value={[size]}
                                onValueChange={([value]) => setSize(value)}
                                min={10}
                                max={40}
                                step={1}
                                className="w-full"
                            />
                            <span className="w-12 text-sm">{size}px</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Effect Intensity</Label>
                        <div className="flex items-center gap-4">
                            <Slider
                                value={[intensity]}
                                onValueChange={([value]) => setIntensity(value)}
                                min={0.1}
                                max={2}
                                step={0.1}
                                className="w-full"
                            />
                            <span className="w-12 text-sm">{intensity.toFixed(1)}x</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100 dark:bg-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Move Your Cursor Here
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                {variant.charAt(0).toUpperCase() + variant.slice(1)} Effect
                            </p>
                        </div>
                    </div>
                    <ArtisticCursorEffects
                        variant={variant}
                        color={color}
                        size={size}
                        glowIntensity={intensity}
                        trailLength={Math.floor(intensity * 8)}
                        magneticStrength={intensity}
                    />
                </div>
            </div>
        </div>
    );
}