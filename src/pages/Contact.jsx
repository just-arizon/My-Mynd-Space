import React from 'react';
import { motion } from 'framer-motion'

const Contact = () => {
  return (
 
      <motion.div
      
      initial={{ opacity: 0, y: 50 }} // Start slightly below the view
      animate={{ opacity: 1, y: 0 }} // Animate to its original position
      exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
      className='text-[#2D2D2D]'
      >
      <h1 className="text-center font-bold text-2xl mb-5 p-5">Contact</h1>

      <p className="text-center text-md mb-5 px-10">Coming Soon...</p>
    </motion.div>

  );
}

export default Contact;
