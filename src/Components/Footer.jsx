import React from "react";
import Textanimation from "./textaniamtion";
import Biggertext from "./Biggertext";

const Footer = () => {
  return (
    <div className=" w-full px-10">
      <div className=" w-full flex items-center justify-between ">
        <Textanimation text="Home" classname="text-black text-[5vw]" />
        <Textanimation text="Work" classname="text-black text-[5vw]" />
        <Textanimation text="About" classname="text-black text-[5vw]" />
        <Textanimation text="Services" classname="text-black text-[5vw]" />
        <Textanimation text="Contact" classname="text-black text-[5vw]" />
      </div>

      <div className=" w-full mt-34">
        <div className=" w-full  grid grid-cols-3">
          <div className="h-full flex items-start justify-start flex-col">
            <Textanimation
              text="andrew@mammothmurals.com"
              classname="text-black leading-9 text-[2vw]"
            />
            <Textanimation
              text="2816 Crestwood Blvd"
              classname="text-black text-[2vw] leading-9"
            />
            <Textanimation
              text="Irondale, AL 35210, United States"
              classname="text-black leading-9 text-[2vw]"
            />
          </div>
          <div className="h-full flex items-center justify-center">
            <Textanimation
              text="Instagram"
              classname="text-black leading-9 text-[2vw]"
            />
          </div>

          <div className="h-full flex items-end justify-end flex-col">
            <Textanimation
              text="Website by huy"
              classname="text-black leading-9 text-[2vw]"
            />
            <Textanimation
              text="©2025 — All rights reserved"
              classname="text-black leading-9 text-[2vw]"
            />
          </div>
        </div>
        <div className=" w-full  mt-4">
          <div className="h-full w-full relative">
            <Biggertext text="Mammoth" classname="text-[35.4vw] leading-80 " />
            <Biggertext text="Murals" classname="text-[46.5vw] leading-189 " />
            <div className="absolute bottom-70 left-0 w-full h-[50vh] flex justify-center items-center overflow-hidden">
              {/* Sprite animation */}
              <div className="footer_bottom_deco_wrap u-sprite u-spritefooters u-sprite-footer"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
