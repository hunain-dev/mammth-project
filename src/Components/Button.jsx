import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btntext, classname, imgsrc, link }) => {
  const isExternal = link?.startsWith("http");

  // agar link http ya https se start hota hai, to anchor tag use hoga
  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden cursor-pointer SuisseIntl uppercase text-[1vw] border border-black text-black flex items-center justify-center gap-2 ${classname}`}
      >
        {imgsrc && (
          <img
            src={imgsrc}
            alt="icon"
            className="relative z-10 w-7 h-7 object-contain transition-all duration-300 group-hover:invert"
          />
        )}
        <h2 className="relative z-10 transition-all duration-300 group-hover:text-white">
          {btntext}
        </h2>
        <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 ease-in-out group-hover:h-full"></span>
      </a>
    );
  }

  // internal navigation ke liye React Router Link
  return (
    <Link
      to={link || "#"}
      className={`group relative overflow-hidden cursor-pointer SuisseIntl uppercase text-[1vw] border border-black text-black flex items-center justify-center gap-2 ${classname}`}
    >
      {imgsrc && (
        <img
          src={imgsrc}
          alt="icon"
          className="relative z-10 w-7 h-7 object-contain transition-all duration-300 group-hover:invert"
        />
      )}
      <h2 className="relative z-10 transition-all duration-300 group-hover:text-white">
        {btntext}
      </h2>
      <span className="absolute left-0 bottom-0 w-full h-0 bg-black transition-all duration-300 ease-in-out group-hover:h-full"></span>
    </Link>
  );
};

export default Button;
