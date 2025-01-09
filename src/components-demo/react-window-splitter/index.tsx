import * as React from 'react'
import { Box } from '@/components/Box'
import { WindowSplitterSimpleDemo } from '@/components-demo/react-window-splitter/window-splitter-simple-demo/window-splitter-simple-demo'

import { ReactWindowConditionnalDemo } from '@/components-demo/react-window-splitter/react-window-conditionnal/react-window-conditionnal-demo'
import { ReactWindowNestedDemo } from '@/components-demo/react-window-splitter/react-window-nested/react-window-nested-demo'
import { SimpleVerticalDemo } from '@/components-demo/react-window-splitter/simple-vertical/simple-vertical-demo'
import { NestedDemo } from '@/components-demo/react-window-splitter/react-window-nested/nested-demo'
import { NestedStretchMiddleDemo } from '@/components-demo/react-window-splitter/react-window-nested/nested-stretch-middle-demo'
import {
  ColorfulPanel,
  ColorfulPanelGroup,
  ColorfulPanelResizer
} from '@/plugins/react-window-splitter/colorful/ColorfulPanels'
import {HtmlSplitterDemo} from "@/components-demo/react-window-splitter/html-splitter/html-splitter";




const ReactWindowSplitterDemo = () => {
  return (
      <>
        <div className="space-y-8 w-screen  ">
          <div className=" flex items-stretch p-8 gap-8">

            <Box title="Simple Demo" className="grow">
              <WindowSplitterSimpleDemo/>
            </Box>

            <Box title="Conditional demo Demo">
              <ReactWindowConditionnalDemo/>
            </Box>
          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="React Window Conditionnal Demo">
              <ReactWindowConditionnalDemo/>

            </Box>
          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="React Window Nested Demo">
              <ReactWindowNestedDemo/>
            </Box>

          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="Simple Vertical Demo">
              <SimpleVerticalDemo/>
            </Box>
          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="Nested Demo">
              <NestedDemo/>
            </Box>
          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="Nested Stretch Middle Demo">
              <NestedStretchMiddleDemo/>
            </Box>
          </div>
            <div className="flex w-full p-8   ">
              <Box title= "Html Splitter Demo">
                <HtmlSplitterDemo/>
              </Box>
            </div>




        </div>


        </>
        )
        }

        export default ReactWindowSplitterDemo

        /*


        <div className="space-y-8  w-screen ">
          <div className="flex justify-center items-center space-x-8  p-8">
            <Box title="Simple Demo" className="justify-items-start w-1/2">
              <WindowSplitterSimpleDemo/>
            </Box>
          </div>


          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="React Window Conditionnal Demo">
              <ReactWindowConditionnalDemo/>
            </Box>
          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="React Window Nested Demo">
              <ReactWindowNestedDemo/>
            </Box>
          </div>


          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="Simple Vertical Demo">
              <SimpleVerticalDemo/>
            </Box>
          </div>


          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="Nested Demo">
              <NestedDemo/>
            </Box>
          </div>

          <div className="flex justify-center space-x-8  w-1/2 p-8">
            <Box title="Nested Stretch Middle Demo">
              <NestedStretchMiddleDemo/>
            </Box>
          </div>


        </div>


        */
