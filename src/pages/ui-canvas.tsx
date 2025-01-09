import * as React from 'react'
import ShowCasesTabView from '@/views/showcases-tabview'
import { Button, Typography } from 'antd'
const { Title } = Typography

import AntdDemos from '@/components-demo/antd'
import UiCanvasDemos from '@/components-demo/ui-canvas'
import ReactWindowSplitterDemo from '@/components-demo/react-window-splitter'
import Html5Demo from "@/components-demo/tailwind/html-5-demo";
import TailwindDemo from "@/components-demo/tailwind";

export const UiCanvasPage = () => {
  const [currentDemo, setCurrentDemo] = React.useState('tailwind')

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
              {currentDemo === 'antd' && <AntdDemos/>}
              {currentDemo === 'ui-canvas' && <UiCanvasDemos/>}
              {currentDemo === 'react-window-splitter' && <ReactWindowSplitterDemo/>}
              {currentDemo === 'tailwind' && <TailwindDemo/>}



          </div>

      </div>
  )
}
