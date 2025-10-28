import React from 'react'
import Biggertext from '../../../Components/Biggertext'

const Testimonials = () => {
  return (
 <>
 <div className=' w-full'>
 <div className=' w-full flex items-center justify-start flex-col'>
  <h3 className='uppercase  font-[600] SuisseIntl text-1xl'>hear from our clients</h3>

  <div className='w-full relative'> {/* ← relative yahan zaroori hai */}
    <div className='relative '>
    <Biggertext text="Testimonials" classname="text-[27.4vw] leading-73"/> 
       </div>

    {/* black overlay */}
    <div className=' w-full absolute top-0 left-0 px-3 flex flex-col justify-between'>
  {/* top-left sprite */}
  <div className="relative self-start -mt-18">
    <div className="u-spritetets u-sprite-quote"></div>
  </div>

  {/* bottom-right sprite */}
  <div className="relative self-end mt-34">
    <div className="u-spritetets u-sprite-quote"></div>
  </div>
</div>

<div className='h-[20vh] w-full text-center mt-39'>
 <h2 className='SuisseIntl text-[1.3vw] leading-7git inti font-[600]'>From national campaigns to neighborhood landmarks, hear <br /> how our clients use hand-painted murals to boost visibility, <br /> build trust, and make a bold first impression that lasts.</h2> 
</div>
  </div>

  
</div>

 </div>
 
 
 </>
  )
}

export default Testimonials
