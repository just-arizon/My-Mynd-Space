import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const journey = () => {
  const cards = [
    {
      title: "I’m no longer Depressed",
      body: "Hi, I'm Rachel. I struggled with depression for years, but finding this website changed my life. The self-help tips and supportive community gave me the tools and encouragement I needed to get better. I'm now in a much better place, and I'm grateful for the difference this platform made in my journey.",
      author: "Rachel Babalola",
      profession: "University Student",
    },
    {
      title: "I’m no longer Depressed",
      body: "Hi, I'm Rachel. I struggled with depression for years, but finding this website changed my life. The self-help tips and supportive community gave me the tools and encouragement I needed to get better. I'm now in a much better place, and I'm grateful for the difference this platform made in my journey.",
      author: "Rachel Babalola",
      profession: "University Student",
    },
    {
      title: "I’m no longer Depressed",
      body: "Hi, I'm Rachel. I struggled with depression for years, but finding this website changed my life. The self-help tips and supportive community gave me the tools and encouragement I needed to get better. I'm now in a much better place, and I'm grateful for the difference this platform made in my journey.",
      author: "Rachel Babalola",
      profession: "University Student",
    },
    {
      title: "I’m no longer Depressed",
      body: "Hi, I'm Rachel. I struggled with depression for years, but finding this website changed my life. The self-help tips and supportive community gave me the tools and encouragement I needed to get better. I'm now in a much better place, and I'm grateful for the difference this platform made in my journey.",
      author: "Rachel Babalola",
      profession: "University Student",
    },
    {
      title: "I’m no longer Depressed",
      body: "Hi, I'm Rachel. I struggled with depression for years, but finding this website changed my life. The self-help tips and supportive community gave me the tools and encouragement I needed to get better. I'm now in a much better place, and I'm grateful for the difference this platform made in my journey.",
      author: "Rachel Babalola",
      profession: "University Student",
    },
  ];
  return (
    <div className="container mx-auto sm:px-6 lg:px-40 my-16 px-3">
      <style>
        {`
        .custom-mask {
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 5%,
            white 90%,
            transparent
          );
          mask: linear-gradient(90deg, transparent, white 5%, white 90%, transparent);
        }
        `}
      </style>

      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        loop={true}
        modules={[Pagination, EffectCoverflow]}
        className="w-full bg- mySwiper  h-96 flex justify-center"
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index} className="bg- ">
            <motion.div
              className=""
              animate={
                {
                  // scale: activeIndex === index ? 1.1 : 0.9,
                }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <Card className="w-96 px-5 bg-[#F2F6F9]">
                <div className="">
                  <div className="card__content">
                    <CardHeader className="font-extrabold">
                      {item.title}
                    </CardHeader>
                    <CardBody>
                      <small className="text-center text-black leading-6">
                        {item.body}
                      </small>
                    </CardBody>
                  </div>
                </div>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default journey;
