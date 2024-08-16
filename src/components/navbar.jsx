import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../assets/Mymindspace.svg";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Community Voices", href: "/community" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar
        isBordered
        onMenuOpenChange={toggleMenu}
        lg:shouldHideOnScroll
        isBlurred={false}
        className="shadow-md text-[#2D2D2D]"
      >
        <div className="container mx-auto sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            {/* Logo */}
            <NavbarBrand className="flex items-center justify-start ">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <img src={Logo} alt="Logo" className="w-32 h-32" />
              </Link>
            </NavbarBrand>

            {/* Navigation Links */}
            <NavbarContent className="hidden md:flex items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <NavbarItem key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-gray-600 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarContent>

            {/* Get Started Button */}
            <NavbarContent justify="end" className="flex items-center">
              <NavbarItem className="hidden md:inline-block">
                <Button
                  as={Link}
                  href="/get-started"
                  className="bg-[#81D4FA] py-2 px-6 outline-none rounded-lg text-sm"
                >
                  Get Started
                </Button>
              </NavbarItem>

              {/* Hamburger Menu for Mobile */}
              <NavbarItem className="md:hidden -mr-3 flex">
                <Button
                  onClick={toggleMenu}
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 w-20 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
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
                        isMenuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </Button>
              </NavbarItem>
            </NavbarContent>
          </div>
        </div>
      </Navbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-md fixed top-16 z-50 container mx-auto sm:px-6 lg:px-8">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 rounded-md text-base font-medium w-full">
                <div className=" ">
                  <Button
                   as={Link}
                    href="/get-started"
                    className="bg-[#81D4FA] text-black "
                  >
                    Get Started
                  </Button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
