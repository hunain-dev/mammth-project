import React from 'react'
import HomeLandingpage from '../HomeLandingpage'
import Ourwork from './Ourwork'
import Allwork from './Allwork'

const Home = () => {
  return (
    <div className='  w-full'>
      <div className='pt-30 px-8  bg-[#FFD900]'>
      <HomeLandingpage />

      </div>
      <div className='px-2'>
      <Ourwork />
      </div>
      <div className='px-2 mt-26'>
      <Allwork />
      </div>
    </div>
  )
}

export default Home
