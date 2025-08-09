import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Smooth scroll to section and close mobile menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsClicked(false);
    }
  };

  return (
    <>
      <div className="px-8 py-5 min-h-[5vh] bg-[#F8F9FA] dark:bg-[#0D1116] text-black dark:text-white relative shadow-lg">
        <div className="flex justify-between lg:max-w-[1500px] lg:mx-auto">
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
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("expertise")}
            >
              Expertise
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("histoire")}
            >
              Histoire
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("projets")}
            >
              Projets
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      {isClicked && <MobileNavbar setIsClicked={setIsClicked} />}
    </>
  );
};

export default Navbar;
