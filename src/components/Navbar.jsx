import React, { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="px-8 py-5 bg-[#F8F9FA] dark:bg-[#0D1116] text-black dark:text-white relative shadow-lg">
        <div className="flex justify-between lg:max-w-[1000px] lg:mx-auto">
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
            className={`${
              isClicked ? "hidden" : ""
            } sm:hidden text-black dark:text-white`}
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
      </div>
      {isClicked && <MobileNavbar setIsClicked={setIsClicked} />}
    </>
  );
};

export default Navbar;
