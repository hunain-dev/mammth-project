import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import card1 from "../assets/images/5thlast.png";
import livenation from "../assets/images/Magiccity.png"
import gulniary from "../assets/images/3rdlast.png"
import building from "../assets/images/building.png"
import southeastern from "../assets/images/2ndlast.png"
import moutnain from "../assets/images/last.png"
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

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: [<>
          Girl with the <br /> pearl earning</>],
          img: card1,

        },
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

      ],

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Live nation",
          img: livenation,

        },
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

      
      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Gulniary dropout",
          img: gulniary,

        },
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


      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Axel row",
          img: building,

        },
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

      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "Mountain top",
          img: moutnain,

        },
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
        "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a94ba5e6eaf6f5cfa776cf_Mountaintop3.avif",

      ],

      
      caseStudy: [
        {
          title: "Next Case Study",
          subtitle: "South eastern",
          img: southeastern,

        },
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
      className="projectarea pt-20 ng-red w-full  bg-[#FFF6E5]"
    >
      <div ref={wrapperRef} className="flex mt-7 h-full items-start">
        {/* Info Section */}
        <div className="card min-w-[55vw] px-7   flex flex-col justify-start text-black ">
          <h1 className="ObviouslyDemo text-[#120011]  uppercase font-bold text-[10.3vw] leading-33"> {data.title} </h1>
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

        {data.images.map((img, index) => (

          <div
            key={index}
            className="card min-w-[55vw]    "
          >
            <img
              src={img}
              alt=""
              className="h-full w-full mx-30 p-3 object-contain rounded-xl"
            />

          </div>
        ))}


        {
          data.caseStudy.map((elem, index) => {
            return (
              <div key={index} className="card min-w-[40vw]  mx-30 bg-[#FFD900] flex items-center justify-start flex-col  rounded-xl p-10 gap-6">
                <h1 className="ObviouslyDemo text-[#120011] text-center uppercase font-bold text-[2.3vw] leading-3">{elem.title}</h1>

                <h1 className="ObviouslyDemo  text-[#120011] uppercase font-bold text-[7vw] leading-20">{elem.subtitle}</h1>


                <Link
                  to={`/Cards`}
                  state={{ card: elem }} // 👈 ye card ka pura data bhej raha hai
                  key={index}
                  className="h-full w-full"
                  style={{ backgroundColor: elem.backgoruncolor }}
                >
                  <div className="pb-3 bg-black w-full overflow-hidden group">
                    <img
                      src={elem.img}
                      alt={elem.text}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-80"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <h2 className="ObviouslyDemo uppercase text-3xl">{elem.text}</h2>
                    <div className="py-1 px-3 border-2 mt-3 border-black flex items-center justify-center gap-3 border-b-4">
                      <h4 className="ObviouslyDemo text-1xl">2025</h4>
                      <h4 className="ObviouslyDemo text-1xl">Murals</h4>
                    </div>
                  </div>
                </Link>


              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default DetailsCom;
