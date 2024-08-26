import React from "react";
import {
  Link,
  Button,
  Image,
  Avatar
} from "@nextui-org/react";
import Videocloudinary from "../pages/Videocloudinary";
import GridImg from "../assets/Grid-block.svg";
import Img1 from "../assets/F1.jpg";
import Img2 from "../assets/F2.jpg";
import Img3 from "../assets/F3.jpg";
import Img4 from "../assets/F4.jpg";
import Img5 from "../assets/F5.jpg";
import Img6 from "../assets/F6.jpg";
import Circle from "../assets/Ellipse 22.png";
import Polygon from "../assets/Polygon 13.png";
import orangepolygon from "../assets/Polygon 12.png";
import { motion } from "framer-motion";


const Landing = () => {
  const avatars = [
    { img: Img1 },
    { img: Img2 },
    { img: Img3 },
    { img: Img4 },
    { img: Img5 },
    { img: Img6 },
  ];

  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -50 }} 
    transition={{ duration: 0.5, ease: 'easeInOut' }} 
    className="container mx-auto sm:px-6 lg:px-12 my-6 lg:my-12 px-3 flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10 text-[#2D2D2D]">
      <div className="w-full flex justify-start">
        <Image src={Circle} className="lg:hidden block"/>
      </div>
      <div className="flex lg:justify-between w-full justify-center">
        <div className="hidden lg:block flex flex-col gap-8 w-1/4 py-8">
          <div className="flex justify-end">
            <Avatar src={Img1} alt="Avatar 1" className="object-cover rounded-full" />
          </div>
          <div className="flex justify-center">
            <Avatar src={Img2} alt="Avatar 2" className="object-cover rounded-full" />
          </div>
          <div className="flex justify-end">
            <Avatar src={Img3} alt="Avatar 3" className="object-cover rounded-full" />
          </div>
        </div>

        <div className="">
          <div className="relative flex flex-row gap-8">
            <div
              className="grid-layout bg-cover bg-center lg:w-full w-10/12 h-full absolute left-6 lg:left-6"
              style={{ backgroundImage: `url(${GridImg})`, opacity: 0.45 }}
            ></div>
            <div className="landing relative flex flex-col justify-center items-center z-10">
              <div>
                <div className="flex flex-col justify-center mb-2 mt-5">
                  <div>
                    <h1
                      className="text-[#2D2D2D] lg:text-3xl md:text-2xl text-2xl  font-bold text-center lg:w-full
                    md:w-full"
                    >
                      Your peace of mind is our
                    </h1>
                    <h1 className="text-[#2D2D2D] lg:text-3xl md:text-2xl text-2xl  text-center font-bold">
                      <span>priority,</span>
                      <span className="lg:text-3xl md:text-2xl text-2xl  pt-20 font-bold text-[#FF6F61]">
                        {" "}
                        we're here for you!
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <Image src={orangepolygon} className="rounded-none lg:hidden block"/>
                </div>
                <div className="flex justify-center mb-2">
                  <div className="lg:w-3/4 px-5 mb-5">
                    <p className="text-center text-medium text-sm">
                      Your mind is powerful, and with the right tools, you can
                      overcome anything.
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-start absolute">
                  <Image src={Polygon} className="rounded-none lg:hidden block"/>
                </div>
                <div className="flex justify-center pb-5">
                  <Button
                    as={Link}
                    href="/get-started"
                    className="bg-[#81D4FA] py-2 px-10 outline-none rounded-lg text-sm"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pl-10 mt-4">
            <Image src={Circle} className="lg:hidden block"/>
          </div>
          <div className="lg:hidden block flex justify-center z-10 mt-6 mb-5">
            <div className="flex gap-5">
              {avatars.map((avatar, index) => (
                <div key={index} className="relative flex">
                  <Avatar
                    src={avatar.img}
                    alt={`Avatar ${index + 1}`}
                    className="object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Image src={Polygon} className="rounded-none lg:hidden block"/>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-1/4 hidden lg:block py-8">
          <div className="flex">
            <Avatar src={Img5} alt="Avatar 5" className="object-cover rounded-full" />
          </div>
          <div className="flex justify-center">
            <Avatar src={Img4} alt="Avatar 4" className="object-cover rounded-full" />
          </div>
          <div className="flex">
            <Avatar src={Img6} alt="Avatar 6" className="object-cover rounded-full" />
          </div>
        </div>
      </div>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      className="z-10 lg:mt-14 sm:px-6 lg:px-40 ">
        <Videocloudinary />
      </motion.div>
    </motion.div>
  );
};

export default Landing;
