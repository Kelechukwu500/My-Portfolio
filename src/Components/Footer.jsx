import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white py-16 px-6 relative">
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Connect with Me
        </h3>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/2347039422404"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:scale-105 transition"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="https://x.com/Elongated_guyy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:scale-105 transition"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/kelechukwu-aku-0736a2156/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:scale-105 transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.fiverr.com/kelechukwu500"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:scale-105 transition text-xs font-semibold"
          >
            fiverr.
          </a>
        </div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-6 left-6 text-sm text-gray-600">
        © 2026 Kelechukwu Aku | Frontend Developer
      </div>

      {/* Bottom Right - Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-gray-900 transition"
      >
        Back to Top
        <FaArrowUp size={14} />
      </button>
    </footer>
  );
};

export default Footer;
