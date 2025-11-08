import React, { useEffect, useRef } from "react";
import Video from "../../../Components/Video";
import Kindman from "../../../assets/images/Kindman.jpg";
import wallframe from "../../../assets/images/wallframe.jpg";
import Ourpartners from "../../../Components/Ourpartners";
import Button from "../../../Components/ReuseButton";
import gsap from "gsap";
const HomeLandingpage = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const parargh = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    const textLines = textRef.current.querySelectorAll("span");

    // pehle sab hidden position me set karte hain
    gsap.set(textLines, { y: 150, opacity: 0 });
    gsap.set(videoRef.current, { y: 100, opacity: 0 });

    // timeline start
    tl.to(textLines, {
      y: 0,
      opacity: 1,
      delay: 1.3,
      duration: 1.2,
      stagger: 0.25, // har line ek ke baad ek
    });

    // video after text animation
    tl.to(
      videoRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
      },
      "+=0.3"
    ); // 0.4s delay baad

    tl.to(
      parargh.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
      },
      "+=0.3"
    ); // 0.4s delay baad
  }, []);

  return (
    <>
      <div className="w-full   ">
        <div className="grid lg:grid-cols-[70%_31%] grid-cols-1 w-full ">
          <div
            ref={textRef}
            className="h-full  flex items-start justify-start items-center  "
          >
            <div className="ObviouslyDemo text-left  text-[#120011] flex flex-col  lg:text-[10.9vw] text-6xl uppercase leading-[0.9] font-[600]">
              <span>Murals that make</span>
              <span>Your business</span>
              <span>
                impossible to ignore <span>.</span>{" "}
              </span>
            </div>
          </div>
          <div
            ref={videoRef}
            className="h-full  flex items-start  justify-end flex-col lg:mt-30 mt-7 gap-1 p-1 lg:p-6"
          >
            <Video />
            <h2 className="SuisseIntl font-[600] lg:text-[1.2vw]">
              Show reel (2023__2025){" "}
            </h2>
          </div>
        </div>
        <div className="lg:mt-32 mt-20 lg:text-left " ref={parargh}>
          <h3 className="SuisseIntl  lg:text-[1.6vw] text-[4.3vw] font-[600] lg:leading-8">
            We paint bold, handle-crafted walls for real
            <br />
            estate developer designer-driven
            <br />
            brands that stop traffic,spark conversation
            <br />
            and turn every space into a landmark
          </h3>
          <div className="flex items-start  justify-start lg:flex-row flex-col  gap-3 mt-6">
            <Button
              imgsrc={Kindman}
              link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
              btntext="Book a discovery call"
              classname="px-4 py-3 text-[4vw] bg-black text-white"
            />
            <Button
              btntext="See our work"
              link="/Work"
              classname="lg:px-3 text-[3.3vw] lg:py-3 px-9 py-2"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden  lg:mt-15 mt-12">
          <img
            data-scroll
            data-scroll-speed="0.1"
            src={wallframe}
            alt=""
            className="lg:h-180 w-full object-cover"
          />
        </div>
        <div className=" lg:py-11 py-6">
          <Ourpartners />
        </div>
      </div>
    </>
  );
};

export default HomeLandingpage;
