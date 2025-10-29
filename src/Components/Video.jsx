import React from 'react'
import commingsoon from "../assets/video/comming soon.mp4"
const Video = () => {
  return (
    <div className=' w-full flex items-start jusitfy-start'>
      <video src={commingsoon} autoPlay loop muted className='h-53 w-full  object-cover'></video>
    </div>
  )
}

export default Video
