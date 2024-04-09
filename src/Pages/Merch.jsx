import React, { useEffect } from 'react'
import CardFlip from '../Components/CardFlip'
import {merch} from "../constants/" 
import { motion } from "framer-motion"
import Card from '../Components/Card'
// import useNav from '../hooks/useNav'



const Merch = () => {

  


  return (
    <section id="products"> <div className={`text-white flex flex-col items-center justify-center w-screen h-[250px] bg-gradient-to-r from-[#5e5e5e5b] to-[#20202098] rounded-xl my-16 py-10 shadow-md shadow-white `}>
      <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl text-white select-none font-paint">Cruza el portal hacia otra dimension <span className="text-lime-400 text-7xl italic ">!</span></h3>
        <div></div>
      </div>
      <motion.div 
        whileInView={{opacity: 1, scale: 1, translateX: 0 }}
        transition={{duration: 0.5}}
        /* viewport={{ once: true }} */
        
        initial={{opacity: 0,  scale: 0.9, translateX: 900}}
        className={`w-screen overflow-hidden flex justify-end min-[2180px]:ps-[200px] px-[130px] pt-[25px] pe-[0px] 2xl:pe-[100px]`}>
        <div className={`w-[80%] flex flex-wrap gap-24 gap-y-10 justify-start`}>
        {merch.map((item, index) => {
          /* return <CardFlip key={index}/> */
          return <Card  key={index} img={item.img} price={item.price}/>
        })}
        </div>
      </motion.div>
    </section>
  )
}

export default Merch