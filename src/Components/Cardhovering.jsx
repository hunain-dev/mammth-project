import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cardhovering = () => {
  const cardsRef = useRef([]);

  const aray = [
    { bgcolor: "#FF6B6B" },
    { bgcolor: "#5DD39E" },
    { bgcolor: "#4D96FF" },
  ];

  useEffect(() => {
    // Default GSAP setup for 3D effect
    gsap.set(cardsRef.current, {
      transformStyle: "preserve-3d",
      perspective: 1000,
    });

    cardsRef.current.forEach((card) => {
      // Hover In → card moves forward (z-axis)
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.6,
          z: 30, // 👈 card moves forward
          scale: 0.9,
          rotateY: 4,
          rotateX: -1,
          ease: "power1.out",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
        });
      });

      // Hover Out → card moves back (original position)
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.6,
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
    <div className="h-screen w-full flex items-center justify-center p-20 bg-gray-100">
      <div
        className="grid grid-cols-3 gap-8 w-full max-w-6xl"
        style={{ perspective: 700 }}
      >
        {aray.map((elem, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="h-[40vh] rounded-2xl cursor-pointer"
            style={{ backgroundColor: elem.bgcolor }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Cardhovering;
