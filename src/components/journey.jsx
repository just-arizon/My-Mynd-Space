import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Card, CardHeader, CardBody, Image, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Img1 from "../assets/F1.jpg";
import Img2 from "../assets/F2.jpg";
import Img3 from "../assets/F3.jpg";
import Img4 from "../assets/F4.jpg";
import Img5 from "../assets/F5.jpg";
import Img6 from "../assets/F6.jpg";
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
    // {
    //   title: "I’m no longer Depressed",
    //   body: "Hi, I'm Rachel. I struggled with depression for years, but finding this website changed my life. The self-help tips and supportive community gave me the tools and encouragement I needed to get better. I'm now in a much better place, and I'm grateful for the difference this platform made in my journey.",
    //   author: "Rachel Babalola",
    //   profession: "University Student",
    // },
  ];
  return (
    <div className="container mx-auto  lg:px-40 my-16 lg:top-14 mx- relative top-36">
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
          // width: 15px;
          // height: 5px;
          // border-radius: 5px

        }
        `}
      </style>
      <div className="hidden absolute bg-  lg:flex w-10/12  bg- -z-10 -top-32 right-28 mt-10">
      <div className=" flex flex-col gap-8 flex-1 bg-pink- py-8 w-1/2">
          <div className="flex justify-start">
            <Avatar src={Img3} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-center">
            <Avatar src={Img6} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-start">
            <Avatar src={Img2} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-1 py-8 bg-yellow- w-1/2">
          <div className="flex justify-end">
            <Avatar src={Img5} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-center">
            <Avatar src={Img4} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-end">
            <Avatar src={Img1} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
        </div>
      </div>


      <div className="flex bg- justify-between lg:hidden block absolute -top-64 w-full -z-10">
      <div className=" flex flex-col gap-8 w-3/4 bg-pink- py-8">
          <div className="flex justify-start">
            <Avatar src={Img1} alt={``} className="object-cover  rounded-full" />
          </div>
          <div className="flex justify-center">
            <Avatar src={Img2} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-start">
            <Avatar src={Img3} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-3/4 py-8 bg-yellow-">
          <div className="flex justify-end">
            <Avatar src={Img5} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-center">
            <Avatar src={Img4} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
          <div className="flex justify-end">
            <Avatar src={Img6} alt={``} className="object-cover  rounded-full" size="sm"/>
          </div>
        </div>
      </div>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      className="mb-12 flex bg-orange-"
      >
         <div className="w-full">
             <div className="flex justify-center bg-">
                 <h4 className="text-center font-extrabold  lg:text-3xl md:text-2xl text-2xl  mb-3">Inspiring Journeys</h4>
             </div>
             <div className="w-full  flex justify-center">
                 <small className="text-center ">Tell your story and inspire others. Be a beacon of hope to someone.</small>
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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
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
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="w-full bg- mySwiper  lg:h-96 h-96 flex flex-col justify-center relative px-3"
      >

        {cards.map((item, index) => (
          <SwiperSlide key={index} className="bg- ">
            <motion.div
              className="px-3"
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              
            >
              <Card className="lg:w-96 w-full h-full px-5 bg-[#F2F6F9] pt-4 shadow-none">
                <div className="">
                  <div className=" w-full">
                    <CardHeader className=" text-base flex justify-center">
                      <h4 className="text-center font-bold">{item.title}</h4>
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
