


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
