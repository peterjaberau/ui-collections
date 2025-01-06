import * as React from "react"
import {Box} from "@/components/Box";
import AntdButtonDemo from "@/components-demo/antd/antd-button/antd-button-demo"
import AntdBlockButtonDemo from '@/components-demo/antd/antd-block-button/antd-block-button-demo'
import AntdFloatButtonDemo from '@/components-demo/antd/antd-float-button/antd-float-button-demo'
import AntdInlineMenuDemo from '@/components-demo/antd/antd-inline-menu/antd-inline-menu-demo'



const AntdDemos = () => {
    return (
        <>
          <div className="space-y-8">
            <div className="flex justify-center space-x-8">

              <Box title="Antd Button Demo">
                <AntdButtonDemo />


              </Box>


              <Box title="Antd Block Button Demo">
                <AntdBlockButtonDemo />


              </Box>


              <Box title="Antd Float Button Demo">
                <AntdFloatButtonDemo />


              </Box>


            </div>



            <Box title="Antd Inline Menu Demo">
              <AntdInlineMenuDemo/>


            </Box>

          </div>





        </>
          )
          }

          export default AntdDemos
