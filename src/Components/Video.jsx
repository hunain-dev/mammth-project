import React from 'react'
import commingsoon from "../assets/video/comming soon.mp4"
const Video = () => {
  return (
    <div className=' w-full flex items-start jusitfy-start'>
      <video src={commingsoon} autoPlay loop muted className='lg:h-53 h-50  lg:w-full  object-cover'></video>
    </div>
  )
}

export default Video
