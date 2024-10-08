import React from "react";
import { motion } from "framer-motion";
import ResourceImg from "../assets/Group 3716.png";
import ResourceImg2 from "../assets/Rectangle 1240.png";
import ResourceImg3 from "../assets/Group 3696.png";
import ResourceImg4 from "../assets/Group 3722.png";
import Line2 from "../assets/Vector 8.png";
import Line1 from "../assets/Vector 5.png";
import Line3 from "../assets/Vector 6.png";
import General from "./General-Mental-Health";
import Mental from "./Mental-Health";
import Conditions from "./Mental-Conditions";
import Wellness from "./Wellness-Tips";
import LifeStages from "./Life-Stages";
import MediaLibrary from "./Media-Library";
import { Button, Link, Image } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TopImg from "../assets/Frame 3716.png";

const Resources = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below the view
      animate={{ opacity: 1, y: 0 }} // Animate to its original position
      exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" px-auto sm:px- lg:px-36 px-12 my-10 lg:my-12 px-5 flex  flex-col  gap-3 justify-center lg:justify-start lg:mb-28 mb-10 bg-pink- w-full" // Smooth transition
    >
        <style>
        {`
        .custom-mas {
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 5%,
            white 90%,
            transparent
          );
          mask: linear-gradient(90deg, transparent, white 5%, white 90%, transparent);
        }

            .swiper-pagination-bullet {
          background-color: #ddd;
          width: 8px;
          height: 8px;
          opacity: 1;
          position: relative;
          top: em;
        }
        .swiper-pagination-bullet-active {
          background-color: #252525;
          width: 18px;
          height: 8px;
          border-radius: 5px

        }
        `}
      </style>
      <section className="grid lg:grid-cols-2 md:grid-cols-2">
        <div className="w- flex-1 flex  items-center">
          <div className="flex flex-col">
            <h1 className="font-bold lg:text-3xl text-2xl mb-5 p-">
              Get informed, Stay ahead, Empower your Mind
            </h1>
            <small className="text mb-5 px-">
              Being informed about mental health helps us break stigmas and
              identify symptoms. Knowledge empowers us to support others and
              advocate for change.
            </small>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={ResourceImg} alt="" className="lg:w- relative" />
        </div>
      </section>
      <section className="lg:my-20 my-10 mb-3">
        <div className="mb-14">
          <h1 className="text-[#2D2D2D] lg:text-3xl md:text-3xl text-xl font-bold text-start">
            Top Picks
          </h1>
          <div className="flex justify-start">
            <Image alt="Our Story" src={Line3} className="lg:w-11/12 w-9/12" />
          </div>
        </div>

        <Swiper
        className="w-full bg- mySwiper h- flex flex-col justify-center relative lg:pb-16 pb-8 relative"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
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
                <Image src={TopImg} className=""/>
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
                <Image src={TopImg} className=""/>
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
      </section>
      <section className="lg:my-20 my-10 mb-3 bg-blue- w-full">
        <div className="flex flex-col justify- mb-8 mt-5 gap-5">
          <div className="flex gap-2 justify-center flex-col">
            <div className="mb-14">
              <h1 className="text-[#2D2D2D] lg:text-3xl text-xl font-bold text-start">
                Information Corner
              </h1>
              <div className="flex justify-start">
                <Image
                  alt="Our Story"
                  src={Line2}
                  className="lg:w-9/12 w-7/12"
                />
              </div>
            </div>
            <General />
            <Mental />
            <Conditions />
            <Wellness />
            <LifeStages />
          </div>
        </div>

        <div className="mb-20">
          <h1 className="text-[#2D2D2D] lg:text-3xl text-xl font-bold text-start">
            Information Videos
          </h1>
          <div className="flex justify-start">
            <Image alt="Our Story" src={Line1} className="lg:w-9/12 w-7/12" />
          </div>
          <div className="flex justify-start mt-10">
            <Image
              alt="Informative Videos"
              src={ResourceImg4}
              className="lg:w-full"
            />
          </div>
        </div>
      </section>

      <section className="">
        <MediaLibrary />
      </section>

      <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="flex-1 gap-10 flex flex-col justify-center">
          <div className=" gap-10 flex flex-col">
            <div>
              <h1 className="font-bold text-2xl lg:text-3xl text-xl">
                We are bringing a safe space to talk it out with a
              </h1>
              <span className="font-bold text-2xl lg:text-3xl text-xl text-[#FF6F61]">
                Mental Health Therapist
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between">
                <div className="lg:w-">
                  <small className="pr-5 leading-6 text-sm py-2 ">
                    Being informed about mental health helps us break stigmas
                    and identify symptoms. Knowledge empowers us to support
                    others and advocate for change.
                  </small>
                </div>
                <div></div>
              </div>
            </div>
            <div className="lg:mt-10">
              <Image
                src={ResourceImg3}
                alt=""
                className="lg:w-8/12 w-2/3 relative"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 lg:mt-0 mt-10">
          <Image src={ResourceImg2} alt="" className="lg:w- relative" />
        </div>
      </section>
    </motion.div>
  );
};

export default Resources;
