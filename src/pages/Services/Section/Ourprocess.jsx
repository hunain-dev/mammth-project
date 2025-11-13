import React from "react";
import Biggertext from "../../../Components/Biggertext";
import Kindman from "../../../assets/images/Kindman.jpg";
import ReuseButton from "../../../Components/ReuseButton";
import { Pencil, Image, Palette, CheckCircle } from "lucide-react"; // icons

const Ourprocess = () => {
  const data = [
    {
      id: "01",
      icon: <Pencil size={50} strokeWidth={1.5} color="#FFD700" />,
      title: "STRATEGY & SCOPE",
      desc: "We start by learning about your brand, project goals, timelines, and space. Whether you're launching a location or building market buzz,.",
    },
    {
      id: "02",
      icon: <Image size={50} strokeWidth={1.5} color="#FFD700" />,
      title: "CONCEPT & DESIGN",
      desc: "We leverage our strategic and creative capabilities to identify the catalyst that will precipitate the most elegant,",
    },
    {
      id: "03",
      icon: <Palette size={50} strokeWidth={1.5} color="#FFD700" />,
      title: "PLANNING & PREP",
      desc: "We consider every element of execution, bringing the solution to life in its most impactful form(s) both in-market and internally.",
    },
    {
      id: "04",
      icon: <CheckCircle size={50} strokeWidth={1.5} color="#FFD700" />,
      title: "EXECUTION & DELIVERY",
      desc: "We work together to comprehensively track the return on investment in real time, ready to iterate, optimise, or simply double-down.",
    },
  ];

  return (
    <div className="h-full grid grid-cols-1 w-full bg-[#120011] mt-5 lg:px-0 px-3">
      <div className="h-full w-full  grid lg:grid-cols-[65%_35%]">
        <div className="h-full lg:px-3 grid grid-cols-1 ">
          <Biggertext
            text={
              <>
                Our process to high <br /> impact murals
              </>
            }
            classname="lg:text-[11vw] text-6xl text-[#FFF6E5] lg:leading-33"
          />

          <div className="h-full w-full lg:mt-13 mt-10 lg:px-2 ">
            <div className="h-full w-full ">
              <h3 className="SuisseIntl text-white lg:text-[1.2vw] text-1xl font-[600] lg:leading-6">
                We work with brands, developers, and <br /> institutions to make
                bold ideas visible that <br /> are on time and with total
                precision.
              </h3>
              <div className="flex items-center justify-start gap-3 mt-6">
                <ReuseButton
                  imgsrc={Kindman}
                  link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
                  btntext="chat with us"
                  classname="lg:text-[1vw] text-[3.2vw] py-2 px-4 lg:px-5 lg:py-3 font-[600] bg-white text-blacks 
             md:px-4 md:py-3 md:text-[0.9vw] 
             sm:px-2 sm:py-2 sm:text-[3vw]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-full  relative">
          <div className="process_services_bg u-sprite-ser u-sprite-bg"></div>
        </div>
      </div>
      <div className="h-full mt-3 lg:mt-30 text-white py-16 lg:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-center space-y-4"
            >
              <div>{item.icon}</div>
              <h3 className="font-bold text-left text-lg">
                ({item.id}) <span className="text-white">{item.title}</span>
              </h3>
              <p className="text-sm text-[#938584] leading-relaxed text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourprocess;
