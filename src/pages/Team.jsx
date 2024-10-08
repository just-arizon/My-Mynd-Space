import React from 'react'
import { FaTwitter, FaLinkedin, FaBehance, FaMedium } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import {
    Avatar,
    Card,
    CardHeader,
    CardBody,
    Image,
    Button,
    Link,
    Tooltip
  } from "@nextui-org/react";
  import memberImg1 from "../assets/Abdulsamad.jpg";
  import memberImg2 from "../assets/Damilola.jpg";
  import memberImg3 from "../assets/Joel Maxwell.jpg";
  import memberImg4 from "../assets/Arizon2.jpg";
  import memberImg5 from "../assets/Kosi.jpg";
  import memberImg6 from "../assets/Sola Oginni.jpg";
  import memberImg7 from "../assets/Tolulope.jpg";
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
          //  instagram:
          // "https://www.instagram.com/_kosiso_chukwu_?igsh=ODY5Z3JreDM2ZWw2",
          medium: "https://www.medium.com/@kosisochukwucharityani"
      },
       
      },
  
    {
      id: 6,
      img: memberImg6,
      name: "Sola Oginni",
      role: "UI/UX Designer",
      socials: {
        linkedin: "https://www.linkedin.com/in/sola-oginni-00a20a287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      id: 7,
      img: memberImg7,
      name: "Tolulope Olubiyi",
      role: "UI/UX Designer",
      socials: {
        linkedin: "https://www.linkedin.com/in/tolulope-olubiyi",
      },
    },
  ];
const Team = () => {
  return (
    <section className="lg:my-12 lg: my-12">
        <motion.h1
          {...motionSettings}
          className="text-center font-bold lg:text-3xl text-2xl mb-5 text-[#81D4FA]"
        >
          <h4>Meet The Team</h4>
        </motion.h1>
        <motion.div className="lg:w-full flex justify-center"
         {...motionSettings}
        >
          <div className="lg:w-2/3 text-center px-5">
            <small className="leading-6 font-medium">
              Our dedicated team at MyMindSpace combines expertise and passion
              to create a safe and empowering environment for mental health
              support.
            </small>
          </div>
        </motion.div>

        <motion.div
         {...motionSettings}
        className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 my-10">
          {teamMembers.map((team) => (
            <div key={team.id} className="text-center">
              <Avatar src={team.img} className="w-32 h-32 mx-auto " />
              <div className="flex justify-center gap-4 mt-4">
                {team.socials.twitter && (
                  <Tooltip content="Twitter">
                    <Button
                      as={Link}
                      isIconOnly
                      href={team.socials.twitter}
                      target="_blank"
                      className=" w-10 h-10"
                    >
                      <FaTwitter size={16} />
                    </Button>
                  </Tooltip>
                )}
                {team.socials.linkedin && (
                  <Tooltip content="LinkedIn">
                    <Button
                      as={Link}
                      isIconOnly
                      href={team.socials.linkedin}
                      target="_blank"
                      className="text-blue-"
                    >
                      <FaLinkedin size={16} />
                    </Button>
                  </Tooltip>
                )}

                {team.socials.behance && (
                  <Tooltip content="Behance">
                    <Button
                      as={Link}
                      isIconOnly
                      href={team.socials.behance}
                      target="_blank"
                      className="text-blue-"
                    >
                      <FaBehance size={16} />
                    </Button>
                  </Tooltip>
                )}
                {team.socials.instagram && (
                  <Tooltip content="Behance">
                    <Button
                      as={Link}
                      isIconOnly
                      href={team.socials.instagram}
                      target="_blank"
                      className="text-blue-"
                    >
                      <PiInstagramLogoFill size={16} />
                    </Button>
                  </Tooltip>
                )}
                {team.socials.medium && (
                  <Tooltip content="Medium">
                    <Button
                      as={Link}
                      isIconOnly
                      href={team.socials.medium}
                      target="_blank"
                      className="text-blue-"
                    >
                      <FaMedium size={16} />
                    </Button>
                  </Tooltip>
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