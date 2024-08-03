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

            .swiper-pagination-bullet {
          background-color: #ddd;
          width: 8px;
          height: 8px;
          opacity: 1;
          position: relative;
          top: .8em;
        }
        .swiper-pagination-bullet-active {
          background-color: #252525;
        }
        `}
      </style>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      className="mb-12 flex bg-orange-"
      >
         <div className="w-full">
             <div className="flex justify-center bg-">
                 <h4 className="text-center font-bold lg:text-3xl text-xl mb-3">Inspiring Journeys</h4>
             </div>
             <div className="w-full  flex justify-center">
                 <p className="text-center ">Tell your story and inspire others. Be a beacon of hope to someone.</p>
             </div>
         </div>
            </motion.div>
            
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
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
        breakpoints={{
            // Define breakpoints for larger screens
            1024: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
          }}
        modules={[Pagination, EffectCoverflow]}
        className="w-full bg- mySwiper  lg:h-96 h-96 flex flex-col justify-center relative"
      >

        {cards.map((item, index) => (
          <SwiperSlide key={index} className="bg- ">
            <motion.div
              className=""
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              
            >
              <Card className="lg:w-96 w-full h-full px-5 bg-[#F2F6F9] pt-4 shadow-xl">
                <div className="">
                  <div className=" w-full">
                    <CardHeader className="font-extrabold text-xl flex justify-center">
                      <h4 className="text-center">{item.title}</h4>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-5">
                      <small className="text-center text-black leading-6">
                        {item.body}
                      </small>
                      <div className="flex flex-col">
                          <small className="text-center text-black leading-6">
                            {item.author}
                          </small>
                          <small className="text-center text-black leading-6">
                            {item.profession}
                          </small>
                      </div>
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
