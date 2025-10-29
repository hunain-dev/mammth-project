import React from 'react'
import Kindman from "../assets/images/Kindman.jpg"
import Button from "../Components/button"
const Faqs = () => {
  return (
    <div className="h-[95vh] w-full grid grid-cols-[40%_60%]">
    <div className=" h-full flex items-start justify-start flex-col gap-7">
    <div className='  bg-red-50'>
        <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68882b1debda0c78c7070634_CleanShot%202024-11-09%20at%2015.00.44-3.avif" className='h-[58vh] w-full object-cover' alt="" />
    </div>
    <h3 className='SuisseIntl font-[600]  text-[1.4vw] leading-snug'>
  Still got unanswered <br /> questions? Or still wondering <br /> if a mural is right for you?
</h3>   
<Button imgsrc={Kindman} btntext="Chat with us"  classname="px-4 py-2 bg-black text-white" />


 </div>
    <div className=" h-full">
        <h2 className='ObviouslyDemo uppercase text-[12vw] leading-45 font-[600] text-[#120011]'>Frequently <br /> Asked Questions</h2>
    </div>
  </div>
  )
}

export default Faqs
