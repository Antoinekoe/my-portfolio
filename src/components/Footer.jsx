import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0D1116]">
      <div
        className="flex justify-center gap-4 py-5 max-w-[2000px] mx-auto relative"
        style={{
          boxShadow:
            "0 -5px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <a
          href="https://github.com/Antoinekoe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black  dark:bg-white rounded-full p-2 hover:bg-[#851DBF] transition-colors cursor-pointer"
        >
          <Github className="text-white  dark:text-black w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/antoine-koekelkoren-198360120/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black dark:bg-white rounded-full p-2 hover:bg-[#851DBF] transition-colors cursor-pointer"
        >
          <Linkedin className="text-white dark:text-black w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
