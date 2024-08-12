import React from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

import Svg from "../assets/Vector 6.png";
import partnersvg from "../assets/Partner svg.png";
import Svg2 from "../assets/Vector 5.png";
import partnerImg from "../assets/Rectangle 1281.png";
import vision1 from "../assets/Rectangle 1286.png";
import vision2 from "../assets/Rectangle 1283.png";
import visionImg from "../assets/Group 3708.png";
import missionImg from "../assets/Group 3709.png";
import value1 from "../assets/Group 3710.png";
import value2 from "../assets/Group 3711.png";
import value3 from "../assets/Group 3712.png";
import value4 from "../assets/Group 3713.png";
import AboutImg from "../assets/Rectangle 55.png";
import Frame from "../assets/Frame 3690.png";
import TeamMembers from "../pages/Team"

const About = () => {
  const coreValues = [
    {
      id: 1,
      icon: value1,
      title: "Empowerment",
      description:
        "We believe in empowering individuals to take control of their mental health journey. By providing resources, support, and education, we aim to inspire confidence and foster self-reliance.",
    },
    {
      id: 2,
      icon: value2,
      title: "Hope",
      description:
        "At MyMindSpace, we provide a beacon of hope through our supportive community, helping individuals navigate their mental health journeys with optimism and resilience.",
    },
    {
      id: 3,
      icon: value3,
      title: "Compassion",
      description:
        "Compassion is at the heart of everything we do. We strive to create a welcoming and understanding environment where individuals feel seen, heard, and valued.",
    },
    {
      id: 4,
      icon: value4,
      title: "Confidentiality",
      description:
        "We prioritize confidentiality to ensure that everyone feels safe and secure sharing their experiences, fostering trust and open communication.",
    },
  ];


  const partnersData = [
    {
      id: 1,
      count: "27,000+",
      remark: "Total users helped",
    },
    {
      id: 2,
      count: "4.8/5",
      remark: "Total users helped",
    },
    {
      id: 3,
      count: "53,000+",
      remark: "Monthly Unique Visitors",
    },
    {
      id: 4,
      count: "18,000+",
      remark: "Newsletter Subscribers",
    },
  ]
  const motionSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.div
      {...motionSettings}
      className="flex flex-col container mx-auto sm:px-6 lg:px-40 lg:my-12 mb-10 px-5 lg:gap-12 gap-8"
    >
      <section className="text-center my-5">
        <motion.h1
          {...motionSettings}
          className="font-bold lg:text-3xl text-2xl"
        >
          <h4>Our Story</h4>
          <div className="flex justify-center">
            <Image alt="Our Story" src={Svg} />
          </div>
        </motion.h1>
        <Image alt="About Us" src={AboutImg} className="mt-5" />
        <Card className="bg-[#F2F6F9] py-5 lg:p-12 rounded-2xl my-8 lg:w-9/12 mx-auto">
          <CardBody className="flex flex-col gap-5 p-5">
            <p className="text-sm leading-6">
              At MyMindSpace, our commitment to your mental wellness drives
              everything we do. From our humble beginnings, we've grown into a
              vibrant community dedicated to supporting each individual’s
              journey to better mental health.
            </p>
            <p className="text-sm leading-6">
              We're committed to helping individuals heal, grow, and flourish.
              Discover our story, our resources, and our passion for creating a
              brighter, more hopeful future for everyone.
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="my-6 lg:my-12">
        <div className="mb-10">
          <motion.h1
            {...motionSettings}
            className="font-bold lg:text-3xl text-2xl"
          >
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
                <div className="flex flex-col">
                  <Image
                    src={visionImg}
                    alt="Our Mission"
                    className="w-10 rounded-none"
                  />
                  <h6 className="font-semibold text-xl mt-2">Our Mission</h6>
                </div>
              </CardHeader>
              <CardBody className="text-sm leading-6">
                Providing accessible, stigma-free, and personalized mental
                health support to individuals, connecting them with trusted
                resources, expert therapy, and a supportive community.
              </CardBody>
            </Card>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            <Card className="bg-[#F2F6F9] p-5 rounded-3xl">
              <CardHeader className="pl-3">
                <div className="flex flex-col">
                  <Image
                    src={missionImg}
                    alt="Our Vision"
                    className="w-10 rounded-none"
                  />
                  <h6 className="font-semibold text-xl mt-2">Our Vision</h6>
                </div>
              </CardHeader>
              <CardBody className="text-sm leading-6">
                To transform lives through a safe, inclusive, and innovative
                mental health platform that empowers individuals to embrace
                their unique journey, cultivate self-awareness, and foster a
                deeper understanding of themselves.
              </CardBody>
            </Card>
            <Image alt="Vision 2" src={vision2} />
          </div>
        </div>
      </section>

      <section className="lg:my-16 my-10">
        <motion.h1
          {...motionSettings}
          className="font-bold lg:text-3xl text-2xl mb-5"
        >
          <h4>Our Core Values</h4>
        </motion.h1>
        <div className="lg:w-80">
          <small className="flex justify-start">
            Guiding principles that shape our commitment to mental well-being.
          </small>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 my-10">
          {coreValues.map((value) => (
            <Card key={value.id} className="bg-[#F2F6F9] p-5 rounded-3xl">
              <CardHeader className="flex flex-col justify-start">
                <div className="w-full">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    className="w-10 rounded-none"
                  />
                  <h6 className="font-semibold text-xl mt-2 text-start">
                    {value.title}
                  </h6>
                </div>
              </CardHeader>
              <CardBody className="text-sm leading-6">
                {value.description}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="lg:my-12  mb-10">
        <TeamMembers />
      </section>
      <section className="lg:my-12 mt-6 mb-10">
       <div className="mb-10">
          <motion.h1
            {...motionSettings}
            className="font-bold lg:text-3xl text-2xl"
          >
            <h4>Partner with Us</h4>
            <div className="flex justify-start">
              <Image alt="Vision & Mission" src={partnersvg} className="lg:w-3/4 w-48" />
            </div>
          </motion.h1>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row">
        <div className="flex-1">
        <Card className="bg-[#F2F6F9] py-4 px-5 lg:px-4 rounded-2xl lg:my-8 lg:w-9/ ">
        <CardHeader className="font-semibold lg:text-2xl text-xl mt-2 text-start">
        Be a part of the solution as we shine the light on Mental Health together!
        </CardHeader>
          <CardBody className="flex flex-col">
            <p className="text-sm leading-6">
              Join us at MyMindSpace in shining a light on mental health. Together, we can create a supportive community, raise awareness, and make a positive impact on mental well-being. Your involvement can help spread knowledge, reduce stigma, and provide essential resources to those in need. Let’s inspire change and build a healthier, more compassionate world.
            </p>
          </CardBody>
        </Card>
        <Card className="bg-[#F2F6F9] py-8 lg:px-4 my-10 lg:flex hidden">
          <div className="flex gap-5 px-5">
            <Image src={Frame} className="rounded-none"/>
            <h6 className="text-xl font-semibold">Click to send us an email for more information</h6>
          </div>
        </Card>
        </div>
        <div className="my-8 flex-1">
          <div className="">
            <Image src={partnerImg}/>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:mt-2 mt-8">
          {partnersData.map((partner) => (
                <Card key={partner.id} className="bg-[#F2F6F9] lg:p-3 rounded-lg py-5">
                  <CardHeader className="text-xl font-bold text-[#FF6F61] bg- lg:py-0 flex justify-center">
                    <div>{partner.count}</div>
                  </CardHeader>
                  <CardBody className="text-sm text-center py-0">
                    {partner.remark}
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>

        <Card className="bg-[#F2F6F9] py-8 lg:px-4 my-10 lg:hidden flex">
          <div className="flex gap-5 px-5">
            <Image src={Frame} className="rounded-none"/>
            <h6 className="text-xl font-semibold">Click to send us an email for more information</h6>
          </div>
        </Card>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
