import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center gap-4 bg-[#0A0E12] py-5 border-t-1 border-white">
      <div className="bg-white rounded-full p-2">
        <Github className="text-black w-6 h-6 cursor-pointer" />
      </div>
      <div className="bg-white rounded-full p-2">
        <Linkedin className="text-black w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
