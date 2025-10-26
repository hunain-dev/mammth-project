
// export default Bacgkrondanimate;
import React from 'react'
 import swigger from "../assets/images/swigger.png";

const Bacgkrondanimate = () => {
  return (
    <div className='u-sprite flex items-center justify-center '  style={{
                  "--sprite-url": `url(${swigger})`,
             "--sprite-width": "270vw",
"--sprite-height": "75vh",
                  "--frame-count": "4",
                  "--animation-duration": "0.5s",
                }}>
                    <h2 className='SuisseIntl font-[600] text-3xl'>Don’t let blank walls waste potential. <br />
                    See how our clients turn empty space into <br /> buzz, foot traffic, and business results.

                    </h2>
                </div>
  )
}

export default Bacgkrondanimate
