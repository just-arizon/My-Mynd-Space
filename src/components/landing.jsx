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
    <div className="container mx-auto sm:px- lg:px- my-12 px- flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10">
      <div className="flex lg:justify-between w-full justify-center">
        <div className="hidden lg:block flex flex-col gap-8 w-1/4 py-8">
          <div className="flex justify-end">
            <Image src={Img1} alt={``} className="object-cover  rounded-full" />
          </div>
          <div className="flex justify-center">
            <Image src={Img2} alt={``} className="object-cover  rounded-full" />
          </div>
          <div className="flex justify-end">
            <Image src={Img3} alt={``} className="object-cover  rounded-full" />
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
                <div className="flex flex-col justify-center mb-10 mt-5">
                  <div>
                    <h1
                      className="text-black lg:text-3xl text-xl font-bold text-center lg:w-full
                    md:w-full"
                    >
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
                  <div className="lg:w-3/4 px-5 mb-5">
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
          <div className="lg:hidden block flex justify-center z-10 mt-6 mb-5">
            <div className="flex">
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
        </div>

        <div className="flex flex-col gap-8 w-1/4 hidden lg:block py-8">
          <div className="flex justify-center">
            <Image src={Img5} alt={``} className="object-cover  rounded-full" />
          </div>
          <div className="flex justify-end">
            <Image src={Img4} alt={``} className="object-cover  rounded-full" />
          </div>
          <div className="flex justify-center">
            <Image src={Img6} alt={``} className="object-cover  rounded-full" />
          </div>
        </div>
      </div>

      <div className="z-10 lg:mt-14 p-5">
        <Image src={LandImg} />
      </div>
    </div>
  );
};

export default Landing;
