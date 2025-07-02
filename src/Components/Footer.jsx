import React from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=2347039422404&text=Hello%2C%20I%20love%20your%20weather%20app!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-green-500 hover:text-green-600 font-semibold mb-4 md:mb-0"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>

        {/* Center: Copyright */}
        <div className="text-center mb-4 md:mb-0">
          <span className="block text-sm font-medium">
            © 2025. All Rights Reserved. Created by Kaycee Tech. 
          </span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold"
        >
          <FaArrowUp size={16} />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
