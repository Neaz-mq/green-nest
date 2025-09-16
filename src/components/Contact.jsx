import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCaretDown } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-12 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center items-center lg:items-start max-w-lg">
        <div className="text-left w-full mb-8">
          <p className="text-sm text-[#97d498] uppercase tracking-widest mb-1">
            Get in touch
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 leading-tight mt-4">
            We want to share our <br className="hidden lg:block" />
            location to find <br className="hidden lg:block" />
            us easily.
          </h1>
        </div>
        <div className="relative w-full">
          <div className="bg-green-700 text-white rounded-xl p-8 shadow-lg flex flex-col gap-6 w-full">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-lg">Our Address</h3>
                <p className="text-sm opacity-90">
                  2 St, Loska srit pur, Amukara.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-lg">Our Phone</h3>
                <p className="text-sm opacity-90">000 2324 39495</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-lg">Our Email</h3>
                <p className="text-sm opacity-90">name@website.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 md:p-10 lg:p-16 bg-white rounded-xl shadow-lg mt-8 lg:mt-0 max-w-xl">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="fullName"
                className="text-sm text-gray-600 mb-1 block"
              >
                Name <span className="text-gray-400 text-xs">[required]</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm text-gray-600 mb-1 block"
              >
                Phone <span className="text-gray-400 text-xs">[optional]</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 mb-1 block"
              >
                Email address{" "}
                <span className="text-gray-400 text-xs">[required]</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="services"
                className="text-sm text-gray-600 mb-1 block"
              >
                Services{" "}
                <span className="text-gray-400 text-xs">[required]</span>
              </label>
              <div className="relative">
                <select
                  id="services"
                  className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none pr-10"
                >
                  <option value="">Choose service</option>
                  <option value="plant-care">Plant Care</option>
                  <option value="landscape-design">Landscape Design</option>
                  <option value="tree-pruning">Tree Pruning</option>
                </select>
                <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mb-1 block"
            >
              Your message*
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 resize-y"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;