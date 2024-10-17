import React from 'react'
import {
  Avatar,
  Button,
  Image,
  Link
} from "@nextui-org/react";
const MindmoodChecker = () => {
  return (
    <div className=" mx-0 mb-20  w-full ">
      
      <div className="bg-blue-200 w-full relative py-20 flex flex-col" 
      style={{
        clipPath: `ellipse(100% 100% at 50% 100%)`,
        transform: 'scaleY(-1)',
      }}
      >
      <div className="">
        
      </div>
      <div className="landing relative flex flex-col justify-center items-center z-10 bg-orange-"
       style={{
        transform: 'scaleY(-1)',
      }}
      >
              <div>
                <div className="flex flex-col justify-center mb-2 mt-5">
                  <div>
                    <h1
                      className="text-[#2D2D2D] lg:text-3xl md:text-2xl text-2xl  font-bold text-center lg:w-full
                    md:w-full"
                    >
                     Discover Your Mood Insights Today
                    </h1>
                  
                   
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  {/* <Image src={orangepolygon} className="rounded-none lg:hidden block"/> */}
                </div>
                <div className="flex justify-center mb-2">
                  <div className="lg:w-3/4 px-5 mb-5">
                    <p className="text-center text-medium text-sm">
                    Gain personalized insights into your current mood with our quick MindMood quiz. Discover how your emotions shape your day and navigate with greater clarity. Start now!
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-start absolute">
                  {/* <Image src={Polygon} className="rounded-none lg:hidden block"/> */}
                </div>
                <div className="flex justify-center pb-5">
                  <Button
                    as={Link}
                    href="/get-started"
                    className="bg-[#81D4FA] py-2 px-10 outline-none rounded-lg text-sm"
                  >
                    Take Quiz
                  </Button>
                </div>
              </div>
            </div>
      <div className=""
      style={{
        transform: 'scaleY(1)',
      }}
      >
       
      </div>
      </div>
      
      </div>
  )
}

export default MindmoodChecker