import React from "react";

const MobileNavbar = () => {
  return (
    <div className="absolute h-full w-full px-4 py-10 bg-[#0D1116] text-white z-50">
      <ul className="flex flex-col gap-10">
        <li className="listItems">Expertise</li>
        <li className="listItems">Histoire</li>
        <li className="listItems">Projets</li>
        <li className="listItems">Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
