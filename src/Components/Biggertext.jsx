import React from 'react'

const Biggertext = ({text,classname}) => {
  return (
    <div>
        <h1 className={`ObviouslyDemo uppercase font-[600] text-[#120011]   text-center ${classname}`}>{text}</h1>
      
    </div>
  )
}

export default Biggertext
