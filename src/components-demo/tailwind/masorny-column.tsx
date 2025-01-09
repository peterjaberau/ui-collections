import * as React from 'react'
import { Box } from '@/components/Box'

const MasornyColumnDemo = () => {
  return (
    <>
      <div className="flex  gap-[10px] flex-row flex-wrap h-[700px] w-[650px] p-20">
        <div className="flex flex-col w-[32%] gap-2">
          <div className="h-[40%] bg-blue-6 gap-8"></div>
          <div className="h-[30%] bg-blue-6 grow"></div>
          <div className="h-[30%] bg-blue-6 grow"></div>
        </div>

        <div className="flex-1 bg-blue-6"></div>
      </div>
    </>
  )
}

export default MasornyColumnDemo
