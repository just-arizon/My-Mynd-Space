import React from "react";
import { motion } from "framer-motion";
import Svg from "../assets/Vector 6.png";
import Svg2 from "../assets/Vector 5.png";
import vision1 from "../assets/Rectangle 1286.png";
import vision2 from "../assets/Rectangle 1283.png";
import visionImg from "../assets/Group 3708.png";
import missionImg from "../assets/Group 3709.png";
import AboutImg from "../assets/Rectangle 55.png";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below the view
      animate={{ opacity: 1, y: 0 }} // Animate to its original position
      exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="flex  flex-col container mx-auto sm:px-6 lg:px-40 lg:my-12 mb-40 px-5 lg:gap-12 gap-8"
    >
      <section>
        <motion.h1 className="text-center font-bold lg:text-3xl text-xl my-5 px-5">
          <h4>Our Story</h4>
          <div className="flex justify-center">
            <Image alt="Card Svg" src={Svg} />
          </div>
        </motion.h1>
      </section>
      <div>
        <Image alt="Card Svg" src={AboutImg} />
      </div>

      <section className="flex justify-center my-3 lg:my-0">
        <Card className="bg-[#F2F6F9] py-5 lg:p-12 lg:pl- rounded-md flex flex-col lg:flex-row items-center lg:w-9/12">
          <div className="flex flex-col gap-5">
            <CardBody className="flex lg:justify-start justify-start ">
              <div className="flex flex-col gap-12">
                <small className="text-sm text-start lg:text-start leading-6">
                  At MymindSpace, our commitment to your mental wellness drives
                  everything we do. From our humble beginnings, we've grown into
                  a vibrant community dedicated to supporting each individual’s
                  journey to better mental health. Our story is one of
                  compassion, innovation, and an unwavering belief in the power
                  of information and support to transform lives.
                </small>
                <small className="text-sm text-start lg:text-start leading-6">
                  We're committed to helping individuals heal, grow, and
                  flourish. Discover our story, our resources, and our passion
                  for creating a brighter, more hopeful future for everyone.
                </small>
              </div>
            </CardBody>
          </div>
        </Card>
      </section>

      <section className=" my-6 lg:my-12">
        <div>
          <motion.h1 className="text-start font-bold lg:text-3xl text-xl my-5 ">
            <h4>Our Vision & Mission</h4>
            <div className="flex justify-start">
              <Image alt="Card Svg" src={Svg2} className="w-3/4" />
            </div>
          </motion.h1>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="w-full">
              <Image alt="Card Svg" src={vision1} className="" />
            </div>
            <div className="w-full">
              <Card className="bg-[#F2F6F9] p-5 lg:pl- rounded-3xl flex flex-col lg:flex-row items-center">
                <div className="flex flex-col gap-0">
                  <div className="pl-3">
                    <Image src={visionImg} alt="" className="w-10" />
                  </div>
                  <CardHeader className="flex lg:justify-start justify-start">
                    <h6 className="font-bold text-xl">Our Mission</h6>
                  </CardHeader>
                  <CardBody className="flex lg:justify-start justify-center ">
                    <div className="flex flex-col gap-12 ">
                      <small className="text-sm text-start lg:text-start leading-6">
                        Providing accessible, stigma-free, and personalized mental
                        health support to individuals, connecting them with
                        trusted resources, expert therapy, and a supportive
                        community.
                      </small>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
          </div>
          <div className="lg:w-1/2 flex lg:flex-col flex-col-reverse gap-8">
          <div className="w-full">
              <Card className="bg-[#F2F6F9] p-5 lg:pl- rounded-3xl flex flex-col lg:flex-row items-center">
                <div className="flex flex-col gap-0">
                  <div className="pl-3">
                    <Image src={missionImg} alt="" className="w-10 rounded-none" />
                  </div>
                  <CardHeader className="flex lg:justify-start justify-start">
                    <h6 className="font-bold text-xl">Our Vision</h6>
                  </CardHeader>
                  <CardBody className="flex lg:justify-start justify-center ">
                    <div className="flex flex-col gap-12 ">
                      <small className="text-sm text-start lg:text-start leading-6">
                      To transform lives through a safe, inclusive, and innovative mental health platform that empowers individuals to embrace their unique journey, cultivate self-awareness, and foster a deeper understanding of themselves, leading to holistic well-being and recovery.
                      </small>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Image alt="Card Svg" src={vision2} className="" />
            </div>
          
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
