import React from 'react'
import ournation from "../assets/images/naiton.png"
import gulnary from "../assets/images/gulnary.png"
import backforty from "../assets/images/backforty.png"
import historic from "../assets/images/historic.png"

const Ourpartners = () => {
    const obj = [
        {
            img:ournation
        },
        {
            img:gulnary
        },
        {
            img:backforty

        },
        {
            img:historic

        }
    ]
  return (
    <div className=' w-full  grid grid-cols-1'>
        <div className='h-full w-full   text-center'>
            <h3 className='SuisseIntl font-[550] text-[1.4vw]'>Partners that trust our work</h3>
        </div>
        <div className='h-full w-full  grid grid-cols-4'>
            {
                obj.map((elem,index)=>{
                    return(
                        <div key={index} className='h-full mt-4 flex items-center justify-center w-full p-3 ' style={{backgroundColor:elem.backgroundcolor}}>
                           <img src={elem.img} className='h-23 object-contain' alt="" />
                
                        </div>
                    )
                })
            }
        
            
        </div>
      
    </div>
  )
}

export default Ourpartners
