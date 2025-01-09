import * as React from 'react'
import {
  ColorfulPanel,
  ColorfulPanelGroup,
  ColorfulPanelResizer
} from '@/plugins/react-window-splitter/colorful/ColorfulPanels'
import { Button } from 'antd'

export const HtmlSplitterDemo = () => {
  return (
    <ColorfulPanelGroup orientation="vertical" id="gr-level-0" className={"!h-[600px]"} >

      <ColorfulPanel color="green" id="panel1-level0">A</ColorfulPanel>

      <ColorfulPanelResizer id="resizer1-level0" />

      <ColorfulPanel color="red" id="panel2-level0">
        B
      </ColorfulPanel>

      <ColorfulPanelResizer id="resizer2-level0" />

      <ColorfulPanel color="red" min="10%" id="panel3-level0" className={"items-stretch"} >

        <ColorfulPanelGroup orientation="horizontal" id="gr-level-1" className={"grow flex items-stretch"}>

          <ColorfulPanel color="blue" id="panel1-level1" min="20%" className="grow">
            C1
          </ColorfulPanel>

          <ColorfulPanelResizer id="resizer1-level1" />

          <ColorfulPanel color="orange" id="panel2-level1" min="20%" className="grow">
            C2
          </ColorfulPanel>


        </ColorfulPanelGroup>
      </ColorfulPanel>
    </ColorfulPanelGroup>
  )
}
