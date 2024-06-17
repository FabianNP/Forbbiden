import React from 'react'
import { motion } from 'framer-motion'
import useNav from '../hooks/useNav'
import { carList } from '../constants'
import  CardCar from './CardCar'


const ShopCar = () => {
  const { carActive } = useNav()

  const variants = {
    hide: {opacity: 0, translateX: "-100%"}, 
    show: {opacity: 1, translateX: "0%"}
}

  return (
    <motion.div  
      className=' h-[38vh] w-[100vw] absolute bottom-0 left-0 bg-gradient-to-b  from-[#00000000] to-[#266799] rounded-2xl flex justify-end z-[5]'
      variants={variants}
      initial="hide"
      animate={carActive ? "show" : "hide"}
      transition={{duration: 0.3, ease: "easeOut"}}
    >
      <div className='overflow-x-scroll overflow-y-hidden w-[78%] flex gap-12 px-12 z-10 pt-[50px] min-[1600px]:pt-[95px] shop-car-list'>
        {carList.map((item, index) => {
          return <CardCar key={index} img={item.img} price={item.price} size={item.size}/>
        })}
      </div>
    </motion.div>
  )
}

export default ShopCar