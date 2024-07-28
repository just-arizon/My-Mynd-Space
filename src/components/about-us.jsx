import React from "react";
import { Button } from "@nextui-org/button";
import Sphere from "../assets/Ellipse 30.svg";
import AboutImg from "../assets/Rectangle 7.svg";

const about = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 my-16 px-5">
      <div className="block lg:hidden about_img flex flex-1 mb-8">
          <img src={AboutImg} alt="" className="lg:" />
        </div>

        <img src={Sphere} alt="" className="hidden w-2/12 absolute -z-20 left-5 lg:top-12" />

      <div className="bg-[#F2F6F9] py-5 pl-5 rounded-md flex flex-col lg:flex-row items-center shadow-md">
        <div className="flex flex-1  flex-col gap-5">
          <h4 className="font-bold text-2xl mb-5">About Us</h4>
          <div className=" lg:w-11/12">
            <p className="pr-5">
              At MymindSpace, our commitment to your mental wellness drives
              everything we do. From our humble beginnings, we've grown into a
              vibrant community dedicated to supporting each individual’s
              journey to better mental health. Our story is one of compassion,
              innovation, and an unwavering belief in the power of information
              and support to transform lives.
            </p>
          </div>
          <div className="flex items-center">
            <Button className="bg-[#81D4FA] py-5 px-6 outline-none rounded-lg ">
              Read more
            </Button>
          </div>
        </div>

        <div className="hidden lg:block about_img flex relative ">
          <div><img src={AboutImg} alt="" className="lg:w-9/12 relative lg:left-36" /></div>
        </div>
      </div>
    </div>
  );
};

export default about;
