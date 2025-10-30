import React from 'react'
import Biggertext from '../../../Components/Biggertext'

const Ourteam = () => {
  return (
    <div className='max-w-[50%] h-full'>
      <Biggertext text="Our team" classname="text-[12vw] leading-[0.8]" /> 

      <div className='mt-20 grid grid-cols-2 gap-3 '>
        <div className='h-full w-full'>
            <div className=' w-full '>
                <img src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/6889a97a48b907ae8fe55ab3_1753282172963.avif" className='h-130 w-full object-cover' alt="" />
                <h3 className='ObviouslyDemo uppercase text-4xl mt-3'>Andrew Tynes</h3>
                <h4 className='SuisseIntl uppercase tetx-2xl mt-2 font-[590]'>Co-founder
                </h4>
            </div>
        </div>
        <div className=' w-full '>
                <img src="https://cdn.prod.website-files.com/6881fafa34e37145092525b4/6889a967396ccbda458cf298_Shane.avif" className='h-130 w-full object-cover' alt="" />
                <h3 className='ObviouslyDemo uppercase text-4xl mt-3'></h3>
                <h4 className='SuisseIntl uppercase tetx-2xl mt-2 font-[590]'>Co-founder
                </h4>
            </div>      </div>
    </div>
  )
}

export default Ourteam
