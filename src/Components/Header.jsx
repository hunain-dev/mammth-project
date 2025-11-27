import React, { useEffect, useRef } from "react";
import Textaniamtion from "./Textaniamtion";
import Kindman from "../assets/images/Kindman.jpg";
import { Link } from "react-router-dom";
import ReuseButton from "./ReuseButton";
import gsap from "gsap";
const Header = () => {
  const headerRef = useRef(null);
  let lastScrollY = 0;
  let isAnimating = false;


  
  const controlHeader = () => {
    if (isAnimating) return; // prevent overlap animation
    isAnimating = true;

    if (window.scrollY > lastScrollY) {
      // scroll down → hide header
      gsap.to(headerRef.current, {
        y: -100, // move up out of view
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => (isAnimating = false),
      });
    } else {
      // scroll up → show header
      gsap.to(headerRef.current, {
        y: 0, // bring back to view
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => (isAnimating = false),
      });
    }

    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, []);


  return (
    <div       ref={headerRef}
    className=" lg:opacity-100  opacity-0 px-8     py-6 z-[999] fixed  flex items-center justify-between  w-full ">
      <div className="p-1 bg-black rounded-1xl">
        <div className="-mt-1">
          <Link to="/"><Textaniamtion
              text="MAMMOTH MURALS"
              classname="text-white text-[2.2vw]"
            />
          </Link>
        </div>
      </div>

      <div className="h-full  flex items-center justify-end gap-3">

          <ReuseButton btntext="Work"  link="/work" classname="px-3 py-2 bg-[#FFD900]"  />

        
          <ReuseButton btntext="About" link="/Aboutus" classname="px-3 py-2  bg-[#FFD900]" />

          <ReuseButton btntext="Services" link="/Services" classname="px-3 py-2  bg-[#FFD900]" />

      </div>

      <div className="h-full  flex items-center justify-end">
        <ReuseButton
          imgsrc={Kindman}
          link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
          btntext="Chat with us"
          classname="px-4 py-2  text-[1vw] bg-black text-white"
        />
      </div>
    </div>
  );
};

export default Header;
