import React from "react";
import Textanimation from "./textaniamtion";
import Biggertext from "./Biggertext";

const Footer = () => {
  return (
    <div className=" w-full px-9">
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

        <div className="h-full w-full">
        <div className="backtext relative h-full pb-20  w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <Biggertext text="Mammoth" classname="text-[35vw] leading-[20vw]" />
  <Biggertext text="Murals" classname="text-[46vw] leading-[42vw]" />
  <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="footer_bottom_deco_wrap u-spritefooterss u-sprite-footers"></div>
</div>

  </div>

</div>

     
      </div>
    </div>
  );
};

export default Footer;
