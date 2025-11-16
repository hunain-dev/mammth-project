import React from 'react'
import HomeLandingpage from './HomeLandingpage'
import Ourwork from './Ourwork'
import Allwork from './Allwork'
import Ourexpereince from './Ourexpereince'
import Testimonials from './Testimonials'
import Reviews from './Reviews'
import Faqs from '../../../Components/Faqs'
import Unforgettable from '../../../Components/Unforgettable'
import Loader from '../../../Components/Loader'

const Home = () => {
  return (
    <div className='w-full'>
      <Loader/>

      <div className='lg:pt-31 pt-18 lg:px-8 px-2  bg-[#FFD900]'>
      <HomeLandingpage />
      </div>
      <div className='px-5'>
      <Ourwork />
      </div>
      <div className='px-2 lg:mt-10'>
      <Allwork />
      </div>
      <div className='lg:mt-12 '>
      <Ourexpereince />
      </div>

      <div className='lg:mt-12 md:mt-15 mt-4 px-5'>
      <Testimonials />
      </div>
      <div className='lg:mt-24 mt-13 lg:px-9 px-3'>
      <Reviews />
      </div>

      <div className='lg:mt-12 mt-10 lg:px-9 md:px-0'>
      <Faqs />
      </div>

      <div className='lg:mt-21 mt-8 lg:px-9 md:px-5 '>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Home
