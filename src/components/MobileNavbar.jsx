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
    <div className="absolute h-full w-full px-8 py-10 bg-[#F8F9FA] dark:bg-[#0D1116] text-black dark:text-white z-50">
      <ul className="flex flex-col gap-10">
        <li
          className="listItemsColor dark:listItemsDark"
          onClick={() => scrollToSection("expertise")}
        >
          Expertise
        </li>
        <li
          className="listItemsColor dark:listItemsDark"
          onClick={() => scrollToSection("histoire")}
        >
          Histoire
        </li>
        <li
          className="listItemsColor dark:listItemsDark"
          onClick={() => scrollToSection("projets")}
        >
          Projets
        </li>
        <li
          className="listItemsColor dark:listItemsDark"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
