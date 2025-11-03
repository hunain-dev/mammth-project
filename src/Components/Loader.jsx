// // import React from 'react'
// // import Biggertext from './Biggertext'

// // const Loader = () => {
// //   return (
// //     <div className='h-screen flex items-center justify-center w-full bg-[#120011] fixed z-[999999999]'>
// // <div className=' relative   flex items-center justify-center'>
// //         <Biggertext text="Mamooth Murals" classname="text-[5vw] text-center text-[#FFF6E5]"/> 
// //         <div className='absolute -top-17 flex rotate-20 items-center justify-center -right-20  '>
// //         <div className="footer_bottom_deco_wrap u-spriteloader u-sprite-loader"></div>

// //         </div>

// //         <div className='absolute -top-8 flex rotate-20 items-center justify-center -left-13  '>
// //         <div className="footer_bottom_deco_wrap u-spritesmile u-sprite-smile"></div>

// //         </div>
// // </div>
      
// //     </div>
// //   )
// // }

// // export default Loader




// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Loader = ({ onComplete }) => {
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const columns = loaderRef.current.querySelectorAll(".column");
//     const tl = gsap.timeline({
//       defaults: { ease: "power3.inOut", duration: 2 },
//       onComplete: () => {
//         if (onComplete) onComplete(); // Notify parent when loader finishes
//       },
//     });

//     tl.to(columns, {
//       yPercent: -100,
//       stagger: 0.2, // Animate columns sequentially
//     }).to(
//       loaderRef.current,
//       {
//         opacity: 0,
//         pointerEvents: "none",
//         duration: 1,
//       },
//       "-=0.1"
//     );
//   }, [onComplete]);

//   return (
//     <div
//       ref={loaderRef}
//       className="fixed inset-0 z-[99999] grid grid-cols-5 overflow-hidden"
//     >
//       <div className="column h-full text-white flex  items-center justify-center bg-[#120011]">
//       </div>
//       <div className="column h-full bg-[#120011]"></div>
//       <div className="column h-full bg-[#120011]"></div>
//       <div className="column h-full bg-[#120011]"></div>
//       <div className="column h-full bg-[#120011]"></div>
//     </div>
//   );
// };

// export default Loader;

import React from 'react'

const Loader = () => {
  return (
    <div>
      
    </div>
  )
}

export default Loader
