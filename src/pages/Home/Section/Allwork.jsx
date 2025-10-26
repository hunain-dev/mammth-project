import React from "react";
import building from "../../../assets/images/building.png";

const Allwork = () => {
  return (
    <div className="w-full flex items-center justify-end py-10">
      <div className="max-w-[52vw]">
        <h3 className="ObviouslyDemo text-8xl pb-5 leading-none">
          View all work
        </h3>
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={building}
            className="w-full h-auto object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Allwork;
