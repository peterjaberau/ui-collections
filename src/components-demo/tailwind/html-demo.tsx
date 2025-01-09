import * as React from 'react'

const HtmlDemo = () => {
  return (
    <>
      <div className="flex flex-wrap  w-full  gap-1.5 p-10 h-96  ">
        <div className="w-full h-[15%] bg-red-6">header</div>
        <div className="w-1/4 bg-red-6 h-3/4">sidebar</div>
        <div className="grow h-3/4  bg-red-6">content</div>

        <div className="w-full h-[15%] bg-red-6">footer</div>
      </div>
    </>
  )
}

export default HtmlDemo
