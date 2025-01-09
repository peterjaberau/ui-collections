import * as React from 'react'




const AlternatingGridDemo = () => {
  return (
    <>
      <div className="flex flex-col h-96  gap-2 ">
        <div className="flex flex-row h-[30%] gap-2">
          <div className="bg-green-9 w-[50%]"></div>
          <div className="bg-green-9 w-[50%]"></div>
        </div>
        <div className=" flex flex-1 bg-red-6 H-[40%] ">1</div>
        <div className="flex flex-row gap-2 h-[25%]">
          <div className="bg-green-9 w-[50%] "></div>
          <div className="bg-green-9 w-[50%] "></div>
        </div>
      </div>
    </>
  )
}

export default AlternatingGridDemo


