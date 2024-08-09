import React from "react";
import { motion } from "framer-motion";
import { Avatar, Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Svg from "../assets/Vector 6.png";
import Svg2 from "../assets/Vector 5.png";
import vision1 from "../assets/Rectangle 1286.png";
import vision2 from "../assets/Rectangle 1283.png";
import visionImg from "../assets/Group 3708.png";
import missionImg from "../assets/Group 3709.png";
import value1 from "../assets/Group 3710.png";
import value2 from "../assets/Group 3711.png";
import value3 from "../assets/Group 3712.png";
import value4 from "../assets/Group 3713.png";
import AboutImg from "../assets/Rectangle 55.png";
import memberImg1 from "../assets/Abdulsamad.jpg";
import memberImg2 from "../assets/Damilola.jpg";
import memberImg3 from "../assets/Joel Maxwell.jpg";
import memberImg4 from "../assets/Arinze.jpg";

const About = () => {
  const coreValues = [
    {
      id: 1,
      icon: value1,
      title: "Empowerment",
      description: "We believe in empowering individuals to take control of their mental health journey. By providing resources, support, and education, we aim to inspire confidence and foster self-reliance.",
    },
    {
      id: 2,
      icon: value2,
      title: "Hope",
      description: "At MyMindSpace, we provide a beacon of hope through our supportive community, helping individuals navigate their mental health journeys with optimism and resilience.",
    },
    {
      id: 3,
      icon: value3,
      title: "Compassion",
      description: "Compassion is at the heart of everything we do. We strive to create a welcoming and understanding environment where individuals feel seen, heard, and valued.",
    },
    {
      id: 4,
      icon: value4,
      title: "Confidentiality",
      description: "We prioritize confidentiality to ensure that everyone feels safe and secure sharing their experiences, fostering trust and open communication.",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      img: memberImg1,
      name: "Abdulsamad",
      role: "Project Manager",
      twitter: "https://twitter.com/rachelbabalola",
      linkedin: "https://linkedin.com/in/rachelbabalola",
    },
    {
      id: 2,
      img: memberImg2,
      name: "Damilola",
      role: "Product Manager",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      id: 3,
      img: memberImg3,
      name: "Joel Maxwell",
      role: "UI/UX Design Lead",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      id: 4,
      img: memberImg4,
      name: "Arinze Chinweuba",
      role: "Front-End Developer",
      twitter: "https://twitter.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
    },
    {
      id: 5,
      img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      name: "Michael Brown",
      role: "University Student",
      twitter: "https://twitter.com/michaelbrown",
      linkedin: "https://linkedin.com/in/michaelbrown",
    },
    {
      id: 6,
      img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      name: "Emily Davis",
      role: "University Student",
      twitter: "https://twitter.com/emilydavis",
      linkedin: "https://linkedin.com/in/emilydavis",
    },
  ];

  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.div
      {...motionSettings}
      className="flex flex-col container mx-auto sm:px-6 lg:px-40 lg:my-12 mb-40 px-5 lg:gap-12 gap-8"
    >
      <section className="text-center my-5">
        <motion.h1 {...motionSettings} className="font-bold lg:text-3xl text-2xl">
          <h4>Our Story</h4>
          <div className="flex justify-center">
            <Image alt="Our Story" src={Svg} />
          </div>
        </motion.h1>
        <Image alt="About Us" src={AboutImg} className="mt-5" />
        <Card className="bg-[#F2F6F9] py-5 lg:p-12 rounded-2xl my-8 lg:w-9/12 mx-auto">
          <CardBody className="flex flex-col gap-5">
            <p className="text-sm leading-6">
              At MyMindSpace, our commitment to your mental wellness drives everything we do. From our humble beginnings, we've grown into a vibrant community dedicated to supporting each individual’s journey to better mental health.
            </p>
            <p className="text-sm leading-6">
              We're committed to helping individuals heal, grow, and flourish. Discover our story, our resources, and our passion for creating a brighter, more hopeful future for everyone.
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="my-6 lg:my-12">
        <div className="mb-10">
          <motion.h1 {...motionSettings} className="font-bold lg:text-3xl text-2xl">
            <h4>Our Vision & Mission</h4>
            <div className="flex justify-start">
              <Image alt="Vision & Mission" src={Svg2} className="w-3/4" />
            </div>
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <Image alt="Vision 1" src={vision1} />
            <Card className="bg-[#F2F6F9] p-5 rounded-3xl">
              <CardHeader className="pl-3">
                <Image src={visionImg} alt="Our Mission" className="w-10" />
                <h6 className="font-semibold text-xl mt-2">Our Mission</h6>
              </CardHeader>
              <CardBody className="text-sm leading-6">
                Providing accessible, stigma-free, and personalized mental health support to individuals, connecting them with trusted resources, expert therapy, and a supportive community.
              </CardBody>
            </Card>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            <Card className="bg-[#F2F6F9] p-5 rounded-3xl">
              <CardHeader className="pl-3">
                <Image src={missionImg} alt="Our Vision" className="w-10" />
                <h6 className="font-semibold text-xl mt-2">Our Vision</h6>
              </CardHeader>
              <CardBody className="text-sm leading-6">
                To transform lives through a safe, inclusive, and innovative mental health platform that empowers individuals to embrace their unique journey, cultivate self-awareness, and foster a deeper understanding of themselves.
              </CardBody>
            </Card>
            <Image alt="Vision 2" src={vision2} />
          </div>
        </div>
      </section>

      <section className="lg:my-16 my-10">
        <motion.h1 {...motionSettings} className="font-bold lg:text-3xl text-2xl mb-5">
          <h4>Our Core Values</h4>
        </motion.h1>
        <div className="lg:w-2/4">
          <small className="flex justify-start">
            Guiding principles that shape our commitment to mental well-being.
          </small>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 my-10">
          {coreValues.map((value) => (
            <Card key={value.id} className="bg-[#F2F6F9] p-5 rounded-3xl">
              <CardHeader className="flex flex-col justify-start">
                <div className="w-full">
                  <Image src={value.icon} alt={value.title} className="w-10 rounded-none" />
                  <h6 className="font-semibold text-xl mt-2 text-start">{value.title}</h6>
                </div>
              </CardHeader>
              <CardBody className="text-sm leading-6">{value.description}</CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="lg:my-12 my-10">
        <motion.h1
          {...motionSettings}
          className="text-center font-bold lg:text-3xl text-2xl mb-5 text-[#81D4FA]"
        >
          <h4>Meet The Team</h4>
        </motion.h1>
        <div className="lg:w-full flex justify-center">
          <div className="lg:w-2/3 text-center">
            <small className="leading-6">
              Our dedicated team at MyMindSpace combines expertise and passion to create a safe and empowering environment for mental health support.
            </small>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 my-10">
          {teamMembers.map((team) => (
            <div key={team.id} className="text-center">
              <Avatar src={team.img} className="w-32 h-32 mx-auto " />
              <div className="flex justify-center gap-4 mt-4">
                <Button
                 isIconOnly
                  href={team.twitter}
                  target="_blank"
                  className=" w-10 h-10"
                 
                >
<FaTwitter />
                </Button>
                <Button
                 isIconOnly
                  href={team.linkedin}
                  target="_blank"
                  className="text-blue-"
                 
                >
<FaLinkedin />
                </Button>
              </div>
              <h6 className="font-bold mt-4">{team.name}</h6>
              <small>{team.role}</small>
             
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
