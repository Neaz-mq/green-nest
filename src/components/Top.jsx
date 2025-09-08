// Top.jsx
import { MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Top = () => {
  return (
    <div className="w-full bg-green-100 text-green-900 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6 ">
        {/* Left side: Address & Email */}
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>1025 Basila Street, BA 98370</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:info@website.com" className="hover:underline">
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
          <a href="#" className="hover:text-green-600">
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
