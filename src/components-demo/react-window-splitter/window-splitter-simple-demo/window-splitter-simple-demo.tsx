import * as React from "react";

import {
  ColorfulPanel, ColorfulPanelGroup, ColorfulPanelResizer
} from '@/components-demo/react-window-splitter/common/ColorfulPanels'


export const WindowSplitterSimpleDemo = () => {
  return (

    <ColorfulPanelGroup className={"w-[600px] h-[400px]"}>
      <ColorfulPanel min="130px" max="400px" />
      <ColorfulPanelResizer />
      <ColorfulPanel min="130px" />
    </ColorfulPanelGroup>
  );
}

