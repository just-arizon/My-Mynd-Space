import React from "react";
import Polygon1 from "../assets/Polygon 1.svg";
import Polygon2 from "../assets/Polygon 2.svg";
import NewsletterImg from "../assets/Group 3706.png";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const newsletter = () => {
  return (
    <div className="flex lg:flex-row flex-col container mx-auto sm:px-6 lg:px-40 my-32 px-5">
      <div className="flex-1 items-center">
        <div className="container flex flex-col lg:pt-20">
          <div>
            <div>
              <div className="flex lg:w-3/4">
                <div>
                    <h4 className="font-bold  lg:text-3xl text-xl mb-5">
                      Subscribe to our newsletter today !
                    </h4>
                    <div className="px-5 relative">
                <Image
                  src={Polygon1}
                  alt=""
                  className="w-5 absolute -top-5 left-1 block lg:hidden"
                />
              </div>
                </div>
                <div className="px-5 relative">
                  <img src={Polygon2} alt="" className="w-5 absolute lg:-left-10 -left-16 bottom-16 opacity-70" />
                </div>
              </div>
              <div className="newsletter_img flex-1 flex justify-center py-2 block lg:hidden">
                    <Image src={NewsletterImg} alt="" className="lg:w-4/6" />
                  </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="px-5 relative">
                <img
                  src={Polygon1}
                  alt=""
                  className="w-5 absolute -top-5 left-3 hidden lg:block"
                />
              </div>
              <div className=" lg:py-5">
                <small className="pr-5 leading-6 text-sm py-5">
                  Don’t miss any information, stay updated always with our timely
                  newsletters. Subscribe below
                </small>
              </div>
              <div className="">
                <form action="" className="lg:flex gap-2">
                  <div className=" lg:w-5/6 h-15">
                      <Input
                        type="email"
                        label="your email address"
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
      </div>

      <div className="newsletter_img flex-1 flex justify-end p-5 hidden lg:block relative">
        <Image src={NewsletterImg} alt="" className="lg:w-full relative lg:left-8" />
      </div>
    </div>
  );
};

export default newsletter;
