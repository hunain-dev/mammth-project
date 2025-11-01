import React from 'react'
import Biggertext from '../../../Components/Biggertext'

const Testimonials = () => {
  const obj = [
    {
      image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68884c2cdad1480c1dfc8fff_CleanShot%202024-11-09%20at%2015.00.44-1.avif",
      paragh:"Andrew and Shane turn rough ideas into extraordinary murals. They consistently exceed expectations.",
      smaolltetx:"Olivia (Harris) Jenks",
      biggertexts:"Project Supervisor at North Italia",
    },
    {
      // bgcolor:"red",
      image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68884c18a4e367943f8fe039_CleanShot%202024-11-09%20at%2015.00.44.avif",
      paragh:"Mammoth Murals transformed our vision into a bold storefront that stops people in their tracks. The process was seamless and the execution was flawless.",
      smaolltetx:"Birmingham Tattoo Company",
      biggertexts:"Client at Birmingham Tattoo Company",

      // innercolor:"blue"
    },
    {
      image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68884c060f5c534d91b37245_AxelRow1%202.avif",
      paragh:"Andrew and the team brought Avondale’s story to life with precision and energy. Every detail was perfect and the project was completed on time.",
      smaolltetx:"Thornton Ratliff",
      biggertexts:"Founder at SRV Housing Partners",

    }
  ]
  return (
 <>
 <div className=' w-full'>
 <div className=' w-full flex items-center justify-start flex-col'>
  <h3 className='uppercase  font-[500] SuisseIntl text-1xl'>hear from our clients</h3>

  <div className='w-full relative'> {/* ← relative yahan zaroori hai */}
    <div className='relative '>
    <Biggertext text="Testimonials" classname="text-[27.4vw] leading-65"/> 
       </div>

    {/* black overlay */}
    <div className=' w-full absolute top-0 left-0  flex flex-col justify-between'>
  {/* top-left sprite */}
  <div className="relative self-start -mt-13">
    <div className="u-spritetets u-sprite-quote"></div>
  </div>

  {/* bottom-right sprite */}
  <div className="relative self-end mt-34">
    <div className="u-spritetets u-sprite-quote"></div>
  </div>
</div>

<div className=' w-full text-center mt-25'>
 <h2 className='SuisseIntl text-[1.3vw] leading-7git inti font-[600]'>From national campaigns to neighborhood landmarks, hear <br /> how our clients use hand-painted murals to boost visibility, <br /> build trust, and make a bold first impression that lasts.</h2> 
</div>




  </div>
  
</div>

<div className='  w-full  mt-20 px-2 grid gap-16 grid-cols-3'>
  {
    obj.map((elem,index)=>{
      return(
<div key={index} className=' ' style={{backgroundColor:elem.bgcolor}}>
    <div className='w-full  border-3 border-black border-dotted p-3  ' style={{backgroundColor:elem.innercolor}}>
      <img src={elem.image} className='h-140 w-full object-cover' alt="" />
    </div>
    <h5 className='SuisseIntl text-[1.2vw] mt-3 font-[550]'>{elem.paragh}</h5>
    <h2 className='mt-4 ObviouslyDemo text-[1.5vw] leading-8 uppercase font-[550]'>{elem.smaolltetx} <br /> <span>{elem.biggertexts}</span></h2>
  </div>
      )
    })
  }
  

</div>

 </div>
 
 
 </>
  )
}

export default Testimonials
