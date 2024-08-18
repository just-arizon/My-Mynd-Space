import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";

import WaitlistImg from "../assets/waitlist.png";
import Line2 from "../assets/Line 2.png";
// import required modules
import { Pagination } from "swiper/modules";

const waitlist = () => {
  return (
    <div className="container mx-auto px-3 lg:px-40 lg:my-16 lg:mb-20 lg:top-14 mx- relative lg:top-20 top-16 text-[#2D2D2D]">
      <div className="lg:w-3/4 lg:pr-36 bg- lg:mb-16 mb-8">
        <h1 className="font-bold text-2xl lg:text-3xl text-xl">
          Join the waitlist and be the first to try out our coming features
        </h1>
      </div>

      <Swiper
        className="w-full bg- mySwiper h- flex flex-col justify-center relative lg:pb-16 pb-8"
        pagination={true}
        modules={[Pagination]}
        centeredSlides={true}
        loop={false}
        slidesPerView={1}
        spaceBetween={40}
      >

          <SwiperSlide className="bg-orange- flex justify-center">
          <div className="relative flex flex-row flex-0 ">
        <div
              className="relative bg- lg:w-full "
            >
                <Image src={WaitlistImg} className=""/>
                {/* <div className="flex flex-row text-white items-end lg:bottom-8 absolute z-20 lg:pl-10 px-5 bottom-2">
                    <div className="flex-1">
                        <h4 className="font-semibold lg:text-2xl lg:mb-3 -mb-2 text-lg lg:w-9/12">10 Tips to boost your mental health</h4>
                        <div className="w-">
            <small className="pr-5 leading-6 text-sm py-2 lg:block hidden">
            Taking care of your mental health is as important as maintaining your physical health. One effective way to boost your mental well-being is by staying active......
            </small>
            <small className="pr-5 leading-6 text-sm py-2 lg:hidden block">
            Taking care of your mental health is as important...
            </small>
            </div>
                    </div>
                    <div className="hidden lg:block">
                        
                        <Button className=" bg-transparent py-5 px-6 outline-none ">
                            <Image src={Line2}/>
                        </Button>
                    </div>
                </div> */}
            </div>

        </div>
          </SwiperSlide>
          <SwiperSlide className="bg-orange- flex justify-center">
          <div className="relative flex flex-row flex-0 ">
        <div
              className="relative bg- lg:w-full "
            >
                <Image src={WaitlistImg} className=""/>
                {/* <div className="flex flex-row text-white items-end lg:bottom-8 absolute z-20 lg:pl-10 px-5 bottom-2">
                    <div className="flex-1">
                        <h4 className="font-semibold lg:text-2xl lg:mb-3 -mb-2 text-lg lg:w-9/12">10 Tips to boost your mental health</h4>
                        <div className="w-">
            <small className="pr-5 leading-6 text-sm py-2 lg:block hidden">
            Taking care of your mental health is as important as maintaining your physical health. One effective way to boost your mental well-being is by staying active......
            </small>
            <small className="pr-5 leading-6 text-sm py-2 lg:hidden block">
            Taking care of your mental health is as important...
            </small>
            </div>
                    </div>
                    <div className="hidden lg:block">
                        
                        <Button className=" bg-transparent py-5 px-6 outline-none ">
                            <Image src={Line2}/>
                        </Button>
                    </div>
                </div> */}
            </div>

        </div>
          </SwiperSlide>
          
         
      </Swiper>
    </div>
  );
};

export default waitlist;
