import React, { useState } from 'react'
import WorkLanding from '../WorkLanding'
import card1 from "../../../assets/images/Magiccity.png";
import last from "../../../assets/images/last.png";
import fifththlast from "../../../assets/images/5thlast.png";
import secondlast from "../../../assets/images/2ndlast.png";
import thirdlast from "../../../assets/images/3rdlast.png";
import building from "../../../assets/images/building.png";
import Unforgettable from '../../../Components/Unforgettable';
import Loader from '../../../Components/Loader';
import livenation from "../../../assets/images/Magiccity.png"
import card5h from "../../../assets/images/5thlast.png";
import gulniary from "../../../assets/images/3rdlast.png"
import buildings from "../../../assets/images/building.png"
import moutnains from "../../../assets/images/last.png"
import southeastern from "../../../assets/images/2ndlast.png"
import { Link } from 'react-router-dom';


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
    { id: 1, img: card1, text: "Live Nation: the magic city", category: "Murals",

      
      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: [<>
          Girl with the <br /> pearl earning</>],
          img: card5h,

        },
      ],



     },
    { id: 2, img: fifththlast, text: "Girls with the pearl earning", category: "Murals",


      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Live nation",
          img: livenation,

        },
      ],

     },
    { id: 3, img: building, text: "Axel row", category: "Murals",

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Gulniary dropout",
          img: gulniary,

        },
      ],


     },
    { id: 4, img: thirdlast, text: "Gulniary dropout", category: "Signs",

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Axel row",
          img: buildings,

        },
      ],


     },
    { id: 5, img: secondlast, text: "South Eastern", category: "Signs",

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Mountain top",
          img: moutnains,

        },
      ],


     },
    { id: 6, img: last, text: "Mountain top", category: "Ghost Signs",

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "South eastern",
          img: southeastern,

        },
      ],

     },
  ];

  // ✅ Filter  Logic
  const filteredCards =
    active === "All work"
      ? allCards
      : allCards

      
          .filter((card) => card.category === active)
          .slice(0, 3); // 3 cards each category
  return (
    <div className=' w-full   '>
      <Loader/>
        <div className='lg:pb-10 lg:px-15 md:pb-45'>
        <WorkLanding/>

        </div>
        <div className=" w-full grid lg:grid-cols-[14%_84%] md:grid-cols-[14%_84%] lg:px-6 px-5 gap-6">
        <div className="w-full flex flex-row  lg:flex-col">
  <div className="sticky top-20">
    <div className="SuisseIntl lg:text-[1vw] text-[2.8vw] md:text-[1.5vw] font-[600] uppercase flex flex-row md:flex-col lg:flex-col lg:gap-1 gap-2 md:gap-0 md:leading-3car leading-4 text-white rounded-2xl">
      {filters.map((elem, index) => (
        <h3
          key={index}
          onClick={() => setActive(elem.text)}
          className={`px-3  py-2 rounded-lg w-fit cursor-pointer transition-all duration-300 ${
            active === elem.text
              ? "bg-black text-white scale-105"
              : "bg-none text-black hover:bg-gray-200"
          }`}
        >
          {elem.text}
        </h3>
      ))}
    </div>
  </div>
</div>


      {/* ✅ Right Cards Section */}
    
<div className="lg:px-3 w-full grid gap-4 lg:grid-cols-2 md:grid-cols-2 ">
  {filteredCards.map((elem, index) => (
    <Link 
      key={index}
      to={`/DetailsCom/${elem.id}`}
      state={{ card: elem }} 
      
      >
      <div className="h-full w-full">
        {/* Image Section */}
        <div className="pb-3 bg-black w-full overflow-hidden group">
              <img
                src={elem.img}
                alt={elem.text}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-80 hover:bg-red-400"
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
    </Link>
  ))}
</div>
    </div>

<div className='lg:mt-21 mt-10  lg:px-9'>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Work
