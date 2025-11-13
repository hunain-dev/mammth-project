import React from 'react'
import Biggertext from '../../Components/Biggertext'

const AboutLanding = () => {
  return (
    <div className="w-full lg:pt-20 pt-17 relative flex flex-col items-center justify-center">
      {/* Big heading */}
      <Biggertext 
        text="Never go extinct" 
        classname="lg:text-[21vw] md:text-[21vw] text-7xl " 
      />

      {/* Stop-motion sprite animation */}
      <div className="w-full absolute left-0 lg:opacity-100 opacity-100  md:opacity-0 flex lg:top-35 top-19 items-center justify-center ">
        <div id='aboutmotion' className="hero_about_stop-motionss"></div>
      </div>

      <div className=' lg:mt-30 mt-5 md:mt-20 lg:py-6 py-6 w-full grid lg:grid-cols-3 md:grid-cols-3  lg:gap-0 gap-4 lg:px-21 px-6'>
    <div className='h-full  flex items-center justify-center'>
        <h2 className='ObviouslyDemo uppercase font-[600] lg:text-7xl md:text-5xl text-4xl'>est. 1997</h2>
    </div>
    <div className='h-full  grid grid-cols-1'>
        <div className=' w-full '>
          <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889a13ae911e0ae33e0600a_IMG_2674%201.avif" className='h-full md:h-45 w-full object-contain' alt="" />
        </div>
        <h3 className=' font-[600] lg:text-1xl mt-2 md:text-[1.5vw] text-center '>Mammoth Murals helps brands, developers, and communities turn walls into landmarks that make places feel intentional and impossible to ignore.</h3>
        <br />
        <h3 className=' font-[600] lg:text-1xl mt-2 md:mt-1 md:text-[1.5vw] text-center '>Every mural, sign, and ghost sign is built with real craft and business oriented thinking so your project doesn’t just look good it creates a story people talk about for years.

</h3>

    </div>
    <div className='h-full  flex items-center justify-center'>
    <h2 className='ObviouslyDemo uppercase font-[600] md:text-5xl  text-4xl lg:text-7xl'>Birmingham, AL    </h2>

    </div>
      </div>
    </div>
  )
}

export default AboutLanding
