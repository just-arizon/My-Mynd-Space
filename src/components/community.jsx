import { Button, Image, Link } from "@nextui-org/react";
import React from "react";
import Img1 from "../assets/Rectangle 14.png";
import Img2 from "../assets/Rectangle 44.png";
import Img3 from "../assets/Rectangle 45.png";
import Img4 from "../assets/Rectangle 46.png";
const community = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-20 my-40" >
      <div className="community_img flex-1 flex lg:flex-row flex-col  lg:pt-10 lg:block relative hidden">
        <div className="flex gap-5 mb-5">
            <Image src={Img1} alt="" className="lg:w-full relative rounded-b-none rounded-r-none" />
            <Image src={Img2} alt="" className="lg:w-full relative rounded-l-none rounded-r-none" />
        </div>
        <div className="flex gap-5 mb-5">
            <Image src={Img4} alt="" className="lg:w-full relative rounded-l-none rounded-b-none" />
            <Image src={Img3} alt="" className="lg:w-full relative rounded-t-none rounded-b-none" />
        </div>
      </div>

      <div className="flex-1 pt-10">
        <div className="container">
          <div>
            <div className="flex lg:w-3/4 w-full">
              <div>
                <h4 className="font-bold mb-5 lg:text-3xl md:text-2xl text-2xl ">
                  Real people,{" "}
                  <span className="lg:text-3xl md:text-2xl sm:text-xl  pt-20 font-bold text-[#FF6F61]">
                    Real Stories
                  </span>
                </h4>
                <div className="community_img flex-1 flex lg:flex-row flex-col  lg:pt-10 lg:hidden block relative my-8">
        <div className="flex gap-5 mb-5">
            <Image src={Img1} alt="" className="lg:w-full relative rounded-b-none rounded-r-none" />
            <Image src={Img2} alt="" className="lg:w-full relative rounded-l-none rounded-r-none" />
        </div>
        <div className="flex gap-5 mb-5">
            <Image src={Img4} alt="" className="lg:w-full relative rounded-l-none rounded-b-none" />
            <Image src={Img3} alt="" className="lg:w-full relative rounded-t-none rounded-b-none" />
        </div>
      </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className=" lg:py-1 border-r-[#FF6F61]  border-r-2 pr-2">
              <small className="pr-5 leading-6 text-sm py-5 ">
                Read inspiring stories from community members who have benefited
                from our platform. Discover how they overcame challenges,
                improved their mental health, and found support through our
                resources and community. These voices highlight the importance
                of shared experiences in fostering connection and hope. Join us
                and be inspired by their journeys. Your story could be the next
                one to inspire others.
              </small>
            </div>
            <div className="flex items-center lg:justify-start justify-start mt-8">
            <Button 
            as={Link}
            href="/community"
            className="bg-[#81D4FA] py-5 px-6 outline-none rounded-lg ">
              Community Voices
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;
