import React from "react";
import { Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import {motion} from 'framer-motion'
function ErrorPage() {
  return (
    <motion.div 
    className="flex flex-col container mx-auto sm:px-6 lg:px-40 pt-10 pb-10 px-5 lg:gap-12 gap-8 text-[#2D2D2D]  bg-gray-100">
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-center">
        <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/400x300.png?text=404+Error"
              alt="Error 404"
              className="mb-4"
            />
        </div>
        <h1 className="text-5xl font-bold text-[#] mb-2">404</h1>
        <p className="text-lg text-gray-700 mb-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className=""
        >
          <Button className="inline-flex items-center px-4 py-2 text-[#2D2D2D] bg-[#81D4FA] hover: bg-[#81D4FA] rounded">
              <FiHome className="mr-2" />
              Go Back Home
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default ErrorPage;
