import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Image1 from "../assets/Rectangle 1275.png";
import Image2 from "../assets/Rectangle 1276.png";
import Image3 from "../assets/Rectangle 1277.png";
import Svg from "../assets/Vector 6.png";

const Help = () => {
  const cards = [
    {
      title: "Self Help Tips & Articles",
      body: "Discover self-help tips on stress management, mindfulness, and more to boost your mental wellness.",
      img: Image1,
      href: "/self-help-tips", // Adjust this to your actual route
    },
    {
      title: "Supportive Community",
      body: "Join a welcoming community to share experiences, seek advice, and find support for your mental health journey.",
      img: Image2,
      href: "/supportive-community", // Adjust this to your actual route
    },
    {
      title: "MindMood Checker",
      body: "Track your mood with the MindMood Checker to gain insights and manage your mental health.",
      img: Image3,
      href: "/mindmood-checker", // Adjust this to your actual route
    },
  ];

  return (
    <div className="container mx-auto sm:px-6 lg:px-40 my-28 px-3">
      <motion.h1 className="text-center font-bold lg:text-3xl md:text-2xl text-2xl mb-5">
        <h4>How We Help</h4>
        <div className="flex justify-center">
          <Image alt="Card Svg" src={Svg} />
        </div>
      </motion.h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 justify-center py-10">
        {cards.map((item, index) => (
          <Link key={index} to={item.href} className="block">
            <Card className="lg:w-72 w-80 pb-16 bg-[#F2F6F9] cursor-pointer">
              <Image
                alt="Card background"
                className="object-cover w-80 lg:w-72 rounded-t-xl rounded-br-none rounded-bl-none"
                src={item.img}
              />
              <CardHeader className="pb-0 pt-2 px-4 flex-col gap-6">
                <p className="text-lg capitalize font-bold text-center mt-5">
                  {item.title}
                </p>
              </CardHeader>
              <CardBody className="pt-2 mt-4">
                <small className="text-center text-black leading-6">
                  {item.body}
                </small>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Help;
