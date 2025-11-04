import React, { useEffect, useState } from 'react'
import ournation from "../assets/images/naiton.png"
import gulnary from "../assets/images/gulnary.png"
import backforty from "../assets/images/backforty.png"
import historic from "../assets/images/historic.png"

const Ourpartners = () => {
  // 🔹 2 sets of logos (you can add more sets if you want)
  const sets = [
    [ournation, gulnary, backforty, historic],
    [gulnary, backforty, historic,ournation],
  ]

  const [currentSet, setCurrentSet] = useState(0)

  // 🔁 Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet(prev => (prev + 1) % sets.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [sets.length])

  return (
    <div className="w-full text-center py-10">
      <h3 className="SuisseIntl font-[550] text-[1.4vw] mb-6">
        Partners that trust our work
      </h3>

      <div className="grid grid-cols-4 gap-5 transition-all duration-700 ease-in-out">
        {sets[currentSet].map((img, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img
              src={img}
              alt="partner"
              className="h-[100px] object-contain transition-all duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ourpartners
