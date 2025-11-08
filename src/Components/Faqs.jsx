import React from 'react'
import Kindman from "../assets/images/Kindman.jpg"
import Button from "./ReuseButton"
import  { useState } from "react";

const Faqss = [
    {
      question: "How do I share my ideas with a custom project?",
      answer: "Any file sharing platform will do. Google drive, pinterest, email, etc. Reach out to Andrew here. or email him at andrew@mammothmurals.com."
    },
    {
      question: "Can I collaborate with Mammoth Murals on a unique project?",
      answer: "Yes, please reach out to Andrew right here to discuss your project."
    },
    {
      question: "Do you require a deposit for your services?",
      answer: "Yes, we typically run with a 50% down and a 50% due upon completion production schedule."
    },
    {
      question: "Are your signs, murals, and ghost signs water resistant?",
      answer: "Yes, our signs are extremely weather resistant. We use ASTM I paint to ensure the light-fastness of our artwork. Additionally, a painted sign will ONLY fall off your wall if the wall itself falls down."
    },
    {
      question: "What size options are available?",
      answer: "We don't do lettering under 1.5 tall. We can paint anything at any size above that. Our largest mural to date is 100'w x 25'tall and is located in Hunstville, AL at Back Forty Huntsvile."
    },
    {
      question: "How long does it take to create a custom sign, mural, or ghost sign?",
      answer: "Every project is different, but on average most of our projects last about a month from start to finish. We have found that the more decision makers involved in the design process, the longer everything takes. Painting generally takes between 3 - 15 days depending on the size of the project."
    },
    {
        question: "What kind of paint do you use?",
        answer: "We have a few brands of paint we love using: Nova Color Paint, Benjamin Moore Aura, and Loop Spray Paint. We've found these to be the best, most reliable paints currently on the market.."
      },

      {
        question: "How can I contact Mammoth Murals for inquiries or quotes?",
        answer: "Please book a call with Andrew using this form."
      },


      {
        question: "What areas do you serve?",
        answer: "We proudly work coast to coast. Around 2/3 of our jobs are out of town  where we fly in to execute our project."
      },

      
      {
        question: "How much does a project typically cost?",
        answer: "A multitude of factors affect our prices. The biggest factors are size, visual complexity, and wall access. Our project minimum is $1200."
      }
  ];
const Faqs = () => {
    
    const [activeIndex, setActiveIndex] = useState(null);
  

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
  return (
    <div className=" w-full grid lg:grid-cols-[40%_60%]">
    <div className="lg:px-0 px-3 h-full flex items-start justify-start flex-col gap-7">
    <div className='  bg-red-50'>
        <img src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/68882b1debda0c78c7070634_CleanShot%202024-11-09%20at%2015.00.44-3.avif" className='lg:h-[58vh] w-full object-cover' alt="" />
    </div>
    <h3 className='SuisseIntl font-[600]  lg:text-[1.4vw] lg:leading-snug'>
  Still got unanswered <br /> questions? Or still wondering <br /> if a mural is right for you?
</h3>   
<Button
              imgsrc={Kindman}
              link="https://calendly.com/mammothmurals/meeting-with-andrew-clone"
              btntext="Chat with us"
              classname="lg:px-4 px-4 py-3 lg:text-[4vw] text-[3vw] bg-black text-white"
            />

 </div>
    <div className=" h-full">
        <h2 className='lg:px-0 px-3 lg:mt-0 mt-7 ObviouslyDemo uppercase lg:text-[12vw] text-6xl lg:leading-35 font-[600] text-[#120011]'>Frequently <br /> Asked Questions</h2>

        <div className=' w-full grid lg:grid-cols-1 grid-cols-1  md:grid-cols-2 lg:px-1 px-0 lg:mt-22  md:pb-22  '>
       
        <div  className='h-full '>
           <div className="lg:py-1 py-9 lg:px-1 px-4">
      <div className="lg:space-y-4 space-y-10">
        {Faqss.map((faq, index) => (
          <div
            key={index}
            className="border-b-3 border-black lg:pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="figee flex justify-between items-center">
              <h3 className="SuisseIntl lg:text-[1.3vw] font-[600] text-[4.4vw] md:text-[2.1vw] text-[#222221FF] ">{faq.question}</h3>
              <span className="SuisseIntl text-4xl">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="SuisseIntl font-[600] ">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      
    </div>
    </div>
  </div>
  )
}

export default Faqs
