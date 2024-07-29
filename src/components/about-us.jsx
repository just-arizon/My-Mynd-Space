import React from "react";
import { Button } from "@nextui-org/button";
import Sphere from "../assets/Ellipse 30.svg";
import AboutImg from "../assets/Rectangle 7.svg";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const about = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 my-16 px-5">
      <div className="block lg:hidden about_image flex justify-center mb-8">
          <Image src={AboutImg} alt="" className="lg:" />
        </div>

        <Image src={Sphere} alt="" className="hidden w-2/12 absolute -z-20 left-5 lg:top-12" />

      <Card className="bg-[#F2F6F9] py-5 lg:pl-5 rounded-md flex flex-col lg:flex-row items-center">
        <div className="flex flex-1  flex-col gap-5">
          <CardHeader className="flex lg:justify-start justify-center">
            <h4 className="font-bold text-2xl">About Us</h4>
          </CardHeader>
          <CardBody className="flex lg:justify-start justify-center">
            <div className=" lg:w-11/12">
              <p className="text-medium text-center">
                At MymindSpace, our commitment to your mental wellness drives
                everything we do. From our humble beginnings, we've grown into a
                vibrant community dedicated to supporting each individual’s
                journey to better mental health. Our story is one of compassion,
                innovation, and an unwavering belief in the power of information
                and support to transform lives.
              </p>
            </div>

            <div className="flex items-center lg:justify-start justify-center mt-8">
            <Button className="bg-[#81D4FA] py-5 px-6 outline-none rounded-lg ">
              Read more
            </Button>
          </div>
          </CardBody>
          
        </div>

        <div className="hidden lg:block about_img flex relative ">
          <div><Image src={AboutImg} alt="" className="lg:w-9/12 relative lg:left-36" /></div>
        </div>
      </Card>
    </div>
  );
};

export default about;