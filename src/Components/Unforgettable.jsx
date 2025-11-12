import React, { useRef } from "react";
import Biggertext from "./Biggertext";
import Button from "./ReuseButton";
import Kindman from "../assets/images/Kindman.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

const Unforgettable = () => {
  const cardsRef = useRef([]);

  const containerRef = useRef(null);

  const images = [
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557112b0b4ad079ab3_CleanShot%202024-11-09%20at%2015.00.44-3.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68aa749e9107055055ad0396_cocacolaamphitheater-34.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c2655200bb7ad08f7060f_CleanShot%202024-11-09%20at%2015.00.44.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557ae981f7e2564ffa_CleanShot%202024-11-09%20at%2015.00.44-4.avif",
    "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c265532bfdc3016bc5c8f_CleanShot%202024-11-09%20at%2015.00.44-2.avif",
  ];


  useEffect(() => {
    // Default GSAP setup for 3D effect
    gsap.set(cardsRef.current, {
      transformStyle: "preserve-3d",
      perspective: 500,
    });

    cardsRef.current.forEach((card) => {
      // Hover In → card moves forward (z-axis)
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.1,
          z: 30, // 👈 card moves forward
          scale: 0.9,
          rotateY: 4,
          rotateX: -1,
          ease: "power2.out",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
        });
      });

      // Hover Out → card moves back (original position)
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.3,
          z: 100, // 👈 card moves back
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          ease: "power3.out",
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        });
      });
    });
  }, []);


  return (
    <div className=" w-full bg-[#120011] overflow-hidden">
      <div className="lg:pt-23 pt-17 px-20 w-full ">
        <div className="h-full w-full flex items-center justify-center relative ">
          <Biggertext
            text={
              <>
                Let paint something <br />
                Unforgettable
              </>
            }
            classname="lg:text-[11.5vw] text-6xl text-center text-[#FFF6E5] lg:leading-36"
          />

          <div className="h-full w-full absolute lg:opacity-100 opacity-0 top-0 left-0 flex justify-between px-10">
            {/* LEFT sprite box */}
            <div className="h-[48vh] w-[10%] relative overflow-hidden">
              <div className="hero_contact_top-left u-sprite u-sprite-blink is-home"></div>
            </div>

            {/* RIGHT sprite box */}
          </div>
        </div>

        <div className=" lg:mt-11 mt-10 w-full  flex items-center gap-9 justify-start flex-col">
          <h3 className="SuisseIntl text-[#FFF6E5] text-center font-[400] lg:text-[1.3vw] text-[2.8vw] lg:leading-7">
            Let’s talk strategy, locations, and how a mural <br /> can give your
            brand a powerful local presence.
          </h3>
         <Link to="https://calendly.com/mammothmurals/meeting-with-andrew-clone">
         <Button
              imgsrc={Kindman}
              link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
              btntext="Book an deivley call"
              classname="lg:px-4 px-5 py-2 lg:text-[1vw] text-[2.4vw] bg-[#FFF6E5] text-black"
            />
          
          </Link> 
      
        </div>

        <div className=" w-full lg:mt-34 mt-15">
          <div className="flex flex-col items-center justify-center">
            <div
                  ref={containerRef}

              className="flex gap-9 perspective"
              style={{ perspective: "1000px" }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative lg:w-84 lg:h-79 w-41 h-46   py-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? "-4" : "4"}deg)`,
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className=" h-full lg:w-100 object-cover rounded-lg shadow-lg group-hover:animate-[elasticBounce_0.8s_ease-out]"
                    style={{
                      transformOrigin: "center center",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unforgettable;
