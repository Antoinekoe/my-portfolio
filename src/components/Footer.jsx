import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0D1116]">
      <div className="flex justify-center gap-4 py-5 border-t-1 border-black dark:border-white max-w-[2000px] mx-auto">
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
