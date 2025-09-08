// Navbar.jsx
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
       <a href="#">
         <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-xl font-bold text-green-800">Green</h1>
            <p className="text-xl text-green-600 -mt-1 ">Nest</p>
          </div>
        </div>
       </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li>
            <a href="#" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">
              Home
            </a>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Case</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Right side: Icons + Button */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart size={18} />
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
