import React from "react";
import building from "../../../assets/images/building.png";
import { Link } from "react-router-dom";

const Allwork = () => {
  return (
    <div className="w-full flex items-center justify-end py-10">
      <div className="lg:max-w-[52vw]">
       <Link to="/Work"><h3 className="ObviouslyDemo border-b-6 border-black md:text-5xl lg:text-8xl text-3xl pb-2 leading-none">
          View all work
        </h3>
        </Link> 
        <div className="relative mt-4 overflow-hidden rounded-2xl">
          <img
            src={building}
            className="w-full md:w-120 h-auto object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Allwork;
