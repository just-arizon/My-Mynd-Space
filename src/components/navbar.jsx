import React, { useState } from "react";
import Logo from "../assets/Mymindspace.svg";
import Button from "@mui/material/Button";

const navItems = [
  { name: "About Us", href: "#home" },
  { name: "Resources", href: "#features" },
  { name: "Community Voices", href: "#pricing" },
  { name: "Contact Us", href: "#pricing" },
];

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-5">
          <div className="flex items-center flex-1 justify-start">
            <a href="#home" className="text-xl font-bold text-gray-800 ">
              <img src={Logo} alt="Logo" className="w-32 h-32" />
            </a>
          </div>
          <div className="hidden md:flex items-center flex-1 justify-center lg:gap-20 gap-8 whitespace-nowrap">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-800 hover:text-gray-600  py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center flex-1 justify-end">
            <div className="hidden md:inline-block  ">
              <Button>
                <a href="#cta">Get Started</a>
              </Button>
            </div>
            <div className="md:hidden -mr-2 flex">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button
            href="#cta"
            className="bg-[#81D4FA] text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
