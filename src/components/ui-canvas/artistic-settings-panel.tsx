"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui-shadcn/slider";
import { Switch } from "@/components/ui-shadcn/switch";
import { Button } from "@/components/ui-shadcn/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui-shadcn/card";
import { Settings2, Moon, Sun, Palette, Wand2 } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui-shadcn/tooltip";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui-shadcn/select";

export interface ArtisticSettingsPanelProps {
    className?: string;
    defaultOpen?: boolean;
    onSettingsChange?: (settings: ArtisticSettings) => void;
}

interface ArtisticSettings {
    brightness: number;
    contrast: number;
    saturation: number;
    blur: number;
    isDarkMode: boolean;
    isAutoEnhance: boolean;
    preset: string;
}

const PRESETS = {
    default: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        blur: 0,
    },
    dramatic: {
        brightness: 110,
        contrast: 130,
        saturation: 120,
        blur: 0,
    },
    vintage: {
        brightness: 95,
        contrast: 90,
        saturation: 80,
        blur: 1,
    },
    dreamy: {
        brightness: 105,
        contrast: 95,
        saturation: 90,
        blur: 2,
    },
};

export function ArtisticSettingsPanel({
                                          className,
                                          defaultOpen = false,
                                          onSettingsChange,
                                      }: ArtisticSettingsPanelProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    const { theme, setTheme } = useTheme();
    const [settings, setSettings] = React.useState<ArtisticSettings>({
        brightness: 100,
        contrast: 100,
        saturation: 100,
        blur: 0,
        isDarkMode: theme === "dark",
        isAutoEnhance: false,
        preset: "default",
    });

    React.useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === "\\") {
                setIsOpen((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    React.useEffect(() => {
        const savedSettings = localStorage.getItem("artisticSettings");
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("artisticSettings", JSON.stringify(settings));
    }, [settings]);

    const handleSettingChange = (
        key: keyof ArtisticSettings,
        value: number | boolean | string,
    ) => {
        const newSettings = { ...settings, [key]: value };
        if (key === "preset" && typeof value === "string") {
            const presetValues = PRESETS[value as keyof typeof PRESETS];
            Object.assign(newSettings, presetValues);
        }
        setSettings(newSettings);
        onSettingsChange?.(newSettings);
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        handleSettingChange("isDarkMode", newTheme === "dark");
    };

    const getFilterStyle = () => {
        return {
            filter: `brightness(${settings.brightness}%) contrast(${settings.contrast}%) saturate(${settings.saturation}%) blur(${settings.blur}px)`,
        };
    };

    return (
        <div className={cn("fixed right-4 top-4 z-50", className)}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full transition-transform hover:scale-110"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Settings2 className="h-5 w-5" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Open Settings (Ctrl + \)</p>
                </TooltipContent>
            </Tooltip>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-80"
                    >
                        <Card className="border-2 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>Artistic Settings</span>
                                    <Select
                                        value={settings.preset}
                                        onValueChange={(value) =>
                                            handleSettingChange("preset", value)
                                        }
                                    >
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="Choose preset" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="default">Default</SelectItem>
                                            <SelectItem value="dramatic">Dramatic</SelectItem>
                                            <SelectItem value="vintage">Vintage</SelectItem>
                                            <SelectItem value="dreamy">Dreamy</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </CardTitle>
                                <CardDescription>
                                    Customize your artistic experience
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {theme === "dark" ? (
                                            <Moon className="h-4 w-4" />
                                        ) : (
                                            <Sun className="h-4 w-4" />
                                        )}
                                        <span>Theme Mode</span>
                                    </div>
                                    <Switch
                                        checked={settings.isDarkMode}
                                        onCheckedChange={toggleTheme}
                                    />
                                </div>

                                <div className="space-y-4">
                                    {[
                                        {
                                            label: "Brightness",
                                            key: "brightness",
                                            max: 200,
                                            icon: "☀️",
                                        },
                                        { label: "Contrast", key: "contrast", max: 200, icon: "◐" },
                                        {
                                            label: "Saturation",
                                            key: "saturation",
                                            max: 200,
                                            icon: "🎨",
                                        },
                                        {
                                            label: "Blur",
                                            key: "blur",
                                            max: 20,
                                            step: 0.5,
                                            icon: "○",
                                        },
                                    ].map((control) => (
                                        <div key={control.key} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <label className="text-sm font-medium">
                                                    <span className="mr-2">{control.icon}</span>
                                                    {control.label}
                                                </label>
                                                <span className="text-xs text-muted-foreground">
                          {settings[control.key as keyof ArtisticSettings]}
                        </span>
                                            </div>
                                            <Slider
                                                value={[
                                                    settings[
                                                        control.key as keyof ArtisticSettings
                                                        ] as number,
                                                ]}
                                                min={0}
                                                max={control.max}
                                                step={control.step || 1}
                                                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                                                onValueChange={([value]) =>
                                                    handleSettingChange(
                                                        control.key as keyof ArtisticSettings,
                                                        value,
                                                    )
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Wand2 className="h-4 w-4" />
                                        <span>Auto Enhance</span>
                                    </div>
                                    <Switch
                                        checked={settings.isAutoEnhance}
                                        onCheckedChange={(checked) =>
                                            handleSettingChange("isAutoEnhance", checked)
                                        }
                                    />
                                </div>

                                <div className="mt-4 overflow-hidden rounded-lg border">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 p-4"
                                        style={getFilterStyle()}
                                    >
                                        <p className="text-center text-white">Preview Effects</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
