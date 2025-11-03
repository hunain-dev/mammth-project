import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const DetailsCom = () => {
    const { id } = useParams(); 


    const obj = [
      {
        id: 1,
        title: [<>
        Live Nation: <br /> The Magic City</>],
        client: "LIVE NATION",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",
        images: [
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94c29ba205ace413842ac_cocacolaamphitheater-23.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a9476d4ce7f2197d0035b4_cocacolaamphitheater-24.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94786817d335a0c41dfa6_cocacolaamphitheater-36.avif",
        
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a947cb983bd56d00a784d8_cocacolaamphitheater-19.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a9484235681dc4d09eedc5_cocacolaamphitheater-18.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a9485dba1b1860232ffffd_cocacolaamphitheater-15.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94898fd9451940c970a48_cocacolaamphitheater-11.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a948e6323e13f19eb48d59_cocacolaamphitheater-9.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94913beeaf7b0239506b4_cocacolaamphitheater-4.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949454d5ec4b4de7540ae_cocacolaamphitheater-1.avif"
        ],
      },

      {
        id: 2,
        title: [<>
    Girl with the
    <br /> pearl earring
    </>],   
             client: "LIVE NATION",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",
        images: [
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949a685561a9f464c85dd_GirlwithPearlFinishedPhotosDSCF4298.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949c51b87ff896e552c67_GirlwithPearlFinishedPhotosDSCF4287.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949d7ecc5e406c2ae5610_GirlwithPearlFinishedPhotosDSCF4282.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949ea59dedca597e260c8_GirlwithPearlFinishedPhotosDSCF4274.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a949d7ecc5e406c2ae5610_GirlwithPearlFinishedPhotosDSCF4282.avif",

        ],
      },


      
      {
        id: 3,
        title: [<>
  Axel Row

    </>],   
             client: "LIVE NATION",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",
        images: [
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94a5fb8c421c34d9a21bf_CleanShot%202024-11-09%20at%2015.00.44-2.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94abb4d5ec4b4de757309_Axel-Row-1-scaled.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94adc68c59859d8494029_michael-vizzinia-1-3-scaled.avif",
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94af198ac34a809061cbe_Axel-Row-24-scaled.avif",

        ],
      },


      {
        id: 4,
        title: [<>
Culinary dropout 

    </>],   
             client: "",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",
        images: [
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94b372ce4160cb3692c1b_culinarydropout1-2.avif",

        ],
      },


      {
        id: 5,
        title: [<>
South Eastern


    </>],   
             client: "",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",
        images: [
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94b6a716f312d1debcc6c_IMG_4225.avif",

        ],
      },

      {
        id: 6,
        title: [<>
Mountaintop


    </>],   
             client: "",
        location: "BIRMINGHAM, ALABAMA",
        service: "MURALS",
        completionDate: "2025",
        images: [
          "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94b6a716f312d1debcc6c_IMG_4225.avif",

        ],
      },

    ]

    const data = obj.find((item) => item.id === Number(id));

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
  if (!data) return <p className="text-center text-2xl p-10">No Data Found</p>;

  return (
    <div
    ref={scrollContainerRef}
    className="projectarea pt-20 h-screen w-full overflow-hidden bg-[#FFF6E5]"
  >
    <div ref={wrapperRef} className="flex mt-7 h-full items-start">
      {/* Info Section */}
      <div className="card min-w-[55vw] px-7   flex flex-col justify-start text-black ">
      <h1 className="ObviouslyDemo text-[#120011] uppercase font-bold text-[10.3vw] leading-33"> {data.title} </h1>
        <div className="w-full mt-10 flex items-start justify-start gap-32">
          <div className="space-y-2">
            <h5>{data.client}</h5>
            <h5>{data.service}</h5>
          </div>
          <div className="space-y-1">
            <h5>{data.location}</h5>
            <h5>{data.completionDate}</h5>
          </div>
        </div>
      </div>

      {/* Image Sections */}
      {data.images.map((img, index) => (

        <div
          key={index}
          className="card min-w-[55vw]    "
        >
          <img
            src={img}
            alt=""
            className="h-full w-full mx-30 p-3 object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default DetailsCom;
