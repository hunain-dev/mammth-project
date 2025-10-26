import React from "react";

const Button = ({ btntext, classname, imgsrc }) => {
  return (
    <div
      className={`group relative overflow-hidden cursor-pointer SuisseIntl uppercase text-[1vw] border border-black text-black flex items-center justify-center gap-2 ${classname}`}
    >
      {/* Image (left side) */}
      {imgsrc && (
        <img
          src={imgsrc}
          alt="icon"
          className="relative z-10 w-7 h-7 object-contain transition-all duration-300 group-hover:invert"
        />
      )}

      {/* Text */}
      <h2 className="relative z-10 transition-all duration-300 group-hover:text-white">
        {btntext}
      </h2>

      {/* Black background sliding from bottom */}
      <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 ease-in-out group-hover:h-full"></span>
    </div>
  );
};

export default Button;
