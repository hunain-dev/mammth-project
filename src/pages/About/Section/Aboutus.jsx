import React from "react";
import AboutLanding from "../AboutLanding";
import Startedourstory from "./Startedourstory";
import Ourpartners from "../../../Components/Ourpartners";
import Ourteam from "./Ourteam";
import Unforgettable from "../../../Components/Unforgettable";
import Loader from "../../../Components/Loader";

const Aboutus = () => {
  return (
    <div className="pt-1 lg:px-2 ">
      <Loader/>

      <AboutLanding />
      <Startedourstory />
      <div className="lg:mt-8 mt-5 lg:px-25 ">
        <Ourpartners />
      </div>
      <div className="lg:mt-8 lg:pb-10 py-15 px-3 lg:px-8">
        <Ourteam />
      </div>
      <div className="lg:px-9">
        <Unforgettable />
      </div>
    </div>
  );
};

export default Aboutus;
