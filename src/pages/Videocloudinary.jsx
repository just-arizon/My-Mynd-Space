import React from 'react';
import { Card,CardHeader,
    CardBody, } from "@nextui-org/react";
import videoFile from '../assets/Hero vid.mp4'; // Replace with the correct path to your video file
import ReactPlayer from 'react-player';
import { motion } from "framer-motion";

const Videocloudinary = () => {
  return (
    <motion.div 
    
    className="flex justify-center"
    >
       <Card className="lg:w-11/12 ">
      <CardBody className='p-0'>
      <ReactPlayer
            url={videoFile} // Use the imported video file
            controls
            width="100%"
            height="auto"
            style={{ aspectRatio: '16/9' }} // Adjust aspect ratio based on your video
          />
      </CardBody>
    </Card>
    </motion.div>
  );
};

export default Videocloudinary;
