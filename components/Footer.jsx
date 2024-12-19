import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 w-4/5">
        {/* Phone, Email, and Location Section */}
        <div className="flex flex-wrap justify-between mb-6">
          {/* Phone */}
          <div className="flex w-full md:w-96 mb-4 p-5 rounded-xl bg-gray-700 rounded-lg md:mb-0">
            {/* Icon Section */}
            <div className="flex items-center justify-start w-1/4">
              <FaPhoneAlt className="mr-3 text-5xl text-gray-300" />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center w-3/4">
              <p className="text-gray-400 text-start text-sm">Phone Number</p>
              <a
                href="tel:+97431181843"
                className="text-gray-300 hover:text-white"
              >
                <span>+974 3118 1843</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex w-full md:w-96 mb-4 rounded-xl p-5 bg-gray-700 md:mb-0">
            {/* Icon Section */}
            <div className="flex items-center justify-start w-1/4">
              <FaEnvelope className="mr-3 text-5xl text-gray-300" />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center w-3/4">
              <p className="text-gray-400 text-start text-sm">Email Address</p>
              <a
                href="mailto:elbrithealthcqhr@gmail.com"
                className="text-gray-300 hover:text-white"
              >
                <span>elbrit@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex w-full md:w-96 rounded-xl  mb-4 p-5 bg-gray-700 md:mb-0">
            {/* Icon Section */}
            <div className="flex items-center justify-start w-1/4">
              <FaMapMarkerAlt className="mr-3 text-5xl text-gray-300" />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center w-3/4">
              <p className="text-gray-400 text-start text-sm">Location</p>
              <a href="#" className="text-gray-300 hover:text-white">
                <span>Ambassador Street, Zone 61</span>
              </a>
            </div>
          </div>
        </div>

        {/* Logo and Description */}
        <div className="flex  flex-col lg:flex-row items-center mb-6 gap-x-64">
          <img
            src="/navimg.png"
            alt="Logo"
            className="w-48 h-24 p-2 bg-white mb-4"
          />
          <p className="text-center w-72 text-gray-400 text-sm lg:w-96">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>

        {/* Address Section */}
        <div className="text-start ml-4 lg:ml-0">
          <p className="text-gray-400 text-sm">Location</p>
          <p className="text-gray-300">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
