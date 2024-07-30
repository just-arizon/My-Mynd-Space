import React from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import LandImg from "../assets/Herovid-ezgif.com-optimize 3.png";
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
    <div className="container mx-auto sm:px-6 lg:px-8 my-16 px-5 flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10">
      <div className="flex flex-col">
        <div className="flex"></div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-black lg:text-3xl  md:text-3xl font-bold text-center">
              Your peace of mind na our
            </h1>
            <h1 className="text-black lg:text-3xl  md:text-3xl text-center font-bold">
              <span>priority,</span>
              <span className="lg:text-3xl  md:text-3xl pt-20 font-bold text-[#FF6F61]">
                {" "}
                we dey here for you!
              </span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-3/4">
            <p className="text-center text-medium">
              Your mind is powerful, and with the right tools, you can overcome
              anything
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

        <div className="flex justify-center">
          <div className="flex">
            {avatars.map((avatar, index) => (
              <div key={index} className="relative">
                <Image
                  src={avatar.img}
                  alt={`Avatar ${index + 1}`}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src={LandImg} />
        </div>
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
