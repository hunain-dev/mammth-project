import React from 'react'
import ServicesLanding from '../ServicesLanding'
import Loader from '../../../Components/Loader'
import Bigmurals from './Bigmurals'
import Ourprocess from './Ourprocess'

const Services = () => {
  return (
    <div className='lg:pt-30 pt-30   w-full'>
      <Loader/>
  <div className='lg:px-9 px-2'  >
  <ServicesLanding/>

  </div>
       <Bigmurals/>
       <Ourprocess/>
    </div>
  )
}

export default Services
