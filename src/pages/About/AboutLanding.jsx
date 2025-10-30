import React from 'react'
import Biggertext from '../../Components/Biggertext'

const AboutLanding = () => {
  return (
    <div className="w-full pt-3 relative flex flex-col items-center justify-center">
      {/* Big heading */}
      <Biggertext 
        text="Never go extinct" 
        classname="text-[21vw] " 
      />

      {/* Stop-motion sprite animation */}
      <div className="w-full absolute left-0 flex top-60 items-center justify-center ">
        <div className="hero_about_stop-motionss"></div>
      </div>

      <div className=' mt-19 py-6 w-full grid grid-cols-3 px-21'>
    <div className='h-full  flex items-center justify-center'>
        <h2 className='ObviouslyDemo uppercase font-[600] text-7xl'>est. 1997</h2>
    </div>
    <div className='h-full  grid grid-cols-1'>
        <div className=' w-full '>
            <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889a13ae911e0ae33e0600a_IMG_2674%201.avif" className='h-full w-full object-cover' alt="" />
        </div>
        <h3 className=' font-[600] text-1xl mt-2 text-center '>Mammoth Murals helps brands, developers, and communities turn walls into landmarks that make places feel intentional and impossible to ignore.</h3>
        <br />
        <h3 className=' font-[600] text-1xl mt-2 text-center '>Every mural, sign, and ghost sign is built with real craft and business oriented thinking so your project doesn’t just look good it creates a story people talk about for years.

</h3>

    </div>
    <div className='h-full  flex items-center justify-center'>
    <h2 className='ObviouslyDemo uppercase font-[600] text-7xl'>Birmingham, AL    </h2>

    </div>
      </div>
    </div>
  )
}

export default AboutLanding
