import React from 'react'
import flower from "../../../assets/images/Flower.png"

import buildingiiner from "../../../assets/images/buildingiiner.jpg"
import seconglast from "../../../assets/images/2ndlast.png"
import Biggertext from '../../../Components/Biggertext'
const Bigmurals = () => {
    const obj = [
        {
          number:"01.",
          text:"Murals",
          paragh:"Big, bold, and built for attention. Whether it's a campaign wall, building facade, or an interior statement piece, our murals create a sense of place and keep your brand top-of-mind long after the paint dries. We handle everything from design to production so your project runs smooth, looks striking, and drives real buzz.",
          img:flower
        },
        {
          number:"02.",
          text:"Signs",
          img:buildingiiner,
          paragh:"Big, bold, and built for attention. Whether it's a campaign wall, building facade, or an interior statement piece, our murals create a sense of place and keep your brand top-of-mind long after the paint dries. We handle everything from design to production so your project runs smooth, looks striking, and drives real buzz.",

        },
        {
          number:"02.",
          text:"Ghost Signs",
          img:seconglast,
          paragh:"Big, bold, and built for attention. Whether it's a campaign wall, building facade, or an interior statement piece, our murals create a sense of place and keep your brand top-of-mind long after the paint dries. We handle everything from design to production so your project runs smooth, looks striking, and drives real buzz.",

        }
      ]
  return (
    <div className=' w-full bg-[#FFD900] mt-23 '>
    <div className='py-13 w-full  grid grid-cols-[22%_76%]'>
<div className='h-full  px-10 flex items-start gap-4 justify-start flex-col'>
  <h3 className='SuisseIntl font-[500]  text-1xl'>Services and capablities</h3>
</div>
<div className='h-full flex items-start px-16 justify-center flex-col'>
  <h3 className='SuisseIntl font-[600] text-[3.2vw] leading-11'>Big murals, custom signs <br /> and ghost signs that spark <br /> buzz and define your space.</h3>
</div>
</div>
<div className="w-full flex flex-col gap-10 px-11"> {/* parent with spacing */}
{obj.map((elem, index) => (
  <div
    key={index}
    className="h-full w-full grid grid-cols-[24%_65%] px-2 border-t-4 border-black"
  >
    <div className="h-full flex items-start justify-start">
      <h2 className="ObviouslyDemo text-[2.3vw] leading-14 font-[500]">
        {elem.number}
      </h2>
    </div>

    <div className=' grid grid-cols-2 mt-2 p-4 pb-10 w-full'>
      
      <div className='h-full '>
        <img src={elem.img} className='h-full  w-full object-cover' alt="" />
      </div>
      <div className='h-full p-3 flex items-start justify-start flex-col'>
      <Biggertext text={elem.text} classname="text-[4.3vw] text-[#120011] font-[500] leading-20 "/>
      <p className='SuisseIntl font-bold'>{elem.paragh}</p> 
      </div>

    </div>

  

  </div>
))}
</div>


    
  </div>  )
}

export default Bigmurals
