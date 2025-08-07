import { Github, Linkedin } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#F8F9FA] dark:bg-[#0A0E12] flex flex-col justify-center items-center text-center pt-20 pb-40 px-10 gap-5">
        <div className="md:max-w-[600px] lg:max-w-[1000px]">
          <div className="scaleElement">
            <div className="z-10 flex flex-col gap-10">
              <h1 className="text-black dark:text-white font-semibold text-md lg:text-xl">
                Bonjour, moi c'est Antoine !
              </h1>
              <span className="text-black dark:text-white font-extrabold text-5xl lg:text-7xl">
                Créateur de <span className="text-[#851DBF]">sites</span> et d'
                <span className="text-[#851DBF]">applications</span> web
              </span>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Antoinekoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black dark:bg-white rounded-full p-2 hover:bg-[#851DBF] transition-colors cursor-pointer"
                >
                  <Github className="text-white dark:text-black w-6 h-6" />
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
            <div className="z-9">
              <img
                className="floatElement absolute h-[60px] top-[-30px] right-[-20px]"
                src="/doodles/hero/speech.svg"
                alt=""
              />
              <img
                className="floatElement absolute h-[70px] bottom-[-160px] right-[30px]"
                src="/doodles/hero/coding.svg"
                alt=""
              />
              <img
                className="floatElement absolute h-[80px] top-[250px] right-[20px]"
                src="/doodles/hero/html.svg"
                alt=""
              />
              <img
                className="floatElement absolute h-[80px] top-[-70px] left-[10px]"
                src="/doodles/hero/js.svg"
                alt=""
              />
              <img
                className="floatElement absolute h-[100px] left-[20px] bottom-[-120px]"
                src="/doodles/hero/laptop.svg"
                alt=""
              />
              <img
                className="floatElement absolute h-[70px] bottom-[20px] left-[50px]"
                src="/doodles/hero/star-outline.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
