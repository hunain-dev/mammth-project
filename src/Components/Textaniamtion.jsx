import React from "react";

const Textanimation = ({ text }) => {
  return (
    <div className="relative inline-block overflow-hidden cursor-pointer group h-10">
      {/* Top Text (default visible) */}
      <span className="ObviouslyDemo uppercase font-[5800] block text-[2.3vw]   text-white  transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
        {text}
      </span>

      {/* Bottom Text (slides up on hover) */}
      <span className="ObviouslyDemo uppercase font-[5800] block text-[2.3vw]   text-white  transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
        {text}
      </span>
    </div>
  );
};

export default Textanimation;
