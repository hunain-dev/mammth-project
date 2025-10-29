import React from 'react'
import Textaniamtion from './textaniamtion'
import Button from './Button.JSX'
import Kindman from "../assets/images/Kindman.jpg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' px-8 py-6 z-[999] fixed  flex items-center justify-between  w-full '>
 <div className='p-1 bg-black rounded-1xl'>
  <div className='-mt-2'>
  <Textaniamtion text="MAMMOTH MURALS" classname="text-white text-[2.2vw]"/>

  </div>
</div>


     
        <div className='h-full  flex items-center justify-end gap-3'>
      <Link to="/Work"><Button btntext="Work" classname="px-3 py-3 bg-[#FFD900]"  /></Link>  
        <Button btntext="About" classname="px-3 py-3  bg-[#FFD900]" />
        <Button btntext="Services" classname="px-3 py-3  bg-[#FFD900]" />
      </div>

        <div className='h-full  flex items-center justify-end'>
        <Button imgsrc={Kindman} btntext="Chat with us"  classname="px-4 py-2 bg-black text-white" />

        </div>
    </div>
  )
}

export default Header
