import * as React from 'react'
import { Box } from '@/components/Box'
import { WindowSplitterSimpleDemo } from '@/components-demo/react-window-splitter/window-splitter-simple-demo/window-splitter-simple-demo'

const ReactWindowSplitterDemo = () => {
  return (
    <>
      <div className="space-y-8  w-screen bg-red-9">
        <div className="flex justify-center items-center space-x-8  p-8">
          <Box title="Simple Demo" className="justify-items-start w-1/2">
            <WindowSplitterSimpleDemo />
          </Box>
        </div>

        <div className="flex justify-center space-x-8  w-1/2 p-8">
          <Box title="Simple Demo">
            <WindowSplitterSimpleDemo />
          </Box>
        </div>
      </div>
    </>
  )
}

export default ReactWindowSplitterDemo
