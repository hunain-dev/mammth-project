import React, { useState } from 'react'
import WorkLanding from '../WorkLanding'
import Unforgettable from '../../../../Components/Unforgettable'
import card1 from "../../../../assets/images/first-card.png";
import last from "../../../../assets/images/last.png";
import fifththlast from "../../../../assets/images/5thlast.png";
import secondlast from "../../../../assets/images/2ndlast.png";
import thirdlast from "../../../../assets/images/3rdlast.png";
import building from "../../../../assets/images/building.png";
const Work = () => {


  const filters = [
    { text: "All work" },
    { text: "Murals" },
    { text: "Signs" },
    { text: "Ghost Signs" },
  ];

  // ✅ Default active filter
  const [active, setActive] = useState("All work");

  // ✅ All card data
  const allCards = [
    { id: 1, img: card1, text: "Live Nation: the magic city", category: "Murals" },
    { id: 2, img: fifththlast, text: "Girls with the pearl earning", category: "Murals" },
    { id: 3, img: building, text: "Axel row", category: "Murals" },
    { id: 4, img: thirdlast, text: "Gulniary dropout", category: "Signs" },
    { id: 5, img: secondlast, text: "South Eastern", category: "Signs" },
    { id: 6, img: last, text: "Mountain top", category: "Ghost Signs" },
  ];

  // ✅ Filter Logic
  const filteredCards =
    active === "All work"
      ? allCards
      : allCards
          .filter((card) => card.category === active)
          .slice(0, 3); // 3 cards each category
  return (
    <div className=' w-full pt-37  '>
        <div className='pb-120 px-15'>
        <WorkLanding/>

        </div>
        <div className="w-full grid grid-cols-[18%_80%] px-6 gap-6">
      {/* ✅ Left Filter Menu */}
      <div className="SuisseIntl text-[1vw] font-[600] uppercase flex flex-col  p-3 text-white rounded-2xl">
        {filters.map((elem, index) => (
          <h3
            key={index}
            onClick={() => setActive(elem.text)}
            className={`px-3 py-2 rounded-lg w-fit cursor-pointer transition-all duration-300 ${
              active === elem.text
                ? "bg-black text-white scale-105"
                : "bg-none text-black hover:bg-gray-200"
            }`}
          >
            {elem.text}
          </h3>
        ))}
      </div>

      {/* ✅ Right Cards Section */}
      <div className="px-3 w-full grid gap-4 grid-cols-2">
        {filteredCards.map((elem, index) => (
          <div key={index} className="h-full w-full">
            {/* Image Section */}
            <div className="pb-3 bg-black w-full overflow-hidden group rounded-xl">
              <img
                src={elem.img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="flex items-center justify-between w-full">
              <h2 className="ObviouslyDemo uppercase text-2xl">
                {elem.text}
              </h2>
              <div className="py-1 px-3 border-2 border-black flex items-center justify-center gap-3 border-b-4">
                <h4 className="ObviouslyDemo text-[1rem]">2025</h4>
                <h4 className="ObviouslyDemo text-[1rem]">{elem.category}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

<div className='mt-21 px-9'>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Work
