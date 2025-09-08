// Navbar.jsx
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-green-50 pb-8  ">
      <div className="max-w-7xl mx-auto flex items-center bg-white  justify-between px-6 py-4 border-2 border-white  rounded-2xl ">
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

        {/* Menu */}
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

        {/* Right side: Icons + Button */}
        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
