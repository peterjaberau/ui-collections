import * as React from "react";
import { CanvasButton } from "@/components/ui-canvas/canvas-button";
import { CanvasButtonDemo } from "@/components-demo/ui-canvas/canvas-button/canvas-button-demo";
import { ColorPaletteDemo } from "@/components-demo/ui-canvas/color-palette/color-palette-demo";
import { Box } from "@/components/Box";

export const UiCanvasPage = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-center space-x-8">
                <Box title="Canvas Button">
                    <CanvasButton>Click me</CanvasButton>
                </Box>

                <Box title="Canvas Button Demo">
                    <CanvasButtonDemo />
                </Box>
            </div>

            <div className="flex justify-center space-x-8">
                <Box title="Color Palette Demo">
                    <ColorPaletteDemo />
                </Box>
            </div>
        </div>
    );
};