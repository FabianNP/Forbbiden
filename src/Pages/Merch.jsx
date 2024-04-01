import React from 'react'
import CardFlip from '../Components/CardFlip'
import {merch} from "../constants/" 

const Merch = () => {
  return (
    <section>
      <div className='text-white flex flex-col items-center justify-center w-screen h-[250px] bg-gradient-to-r from-[#5e5e5e5b] to-[#20202098] rounded-xl my-16 py-10 shadow-md shadow-white '>
      <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl text-white select-none font-paint">Cruza el portal hacia otra dimension <span className="text-lime-400 text-7xl italic ">!</span></h3>
        <div></div>
      </div>
      <div className='w-screen overflow-hidden flex justify-end px-[130px] pe-[110px]'>
        <div className='w-[80%] flex flex-wrap gap-16 justify-between'>
        {merch.map((item) => {
          return <CardFlip key={item.title}/>
        })}
        </div>
      </div>
    </section>
  )
}

export default Merch