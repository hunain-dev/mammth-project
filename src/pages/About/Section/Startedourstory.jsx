import React from 'react'
import Biggertext from '../../../Components/Biggertext'
import painted from "../../../assets/images/painted.png"
const Startedourstory = () => {
    const stats = [
        {
          number: "90+",
          text: [<>
          Projects completed to date <br /> across 10 states of America


          </>],
        },
        {
          number: "100%",
          text: [<>
In-house & Independent

  
  
            </>],        },
        {
          number: "25+",
          text: [<>
Years hand painting murals, <br />   signs and ghost signs.

  
  
            </>],        },
      ];
  return (
<div className=" mt-8 w-full px-9 grid grid-cols-[41%_59%]">
<div className='h-full'>
            <Biggertext text={<>Where we started <br /> and our story</>} classname="text-[6vw] leading-22 " />
            <div className="mt-10">
  <h3 className="SuisseIntl font-[600] text-[1.2vw] leading-8">
    Mammoth Murals was built on an obsession <br /> with painting and getting it right.
    Co-founded by Andrew <br /> Tynes and Shane B, our roots blend old-school <br /> craft
    with real business sense.
  </h3>
  <br />

  <h3 className="SuisseIntl font-[600] text-[1.2vw] leading-8">
  For us, a mural or sign serves as a lasting statement that feels authentically local and transforms any wall into something <br /> memorable. We select projects with intention, attend <br /> meticulously to every detail, and apply paint <br /> with the dedication that ensures our work endures for <br /> decades without losing its impact.


  </h3>
</div>

        </div>
        <div className='h-full'>
            <div className=' w-full'>
                <img src={painted} className='h-150 w-full object-cover' alt="" />
            </div>
            <div className="w-full  text-black py-11 ">
      <div className=" mx-auto flex flex-col gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-t-4 border-black pb-1"
          >
            <h2 className="ObviouslyDemo text-8xl font-[600] leading-none">{item.number}</h2>
            <p className="SuisseIntl font-[600] text-[1.4vw]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
        </div>
      
    </div>
  )
}

export default Startedourstory
