import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './scrollup.css'; // You can include your CSS here

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond screen height
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="scroll-to-top"
        >
          <FaChevronUp className="text-[#2d2d2d]" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
