import * as React from "react";
import {useState} from "react";
import {ArtisticTooltip} from "@/components/ui-canvas/artistic-tooltip";
import {Button} from "@/components/ui-shadcn/button";
import {Droplets, Paintbrush, Pencil} from "lucide-react";


export const ArtisticTooltipDemo = () => {
    const [activeTooltips, setActiveTooltips] = useState<Record<string, boolean>>(
        {},
    );

    const toggleTooltip = (id: string) => {
        setActiveTooltips((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="flex min-h-[350px] w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-8">
                <ArtisticTooltip
                    content="Hover and move your cursor to see the watercolor effect"
                    show={activeTooltips["watercolor"]}
                    style="watercolor"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="min-w-[200px] gap-2"
                        onMouseEnter={() => toggleTooltip("watercolor")}
                        onMouseLeave={() => toggleTooltip("watercolor")}
                    >
                        <Droplets className="h-4 w-4" />
                        Watercolor Style
                    </Button>
                </ArtisticTooltip>

                <ArtisticTooltip
                    content="Watch how the oil paint follows your movement"
                    show={activeTooltips["oil"]}
                    style="oil"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="min-w-[200px] gap-2"
                        onMouseEnter={() => toggleTooltip("oil")}
                        onMouseLeave={() => toggleTooltip("oil")}
                    >
                        <Paintbrush className="h-4 w-4" />
                        Oil Paint Style
                    </Button>
                </ArtisticTooltip>

                <ArtisticTooltip
                    content="A sketchy tooltip that moves with your cursor"
                    show={activeTooltips["pencil"]}
                    style="pencil"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="min-w-[200px] gap-2"
                        onMouseEnter={() => toggleTooltip("pencil")}
                        onMouseLeave={() => toggleTooltip("pencil")}
                    >
                        <Pencil className="h-4 w-4" />
                        Pencil Style
                    </Button>
                </ArtisticTooltip>
            </div>
        </div>
    );
}