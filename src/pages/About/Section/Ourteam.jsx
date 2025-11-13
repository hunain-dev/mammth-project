import React from 'react'
import Biggertext from '../../../Components/Biggertext'

const Ourteam = () => {
  return (
    <div className='lg:max-w-[50%] md:max-w-[70%] h-full'>
      <Biggertext text="Our team" classname="lg:text-[12vw] md:text-[13vw] text-8xl lg:leading-[0.8]" /> 

      <div className='lg:mt-20 mt-10 grid grid-cols-2 gap-3 '>
        <div className='h-full w-full'>
            <div className=' w-full '>
                <img src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/6889a97a48b907ae8fe55ab3_1753282172963.avif" className='lg:h-130 md:h-80 w-full object-cover' alt="" />
                <h3 className='ObviouslyDemo uppercase lg:text-4xl text-3xl mt-3'>Andrew Tynes</h3>
                <h4 className='SuisseIntl uppercase lg:text-2xl lg:mt-2 font-[590]'>Co-founder
                </h4>
            </div>
        </div>
        <div className=' w-full '>
                <img src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/6889a967396ccbda458cf298_Shane.avif" className='lg:h-130 h-45  md:h-80 w-full object-cover' alt="" />
                <h3 className='ObviouslyDemo uppercase lg:text-4xl text-3xl mt-3'>Andrew Tynes</h3>
                <h4 className='SuisseIntl uppercase lg:text-2xl lg:mt-2 font-[590]'>Co-founder
                </h4>
            </div>      </div>
    </div>
  )
}

export default Ourteam
