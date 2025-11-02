import React from 'react'
import Biggertext from '../../../Components/Biggertext'
import Textanimation from '../../../Components/textaniamtion'
import Button from '../../../Components/button'
import Kindman from "../../../assets/images/Kindman.jpg";


const ContactLanding = () => {
  return (
    <div className=" pt-23 w-full grid grid-cols-1">
    <div className="h-full w-full  ">
<Biggertext text="Get in touch" classname="text-[28vw] text-[#FFF6E5] text-center leading-64  "/> 
        
    </div>
    <div className=' m-auto  w-fit mt-25 bg-red-500'>
        <div className='relative'>
        <Button
          imgsrc={Kindman}
          link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
          btntext="Book A Call with us"
          classname="px-9 py-5 text-3xl bg-[#FFF6E5] text-black font-[600]"
        />    

<div className=' absolute -top-3 -left-8 bg-red-400'>
<div className="hero_contact_top-left u-sprite u-sprite-blink is-home"></div>

</div>

        </div>
    

    </div>
    <div className="h-full w-full  ">
    <div className=" w-full   grid grid-cols-3 mt-7 pb-8">
          <div className="h-full flex items-start justify-start flex-col">
            <Textanimation
              text="andrew@mammothmurals.com"
              classname="text-[#FFF6E5]  leading-9 text-[2vw]"
            />
            <Textanimation
              text="2816 Crestwood Blvd"
              classname="text-[#FFF6E5] text-[2vw] leading-9"
            />
        
          </div>
          <div className="h-full flex items-start flex-col justify-start">
             <Textanimation
              text="2816 Crestwood Blvd
"
              classname="text-[#FFF6E5] leading-9 text-[2vw]"
            />
              <Textanimation
              text="Irondale, AL 35210, United States"
              classname="text-[#FFF6E5] leading-9 text-[2vw]"
            />
          </div>

          <div className="h-full flex items-end justify-end flex-col">
            <Textanimation
              text="Website by huy"
              classname="text-[#FFF6E5] leading-9 text-[2vw]"
            />
            <Textanimation
              text="©2025 — All rights reserved"
              classname="text-[#FFF6E5] leading-9 text-[2vw]"
            />
          </div>
        </div>
    </div>
  </div>
  
  )
}

export default ContactLanding
