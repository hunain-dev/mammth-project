import React from 'react'
import ServicesLanding from '../ServicesLanding'
import Loader from '../../../Components/Loader'
import Bigmurals from './Bigmurals'
import Ourprocess from './Ourprocess'

const Services = () => {
  return (
    <div className='pt-30   w-full'>
      <Loader/>
  <div className='px-9'>
  <ServicesLanding/>

  </div>
       <Bigmurals/>
       <Ourprocess/>
    </div>
  )
}

export default Services
