
// export default Bacgkrondanimate;
import React from 'react'
 import swigger from "../assets/images/swigger.png";

const Bacgkrondanimate = ({text}) => {
  return (
    <div data-scroll data-scroll-speed="0.3" className='u-sprite flex items-center justify-center lg:opacity-100 opacity-0 '  style={{
                  "--sprite-url": `url(${swigger})`,
             "--sprite-width": "270vw",
"--sprite-height": "75vh",
                  "--frame-count": "4",
                  "--animation-duration": "0.5s",
                }}>
                    <h2 className='SuisseIntl font-[600] text-3xl md:text-2xl md:leading-7 xl:text-3xl xl:leading-8'>{text}

                    </h2>
                </div>
  )
}

export default Bacgkrondanimate
