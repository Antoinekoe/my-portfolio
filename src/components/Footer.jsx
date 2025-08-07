import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center gap-4 bg-[#0A0E12] py-5 border-t-1 border-white">
      <a
        href="https://github.com/Antoinekoe"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <Github className="text-black w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/antoine-koekelkoren-198360120/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <Linkedin className="text-black w-6 h-6" />
      </a>
    </div>
  );
};

export default Footer;
