import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header with Dark Background */}
      <div className="relative bg-[#0d3a2f] bg-[url('https://res.cloudinary.com/dxohwanal/image/upload/v1757915775/imgheader.b35642c0_xqqzjh.jpg')] bg-cover bg-center text-white py-20 text-center">
        <p className="uppercase tracking-widest text-sm text-white/70 mb-2">
          Meet Our Team
        </p>
        <h2 className="text-3xl font-bold">Our Creative Team</h2>

        {/* Team Member Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757915040/staff1_xbploq.png"
              alt="Jessica Morales"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Jessica Morales
            </h3>
            <p className="text-sm text-gray-500">Florist</p>
            <div className="mt-3 flex space-x-3">
              <a href="#">
                <FaFacebook className="text-gray-400 hover:text-green-700 transition" />
              </a>
              <a href="#">
                <FaInstagram className="text-gray-400 hover:text-green-700 transition" />
              </a>
              <a href="#">
                <FaTwitter className="text-gray-400 hover:text-green-700 transition" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757915228/staff2_larnx2.png"
              alt="Jason Martinez"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Jason Martinez
            </h3>
            <p className="text-sm text-gray-500">Landscaper</p>
            <div className="mt-3 flex space-x-3">
              <a href="#">
                <FaFacebook className="text-gray-400 hover:text-green-700 transition" />
              </a>
              <a href="#">
                <FaInstagram className="text-gray-400 hover:text-green-700 transition" />
              </a>
              <a href="#">
                <FaTwitter className="text-gray-400 hover:text-green-700 transition" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757915248/staff3_ctkr4q.png"
              alt="Sarah White"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Sarah White
            </h3>
            <p className="text-sm text-gray-500">Gardener</p>
            <div className="mt-3 flex space-x-3">
              <a href="#">
                <FaFacebook className="text-gray-400 hover:text-green-700 transition" />
              </a>
              <a href="#">
                <FaInstagram className="text-gray-400 hover:text-green-700 transition" />
              </a>
              <a href="#">
                <FaTwitter className="text-gray-400 hover:text-green-700 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-0">
        <div className="relative h-96">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1757916229/home1-item1_qjpbf6.jpg"
            alt="Person mowing lawn"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-96">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1757916247/woman-plant-the-tree.3848fc18_pmwasm.jpg"
            alt="Person repotting a plant"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-96">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1757916256/home1-item3_f928l4.jpg"
            alt="Woman with watering can"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-96">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1757916269/home1-item4_bh9ktt.jpg"
            alt="Hands planting"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
