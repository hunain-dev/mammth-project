import React from 'react'
import Biggertext from '../../../Components/Biggertext'
import Bacgkrondanimate from '../../../Components/Bacgkrondanimate'

const WorkLanding = () => {
  return (
    <div className=' w-full relative'>
      {/* Big text */}
      <Biggertext text="Work" classname="text-[60vw] leading-95 pt-11" />

      {/* Red box centered */}
      <div className='absolute top-2/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Bacgkrondanimate text={<>
            
            Don’t let blank walls waste potential. <br />
See how our clients turn empty space into <br /> buzz, foot traffic, and business results.
            </>} />      </div>
    </div>
  )
}

export default WorkLanding
