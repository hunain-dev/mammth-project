import React from 'react'
import Biggertext from '../../Components/Biggertext'
import Bacgkrondanimate from '../../Components/Bacgkrondanimate'

const WorkLanding = () => {
  return (
    <div className=' w-full relative'>
      {/* Big text */}
      <Biggertext text="Work" classname="lg:text-[61vw] text-[62vw] md:text-[63vw] lg:px-0 px-2  lg:leading-165 leading-79 lg:pb-35 lg:mt-0 md:mt-16 text-center " />

      {/* Red box centered */}
      <div  data-scroll data-scroll-speed="0.3" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Bacgkrondanimate text={<>
            
            Don’t let blank walls waste potential. <br />
See how our clients turn empty space into <br /> buzz, foot traffic, and business results.
            </>} />      </div>
    </div>
  )
}

export default WorkLanding
