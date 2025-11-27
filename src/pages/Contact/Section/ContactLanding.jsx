import React from 'react'
import Biggertext from '../../../Components/Biggertext'
import Textanimation from '../../../Components/textaniamtion'
import Button from '../../../Components/ReuseButton'
import Kindman from "../../../assets/images/Kindman.jpg";


const ContactLanding = () => {
  return (
    <div className=" lg:pt-23 md:pt-10 w-full grid grid-cols-1">
    <div className="h-full w-full  ">
<Biggertext text="Get in touch" classname="lg:text-[28vw] md:text-[28vw] text-8xl text-[#FFF6E5] text-center leading-64 2xl:mb-25 "/> 
        
    </div>
    <div className=' m-auto  w-fit lg:mt-25  md:mt-20 md:pb-72 lg:pb-0 pb-20 '>
        <div className='relative'>
        <Button
          imgsrc={Kindman}
          link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
          btntext="Book A Call with us"
          classname="lg:px-9 lg:py-5 lg:text-3xl md:px-9 md:py-5 md:text-3xl  py-3 px-5 text-1xl  bg-[#FFF6E5] text-black font-[600]"
        />    

<div className=' lg:opacity-100  absolute -top-3 -left-8 bg-red-400'>
<div className="hero_contact_top-left u-sprite u-sprite-blink is-home"></div>

</div>

        </div>
    

    </div>
    <div className="h-full w-full  ">
    <div className=" w-full   grid lg:grid-cols-3 md:grid-cols-3 lg:mt-7 mt-10 lg:pb-8 pb-5">
          <div className="h-full flex items-start justify-start flex-col">
            <Textanimation
              text="andrew@mammothmurals.com"
              classname="text-[#FFF6E5]  lg:eading-9 lg:text-[2.3vw] md:text-[2vw] text-3xl"
            />
            <Textanimation
              text="2816 Crestwood Blvd"
              classname="text-[#FFF6E5]  lg:eading-9 lg:text-[2.3vw] md:text-[2vw] text-3xl"
            />
        
          </div>
          <div 
          className="h-full flex items-start flex-col justify-start">
             <Textanimation
              text="2816 Crestwood Blvd
"
classname="text-[#FFF6E5]  lg:eading-9 lg:text-[2vw]  md:text-[2.3vw] text-3xl"
/>
              <Textanimation
              text="Irondale, AL 35210, United States"
              classname="text-[#FFF6E5]  lg:eading-9 lg:text-[2vw] md:text-[2.3vw] text-3xl"
            />
          </div>

          <div className="h-full flex lg:items-end lg:justify-end flex-col">
            <Textanimation
              text="Website by huy"
              classname="text-[#FFF6E5]  lg:eading-9 lg:text-[2vw] md:text-[5vw] text-3xl"
            />
            <Textanimation
              text="©2025 — All rights reserved"
              classname="text-[#FFF6E5]  lg:eading-9 lg:text-[2vw] md:text-[3vw] text-3xl"
            />
          </div>
        </div>
    </div>
  </div>
  
  )
}

export default ContactLanding
