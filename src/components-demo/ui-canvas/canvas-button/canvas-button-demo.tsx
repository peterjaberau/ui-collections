import * as React from "react";
import { CanvasButton } from "@/components/ui-canvas/canvas-button";
import { Heart, ArrowRight, Plus, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CanvasButtonDemo() {
    const [isDark, setIsDark] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("classic");

    const sections = {
        classic: "Classic Art Styles",
        modern: "Modern Styles",
        artistic: "Artistic Styles",
    };

    return (
        <div className="z-30 flex flex-col gap-8 rounded-lg bg-background/95 p-8 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Navigation */}
            <nav className="flex flex-wrap gap-2">
                {Object.entries(sections).map(([key, title]) => (
                    <CanvasButton
                        key={key}
                        variant={activeSection === key ? "neon" : "default"}
                        size="sm"
                        onClick={() => setActiveSection(key)}
                        className="group"
                    >
                        {title}
                        <ChevronRight
                            className={cn(
                                "ml-1 h-3 w-3 transition-transform",
                                activeSection === key
                                    ? "rotate-90"
                                    : "rotate-0 opacity-0 group-hover:opacity-100",
                            )}
                        />
                    </CanvasButton>
                ))}
            </nav>

            {/* Classic Art Styles */}
            <section
                className={cn(
                    "space-y-8 transition-opacity",
                    activeSection === "classic" ? "opacity-100" : "hidden opacity-0",
                )}
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Watercolor</h3>
                        <CanvasButton
                            variant="watercolor"
                            effect="splash"
                            className="w-full"
                        >
                            Click for Splash
                        </CanvasButton>
                        <CanvasButton
                            variant="watercolor"
                            effect="brush"
                            size="lg"
                            className="w-full"
                        >
                            Brush Effect
                        </CanvasButton>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Oil Paint</h3>
                        <CanvasButton variant="oil" effect="ripple" className="w-full">
                            Ripple Effect
                        </CanvasButton>
                        <CanvasButton
                            variant="oil"
                            effect="glow"
                            size="lg"
                            className="w-full"
                        >
                            Glowing
                        </CanvasButton>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Charcoal</h3>
                        <CanvasButton variant="charcoal" effect="shake" className="w-full">
                            Shake Effect
                        </CanvasButton>
                        <CanvasButton variant="charcoal" size="xl" className="w-full">
                            Extra Large
                        </CanvasButton>
                    </div>
                </div>
            </section>

            {/* Modern Styles */}
            <section
                className={cn(
                    "space-y-8 transition-opacity",
                    activeSection === "modern" ? "opacity-100" : "hidden opacity-0",
                )}
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Neon</h3>
                        <CanvasButton variant="neon" effect="glow" className="w-full">
                            Glow Effect
                        </CanvasButton>
                        <div className="flex gap-2">
                            <CanvasButton variant="neon" size="icon">
                                <Plus className="h-4 w-4" />
                            </CanvasButton>
                            <CanvasButton variant="neon" size="icon">
                                <Heart className="h-4 w-4" />
                            </CanvasButton>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Pastel</h3>
                        <CanvasButton variant="pastel" effect="ripple" className="w-full">
                            Soft Touch
                        </CanvasButton>
                        <CanvasButton variant="pastel" size="sm" className="w-full">
                            Small Size
                        </CanvasButton>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Acrylic</h3>
                        <div
                            className={cn(
                                "w-full rounded-lg p-8 transition-colors",
                                isDark
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                    : "bg-gradient-to-r from-purple-500 to-pink-500",
                            )}
                        >
                            <CanvasButton
                                variant="acrylic"
                                effect="splash"
                                className="w-full"
                            >
                                Glass Effect
                            </CanvasButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artistic Styles */}
            <section
                className={cn(
                    "space-y-8 transition-opacity",
                    activeSection === "artistic" ? "opacity-100" : "hidden opacity-0",
                )}
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Sketch</h3>
                        <CanvasButton variant="sketch" effect="shake" className="w-full">
                            Hand Drawn
                        </CanvasButton>
                        <CanvasButton variant="sketch" size="lg" className="group w-full">
                            <span>Next Step</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </CanvasButton>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Vintage</h3>
                        <CanvasButton variant="vintage" effect="ripple" className="w-full">
                            Classic Feel
                        </CanvasButton>
                        <div className="flex gap-2">
                            <CanvasButton variant="vintage" size="icon">
                                <Heart className="h-4 w-4" />
                            </CanvasButton>
                            <CanvasButton variant="vintage" size="icon">
                                <Plus className="h-4 w-4" />
                            </CanvasButton>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Ink</h3>
                        <CanvasButton variant="ink" effect="splash" className="w-full">
                            Ink Splash
                        </CanvasButton>
                        <CanvasButton variant="ink" effect="brush" className="w-full">
                            Brush Stroke
                        </CanvasButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
