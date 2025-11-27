import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import Textanimation from "./Textaniamtion";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setPriceDropdown(false);
  }, [location]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    if (open) {
      tl.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: 0, duration: 1.2, ease: "power4.out" }
      ).fromTo(
        linksRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        },
        "-=0.3"
      );
    } else {
      tl.to(linksRef.current, {
        x: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      }).to(menuRef.current, {
        x: "100%",
        duration: 1,
        ease: "power4.in",
      });
    }
  }, [open]);

  return (
    <div className="fixed  top-0 left-0 w-full z-[999] lg:hidden ">
      <div className="py-4 lg:px-2 px-3 flex lg:items-center  lg:gap-12 md:gap-115 gap-14  md:px-5">
        <div className="p-1 bg-black rounded-1xl lg:px-0 px-2">
          <div className="-mt-1">
            <Link to="/">
              <Textanimation
                text="MAMMOTH MURALS"
                classname="text-white text-[6vw] md:text-4xl"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Hamburger / Close */}
      <div className="px-1 mt-3 flex justify-end absolute top-0 right-0 z-[1000]">
        {open ? (
          <div onClick={() => setOpen(false)} className="py-0.3 px-3">
            <Textanimation text="Close" classname="text-black md:text-4xl text-[8vw]" />
          </div>
        ) : (
          <div onClick={() => setOpen(true)} className="py-0.3 px-3">
            <Textanimation text="Menu" classname="text-black text-[8vw] md:text-4xl" />
          </div>
        )}
      </div>

      <motion.div
        ref={menuRef}
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(event, info) => {
          if (info.point.x > 100) setOpen(false);
        }}
        className="fixed top-0 right-0 h-[90vh] px-3 w-full bg-white text-black flex flex-col items-start justify-center  md:gap-1 translate-x-full cursor-grab active:cursor-grabbing"
  >
        {[
          { name: "Home", path: "/" },
          { name: "Work", path: "/Work" },
          { name: "About", path: "/Aboutus" },
          { name: "Contact", path: "/Contact" },
          {
            name: "Services",
             path: "/Services"
          },
        ].map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="text-6xl md:text-[12vw] fontspring text-black font-[550] cursor-pointer opacity-0"
            >
              <Textanimation text={item.name} />
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Menu;
