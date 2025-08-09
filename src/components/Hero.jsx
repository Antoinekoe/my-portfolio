import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#F8F9FA] dark:bg-[#0D1116] flex flex-col justify-center items-center text-center pt-30 pb-20 lg:pt-30 lg:pb-40 px-10 gap-5">
        <div className="md:max-w-[600px] lg:max-w-[1000px]">
          {/* Main content with entrance animation */}
          <div className="scaleElement">
            <div className="z-10 flex flex-col gap-10">
              <h1 className="text-black dark:text-white font-semibold text-md lg:text-xl">
                Bonjour, moi c'est Antoine !
              </h1>
              <span className="text-black dark:text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl">
                Créateur de <span className="text-[#851DBF]">sites</span>
                <br /> et d'
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
                className="floatElement absolute h-[60px] top-[-30px] right-[-30px] lg:right-[130px] lg:h-[80px] lg:top-[-40px]"
                src="/doodles/hero/speech.svg"
                alt="Decorative speech buble"
              />
              <img
                className="hidden lg:block lg:absolute lg:h-[120px] lg:top-[-60px] lg:left-[100px]"
                src="/doodles/hero/pop.svg"
                alt="Decorative pop element"
              />
              <img
                className="floatElement absolute h-[70px] bottom-[-160px] right-[30px] lg:right-[300px] lg:h-[80px]"
                src="/doodles/hero/coding.svg"
                alt="Decorative coding icon"
              />
              <img
                className="floatElement absolute h-[80px] top-[230px] right-[5px]"
                src="/doodles/hero/html.svg"
                alt="Decorative html icon"
              />
              <img
                className="floatElement absolute h-[80px] top-[-80px] left-[10px] lg:top-[300px] lg:left-[470px]"
                src="/doodles/hero/js.svg"
                alt="Decorative js icon"
              />
              <img
                className="floatElement absolute h-[100px] left-[10px] bottom-[-120px] lg:h-[130px]"
                src="/doodles/hero/laptop.svg"
                alt="Decorative laptop icon"
              />
              <img
                className="floatElement absolute h-[70px] bottom-[20px] left-[50px] lg:left-[230px] lg:bottom-[-10px]"
                src="/doodles/hero/star-outline.svg"
                alt="Decorative star icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
