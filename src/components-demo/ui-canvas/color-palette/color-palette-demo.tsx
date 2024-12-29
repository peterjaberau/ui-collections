import * as React from "react";
import { ColorPalette } from "@/components/ui-canvas/color-palette";

export const ColorPaletteDemo = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
    <div className="p-2">
        <h3 className="mb-4 text-lg font-semibold">Watercolor Palette</h3>
        <ColorPalette variant="watercolor" />
    </div>

    <div className="p-2">
        <h3 className="mb-4 text-lg font-semibold">Oil Paint Palette</h3>
        <ColorPalette variant="oilpaint" />
    </div>

    <div className="p-2">
        <h3 className="mb-4 text-lg font-semibold">Charcoal Palette</h3>
        <ColorPalette variant="charcoal" />
    </div>

    <div className="p-2">
        <h3 className="mb-4 text-lg font-semibold">Pastel Palette</h3>
        <ColorPalette variant="pastel" />
    </div>

    <div className="p-2">
        <h3 className="mb-4 text-lg font-semibold">Acrylic Palette</h3>
        <ColorPalette variant="acrylic" />
    </div>
</div>
    );
}