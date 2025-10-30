import React from 'react'
import AboutLanding from '../AboutLanding'
import Startedourstory from './Startedourstory'
import Ourpartners from '../../../Components/Ourpartners'
import Ourteam from './Ourteam'
import Unforgettable from '../../../Components/Unforgettable'

const Aboutus = () => {
  return (
    <div className='pt-1 px-2 w-full '>
      <AboutLanding/>
      <Startedourstory/>
      <div className='mt-8 px-25 '>
<Ourpartners/>

</div>
<div className='mt-8 pb-10 py-15 px-8'>
<Ourteam/>
</div>
<div className=' px-9'>
      <Unforgettable />
      </div>
    </div>
  )
}

export default Aboutus
