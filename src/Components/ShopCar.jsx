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
      className=' h-[35vh] w-[100%] absolute bottom-0 left-0 bg-gradient-to-r from-[#575757d0] to-[#0f0f0f] rounded-2xl flex justify-end overflow-hidden z-[5]'
      variants={variants}
      initial="hide"
      animate={carActive ? "show" : "hide"}
      transition={{duration: 0.4, ease: "linear"}}
    >
      <div className='shop-car-list w-[78%] h-[100%] overflow-x-scroll flex gap-14 px-12 items-center'>
        {carList.map((item, index) => {
          return <CardCar key={index} img={item.img} price={item.price}/>
        })}
      </div>
    </motion.div>
  )
}

export default ShopCar