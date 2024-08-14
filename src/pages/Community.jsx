import React from "react";
import { motion } from "framer-motion";
import { Button, Link, Image } from "@nextui-org/react";
import GridImg from "../assets/Grid-block.svg";
import ResourceImg from "../assets/Group 3714.png";

const Community = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below the view
      animate={{ opacity: 1, y: 0 }} // Animate to its original position
      exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      className="container mx-auto sm:px- lg:px- my-6 lg:my-12 px-3 flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10"
    >
      <div className="mt-16 mb-8 flex justify-center">
        <div className="relative flex flex-row bg-purple-">
          <div
            className="grid-layout bg-cover bg-center lg:w-8/12 w-10/12 h-full absolute left-6 lg:left- lg:mx-40"
            style={{ backgroundImage: `url(${GridImg})`, opacity: 0.45 }}
          ></div>
          <div className="landing relative flex flex-col justify-center items-center z-10">
            <div>
              <div className="flex flex-col justify-center mb-8 mt-5">
                <div>
                  <h1
                    className="text-black lg:text-3xl text-xl font-bold text-center lg:w-full
                    md:w-full"
                  >
                   Real Voices, Real Stories
                  </h1>
                  <h1 className="text-black lg:text-3xl text-xl text-center font-bold">
                    
                    <span className="lg:text-3xl text-xl pt-20 font-bold text-[#FF6F61]">
                      {" "}
                      Our Community Speaks
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-2">
              <div className="lg:w-3/4 lg:px-28 px- mb-5">
                <p className="text-center text-medium text-sm ">
                Discover the diverse experiences of our community members. From struggles to triumphs, these real stories highlight our strength and resilience. Share your journey and connect with others who understand.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
                  
      <div className="lg:px-16">
              <Image alt="About Us" src={ResourceImg} className="mt-5" />
              </div>
    </motion.div>
  );
};

export default Community;
