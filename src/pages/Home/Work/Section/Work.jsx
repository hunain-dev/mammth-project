import React from 'react'
import WorkLanding from '../WorkLanding'
import Cards from '../../../../Components/Cards'
import Unforgettable from '../../../../Components/Unforgettable'

const Work = () => {
  return (
    <div className=' w-full pt-37  '>
        <div className='pb-120 px-15'>
        <WorkLanding/>

        </div>
        <div className=" w-full grid grid-cols-[18%_80%] px-4">
  <div className="">Left (30%)</div>
  <div className="h-full w-full ">
    <Cards/>
  </div>


</div>

<div className='mt-21 px-9'>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Work
