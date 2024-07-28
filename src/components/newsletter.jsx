import React from "react";
import Polygon1 from "../assets/Polygon 1.svg";
import Polygon2 from "../assets/Polygon 2.svg";
import NewsletterImg from "../assets/Group 3706.png";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

const newsletter = () => {
  return (
    <div className="flex lg:flex-row flex-col  py-5 md:px-16 lg:px-0 sm:px-5">
      <div className="flex-1 pt-10">
        <div className="container">
          <div>
            <div className="lg:px-16 px-4  flex w-3/4">
              <h4 className="font-semibold text-2xl mb-5">
                Subscribe to our newsletter today !
              </h4>
              <div className="px-5 relative">
                <img src={Polygon2} alt="" className="w-5 absolute lg:-left-20 bottom-8 opacity-70" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="px-5 relative">
              <img
                src={Polygon1}
                alt=""
                className="w-5 absolute -top-5 left-3"
              />
            </div>
            <div className="lg:px-16 px-5 lg:">
              <p className="pr-5">
                Don’t miss any information, stay updated always with our timely
                newsletters. Subscribe below
              </p>
            </div>
            <div className="">
              <form action="" className="lg:px-16 px-5 lg:flex gap-2">
                <div className=" lg:w-5/6 h-15">
                    <Input
                      type="email"
                      label="Email"
                      className=" py-2 h-full  w-full rounded  text-sm"
                    />
                </div>
                <div className="flex items-center">
                    <Button className="bg-[#81D4FA] py-7 px-6 outline-none rounded-lg ">
                      Subscribe
                    </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter_img flex-1 flex justify-center p-5">
        <img src={NewsletterImg} alt="" className="lg:w-4/6" />
      </div>
    </div>
  );
};

export default newsletter;
