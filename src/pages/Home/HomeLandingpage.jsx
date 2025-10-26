import React from 'react'
import Video from '../../Components/Video'
import Button from '../../Components/Button.JSX'
import Kindman from "../../assets/images/Kindman.jpg"
import wallframe from "../../assets/images/wallframe.jpg"
import Ourpartners from '../../Components/Ourpartners'
const HomeLandingpage = () => {
  return (
    <>
    <div className='min-h-screen  w-full   '>
    <div className='grid grid-cols-[70%_31%] w-full '>
       <div className="h-full  flex items-start justify-start">
  <div className="ObviouslyDemo text-[#120011] flex flex-col  text-[10.9vw] uppercase leading-[0.9] font-[600]">
    <span>Murals that make</span>
    <span>Your business</span>
    <span>impossible to ignore <span>.</span> </span>
  </div>
</div>
        <div className='h-full  w-full  flex items-start  justify-end flex-col mt-30 gap-3 p-7'>
            <Video/>
            <h2 className='SuisseIntl'>Show reel (2023__2025) </h2>
        </div>al
      
      
    </div>
    <div className='mt-30'>
        <h3 className='SuisseIntl text-[1.6vw] font-[600]'>We paint bold, handle-crafted walls for real
         <br />
         estate developer designer-driven
         <br />
         brands that stop traffic,spark conversation
         <br />
         and turn every space into  a landmark

        </h3>
        <div className='flex items-center justify-start gap-3 mt-6'>
        <Button  imgsrc={Kindman} btntext="Book a discovery call"  classname="px-4 py-2 bg-black text-white" />
        <Button btntext="See our work" classname="px-3 py-3" />

        </div>
    </div>

    <div className=' w-full  mt-15'>
        <img src={wallframe} alt="" className='h-180 w-full object-cover' />
    </div>
<div className='mt-3 py-15'>
<Ourpartners/>

</div>
    </div>
    </>

  )
}

export default HomeLandingpage
