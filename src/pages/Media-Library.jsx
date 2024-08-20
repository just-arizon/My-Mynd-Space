import React from 'react';
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import Line from "../assets/Line 3.png";
import Img from "../assets/Group 3723.png";
import { Link } from 'react-router-dom';

const MediaLibrary = () => {
  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const data = [
    {
      id: 1,
      img: Img,
      title: "Stress Management Techniques",
    },
    {
      id: 2,
      img: Img,
      title: "Physical Activity and Mental Health",
    },
    {
      id: 3,
      img: Img,
      title: "Physical Activity and Mental Health",
    },
  ];

  return (
    <motion.div {...motionSettings} className="flex flex-col gap-8  pb-12 lg:mb-20 mb-10">
      <div className="flex justify-between items-center">
        <div className="relative">
          <h4 className="lg:text-lg md:text-medium sm:text-medium z-20">Media Library</h4>
          <div className="bg-[#81D4FA] w-16 h-16 rounded-full absolute -right-8 -top-5 -z-20"></div>
        </div>
        <Button className="bg-transparent py-5 pl-0 outline-none flex items-center gap-2 lg:flex hidden">
          <span>View more</span>
          <Image src={Line} alt="Line" />
        </Button>
      </div>

      <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 ">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center w-full bg-white rounded-lg overflow-hidden shadow- gap-5 my-10"
          >
            <Image src={item.img} alt={item.title} className="w-full h-auto object-cover" />
            <div className="flex-1 p- flex flex-col gap-3">
              <Link
              to ="{#}"
              >
                  <small className="text-md font-medium w-full text-[#2D2D2D] text-center">{item.title}</small>
              </Link>

            </div>
          </motion.div>
          
        ))}
        
      </section>
      <div className="w-full lg:hidden flex justify-end">
            <Button className="bg-transparent py-5 pr-0 outline-none flex items-center gap-2">
            <span>View more</span>
            <Image src={Line} alt="Line" />
                  </Button>
        </div>
    </motion.div>
  );
};

export default MediaLibrary;
