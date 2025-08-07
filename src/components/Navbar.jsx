import React, { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="flex justify-between px-8 py-5 bg-white dark:bg-[#0D1116] text-white">
        {isDarkMode ? (
          <Moon
            className="cursor-pointer text-black dark:text-white"
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        ) : (
          <Sun
            className="cursor-pointer text-black dark:text-white"
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        )}
        <Menu
          className={`${isClicked ? "hidden" : ""} sm:hidden`}
          onClick={() => setIsClicked(true)}
        />
        <X
          className={`${isClicked ? "" : "hidden"} sm:hidden`}
          onClick={() => setIsClicked(false)}
        />
        <ul className="hidden sm:flex gap-4 text-lg">
          <li>Expertise</li>
          <li>Histoire</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </div>
      {isClicked && <MobileNavbar setIsClicked={setIsClicked} />}
    </>
  );
};

export default Navbar;
