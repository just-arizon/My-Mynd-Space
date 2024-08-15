import React from "react";
import { motion } from "framer-motion";
import { Image, Card, CardBody } from "@nextui-org/react";
import GridImg from "../assets/Grid-block.svg";
import ResourceImg from "../assets/Group 3714.png";
import Img1 from "../assets/pexels-shkrabaanthony-5890702 (1) 1.png";
import Img2 from "../assets/pexels-rajibahmed-26156310.png";
import Img3 from "../assets/Frame 3630.png";
import Img4 from "../assets/pexels-diimejii-2380263 2.png";
import Newsletter from "../components/newsletter";
import Explore from "../components/explore";
import Svg1 from "../assets/Group 3717.png";
import Svg2 from "../assets/Group 3718.png";
import Svg3 from "../assets/Group 3719.png";
import Svg4 from "../assets/Group 3721.png";

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

  return (

    <>
     <div className="flex justify-around absolute top-24 bg-pink- w-full gap-20 lg:flex hidden">
     <div className="bg-orange-">
       <Image alt="" src={Svg1} className="mt-5 lg:w-full relative -left-12" />
     </div>
     <div className="bg-">
       <Image alt="" src={Svg2} className="mt-5 lg:w-full relative right-16" />
     </div>
     </div>
     <div className="flex justify-around absolute top-80 bg-pink- w-full gap-20 lg:flex hidden">

     <div className="bg-orange-">
       <Image alt="" src={Svg3} className="mt-5 lg:w-full relative left-6" />
     </div>
     <div className="bg-">
       <Image alt="" src={Svg4} className="mt-5 lg:w-full relative right-8" />
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
            className="grid-layout bg-cover bg-center lg:w-5/12 w-10/12 h-full absolute left-6 lg:left-40 lg:mx-44 opacity-20"
            style={{ backgroundImage: `url(${GridImg})`, opacity: 0.45 }}
          ></div>
          <div className="landing relative flex flex-col justify-center items-center z-10">
            <div className="flex flex-col justify-center mb-8 mt-5">
              <h1 className="text-black lg:text-3xl text-xl font-bold text-center">
                Real Voices, Real Stories
              </h1>
              <h1 className="text-black lg:text-3xl text-xl text-center font-bold">
                <span className="lg:text-3xl text-xl pt-20 font-bold text-[#FF6F61]">
                  Our Community Speaks
                </span>
              </h1>
            </div>
            <div className="lg:w-3/4 lg:px-56 mb-5">
              <p className="text-center text-medium text-sm">
                Discover the diverse experiences of our community members.
                From struggles to triumphs, these real stories highlight our
                strength and resilience. Share your journey and connect with
                others who understand.
              </p>
            </div>
          </div>
        </div>
      </div>
    
      <section className="lg:px-16 lg:my-32 mb-8 flex justify-center">
        <div className="w-11/12">
          <Image alt="About Us" src={ResourceImg} className="mt-5 lg:w-full" />
        </div>
      </section>

      <section className="lg:mb-4 mb-3">
        <div className="flex flex-col justify-center mb-8 mt-5 gap-5">
          <div className="flex gap-2 justify-center">
            <h1 className="text-black lg:text-3xl text-xl font-bold text-center">
              You are not alone,
              <span className="lg:text-3xl text-xl ml-2 font-bold text-[#FF6F61]">
                 Let’s Heal Together
              </span>
            </h1>
          </div>
          <div className="flex justify-center">
            <small className="text-center text-sm lg:w-8/12">
              Explore real stories and share your own. Exercise, read, connect, and heal together with our community.
            </small>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5  bg-[#F2F6F9] px-7 py-10 lg:">
          {activities.map((activity) => (
            <div key={activity.id} className="flex flex-col items-center bg-transparent">
              <Image src={activity.img} alt={activity.name} className=" w-full h-42 object-cover rounded-none" />
              <div className="text-center mt-1">
                <h2 className="text-md font-semibold">{activity.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <Explore />
      </section>

      <section className="">
        <Newsletter />
      </section>
    </motion.div>
    </>
  );
};

export default Community;
