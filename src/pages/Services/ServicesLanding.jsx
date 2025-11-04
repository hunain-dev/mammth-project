import React, { useRef } from 'react'
import Biggertext from '../../Components/Biggertext'
import { useEffect } from 'react';
import gsap from 'gsap';

const ServicesLanding = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Default GSAP setup for 3D effect
    gsap.set(cardsRef.current, {
      transformStyle: "preserve-3d",
      perspective: 500,
    });

    cardsRef.current.forEach((card) => {
      // Hover In → card moves forward (z-axis)
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.1,
          z: 30, // 👈 card moves forward
          scale: 0.9,
          rotateY: 4,
          rotateX: -1,
          ease: "power2.out",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
        });
      });

      // Hover Out → card moves back (original position)
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.3,
          z: 100, // 👈 card moves back
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          ease: "power3.out",
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        });
      });
    });
  }, []);

  return (
    <div className=' w-full grid grid-cols-1'>
        <div className='h-full w-fit'>
        <Biggertext text={<>Work that's crafted to <br /> never go extinct and <br />deliver results.

            </>} classname="text-[10.5vw] leading-31"/> 

        </div>
        <div className='h-full mt-20 grid grid-cols-[1fr_1.2fr_1fr]  '>
  <div className='h-full '>
    <h3 className='SuisseIntl font-[600] px-9 italic'>
      “Mammoth Murals is one of my favorite commercial artists to work
      with. Andrew and Shane are the perfect dream team. They are able to
      help further visualize rough concept ideas and take it to another
      level that exceeds my expectations.”
    </h3>
  </div>

  <div className='h-full '>
    <div className=' w-full bg-black relative'>
      <img ref={cardsRef.current}
        src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889e96d1443e0fe12d71eff_CleanShot%202024-11-09%20at%2015.00.44-11.avif"
        className='h-173 w-full object-cover'
        alt=""
      />
 <div className='absolute -top-4 -right flex items-end justify-center flex-col -right-30  min-w-[70%]'>
     <div className='h-[25vh]  -rotate-12'>
        <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889e9c52c0d897b9c42c1c4_CleanShot%202024-11-09%20at%2015.00.44-12.avif" className='h-full  object-cover rounded-1xl' alt="" />
     </div>
     <div className='h-[25vh]  rotate-12'>
        <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/6889e9d762f84d507b9fe888_ShaneBinAction%201.avif" className='h-full w-full object-cover rounded-1xl' alt="" />
     </div> </div>
    </div>
  </div>

  <div className='h-full  flex items-end justify-end px-3 py-21'>
    <div className=' w-full '>
    <Biggertext text={<>Every mural and sign is crafted to reflect <br /> your vision with precision and care.

</>} classname="text-[2.1vw] leading-7 "/> 

 <h3 className='SuisseIntl mt-8 font-[600] leading-5 text-[1vw]'>Modern methods and traditional techniques ensure your artwork stays vibrant and durable for years to come. Expect details that do more than look good; they help your brand stand out, tell a story, and hold up in the real world. When you invest in our craft, your ideas come to life and make a lasting impact.

</h3>
    </div>

  </div>
</div>

      
    </div>
  )
}

export default ServicesLanding
