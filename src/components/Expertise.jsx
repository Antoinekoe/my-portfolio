import React from "react";

const Expertise = () => {
  return (
    <div className="bg-[#0D1116] px-8 text-white flex flex-col items-start gap-5">
      <h2 className="text-4xl font-bold">Expertise</h2>
      <img
        className="h-[40px] fill-white"
        src="/doodles/hero/react.svg"
        alt=""
      />
      <h3>Développement web Full Stack</h3>
      <span>
        J'ai développé une gamme variée d'applications web à partir de zéro en
        utilisant des technologies modernes telles que React ou encore Nodejs.
      </span>
    </div>
  );
};

export default Expertise;
