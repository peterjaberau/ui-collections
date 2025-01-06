import * as React from "react"
import {Box} from "@/components/Box";
import { CanvasButtonDemo } from "@/components-demo/ui-canvas/canvas-button/canvas-button-demo";
import { ColorPaletteDemo } from "@/components-demo/ui-canvas/color-palette/color-palette-demo";
import {CanvasButton} from "@/components/ui-canvas/canvas-button";
import {TextureOverlayDemo} from "@/components-demo/ui-canvas/texture-overlay/texture-overlay-demo";
import {InkAlertDemo} from "@/components-demo/ui-canvas/ink-alert/ink-alert-demo";
import {ArtisticTooltipDemo} from "@/components-demo/ui-canvas/artistic-tooltip/artistic-tooltip-demo";
import {SketchInputDemo} from "@/components-demo/ui-canvas/sketch-input/sketch-input-demo";
import ShadcnDemos from '@/components/ui-shadcn'





const UiCanvasDemos = () => {
    return (
      <>
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

                  <Box title="Texture Overlay Demo">
                      <TextureOverlayDemo />
                  </Box>


              </div>


              <div className="flex justify-center space-x-8">
                  <Box title="Ink Alert Demo">
                      <InkAlertDemo />
                  </Box>
              </div>


              <div className="flex justify-center space-x-8">
                  <Box title="Artestic Tooltip">
                      <ArtisticTooltipDemo />
                  </Box>
              </div>


              {/*<div className="flex justify-center space-x-8">*/}
              {/*    <Box title="Artistic Cursor Effects">*/}
              {/*        <ArtisticCursorEffectsDemo/>*/}
              {/*    </Box>*/}
              {/*</div>*/}

              <div className="flex justify-center space-x-8">
                  <Box title="Sketch Input">
                      <SketchInputDemo />
                  </Box>
              </div>


              {/*<div className="flex justify-center space-x-8">*/}
              {/*    <Box title="Billing History Timeline">*/}
              {/*        <BillingHistoryTimelineDemo/>*/}
              {/*    </Box>*/}
              {/*</div>*/}




          </div>


      </>
    )
}

export default UiCanvasDemos



