import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailsCom = () => {
    const { id } = useParams(); // URL se id milegi
    const location = useLocation(); // state se data milega
    const data = location.state; // yahan se image/text access kar

  return (
    <div className='h-[100vh] pt-21 w-full '>
        <div className='h-[86.8vh] grid grid-cols-3 px-10 gap-10 w-full bg-red-600'>
            <div className='hfull bg-red-950'></div>
            <div className='hfull bg-red-950'></div>
            <div className='hfull bg-red-950'></div>
        </div>
         
    </div>
  )
}

export default DetailsCom
