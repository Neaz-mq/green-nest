import React from "react";
import { Check } from "lucide-react"; // for check icons

const Subscribe = () => {
  return (
    <div className="md:py-28 py-10 text-gray-800">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[500px]">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1757916229/home1-item1_qjpbf6.jpg"
            alt="Plants and gardening tools"
            className="w-full h-full object-cover"
          />
          {/* Logo Overlay */}
          <div className="absolute bottom-8 left-8 bg-white rounded-full shadow-md px-6 py-3 flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/765/765560.png"
              alt="Logo"
              className="h-6 w-6"
            />
            <span className="font-semibold text-green-700">Gettree Landscaping</span>
          </div>
        </div>

        {/* Right Green Content */}
        <div className="bg-[#2f8d46] text-white relative flex flex-col justify-center px-8 md:px-16 py-12">
          {/* Decorative Leaf Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.svgrepo.com/show/492940/leaf.svg')] bg-no-repeat bg-right bg-contain"></div>

          <div className="relative z-10">
            <p className="uppercase text-sm tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl font-bold leading-snug mb-4">
              We Have The Perfect Solution For You
            </h2>
            <p className="text-white/90 mb-8">
              Lorem Ipsum is simply dummy text of free available in market the
              typesetting industry has been the industry's standard dummy text
              ever. Lorem Ipsum is simply dummy text of free available in market.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature Block 1 */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-white text-green-700 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    01
                  </div>
                  <div>
                    <h3 className="font-semibold">Counter In Work</h3>
                    <p className="text-sm text-white/80">Lorem Ipsum is</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" /> 
                    <span>Available in market the printing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" /> 
                    <span>Lorem Ipsum simply dummy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" /> 
                    <span>Market the printing</span>
                  </li>
                </ul>
              </div>

              {/* Feature Block 2 */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-white text-green-700 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    02
                  </div>
                  <div>
                    <h3 className="font-semibold">Counter In Work</h3>
                    <p className="text-sm text-white/80">Lorem Ipsum is</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" /> 
                    <span>Market the printing typesetting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" /> 
                    <span>Available in market the printing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" /> 
                    <span>Lorem Ipsum simply free</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Box */}
      <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto -mt-10 relative z-20 p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-gray-800 font-medium">
          Get notified about the event! Subscribe today
        </p>
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow md:flex-grow-0 rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-r-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
