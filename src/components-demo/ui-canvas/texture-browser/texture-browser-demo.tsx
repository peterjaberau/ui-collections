import * as React from "react";
import { TextureBrowser } from "@/components/ui-canvas/texture-browser";



const demoTextures = [
    {
        id: "1",
        name: "Brushed Steel",
        url: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&q=80",
        thumbnail:
            "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&q=80",
        description: "Polished metal surface with brushed finish",
        tags: ["metal", "steel", "industrial"],
        dimensions: { width: 2048, height: 2048 },
        fileSize: "2.4 MB",
    },
    {
        id: "2",
        name: "Oak Wood",
        url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
        thumbnail:
            "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80",
        description: "Natural oak wood texture",
        tags: ["wood", "natural", "oak"],
        dimensions: { width: 2048, height: 2048 },
        fileSize: "1.8 MB",
    },
    {
        id: "3",
        name: "White Marble",
        url: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=800&q=80",
        thumbnail:
            "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=400&q=80",
        description: "Elegant white marble surface",
        tags: ["stone", "marble", "luxury"],
        dimensions: { width: 2048, height: 2048 },
        fileSize: "2.1 MB",
    },
    {
        id: "4",
        name: "Concrete Wall",
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        thumbnail:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
        description: "Raw concrete texture",
        tags: ["concrete", "industrial", "rough"],
        dimensions: { width: 2048, height: 2048 },
        fileSize: "1.9 MB",
    },
    {
        id: "5",
        name: "Leather Surface",
        url: "https://images.unsplash.com/photo-1517583010307-3f789911b89c?w=800&q=80",
        thumbnail:
            "https://images.unsplash.com/photo-1517583010307-3f789911b89c?w=400&q=80",
        description: "Premium leather texture",
        tags: ["leather", "natural", "luxury"],
        dimensions: { width: 2048, height: 2048 },
        fileSize: "1.7 MB",
    },
    {
        id: "6",
        name: "Fabric Pattern",
        url: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80",
        thumbnail:
            "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&q=80",
        description: "Woven fabric texture",
        tags: ["fabric", "textile", "pattern"],
        dimensions: { width: 2048, height: 2048 },
        fileSize: "1.5 MB",
    },
];

export function TextureBrowserDemo() {
    return (
        <div className="relative h-[600px] w-full rounded-lg border">
            <TextureBrowser
                textures={demoTextures}
                onSelect={(texture) => console.log("Selected texture:", texture)}
                defaultViewMode="grid"
                gridCols={{
                    default: 2,
                    md: 3,
                    lg: 4,
                }}
                showDetails={true}
            />
        </div>
    );
}

