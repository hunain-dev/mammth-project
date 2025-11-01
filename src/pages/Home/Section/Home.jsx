import React from 'react'
import HomeLandingpage from './HomeLandingpage'
import Ourwork from './Ourwork'
import Allwork from './Allwork'
import Ourexpereince from './Ourexpereince'
import Testimonials from './Testimonials'
import Reviews from './Reviews'
import Faqs from '../../../Components/Faqs'
import Unforgettable from '../../../Components/Unforgettable'

const Home = () => {
  return (
    <div className='w-full'>
      <div className='pt-33 px-8  bg-[#FFD900]'>
      <HomeLandingpage />

      </div>
      <div className='px-5'>
      <Ourwork />
      </div>
      <div className='px-2 mt-10'>
      <Allwork />
      </div>
      <div className='mt-12'>
      <Ourexpereince />
      </div>

      <div className='mt-12 px-5'>
      <Testimonials />
      </div>
      <div className='mt-24 px-9'>
      <Reviews />
      </div>

      <div className='mt-12 px-9'>
      <Faqs />
      </div>

      <div className='mt-21 px-9'>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Home
