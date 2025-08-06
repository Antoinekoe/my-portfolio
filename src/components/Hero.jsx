import { Github, Linkedin } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#0A0E12] flex flex-col justify-center items-center text-center pt-20 pb-40 px-10 gap-5">
        <div className="z-10 flex flex-col gap-10">
          <h1 className="text-white font-semibold text-md">
            Bonjour, moi c'est Antoine !
          </h1>
          <span className="text-white font-extrabold text-5xl">
            Créateur de <span className="text-[#851DBF]">sites</span> et d'
            <span className="text-[#851DBF]">applications</span> web
          </span>
          <div className="flex justify-center gap-4">
            <div className="bg-white rounded-full p-2">
              <Github className="text-black w-6 h-6 cursor-pointer" />
            </div>
            <div className="bg-white rounded-full p-2">
              <Linkedin className="text-black w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="z-9">
          <img
            className="floatElement absolute h-[60px] top-[100px] right-[20px]"
            src="/doodles/hero/speech.svg"
            alt=""
          />
          <img
            className="floatElement absolute h-[70px] bottom-[280px] right-[30px]"
            src="/doodles/hero/coding.svg"
            alt=""
          />
          <img
            className="floatElement absolute h-[80px] top-[400px] right-[20px]"
            src="/doodles/hero/html.svg"
            alt=""
          />
          <img
            className="floatElement absolute h-[100px] top-[60px] left-[10px]"
            src="/doodles/hero/js.svg"
            alt=""
          />
          <img
            className="floatElement absolute h-[100px] left-[50px]"
            src="/doodles/hero/laptop.svg"
            alt=""
          />
          <img
            className="floatElement absolute h-[70px] bottom-[450px] left-[70px]"
            src="/doodles/hero/star-outline.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
