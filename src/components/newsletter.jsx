import React, { useState } from "react";
import Polygon1 from "../assets/Polygon 1.svg";
import Polygon2 from "../assets/Polygon 2.svg";
import NewsletterImg from "../assets/Group 3706.png";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Image } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../src/App'
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      // Simulate an API call
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Subscription successful!");
        setEmail("");
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex lg:flex-row flex-col lg:my-40 text-[#2D2D2D]">
      <section className=" bg-orange-">
        <div className="flex lg:w-3/4">
          <div className="px-5 relative">
            <img src={Polygon2} alt="" className="w-5 absolute lg:-left-10 -left-16 bottom-16 opacity-70" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center bg-pink- gap-6">
          <div className="container flex flex-col lg:pt-20">
            <div>
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="font-bold lg:text-3xl md:text-2xl text-2xl mb-5">
                    Subscribe to our newsletter today!
                  </h4>
                  <div className="px-5 relative">
                    <Image src={Polygon1} alt="" className="w-5 absolute -top-5 left-1 block lg:hidden" />
                  </div>
                </div>
                <div className="px-5 relative">
                  <img src={Polygon1} alt="" className="w-5 absolute -top-5 left-3 hidden lg:block" />
                </div>
                <div className="lg:py-5">
                  <small className="pr-5 leading-6 text-sm py-5">
                    Don’t miss any information, stay updated always with our timely newsletters. Subscribe below.
                  </small>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="lg:flex gap-2">
                    <div className="lg:w-5/6 h-14">
                      <Input
                        type="email"
                        label=""
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-2 text-sm h-full w-full rounded"
                      />
                    </div>
                    <div className="flex items-center">
                      <Button type="submit" className="bg-[#81D4FA] py-2 px-10 outline-none rounded-lg">
                        Subscribe
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="newsletter_img flex-1 flex justify-center py-2 bg-blue-">
              <Image src={NewsletterImg} alt="" className="lg:w-" />
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default Newsletter;
