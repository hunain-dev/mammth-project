import React from 'react'
import ServicesLanding from '../ServicesLanding'
import Loader from '../../../Components/Loader'
import Bigmurals from './Bigmurals'
import Ourprocess from './Ourprocess'
import Faqs from '../../../Components/Faqs'
import Unforgettable from '../../../Components/Unforgettable'

const Services = () => {
  return (
    <div className='lg:pt-30 pt-30   w-full'>
      <Loader/>
  <div className='lg:px-9 px-2'  >
  <ServicesLanding/>

  </div>
       <Bigmurals/>
       <Ourprocess/>
       <div className='lg:mt-12 mt-10 lg:px-9 md:px-0'>
      <Faqs />
      </div>
      <div className='lg:mt-21 mt-8 lg:px-9 md:px-5 '>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Services
