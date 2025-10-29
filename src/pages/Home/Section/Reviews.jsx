import React from "react";
import { Star } from "lucide-react"; // for stars

const Reviews = () => {
    const ourfeature = [
        {
            img:"https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a718e341443ea60562c4c3_Header-Plain-e1470599322158.avif"
        },
        {
            img:"https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a71ab1974ffa7896cfa556_cropped-WebsiteFooter_logo-2.webp"
        },
        {
            img:"https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68a810933e2695f00f7f559c_cropped-cbs204220logo20for20website20cbs42.com_1541089550527.png_60904154_ver1.0.webp"
        },
    ]
  return (
    <div className="w-full bg-[#120011] text-white flex flex-col items-center justify-center gap-22  px-6">
      {/* Rating Section */}
      <div className="text-center mb-6  py-10">
        <p className="SuisseIntl uppercase text-[0.9vw] text-[#FFF6E5] tracking-widest">
          5/5 Rating on Google Reviews
        </p>
        <div className="flex items-center justify-center mt-2 gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="fill-yellow-400 text-yellow-400 w-10 h-10"
            />
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <blockquote className="text-center SuisseIntl  text-[#FFF6E5] font-[600] max-w-6xl leading-14 text-[3.3vw]">
        “Fantastic artistry topped off with great communication and service.
        Andrew, Shane, and the team were very professional and obviously
        extremely talented.”
      </blockquote>

      {/* Featured On Section */}
      <div className="mt-16 flex flex-col items-center p-11">
        <p className="uppercase SuisseIntl text-[1.1vw] mb-9 ">Featured On</p>

        
        <div className="flex items-center justify-center gap-10 flex-wrap">
            {
                ourfeature.map((elem,index)=>{
                    return(
                        <img key={index}
                        src={elem.img}
                        alt="BhamNow"
                        className="h-12 object-cover filter grayscale"
                        />
                    )
                })
            }
        
        
      
        </div>
      </div>
    </div>
  );
};

export default Reviews;
