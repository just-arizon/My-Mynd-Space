import React from "react";
import Newsletter from "../components/newsletter";
import About from "../components/about-us";
import Help from "../components/help";
import Landing from "../components/landing";
import Community from "../components/community";
import Explore from "../components/explore";
import Journey from "../components/journey";
import Waitlist from "../components/waitlist";
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Start slightly below the view
    animate={{ opacity: 1, y: 0 }} // Animate to its original position
    exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
    transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
    >
      <Landing />
      <Help />
      <About />
      <Community />
      <Journey />
      <Explore />
      <Waitlist />
      <Newsletter />
    </motion.div>
  );
};

export default Home;
