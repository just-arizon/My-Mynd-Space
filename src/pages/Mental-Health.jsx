import React from 'react';
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import Line from "../assets/Line 3.png";
import Image1 from "../assets/Rectangle 1291.png";
import Image2 from "../assets/Rectangle 1290.png";
import { Link } from 'react-router-dom';

const MentalHealth = () => {
  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const data = [
    {
      id: 1,
      img: Image1,
      date: "June 5th, 2024",
      title: "Supporting a Partner with Mental Issues",
    },
    {
      id: 2,
      img: Image2,
      date: "June 5th, 2024",
      title: "How anxiety and depression affect romantic relationships",
    },
  ];

  return (
    <motion.div {...motionSettings} className="flex flex-col gap-8 border-b-1 border-[#C9C9C9] pb-12 mb-12">
      <div className="flex justify-between items-center">
        <div className="relative">
          <h4 className="text-lg z-20"> Mental Health & Relationships</h4>
          <div className="bg-[#FFA892] w-16 h-16 rounded-full absolute -right-8 -top-5 -z-20"></div>
        </div>
        <Button className="bg-transparent py-5 pl-0 outline-none flex items-center gap-2 lg:flex hidden">
          <span>View more</span>
          <Image src={Line} alt="Line" />
        </Button>
      </div>

      <section className="lg:flex flex-row lg:gap-10 ">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-start w-full bg-white rounded-lg overflow-hidden shadow- gap-5 my-10"
          >
            <Image src={item.img} alt={item.title} className="w-full h-auto object-cover" />
            <div className="flex-1 p-4 flex flex-col gap-3">
            <p className="text-sm text-gray-500">{item.date}</p>
              <Link
              to ="{#}"
              >
                  <h5 className="text-md font-semibold w-10/12 text-[#2D2D2D]">{item.title}</h5>
              </Link>

            </div>
          </motion.div>
          
        ))}
        <div className="w-full lg:hidden flex justify-end">
            <Button className="bg-transparent py-5 pr-0 outline-none flex items-center gap-2">
            <span>View more</span>
            <Image src={Line} alt="Line" />
                  </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default MentalHealth;
