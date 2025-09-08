// Navbar.jsx
import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-50 pb-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white px-4 sm:px-6 py-4 border-2 border-white rounded-2xl">
        {/* Logo */}
        <a href="#">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold text-green-800">Green</h1>
              <p className="text-xl text-green-600 -mt-1">Nest</p>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
          <li className="relative">
            <a
              href="#"
              className="text-green-600 font-semibold after:content-[''] after:block after:w-6 after:h-[3px] after:bg-green-600 after:rounded-full after:mx-auto after:mt-1"
            >
              Home
            </a>
          </li>
          <li><a href="#" className="hover:text-green-600">About</a></li>
          <li><a href="#" className="hover:text-green-600">Services</a></li>
          <li><a href="#" className="hover:text-green-600">Case</a></li>
          <li><a href="#" className="hover:text-green-600">Blog</a></li>
          <li><a href="#" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={18} className="text-green-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart size={18} className="text-green-600" />
          </button>
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
          >
            Get A Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-xl shadow-md mx-4 mt-2 py-4 px-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 font-medium text-gray-800">
            <li>
              <a href="#" className="text-green-600 font-semibold">Home</a>
            </li>
            <li><a href="#" className="hover:text-green-600">About</a></li>
            <li><a href="#" className="hover:text-green-600">Services</a></li>
            <li><a href="#" className="hover:text-green-600">Case</a></li>
            <li><a href="#" className="hover:text-green-600">Blog</a></li>
            <li><a href="#" className="hover:text-green-600">Contact</a></li>
          </ul>

          {/* Mobile Icons & Button */}
          <div className="flex items-center gap-4 mt-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={18} className="text-green-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart size={18} className="text-green-600" />
            </button>
            <a
              href="#contact"
              className="flex-1 text-center px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
            >
              Get A Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
