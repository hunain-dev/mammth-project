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
      <div className=';g:py-13 py-10 w-full  grid lg:grid-cols-[24%_76%] md:grid-cols-[24%_76%] grid-cols-1'>
  <div className='h-full  lg:px-10 px-3 flex items-start gap-4 justify-center flex-col'>
    <h3 className='ObviouslyDemo uppercase lg:text-5xl text-4xl font-[550] text-[#120011]'>25 Years.</h3>
    <h3 className='SuisseIntl font-[600] leading-5 text-1xl'>Of turning clients’ <br />  walls  into landmarks</h3>
  </div>
  <div className='h-full flex items-start lg:mt-0 mt-4 lg:px-16 px-3 justify-center flex-col'>
    <h3 className='SuisseIntl font-[600] lg:text-[3.3vw] md:text-4xl md:leading-9 text-[5vw] leading-6 lg:leading-12'>Here’s how we help you transform <br /> empty walls into local landmarks <br /> and lasting brand impressions.</h3>
  </div>
</div>
<div className="w-full lg:flex lg:flex-col gap-10 lg:px-11  px-3"> {/* parent with spacing */}
  {obj.map((elem, index) => (
    <div
      key={index}
      className="w-full grid lg:grid-cols-3   md:grid-cols-3  grid-cols-1 px-2 lg:py-0 py-5 md:py-0  border-t-5  border-black"
    >
      <div className="lg:h-full">
        <h2 className="ObviouslyDemo lg:text-[11vw] md:text-8xl text-5xl lg:leading-40 font-[600]">
          {elem.number}
        </h2>
      </div>

      <div className="h-full">
        <h2 className="ObviouslyDemo lg:mt-0 mt-3 lg:text-[9.3vw] md:text-7xl text-5xl text-[#120011] lg:leading-40 font-[600] uppercase lg:text-center md:text-center">
          {elem.text}
        </h2>
      </div>

      <div className="h-full w-full lg:mt-0 mt-3 flex items-center justify-end">
        <img src={elem.img} className="lg:h-40 md:h-25  object-cover" alt="" />
      </div>
    </div>
  ))}
</div>

<div className=' w-full lg:mt-13 flex items-center justify-center  px-2 py-10 border-t-5  border-black '>
  <h2 className='ObviouslyDemo  text-[#120011] lg:text-8xl text-4xl md:text-7xl uppercase font-[600] border-b-5 lg:border-b-8 border-black lg:py-4 py-2'>Learn About our Services</h2>
</div>


      
    </div>
  )
}

export default Ourexpereince
