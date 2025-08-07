import React from "react";

const MobileNavbar = ({ setIsClicked }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsClicked(false);
    }
  };
  return (
    <div className="absolute h-full w-full px-8 py-10 bg-[#0D1116] text-white z-50">
      <ul className="flex flex-col gap-10">
        <li className="listItems" onClick={() => scrollToSection("expertise")}>
          Expertise
        </li>
        <li className="listItems" onClick={() => scrollToSection("histoire")}>
          Histoire
        </li>
        <li className="listItems" onClick={() => scrollToSection("projets")}>
          Projets
        </li>
        <li className="listItems" onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
