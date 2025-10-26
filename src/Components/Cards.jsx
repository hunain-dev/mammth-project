import React from "react";
import card1 from "../assets/images/first-card.png";
import last from "../assets/images/last.png";
import fifththlast from "../assets/images/5thlast.png";
import secondlast from "../assets/images/2ndlast.png";
import thirdlast from "../assets/images/3rdlast.png";
import building from "../assets/images/building.png";

const Cards = () => {
  const obj = [
    {
      img: card1,
      text: "Live Nation: the magic city",
    },
    {
      img: fifththlast,
      text: "Girls with the pearl earning",
    },
    {
      img: building,
      text: "Axel row",
    },
    {
      img: thirdlast,
      text: "Gulniary dropout",
    },
    {
      img: secondlast,
      text: "South Eastern",
    },
    {
      img: last,
      text: "Mountain top",
    },
  ];
  return (
    <div className="px-3 w-full grid gap-4 grid-cols-2">
      {obj.map((elem, index) => {
        return (
          <div
            key={index}
            className="h-full w-full"
            style={{ backgroundColor: elem.backgoruncolor }}
          >
       <div className="pb-3 bg-black w-full overflow-hidden group">
  <img
    src={elem.img}
    alt=""
    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-80"
  />
</div>
            <div className=" flex items-center justify-between w-full">
              <h2 className="ObviouslyDemo uppercase text-3xl">{elem.text}</h2>
              <div className="py-1 px-3 border-2 border-black flex items-center justify-center gap-3 border-b-4">
                <h4 className="ObviouslyDemo text-1xl">2025</h4>
                <h4 className="ObviouslyDemo text-1xl">Murals</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
