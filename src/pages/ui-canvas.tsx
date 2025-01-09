import * as React from 'react'
import ShowCasesTabView from '@/views/showcases-tabview'
import { Button, Typography } from 'antd'
const { Title } = Typography

import AntdDemos from '@/components-demo/antd'
import UiCanvasDemos from '@/components-demo/ui-canvas'
import ReactWindowSplitterDemo from '@/components-demo/react-window-splitter'
import Html5Demo from "@/components-demo/tailwind/html-5-demo";
import TailwindDemo from "@/components-demo/tailwind";

enum DEMO_TYPES {
  REACT_WINDOW_SPLITTER = 'react-window-splitter',
  TAILWIND = 'tailwind',
  UI_CANVAS = 'ui-canvas',
  ANTD = 'antd',
}

export const UiCanvasPage = () => {
  const [currentDemo, setCurrentDemo] = React.useState(DEMO_TYPES.REACT_WINDOW_SPLITTER)

  return (
      <div className="flex flex-col h-screen">
          <div className="flex justify-center space-x-8">
              <Button onClick={() => setCurrentDemo('react-window-splitter')}>
                  Demo from React Window Splitter
              </Button>

              <Button onClick={() => setCurrentDemo('tailwind')}>
                  tailwind
              </Button>

              <Button onClick={() => setCurrentDemo('ui-canvas')}>
                  Demo from UiCanvas
              </Button>
              <Button onClick={() => setCurrentDemo('antd')}>Demo from Antd</Button>
          </div>

          <div className="flex justify-center space-x-8">
              <Title level={2}>{currentDemo}</Title>
          </div>

          <div className="flex flex-1 justify-center space-x-8">

            {currentDemo === DEMO_TYPES.REACT_WINDOW_SPLITTER && <ReactWindowSplitterDemo/>}

            {currentDemo === DEMO_TYPES.TAILWIND && <TailwindDemo/>}

            {currentDemo === DEMO_TYPES.UI_CANVAS && <UiCanvasDemos/>}

            {currentDemo === DEMO_TYPES.ANTD && <AntdDemos/>}

          </div>

      </div>
  )
}
