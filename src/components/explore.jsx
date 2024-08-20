import React from "react";
import { Button } from "@nextui-org/button";
import { Image, Link } from "@nextui-org/react";
import Line from "../assets/Line 3.png";
import ExploreImg from "../assets/Rectangle 16.png";
import Line2 from "../assets/Line 2.png";
import Img2 from "../assets/Rectangle 17.png";
import Img3 from "../assets/Rectangle 18.png";
const explore = () => {
  return (
    <div className="flex lg:flex-col flex-col container mx-auto sm:px-6 lg:px-40 lg:py-10 pt- px-5 lg:gap-2 lg:mb-8 lg:mt-28 mt-56">
      <h1 className="font-bold lg:text-3xl md:text-2xl text-2xl mb-5">
        Explore <span className="text-[#FF6F61]">Resources</span>
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between">
          <div className="lg:w-1/3">
            <small className="pr-5 leading-6 text-sm py-2 ">
              Discover tools and information to support your mental well-being.
            </small>
          </div>
          <div>
            <div className="flex items-center lg:justify-start justify-start lg:block hidden ">
              <Button 
              as={Link}
              href="/resources"
              className=" bg-transparent py-5 px-6 outline-none ">
                <span>View more</span>
                <Image src={Line} />
              </Button>
            </div>
          </div>
        </div>
      </div> 

    <div className="">

    </div>
      <div className="flex w-full lg:flex-row flex-col pt-10">

        <div className="relative flex flex-row flex-0 ">
        <div
              className="relative bg- lg:w-full "
            >
                <Image src={ExploreImg} className=""/>
                <div className="flex flex-row text-white items-end lg:bottom-8 absolute z-20 lg:pl-10 px-5 bottom-2">
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
                </div>
            </div>

        </div>


        <div className="flex lg:flex-0 justify-between lg:px-8 py-10 lg:py-0">
                <div className="flex lg:flex-col flex-row  lg:gap-8 gap-2 w-fit ">
                    <div className="relative"
                                  >
                                    <Image src={Img2} className="w-full"/>
                        <div className="flex flex-row text-white items-end bottom-2 absolute z-20 px-4">
                    <div className="flex-1">
                        <h4 className="font-semibold text-sm mb- ">Self-Care for Mental Wellbeing</h4>
                        <div className="w-">
            <small className="pr-5 leading-6 text-sm lg:block hidden">
            In today's fast-paced world, self-care has become increasingly important for ........
            </small>
            </div>
                    </div>
                    
                </div>
                    </div>
                    <div className="relative"
                                  >
                                    <Image src={Img3} />
                        <div className="flex flex-row text-white items-end bottom-2 absolute z-20 px-4">
                    <div className="flex-1">
                        <h4 className="font-semibold text-sm">Self-Care for Mental Wellbeing</h4>
                        <div className="w-">
            <small className="pr-5 leading-6 text-sm lg:block hidden">
            In today's fast-paced world, self-care has become increasingly important for ........
            </small>
            </div>
                    </div>
                    
                </div>
                    </div>

                </div>
        </div>
      </div>

      <div className="flex items-center justify-end w-full lg:hidden block ">
              <Button className=" bg-transparent py-5 pl-10 outline-none ">
                <div className="flex gap-5">
                  <span>View more</span>
                  <Image src={Line} />
                </div>
              </Button>
            </div>
    </div>
  );
};

export default explore;
