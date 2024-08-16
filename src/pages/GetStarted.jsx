import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Image1 from "../assets/Rectangle 1275.png";
import Image2 from "../assets/Rectangle 1276.png";
import Image3 from "../assets/Rectangle 1277.png";
import Svg from "../assets/Vector 6.png";
import { motion } from "framer-motion";
import Circle from "../assets/Ellipse 21 (1).png";
import bluecircle from "../assets/Ellipse 19.png";
import Polygon from "../assets/Polygon 13.png";
import orangepolygon from "../assets/Polygon 12.png";
import bluepolygon from "../assets/Polygon 12 (2).png";

const GetStarted = () => {
  const cards = [
    {
      title: "Self Help Tips & Articles",
      body: "Discover self-help tips on stress management, mindfulness, and more to boost your mental wellness.",
      img: Image1,
    },
    {
      title: "Supportive Community",
      body: "Track your mood with the MindMood Checker to gain insights and manage your mental health.",
      img: Image2,
    },
    {
      title: "MindMood Checker",
      body: "Join a welcoming community to share experiences, seek advice, and find support for your mental health journey.",
      img: Image3,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below the view
      animate={{ opacity: 1, y: 0 }} // Animate to its original position
      exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="w-full relative text-[#2D2D2D]"
    >
   
      <div className="flex  bg-  justify-between lg:py-10 lg:flex hidden">
        <div className="flex flex-1 px-5 ">
          <Image src={Circle} className="w-8 " />
        </div>
        <div className="flex flex-0 gap-96 px-5 ">
          <Image src={bluecircle} className="w-8" />
          <Image src={orangepolygon} className="rounded-none w-5" />
        </div>
      </div>

      <div className="flex flex-col items-center bg- lg:py-10 lg:hidden block  left-5  py-">
        <div className="flex justify-start bg- w-full py-5 px-5">
          <Image src={Circle} className="w-6" />
        </div>
        <motion.h1 className="text-center font-bold lg:text-3xl text-xl mb-5  lg:hidden block px-5">
        <h4>What feature are you exploring today ?</h4>
        <div className="flex justify-center">
          <Image alt="Card Svg" src={Svg} />
        </div>
      </motion.h1>
      </div>

      <div className="flex justify-end lg:py-10 px-5 pb-5 lg:hidden block">
        <div className="">
          <Image src={bluepolygon} className="w-6 rounded-none" />
        </div>
      </div>
      <div className="bg-[#F2F6F9] lg:py-20">
        <motion.h1 className="text-center font-bold lg:text-3xl text-xl mb-5 lg:block hidden">
          <h4>What feature are you exploring today ?</h4>
          <div className="flex justify-center">
            <Image alt="Card Svg" src={Svg} />
          </div>
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-12 py-10">
          {cards.map((item, index) => (
            <Card key={index} className="lg:w-72 w-80 pb-16 bg-[#FFF]">
              <Image
                alt="Card background"
                className="object-cover w-80 lg:w-72 rounded-t-xl rounded-br-none
                    rounded-bl-none"
                src={item.img}
              />
              <CardHeader className="pb-0 pt-2 px-4 flex-col  gap-6">
                <p className="text-lg capitalize font-bold text-center mt-5">
                  {item.title}
                </p>
              </CardHeader>
              <CardBody className="pt-2 mt-4">
                <small className=" text-center text-[#2D2D2D] leading-6">
                  {item.body}
                </small>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-between py-10 lg:flex hidden">
        <div className="flex flex-1 px-5">
          <Image src={Circle} className="w-8 " />
        </div>
        <div className="flex flex-0 gap-96 px-5">
          <Image src={bluecircle} className="w-8" />
          <Image src={orangepolygon} className="rounded-none w-5" />
        </div>
      </div>
      <div className="py-2 lg:hidden block">
        
      <div className="flex justify-end lg:py-10 px-5 pb-5 ">
        <div className="">
          <Image src={orangepolygon} className="w-6 rounded-none" />
        </div>

      </div>
      <div className="pb-20 pl-12">
          <Image src={bluecircle} className="w-6 rounded-none" />
        </div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
