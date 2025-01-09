import * as React from 'react';
import {ColorfulPanel, ColorfulPanelResizer, ColorfulPanelGroup} from "@/plugins/react-window-splitter/colorful/ColorfulPanels";

export const SimpleVerticalDemo = () => {
  return (
    <ColorfulPanelGroup
      id="group"
      orientation="vertical"
      className="w-full"
      style={{height: 450}}
    >
      <ColorfulPanel color="green" min="130px" id="1" />
      <ColorfulPanelResizer id="2" />
      <ColorfulPanel color="red" min="130px" id="3" />
    </ColorfulPanelGroup>
  );
}
