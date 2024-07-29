import React from 'react'
import {Avatar} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import { Image } from "@nextui-org/react"
import LandImg  from "../assets/Herovid-ezgif.com-optimize 3.png"
const landing = () => {
    // const avatars = [
    //     {image:},
    // ] 
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 my-16 px-5 flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10">
<div className='flex gap-2'>
    
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
</div> 

    <div className="flex  flex-col">
        <div className="flex"></div>
        <div className="flex"></div>
        <div className="flex"></div>
    </div>


    <div
      className="flex flex-col gap-8 "
    >
      <div className=" flex flex-col justify-center   w-">
          <div>
              <h1 className="text-black lg:text-3xl text-2xl font-bold text-center">Your peace of mind na our</h1>
              <h1 className="text-black lg:text-3xl text-2xl text-center font-bold "><span>priority,</span><span className="lg:text-3xl text-2xl pt-20 font-bold text-[#FF6F61]"> we dey here for you!</span></h1>
          </div>
       
        
      </div>
      <div className='flex justify-center '>
          <div className="w-3/4">
              <p className='text-center text-medium '>
              Your mind is powerful, and with the right tools, you can overcome anything
              </p>
          </div>
          </div>
          <div className='flex justify-center pb-8'>
          <Button
                //   as={Link}
                  href="#cta"
                  className="bg-[#81D4FA] py-2 px-10 outline-none rounded-lg text-sm"
                >
                  Get Started
                </Button>
          </div>
          <div>
            <Image src={LandImg}/>
          </div>
    </div>
    
    <div>
        <div className="flex"></div>
        <div className="flex"></div>
        <div className="flex"></div>
    </div>
  </div>
  )
}

export default landing