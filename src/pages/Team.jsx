import React from 'react'
import { FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import {
    Avatar,
    Card,
    CardHeader,
    CardBody,
    Image,
    Button,
    Link,
  } from "@nextui-org/react";
  import memberImg1 from "../assets/Abdulsamad.jpg";
  import memberImg2 from "../assets/Damilola.jpg";
  import memberImg3 from "../assets/Joel Maxwell.jpg";
  import memberImg4 from "../assets/Arinze.jpg";
  import memberImg5 from "../assets/Kosi.jpg";
  import { motion } from "framer-motion";


  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  
  const teamMembers = [
    {
      id: 1,
      img: memberImg1,
      name: "Abdulsamad",
      role: "UI/UX Designer",
      socials: {
        twitter: " https://x.com/habdulsirmad?s=11&t=Y9xIuVC-eJftYFWr7QSiMA",
        linkedin:
          "https://www.linkedin.com/in/abdulsamad-orilonise-15041a315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },

    {
      id: 2,
      img: memberImg2,
      name: "Damilola",
      role: "Product Manager",
      socials: {
        linkedin: "https://linkedin.com/in/damilola-ogunleye",
      },
    },
    {
      id: 3,
      img: memberImg3,
      name: "Joel Maxwell",
      role: "UI/UX Design Lead",
      socials: {
        behance: "https://www.behance.net/jaymaxwell1",
        linkedin: "https://www.linkedin.com/in/joelmaxwellux",
      },
    },
    {
      id: 4,
      img: memberImg4,
      name: "Arinze Chinweuba",
      role: "Front-End Developer",
      socials: {
        twitter: "https://x.com/just_Arizon",
        linkedin: "https://www.linkedin.com/in/arinze-calistus/",
      },
    },
    {
      id: 5,
      img: memberImg5,
      name: "Kosisochukwu Charity Ani",
      role: "Product Manager",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/kosisochukwu-ani-735a941b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
    // {
    //   id: 6,
    //   img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    //   name: "Emily Davis",
    //   role: "University Student",
    //   socials: {
    //     twitter: "https://twitter.com/emilydavis",
    //     linkedin: "https://linkedin.com/in/emilydavis",
    //   },
    // },
  ];
const Team = () => {
  return (
    <section className="lg:my-12  mb-10">
        <motion.h1
          {...motionSettings}
          className="text-center font-bold lg:text-3xl text-2xl mb-5 text-[#81D4FA]"
        >
          <h4>Meet The Team</h4>
        </motion.h1>
        <motion.div className="lg:w-full flex justify-center"
         {...motionSettings}
        >
          <div className="lg:w-2/3 text-center">
            <small className="leading-6 font-medium">
              Our dedicated team at MyMindSpace combines expertise and passion
              to create a safe and empowering environment for mental health
              support.
            </small>
          </div>
        </motion.div>

        <motion.div
         {...motionSettings}
        className="grid lg:grid-cols-3 gap-10 my-10">
          {teamMembers.map((team) => (
            <div key={team.id} className="text-center">
              <Avatar src={team.img} className="w-32 h-32 mx-auto " />
              <div className="flex justify-center gap-4 mt-4">
                {team.socials.twitter && (
                  <Button
                    as={Link}
                    isIconOnly
                    href={team.socials.twitter}
                    target="_blank"
                    className=" w-10 h-10"
                  >
                    <FaTwitter size={16} />
                  </Button>
                )}
                {team.socials.linkedin && (
                  <Button
                    as={Link}
                    isIconOnly
                    href={team.socials.linkedin}
                    target="_blank"
                    className="text-blue-"
                  >
                    <FaLinkedin size={16} />
                  </Button>
                )}

                {team.socials.behance && (
                  <Button
                    as={Link}
                    isIconOnly
                    href={team.socials.behance}
                    target="_blank"
                    className="text-blue-"
                  >
                    <FaBehance size={16} />
                  </Button>
                )}
              </div>
              <h6 className="font-bold mt-4">{team.name}</h6>
              <small>{team.role}</small>
            </div>
          ))}
        </motion.div>
      </section>
  )
}

export default Team