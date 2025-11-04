import React from 'react'
import ServicesLanding from '../ServicesLanding'
import Loader from '../../../Components/Loader'

const Services = () => {
  return (
    <div className='pt-30 px-9  w-full'>
      <Loader/>

       <ServicesLanding/>
    </div>
  )
}

export default Services
