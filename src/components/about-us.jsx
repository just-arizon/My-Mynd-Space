import React from "react";
import { Button, Link } from "@nextui-org/react";
import Sphere from "../assets/Ellipse 30.svg";
import AboutImg from "../assets/Rectangle 7.svg";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const about = () => {
  return (
    <div className="flex lg:flex-row flex-col container mx-auto sm:px-6 lg:px-40 lg:my-24 my-12 px-5 lg:gap-20">
      <div className="block lg:hidden about_image flex justify-center mb-8 ">
          <Image src={AboutImg} alt="" className="" />
        </div>

        {/* <Image src={Sphere} alt="" className=" w- absolute -z- left- lg:top- bg-black" /> */}

      <Card className="bg-[#F2F6F9] py-5 lg:pl- rounded-md flex flex-col lg:flex-row items-center">
        <div className="flex lg:flex-1  flex-col gap-5 pl-5">
          <CardHeader className="flex lg:justify-start justify-center">
            <h4 className="font-bold text-2xl">About Us</h4>
          </CardHeader>
          <CardBody className="flex lg:justify-start justify-center">
            <div className=" lg:w-11/12">
              <p className="text-sm text-center lg:text-start leading-6">
                At MymindSpace, our commitment to your mental wellness drives
                everything we do. From our humble beginnings, we've grown into a
                vibrant community dedicated to supporting each individual’s
                journey to better mental health. Our story is one of compassion,
                innovation, and an unwavering belief in the power of information
                and support to transform lives.
              </p>
            </div>

            <div className="flex items-center lg:justify-start justify-center mt-8">
            <Button
            as={Link}
            href="/about"
            className="bg-[#81D4FA] py-5 px-6 outline-none rounded-lg ">
              Read more
            </Button>
          </div>
          </CardBody>
          
        </div>

        <div className="hidden lg:block about_img flex relative flex-1">
          <div><Image src={AboutImg} alt="" className="lg:w-full relative lg:" /></div>
        </div>
      </Card>
    </div>
  );
};

export default about;