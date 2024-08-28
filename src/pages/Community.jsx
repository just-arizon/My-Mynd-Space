import React, { useState } from "react";
import { Image, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTag } from "react-icons/fa6";
import GridImg from "../assets/Grid-block.svg";
import ResourceImg from "../assets/Group 3714.png";
import Img1 from "../assets/pexels-shkrabaanthony-5890702 (1) 1.png";
import Img2 from "../assets/pexels-rajibahmed-26156310.png";
import Img3 from "../assets/Frame 3630.png";
import Img4 from "../assets/pexels-diimejii-2380263 2.png";
import Polygon1 from "../assets/Polygon 1.svg";
import Polygon2 from "../assets/Polygon 2.svg";
import NewsletterImg from "../assets/Group 3724.png";
import Explore from "../components/explore";
import Svg1 from "../assets/Group 3717.png";
import Svg2 from "../assets/Group 3718.png";
import Svg3 from "../assets/Group 3719.png";
import Svg4 from "../assets/Group 3721.png";
import Line1 from "../assets/Vector 7.png";
import Line2 from "../assets/Vector 6.png";
import { motion } from "framer-motion";
import StoryImg1 from "../assets/Rectangle 66.png";
import StoryImg2 from "../assets/Rectangle 1234.png";
import StoryImg3 from "../assets/Rectangle 1232.png";

const Community = () => {
  const activities = [
    {
      id: 1,
      img: Img1,
      name: "Heal",
    },
    {
      id: 2,
      img: Img2,
      name: "Exercise",
    },
    {
      id: 3,
      img: Img3,
      name: "Share",
    },
    {
      id: 4,
      img: Img4,
      name: "Live",
    },
  ];
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
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
  const stories = [
    {
      img: StoryImg1,
      person: "Rachel Babiola",
      occupation: "University Student",
      tag: "Men's Corner",
      storyTitle: "Lorem Ipsum",
      storyBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim m, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  ",
      storyCta: "Read full story",
    },
    {
      img: StoryImg2,
      person: "Rachel Babiola",
      occupation: "University Student",
      tag: "Women's Corner",
      storyTitle: "Lorem Ipsum",
      storyBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim m, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  ",
      storyCta: "Read full story",
    },
    {
      img: StoryImg3,
      person: "Rachel Babiola",
      occupation: "University Student",
      tag: "Youth's Corner",
      storyTitle: "Lorem Ipsum",
      storyBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim m, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  ",
      storyCta: "Read full story",
    },
  ];

  return (
    <>
      <ToastContainer /> {/* Add the ToastContainer for notifications */}
      <div className="flex justify-around absolute lg:top-40 bg-pink- w-full lg:gap-20 gap-28 lg:flex ">
        <div className="bg-orange-">
          <Image
            alt=""
            src={Svg1}
            className="mt-5 lg:w-full relative lg:left-8 -left-2"
          />
        </div>
        <div className="bg-">
          <Image
            alt=""
            src={Svg2}
            className="mt-5 lg:w-full relative lg:right-8"
          />
        </div>
      </div>
      <div className="flex justify-around absolute lg:top-80 bg-pink- w-full lg:gap-20 gap-36 lg:flex top-72">
        <div className="bg-orange-">
          <Image alt="" src={Svg3} className="mt-5 lg:w-full relative left-6" />
        </div>
        <div className="bg-">
          <Image
            alt=""
            src={Svg4}
            className="mt-5 lg:w-full relative right-2 lg:top-0 top-5"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="container mx-auto px-3 lg:px-8 my-2 lg:my-12 flex flex-col gap-3 items-center justify-center lg:mb-28 mb-10"
      >
        <div className="lg:mt-20 mt-8 mb-8 flex justify-center">
          <div className="relative flex flex-row">
            <div
              className="grid-layout bg-cover bg-center lg:w-5/12 w-10/12 h-full absolute left-6 lg:left-40 lg:mx-44 opacity-"
              style={{ backgroundImage: `url(${GridImg})`, opacity: 0.45 }}
            ></div>
            <div className="landing relative flex flex-col justify-center items-center z-10">
              <div className="flex flex-col justify-center mb-4 mt-5">
                <h1 className="text-[#2D2D2D] lg:text-3xl md:text-2xl text-2xl font-bold text-center">
                  Real Voices, Real Stories
                </h1>
                <h1 className="text-[#2D2D2D] md:text-2xl sm:text-xl text-center font-bold">
                  <span className="lg:text-3xl md:text-2xl text-2xl pt-20 font-bold text-[#FF6F61]">
                    Our Community Speaks
                  </span>
                </h1>
              </div>
              <div className="lg:w-3/4 lg:px-56 px-6 flex justify-center mb-5">
                <small className="text-center ">
                  Discover the diverse experiences of our community members.
                  From struggles to triumphs, these real stories highlight our
                  strength and resilience. Share your journey and connect with
                  others who understand.
                </small>
              </div>
            </div>
          </div>
        </div>

        <section className="lg:px-16 lg:my-32 mb-8 flex justify-center">
          <div className="w-11/12">
            <Image
              alt="About Us"
              src={ResourceImg}
              className="mt-5 lg:w-full"
            />
          </div>
        </section>

        <section className="lg:mb-4 mb-3">
          <div className="flex flex-col justify-center mb-8 mt-5 gap-5">
            <div className="flex gap-2 justify-center">
              <h1 className="text-[#2D2D2D] lg:text-3xl md:text-2xl text-2xl font-bold text-center">
                You are not alone,
                <span className="lg:text-3xl md:text-2xl  text-2xl ml-2 font-bold text-[#FF6F61]">
                  Let’s Heal Together
                </span>
              </h1>
            </div>
            <div className="flex justify-center">
              <small className="text-center text- lg:w-8/12">
                Explore real stories and share your own. Exercise, read,
                connect, and heal together with our community.
              </small>
            </div>
          </div>
        </section>

        <section>
          <div className="grid lg:grids-cols-4 md:grid-cols-4 grid-cols-2  gap-5  bg-[#] px-2 py- lg:">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-col items-center bg-transparent"
              >
                <Image
                  src={activity.img}
                  alt={activity.name}
                  className=" w-full h-42 object-cover rounded-none"
                />
                <div className="text-center mt-1">
                  <small className="text-md font-semibold py-4">
                    {activity.name}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:my-20 my-10 mb-3 bg-blue- w-full lg:px-16">
          <div className="flex flex-col justify- mb-8 mt-5 gap-5">
            <div className="flex gap-2 justify-center flex-col">
              <h1 className="text-[#2D2D2D] lg:text-3xl md:text-2xl text-2xl font-bold text-center">
                You are not alone,
                <span className="lg:text-3xl md:text-2xl text-2xl  ml-2 font-bold text-[#81D4FA]">
                  Real Testimonies
                </span>
              </h1>
              <div className="flex justify-center">
                <Image
                  alt="Our Story"
                  src={Line1}
                  className="lg:block hidden"
                />
                <Image
                  alt="Our Story"
                  src={Line2}
                  className="lg:hidden block"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start bg-pink- w-full py-8">
            <small className=" text-start lg:w-">
              Explores Stories of Hope From Our Community.
            </small>
          </div>
          <div className="flex  bg-pink- w-full mb-8 text-2xl font-bold">
            <h1 className=" text-start lg:w-">Feature Story</h1>
          </div>
          <div className="grid gap-12">
            {stories.map((story, index) => (
              <div className="lg:flex gap-5" key={index}>
                <div className="flex-1">
                  <div className="flex justify-start my-5">
                    <small className="flex py-2 px-5 w- font-semibold bg-[#F2F6F9] lg:hidden rounded-xl gap-2">
                  <div className="py-1 bg-">
                    <FaTag className="text-[#FF6F61] items-center"/>
                  </div>

                      {story.tag}
                    </small>
                  </div>
                  <Image src={story.img} alt="story image" className="w-" />
                  <div className="grid pt-3 pb-5">
                    <small className="font-semibold">{story.person}</small>
                    <small className="">{story.occupation}</small>
                  </div>
                </div>
                <div className="flex-1 gap-5 flex flex-col">
                  <small className="hidden lg:block">{story.tag}</small>
                  <div className="text-xl font-semibold">
                    {story.storyTitle}
                  </div>
                  <small className="">{story.storyBody}</small>
                  <div className="">
                    <Button className="bg-[#81D4FA]">{story.storyCta}</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="">
          <Explore />
        </section>

        <section className="lg:px-40 px-5 py-14 bg-orange-">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center bg-pink- gap-10">
            <div className="container flex flex-col lg:pt-20">
              <div>
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex lg:w-3/4">
                      <div className="px-5 relative">
                        <img
                          src={Polygon2}
                          alt=""
                          className="w-5 absolute lg:-left-10 -left-16 bottom-16 opacity-70"
                        />
                      </div>
                    </div>
                    <h4 className="font-bold lg:text-3xl md:text-2xl text-2xl mb-5">
                      Subscribe to our newsletter today!
                    </h4>
                    <div className="px-5 relative">
                      <Image
                        src={Polygon1}
                        alt=""
                        className="w-5 absolute -top-5 left-1 block lg:hidden"
                      />
                    </div>
                  </div>
                  <div className="lg:py-5">
                    <small className="lg:pr-5 leading-6 text-sm py-5">
                      Don’t miss any information, stay updated always with our
                      timely newsletters. Subscribe below
                    </small>
                  </div>
                  <div className="">
                    <form onSubmit={handleSubmit} className="lg:flex gap-2">
                      <div className="lg:w-5/6 h-14">
                        <Input
                          type="email"
                          placeholder="Your email address"
                          onChange={(e) => setEmail(e.target.value)}
                          className="py-2 h-full w-full rounded"
                        />
                      </div>
                      <div className="flex items-center">
                        <Button
                          type="submit"
                          className="bg-[#81D4FA] py-2 px-10 outline-none rounded-lg"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="newsletter_img flex-1 flex justify-center py-2 bg-blue-">
              <Image src={NewsletterImg} alt="" className="lg:w-" />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Community;
