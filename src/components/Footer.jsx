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
      className="relative bg-[#1a4d2e] text-white pt-40 pb-8 overflow-visible"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dxohwanal/image/upload/v1758001181/Mask-group-6.09ea74ec_qmffrl.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Contact Info Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-center justify-center py-6 px-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1703274640/tree-svgrepo-com_1_vdz8gq.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#1a4d2e]">Gettree</h2>
                <p className="text-sm text-[#1a4d2e]">Landscaping</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-start space-x-4 py-6 px-4">
            <FaMapMarkerAlt className="text-[#3b823e] text-2xl mt-1" />
            <div className="text-[#1a4d2e]">
              <p className="font-semibold">66 broklyant, New York</p>
              <p className="text-sm">India 3269 road.</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-start space-x-4 py-6 px-4">
            <FaPhoneAlt className="text-[#3b823e] text-2xl mt-1" />
            <div className="text-[#1a4d2e]">
              <p className="font-semibold">012 345 678 9101</p>
              <p className="text-sm">012 345 678 9101</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#e7f5ec] rounded-xl flex items-start space-x-4 py-6 px-4">
            <FaEnvelope className="text-[#3b823e] text-2xl mt-1" />
            <div className="text-[#1a4d2e]">
              <p className="font-semibold">yourmail.@gmail.com</p>
              <p className="text-sm">yourgmail.@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum simply dummy text available in market the printing text,
            MORE...
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
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
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

        {/* Recent Post */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Recent Post</h3>
          <div className="space-y-4">
            {[1, 2].map((_, idx) => (
              <div key={idx}>
                <p className="text-gray-300">
                  Bigg Ideas Of Business branding Info.
                </p>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                  <FaCalendarAlt className="mr-2" /> December 7, 2021
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of in market the printing
            typesetting.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 pr-16 rounded-full bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#3b823e] p-2 rounded-full">
              <IoIosMail className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-12 pt-8">
        <div className="max-w-7xl mx-auto border-t border-[#3b823e] pt-6 text-center text-gray-400 text-sm">
          © 2023 Getttree. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
