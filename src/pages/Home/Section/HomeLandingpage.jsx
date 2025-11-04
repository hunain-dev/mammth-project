import React, { useEffect, useRef } from 'react'
import Video from '../../../Components/Video'
import Kindman from "../../../assets/images/Kindman.jpg"
import wallframe from "../../../assets/images/wallframe.jpg"
import Ourpartners from '../../../Components/Ourpartners'
import Button from '../../../Components/ReuseButton'
import gsap from 'gsap'
const HomeLandingpage = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const parargh = useRef(null);



  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    const textLines = textRef.current.querySelectorAll("span");

    // pehle sab hidden position me set karte hain
    gsap.set(textLines, { y: 150, opacity: 0 });
    gsap.set(videoRef.current, { y: 100, opacity: 0 });

    // timeline start
    tl.to(textLines, {
      y: 0,
      opacity: 1,
      delay:1.3,
      duration: 1.2,
      stagger: 0.25, // har line ek ke baad ek
    });

    // video after text animation
    tl.to(videoRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
    }, "+=0.3"); // 0.4s delay baad

    tl.to(parargh.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
    }, "+=0.3"); // 0.4s delay baad
  }, []);



  return (
    <>
    <div className='  w-full   '>
    <div className='grid grid-cols-[70%_31%] w-full '>
       <div       ref={textRef}
 className="h-full  flex items-start justify-start ">
  <div  className="ObviouslyDemo text-[#120011] flex flex-col  text-[10.9vw] uppercase leading-[0.9] font-[600]">
    <span>Murals that make</span>
    <span>Your business</span>
    <span>impossible to ignore <span>.</span> </span>
  </div>
</div>
        <div                 ref={videoRef}

  className='h-full flex items-start  justify-end flex-col mt-30 gap-1 p-6'>
        <Video/>
            <h2 className='SuisseIntl font-[600] text-[1.2vw]'>Show reel (2023__2025) </h2>
        </div>
      
      
    </div>
    <div className='mt-32'   ref={parargh}>
        <h3 className='SuisseIntl text-[1.6vw] font-[600] leading-8'>We paint bold, handle-crafted walls for real
         <br />
         estate developer designer-driven
         <br />
         brands that stop traffic,spark conversation
         <br />
         and turn every space into  a landmark

        </h3>
        <div className='flex items-center justify-start gap-3 mt-6'>
        <Button  imgsrc={Kindman} link="https://calendly.com/mammothmurals/meeting-with-andrew-clone" btntext="Book a discovery call"  classname="px-4 py-3 bg-black text-white" />
        <Button btntext="See our work" link="/Work" classname="px-3 py-3" />

        </div>
    </div>

    <div className='w-full  mt-15'>
        <img src={wallframe} alt="" className='h-180 w-full object-cover' />
    </div>
<div className=' py-11'>
<Ourpartners/>

</div>
    </div>
    </>

  )
}

export default HomeLandingpage
