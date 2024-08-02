import React from "react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import Line from "../assets/Line 3.png";
import ExploreImg from "../assets/Rectangle 16.png";
import Line2 from "../assets/Line 2.png";
import Img2 from "../assets/Rectangle 17.png";
import Img3 from "../assets/Rectangle 18.png";
const explore = () => {
  return (
    <div className="flex lg:flex-col flex-col container mx-auto sm:px-6 lg:px-40 lg:py-16 py-16 px-5 lg:gap-2 mb-16">
      <h1 className="font-bold text-2xl lg:text-3xl text-xl">
        Explore Resources
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
              <Button className=" bg-transparent py-5 px-6 outline-none ">
                <span>View more</span>
                <Image src={Line} />
              </Button>
            </div>
          </div>
        </div>
      </div> 


      <div className="flex w-full lg:flex-row flex-col">
        <div className="relative flex flex-row  lg:w-7/12 ">
        <div
              className=" bg-cover bg-center lg:w-full h-11/12  flex my-10 rounded-lg px-10 py-5"
              style={{ backgroundImage: `url(${ExploreImg})` }}
            >
                <div className="flex flex-row text-white items-end justify-between">
                    <div className="flex-1">
                        <h4 className="font-semibold lg:text-2xl lg:mb-6 text-xl lg:w-9/12">10 Tips to boost your mental health</h4>
                        <div className="w-">
            <small className="pr-5 leading-6 text-sm py-2 ">
            Taking care of your mental health is as important as maintaining your physical health. One effective way to boost your mental well-being is by staying active......
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


        <div className="flex lg:flex-1 justify-between px-8">
                <div className="flex lg:flex-col flex-col">
                    <div className=" bg-cover bg-center lg:w-full h-60  flex my-7 mt- rounded-lg px-6 py-2  "
                                  style={{ backgroundImage: `url(${Img2})` }}>
                        <div className="flex flex-row text-white items-end justify-between">
                    <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 ">Self-Care for Mental Wellbeing</h4>
                        <div className="w-">
            <small className="pr-5 leading-3 text-sm py-2 ">
            In today's fast-paced world, self-care has become increasingly important for ........
            </small>
            </div>
                    </div>
                    
                </div>
                    </div>


                    
                    <div className=" bg-cover bg-center lg:w-full h-60  flex my-7 mt- rounded-lg px-6 py-2 "
                                  style={{ backgroundImage: `url(${Img3})` }}>
                        <div className="flex flex-row text-white items-end justify-between">
                    <div className="">
                        <h4 className="font-semibold text-lg mb-1 ">The Importance of Sleep for Mental Health
                        </h4>
                        <div className="w-">
            <small className="pr-5 leading-3 text-sm py-2 ">
            Sleep is a fundamental aspect of overall health, and its importance for mental health cannot be overstated ...........
            </small>
            </div>
                    </div>
                    
                </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default explore;
