import React from "react";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-5 bg-[#0D1116] text-white">
      <Sun className="cursor-pointer" />
      <ul className="flex gap-4 text-lg">
        <li>Expertise</li>
        <li>Histoire</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
