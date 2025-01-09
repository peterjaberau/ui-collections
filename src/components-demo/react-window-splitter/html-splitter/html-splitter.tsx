import * as React from 'react'
import {
  ColorfulPanel,
  ColorfulPanelGroup,
  ColorfulPanelResizer
} from '@/plugins/react-window-splitter/colorful/ColorfulPanels'
import { Button } from 'antd'

export const HtmlSplitterDemo = () => {
  return (
    <ColorfulPanelGroup orientation="vertical" id="group" className="w-full"
      style={{ height: 450 }}>
      <ColorfulPanel color="green"  id="1" min="10%" ></ColorfulPanel>
      <ColorfulPanelResizer id="resizer-1"/>
      <ColorfulPanel color="red" min="130px" id="3" > </ColorfulPanel>
      <ColorfulPanelResizer id="resizer-2" />
      <ColorfulPanelGroup orientation="horizontal" id="group" className="w-full"
        style={{ height: 450 }}>
        <ColorfulPanel color="blue" min="130px" id="5" >  </ColorfulPanel>
        <ColorfulPanelResizer id="resizer-3" />
        <ColorfulPanel color="orange" min="130px" id="7" > </ColorfulPanel>
      </ColorfulPanelGroup>

    </ColorfulPanelGroup>














  )
}
