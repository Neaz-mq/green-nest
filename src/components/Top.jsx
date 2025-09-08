// Top.jsx
import { MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Top = () => {
  return (
    <div className="w-full bg-green-50 text-green-900 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6 md:px-8 py-4 md:py-6">
        
        {/* Left side: Address & Email */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span className="text-xs sm:text-sm">1025 Basila Street, BA 98370</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a
              href="mailto:info@website.com"
              className="hover:underline text-xs sm:text-sm break-all sm:break-normal"
            >
              neazmorshed666@gmail.com
            </a>
          </div>
        </div>

        {/* Right side: Social icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-600">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-green-600">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-green-600 font-semibold text-xs">
            G+
          </a>
          <a href="#" className="hover:text-green-600">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
