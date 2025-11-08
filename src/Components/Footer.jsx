import React from "react";
import Textanimation from "./textaniamtion";
import Biggertext from "./Biggertext";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full lg:px-9 lg:mt-0 mt-7">
      <div className=" w-full flex lg:items-center justify-between lg:flex-row flex-col lg:px-0 px-3 ">
      <Link to="/"><Textanimation text="Home" classname="text-black lg:text-[5vw] text-5xl" /></Link>  
     <Link to="/Work"> <Textanimation text="Work" classname="text-black lg:text-[5vw]  text-5xl" /></Link>  
     <Link to="/About">         <Textanimation text="About" classname="text-black lg:text-[5vw]  text-5xl" />
     </Link >  

        <Link to="Services">
        <Textanimation text="Services" classname="text-black lg:text-[5vw]  text-5xl" />

        </Link>   
     <Link to="Contact">
     <Textanimation text="Contact" classname="text-black lg:text-[5vw]  text-5xl" />

     </Link>  
      </div>

      <div className=" w-full lg:mt-34 mt-9 ">
        <div className=" w-full  grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-3">
          <div className="h-full flex items-start justify-start flex-col">
            <Textanimation
              text="andrew@mammothmurals.com"
              classname="text-black lg:leading-9 lg:text-[2vw]"
            />
            <Textanimation
              text="2816 Crestwood Blvd"
              classname="text-black lg:leading-9 lg:text-[2vw]"
            />
            <Textanimation
              text="Irondale, AL 35210, United States"
              classname="text-black lg:leading-9 lg:text-[2vw]"
            />
          </div>
          <div className="h-full flex lg:items-center lg:justify-center">
            <Textanimation
              text="Instagram"
              classname="text-black lg:leading-9 lg:text-[2vw]"
            />
          </div>

          <div className="h-full flex lg:items-center lg:justify-center">
            <Textanimation
              text="Website by huy"
              classname="text-black lg:leading-9 lg:text-[2vw]"
            />
            <Textanimation
              text="©2025 — All rights reserved"
              classname="text-black lg:leading-9 lg:text-[2vw]"
            />
          </div>
        </div>

        <div className="h-full w-full lg:mt-0 mt-6 lg:px-0 px-3">
        <div className="backtext relative h-full lg:pb-20  w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <Biggertext text="Mammoth" classname="lg:text-[35vw] text-[35vw] lg:leading-[20vw] leading-[20vw]" />
  <Biggertext text="Murals" classname="lg:text-[35vw] text-[45vw] lg:leading-[20vw] leading-[43vw]" />
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
