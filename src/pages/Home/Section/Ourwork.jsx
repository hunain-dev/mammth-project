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
        <Biggertext />
        <div className='absolute top-14 left-0 flex justify-center items-center w-full h-full'>
          <Bacgkrondanimate />
        </div>
        {/* <Cards/> */}
      </div>
    </div>
    <div className='mt-30 w-full bg-black'></div>
      <Cards/>
    </div>

    </>
  
  )
}

export default Ourwork
