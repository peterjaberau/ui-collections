import * as React from "react";
import {Box} from "@/components/Box";
import HtmlDemo from "./html-demo";
import Html5Demo from "@/components-demo/tailwind/html-5-demo";
import MasornyColumnDemo from "@/components-demo/tailwind/masorny-column";
import AlternatingGridDemo from "@/components-demo/tailwind/alternating-grid-demo";

const TailwindDemo = () => {




    return (
        <>
            <div className="flex gap-[20px] flex-col w-screen p-10">
                <div className="grow">
                    <Box title="Html Demo">
                        <HtmlDemo/>
                    </Box>

                </div>
                <div className="grow">
                    <Box title="Html5 Demo">
                        <Html5Demo/>
                    </Box>


                </div>


            </div>

            <div className="flex gap-[20px] flex-col w-screen p-10 ">
                <div className="grow">
                    <Box title="Masorny Column Demo">
                        <MasornyColumnDemo/>
                    </Box>

                    <Box title="Alternating Grid Demo">
                        <AlternatingGridDemo/>
                    </Box>


                </div>

            </div>



            </>


            )

            }
            export default TailwindDemo
