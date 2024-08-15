import React from "react";
import { motion } from "framer-motion";
import ResourceImg from "../assets/Group 3716.png";


import { Button, Link, Image } from "@nextui-org/react";

const Resources = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below the view
      animate={{ opacity: 1, y: 0 }} // Animate to its original position
      exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container mx- sm:px- lg:px-36 px-12 my-6 lg:my-12 px-3 flex flex-col lg:flex-row gap-3 justify-center lg:justify-start lg:mb-28 mb-10 bg-pink-" // Smooth transition
    >
      <div className="w- flex-1 flex  items-center">
        <div className="flex flex-col">
          <h1 className="font-bold lg:text-3xl text-2xl mb-5 p-">Get informed,  Stay ahead, Empower your Mind</h1>
          <small className="text mb-5 px-">Being informed about mental health helps us break stigmas and identify symptoms. Knowledge empowers us to support others and advocate for change.</small>
        </div>
      </div>
      <div className="flex-1">
      <Image src={ResourceImg} alt="" className="lg:w- relative" />
      </div>
    </motion.div>
  );
};

export default Resources;
