import React from 'react'
import Biggertext from './Biggertext'
import Button from './button'
import Kindman from "../assets/images/Kindman.jpg"

const Unforgettable = () => {
    const images = [
        "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557112b0b4ad079ab3_CleanShot%202024-11-09%20at%2015.00.44-3.avif",
        "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68aa749e9107055055ad0396_cocacolaamphitheater-34.avif",
        "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c2655200bb7ad08f7060f_CleanShot%202024-11-09%20at%2015.00.44.avif",
        "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c26557ae981f7e2564ffa_CleanShot%202024-11-09%20at%2015.00.44-4.avif",
        "https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689c265532bfdc3016bc5c8f_CleanShot%202024-11-09%20at%2015.00.44-2.avif",
      ];
    
  return (
    <div className=' w-full bg-[#120011] overflow-hidden'>
        <div className='pt-23 px-20 w-full '>
            <div className='h-full w-full flex items-center justify-center relative '>
            <Biggertext text={<>
                Let paint  something <br />Unforgettable</>} classname="text-[11.5vw] text-[#FFF6E5] leading-44"/> 

                <div className="h-full w-full absolute top-0 left-0 flex justify-between px-10">
        {/* LEFT sprite box */}
        <div className="h-[48vh] w-[10%] relative overflow-hidden">
          <div className="hero_contact_top-left u-sprite u-sprite-blink is-home"></div>
        </div>

        {/* RIGHT sprite box */}
      
      </div>
            </div>

            <div className=' mt-16 w-full  flex items-center gap-9 justify-start flex-col'>
                <h3 className='SuisseIntl text-white font-[600] text-[1.3vw] leading-7'>Let’s talk strategy, locations, and how a mural <br /> can give your brand a powerful local presence.

</h3>
<Button imgsrc={Kindman} btntext="Book a discovery call"  classname="px-4 py-3 bg-white text-black" />


            </div>

            <div className=' w-full mt-34'>
            <div className="flex flex-col items-center justify-center">
      <div
        className="flex gap-9 perspective"
        style={{ perspective: "1000px" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative w-84 h-79 py-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `rotate(${index % 2 === 0 ? "-4" : "4"}deg)`,
            }}
          >
            <img
              src={img}
              alt=""
              className=" h-full w-100 object-cover rounded-lg shadow-lg group-hover:animate-[elasticBounce_0.8s_ease-out]"
              style={{
                transformOrigin: "center center",
              }}
            />
          </div>
        ))}
      </div>
    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Unforgettable
