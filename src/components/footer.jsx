import React from 'react';
import Logo from "../assets/Mymindspace.svg";

const footer = () => {
    const footerItems = [
        { name: "About Us", href: "#home" },
        { name: "Contact Us", href: "#pricing" },
        { name: "Testimonials", href: "#pricing" },
        { name: "Meet The Team", href: "#features" },
        { name: "Resources", href: "#pricing" },
        { name: "Community Support", href: "#pricing" },
      ];
    const footerIntro = [
        { number: "+234 907 547-12-97", href: "#home" },
        { email: "mentalhealth@gmail.com", href: "#pricing" },
        
      ];
  return (
    <div className='bg-[#003547] flex flex-col py-12'>
      <div className="lg:flex justify-between container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-logo flex flex-col justify-center">
            <img src={Logo} alt="" className="w-32 py-5" />
            <div className="footer-nav_links grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            {footerIntro.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-gray-600  py-2 rounded-md text-sm font-medium"
              >
                {item.number}
                {item.email}
              </a>
            ))}
            </div>
          </div>

          <div className="footer-links flex flex-col justify-center">
            <div className="footer-link_heading py-5">
                <h4 className='text-[#FEFEFE] opacity-70 mt-5'>Quick Links</h4>
            </div>
            <div className="footer-nav_links grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {footerItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-gray-600  py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            </div>
          </div>
          <div className="footer-social"></div>
      </div>

      <div className="year-container">

      </div>
    </div>
  );
}

export default footer;
