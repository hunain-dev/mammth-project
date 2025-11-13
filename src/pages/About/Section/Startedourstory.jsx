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
<div className=" lg:mt-8 md:mt-4 w-full lg:px-9 px-4 grid lg:grid-cols-[41%_59%] md:grid-cols-[41%_59%]">
<div className='h-full lg:mt-0 mt-6'>
            <Biggertext text={<>Where we started <br /> and our story</>} classname="lg:text-[6vw] lg:leading-22 leading-11 text-5xl md:text-6xl  md:leading-13" />
            <div className="mt-10">
  <h3 className="SuisseIntl font-[600] lg:text-[1.2vw] lg:leading-8 md:text-[1.7vw]">
    Mammoth Murals was built on an obsession <br /> with painting and getting it right.
    Co-founded by Andrew <br /> Tynes and Shane B, our roots blend old-school <br /> craft
    with real business sense.
  </h3>
  <br />

  <h3 className="SuisseIntl font-[600] lg:text-[1.2vw]  lg:leading-8 md:text-[1.7vw]">
  For us, a mural or sign serves as a lasting statement that feels authentically local and transforms any wall into something <br /> memorable. We select projects with intention, attend <br /> meticulously to every detail, and apply paint <br /> with the dedication that ensures our work endures for <br /> decades without losing its impact.


  </h3>
</div>

        </div>
        <div className='h-full lg:mt-0 mt-5'>
            <div className=' w-full'>
                <img src={painted} className='lg:h-150 w-full object-cover' alt="" />
            </div>
            <div className="w-full  text-black lg:py-11 py-10 ">
      <div className=" mx-auto flex flex-col gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-t-4 border-black pb-1"
          >
            <h2 className="ObviouslyDemo lg:text-8xl text-5xl font-[600] leading-none">{item.number}</h2>
            <p className="SuisseIntl font-[600] lg:text-[1.4vw]">
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
