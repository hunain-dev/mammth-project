import React from 'react'
import Biggertext from '../../../Components/Biggertext'
import Bacgkrondanimate from '../../../Components/Bacgkrondanimate.jsx'
import Cards from '../../../Components/Cards.jsx'

const Ourwork = () => {
  return (
    <>
    <div>

      <div className="h-full w-full relative">
      <div className="w-full relative">
        <Biggertext text="Our work"  classname="lg:text-[36vw] text-[33vw] lg:leading-99" />
        <div className='absolute top-14 left-0 flex justify-center items-center w-full h-full'>
          <Bacgkrondanimate  text={<>
            
            Don’t let blank walls waste potential. <br />
See how our clients turn empty space into <br /> buzz, foot traffic, and business results.
            </>} />
        </div>
      
      </div>
    </div>
    <div className='lg:mt-30 mt-5 '>
    <Cards/>

    </div>
    </div>

    </>
  
  )
}

export default Ourwork
