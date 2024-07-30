import React from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import LandImg from "../assets/Herovid-ezgif.com-optimize 3.png";
import GridImg from "../assets/Grid-block.svg";
import Img1 from "../assets/Ellipse 24.png";
import Img2 from "../assets/Ellipse 23.png";
import Img3 from "../assets/Ellipse 25.png";
import Img4 from "../assets/Ellipse 26.png";
import Img5 from "../assets/Ellipse 27.png";
import Img6 from "../assets/Ellipse 28.png";

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
    <div className="container mx-auto sm:px-6 lg:px-8 my-12 px-5 flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10">
      <div className="flex flex-col">
        <div className="flex"></div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>

      <div className="relative flex flex-col gap-8">
        <div
          className="grid-layout bg-cover bg-center w-full h-full absolute"
          style={{ backgroundImage: `url(${GridImg})`, opacity: 0.45 }}
        ></div>
        <div className="landing relative flex flex-col justify-center items-center z-10">
          <div>
            <div className="flex flex-col justify-center mb-5">
              <div>
                <h1 className="text-black lg:text-3xl text-xl font-bold text-center lg:w-full 
                md:w-full w-screen">
                  Your peace of mind na our
                </h1>
                <h1 className="text-black lg:text-3xl text-xl text-center font-bold">
                  <span>priority,</span>
                  <span className="lg:text-3xl text-xl pt-20 font-bold text-[#FF6F61]">
                    {" "}
                    we dey here for you!
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center mb-5">
              <div className="lg:w-3/4 px-5">
                <p className="text-center text-medium text-sm">
                  Your mind is powerful, and with the right tools, you can
                  overcome anything
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-8">
              <Button
                // as={Link}
                href="#cta"
                className="bg-[#81D4FA] py-2 px-10 outline-none rounded-lg text-sm"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center z-10 mt-12 mb-5">
        <div className="flex gap-2">
          {avatars.map((avatar, index) => (
            <div key={index} className="relative">
              <Image
                src={avatar.img}
                alt={`Avatar ${index + 1}`}
                className="object-cover  rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="z-10">
        <Image src={LandImg} />
      </div>

      <div>
        <div className="flex"></div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Landing;
