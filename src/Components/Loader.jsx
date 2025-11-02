import React from 'react'
import Biggertext from './Biggertext'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center w-full bg-[#120011] fixed z-[999999999]'>
<div className=' relative   flex items-center justify-center'>
        <Biggertext text="Mamooth Murals" classname="text-[5vw] text-center text-[#FFF6E5]"/> 
        <div className='absolute -top-17 flex rotate-20 items-center justify-center -right-20  '>
        <div className="footer_bottom_deco_wrap u-spriteloader u-sprite-loader"></div>

        </div>

        <div className='absolute -top-8 flex rotate-20 items-center justify-center -left-13  '>
        <div className="footer_bottom_deco_wrap u-spritesmile u-sprite-smile"></div>

        </div>
</div>
      
    </div>
  )
}

export default Loader
