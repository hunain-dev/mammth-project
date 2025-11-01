import React from 'react'
import flower from "../../../assets/images/Flower.png"
import buildingiiner from "../../../assets/images/buildingiiner.jpg"
import seconglast from "../../../assets/images/2ndlast.png"

const Ourexpereince = () => {
  const obj = [
    {
      number:"01.",
      text:"Murals",
      img:flower
    },
    {
      number:"02.",
      text:"Signs",
      img:buildingiiner
    },
    {
      number:"02.",
      text:"Ghost Signs",
      img:seconglast
    }
  ]
  return (
    <div className=' w-full bg-[#47A0FF] '>
      <div className='py-13 w-full  grid grid-cols-[24%_76%]'>
  <div className='h-full  px-10 flex items-start gap-4 justify-center flex-col'>
    <h3 className='ObviouslyDemo uppercase text-5xl font-[550] text-[#120011]'>25 Years.</h3>
    <h3 className='SuisseIntl font-[600] leading-5 text-1xl'>Of turning clients’ <br />  walls  into landmarks</h3>
  </div>
  <div className='h-full flex items-start px-16 justify-center flex-col'>
    <h3 className='SuisseIntl font-[600] text-[3.3vw] leading-12'>Here’s how we help you transform <br /> empty walls into local landmarks <br /> and lasting brand impressions.</h3>
  </div>
</div>
<div className="w-full flex flex-col gap-10 px-11"> {/* parent with spacing */}
  {obj.map((elem, index) => (
    <div
      key={index}
      className="w-full grid grid-cols-3 px-2  border-t-5  border-black"
    >
      <div className="h-full">
        <h2 className="ObviouslyDemo text-[11vw] leading-40 font-[600]">
          {elem.number}
        </h2>
      </div>

      <div className="h-full">
        <h2 className="ObviouslyDemo text-[9.3vw] text-[#120011] leading-40 font-[600] uppercase text-center">
          {elem.text}
        </h2>
      </div>

      <div className="h-full w-full flex items-center justify-end">
        <img src={elem.img} className="h-40 object-cover" alt="" />
      </div>
    </div>
  ))}
</div>

<div className=' w-full mt-13 flex items-center justify-center  px-2 py-10 border-t-5  border-black '>
  <h2 className='ObviouslyDemo  text-[#120011] text-8xl uppercase font-[600] border-b-8 border-black py-4'>Learn About our Services</h2>
</div>


      
    </div>
  )
}

export default Ourexpereince
