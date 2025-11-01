import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const DetailsCom = () => {
    // const { id } = useParams(); // 👈 Get the card ID from URL

const obj = [
    {
        id: 1,
        title: (
          <>
            Live Nation: <br /> The Magic City
          </>
        ),
        client: "LIVE NATION",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",

      },
    {

        bgcolor:"red",
        text:"why love me",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94c29ba205ace413842ac_cocacolaamphitheater-23.avif"
    },
    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a9476d4ce7f2197d0035b4_cocacolaamphitheater-24.avif"

    },
  
    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94786817d335a0c41dfa6_cocacolaamphitheater-36.avif"

    },
    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a947bc9293b6ddb3557d27_cocacolaamphitheater-22.avif"

    },
    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"   https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a947cb983bd56d00a784d8_cocacolaamphitheater-19.avif"

    },

 

    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a9484235681dc4d09eedc5_cocacolaamphitheater-18.avif"

    },

    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a9485dba1b1860232ffffd_cocacolaamphitheater-15.avif"

    },

    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94898fd9451940c970a48_cocacolaamphitheater-11.avif"

    },

    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a948e6323e13f19eb48d59_cocacolaamphitheater-9.avif"

    },

    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94913beeaf7b0239506b4_cocacolaamphitheater-4.avif"

    },

    {
        bgcolor:"red",
        text:"why love me bruh",
        image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949454d5ec4b4de7540ae_cocacolaamphitheater-1.avif"

    },


 
    {
        bgcolor:"blue",
        text:"why love me bruh",
        // image:"https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949454d5ec4b4de7540ae_cocacolaamphitheater-1.avif"

    },
]


  const wrapperRef = useRef(null);
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    const sections = gsap.utils.toArray(".card"); // sab card select karne ke liye
    const totalWidth = scrollContainerRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    gsap.to(wrapperRef.current, {
      x: -(totalWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top top",
        end: () => `+=${totalWidth - windowWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={scrollContainerRef} className="projectarea pt-20 h-screen w-full overflow-hidden">
   <div ref={wrapperRef} className="flex h-full items-center">
        {obj.map((num, index) => (
          <div
            key={index}
            className="card min-w-[55vw] h-[80vh] mx-5 flex flex-col justify-start "
            style={{ backgroundColor: num.bgColor || num.bgcolor }}
          >
            {/* if id = 1 -> show text section */}
            {num.id === 1 ? (
              <>
                <h1 className="ObviouslyDemo text-[#120011] uppercase font-bold text-[11.8vw] leading-35">
                  {num.title}
                </h1>
                <div className="w-full mt-10 flex items-start justify-start gap-32">
                  <div className="space-y-2">
                    <h5 className="SuisseIntl">{num.client}</h5>
                    <h5 className="SuisseIntl">{num.service}</h5>
                  </div>
                  <div className="space-y-2">
                    <h5 className="SuisseIntl">{num.location}</h5>
                    <h5 className="SuisseIntl">{num.completionDate}</h5>
                  </div>
                </div>
              </>
            ) : (
              // else -> show only image
              <img
                src={num.image}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsCom;
