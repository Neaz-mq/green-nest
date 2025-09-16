import React from "react";
import { Check } from "lucide-react"; // for check icons

const Subscribe = () => {
  return (
    <div id="subscribe" className="md:py-28 py-10 text-gray-800 scroll-smooth">
      {/* About Us Section */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2  ">
        {/* Left Image with dark overlay */}
        <div className="relative h-[500px]">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1757929839/person-cutthetree.20e1f748_godhgf.jpg"
            alt="Person gardening"
            className="w-full h-full object-cover"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Logo Overlay */}
          <div className="absolute bottom-8 left-8 bg-white rounded-full shadow-md px-6 py-3 flex items-center space-x-2 z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/765/765560.png"
              alt="Logo"
              className="h-6 w-6"
            />
            <span className="font-semibold text-green-700">Landscaping</span>
          </div>
        </div>

        {/* Right Green Content */}
        <div
          className="bg-[#2f8d46] text-white relative flex flex-col justify-center px-8 md:px-16 py-12"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dxohwanal/image/upload/v1757929984/Screenshot_2025-09-15_151519_lgirx0.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <p className="uppercase text-sm tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl font-bold leading-snug mb-4">
              We Have The Perfect Solution For Your Garden
            </h2>
            <p className="text-white/90 mb-8">
              We believe a beautiful garden is more than just plants—it's a
              living space tailored to your needs. Our team of experts provides
              all the tools, knowledge, and support you need to create and
              maintain your dream garden, from small-scale balcony planters to
              full-scale backyard landscapes.
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
                    <h3 className="font-semibold">Expert Guidance</h3>
                    <p className="text-sm text-white/80">
                      Tailored to your needs
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>In-depth planting guides</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Personalized soil analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Tips for pest management</span>
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
                    <h3 className="font-semibold">Quality Products</h3>
                    <p className="text-sm text-white/80">
                      From our nursery to your home
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Curated selection of plants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Eco-friendly gardening tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Organic fertilizers and compost</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Box */}
      <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto 2xl:-mt-10 xl:-mt-6 -mt-4  relative z-20 p-8 flex flex-col md:flex-row items-center justify-between space-y-5 ">
        <p className="text-gray-800 font-medium">
          Get weekly gardening tips and exclusive offers straight to your inbox!
        </p>
        <form className="flex flex-col sm:flex-row w-full md:w-auto sm:gap-0 gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:flex-grow md:flex-grow-0 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
