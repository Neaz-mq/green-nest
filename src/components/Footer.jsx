import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#1a4d2e] text-white pt-32 pb-8 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dxohwanal/image/upload/v1758001181/Mask-group-6.09ea74ec_qmffrl.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Contact Info Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-center justify-center py-4 px-3 sm:py-6 sm:px-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a4d2e]">
                  Green
                </h2>
                <p className="text-xs sm:text-sm text-[#1a4d2e]">Nest</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-start space-x-4 py-4 px-3 sm:py-6 sm:px-4">
            <FaMapMarkerAlt className="text-[#3b823e] text-xl sm:text-2xl mt-1" />
            <div className="text-[#1a4d2e] text-sm sm:text-base">
              <p className="font-semibold">22 Bogura, Bangladesh</p>
              <p>Bogura 3261 road.</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-start space-x-4 py-4 px-3 sm:py-6 sm:px-4">
            <FaPhoneAlt className="text-[#3b823e] text-xl sm:text-2xl mt-1" />
            <div className="text-[#1a4d2e] text-sm sm:text-base">
              <p className="font-semibold">0130 3660 481</p>
              <p>0178 5286 936</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-center sm:items-start space-x-4 py-4 px-3 sm:py-6 sm:px-4">
            <FaEnvelope className="flex-shrink-0 text-[#3b823e] text-xl sm:text-2xl" />
            <div className="text-[#1a4d2e] text-sm md:text-base leading-snug overflow-hidden">
              <p className="font-semibold truncate md:whitespace-normal">
                neazmorshed666@gmail.com
              </p>
              <p className="truncate md:whitespace-normal">neazmorshed.cse@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            Discover tips and insights on creating beautiful, sustainable
            gardens.
          </p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#3b823e] rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#3b823e] rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#3b823e] rounded-full"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>
              <a href="#" className="hover:text-[#97d498]">
                Branding Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#97d498]">
                UI/UX Designing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#97d498]">
                Maek Elements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#97d498]">
                Graphics Design
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-5">
            {/* Post 1 */}
            <div className="flex items-start space-x-3">
              <img
                src="/plant.png"
                alt="Planting Tips"
                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-md bg-white p-1"
              />
              <div>
                <p className="text-gray-300 text-sm md:text-base font-medium">
                  5 Essential Tips for Planting in Small Spaces
                </p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <FaCalendarAlt className="mr-2" /> September 10, 2025
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex items-start space-x-3">
              <img
                src="/planet.png"
                alt="Garden Layout"
                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-md bg-white p-1"
              />
              <div>
                <p className="text-gray-300 text-sm md:text-base font-medium">
                  How to Create a Garden Layout for Every Season
                </p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <FaCalendarAlt className="mr-2" /> August 25, 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            Subscribe to receive seasonal gardening tips, planting guides, and
            the latest updates from Green Nest.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 pr-16 rounded-full bg-transparent border border-white text-white placeholder-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#3b823e] p-2 rounded-full">
              <IoIosMail className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-12 pt-8">
        <div className="max-w-7xl mx-auto border-t border-[#3b823e] pt-6 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} GreenNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
