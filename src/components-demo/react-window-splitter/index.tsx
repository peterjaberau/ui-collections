import * as React from 'react'
import { Box } from '@/components/Box'
import { WindowSplitterSimpleDemo } from '@/components-demo/react-window-splitter/window-splitter-simple-demo/window-splitter-simple-demo'

const ReactWindowSplitterDemo = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-center space-x-8">
          <Box title="Simple Demo">
            <WindowSplitterSimpleDemo />
          </Box>
        </div>
      </div>
    </>
  )
}

export default ReactWindowSplitterDemo
