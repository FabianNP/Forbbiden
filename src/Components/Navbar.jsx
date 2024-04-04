import React from 'react'
import {motion} from "framer-motion"
import { navList } from '../constants'
import useNav from '../hooks/useNav'


const Navbar = () => {

  const state = useNav()
  const {isHero, toggleNavbar} = useNav()
  console.log(state)

  const positions= ["hide", "show"]

  const navbarVariants = {
    hide: {left: "-20%", opacity: 1},
    show: {left: "0", opacity: 1}
  }

  const navArrowVariants = {
    hide: {},
    show: {}
  }

  return (
    <motion.div 
      className='flex items-center text-white gap-[25%] flex-col fixed h-screen w-[22%] max-w-[380px] min-w-[280px] ease-in-out py-10 bg-[#36363641] z-10' 
      initial="hide" 
      variants={navbarVariants} 
      animate={!isHero ? [positions[toggleNavbar ? 1 : 0]] : {opacity: 0}}
      transition={{duration: 0.4}}
    >
      <div className="w-[80%]">
        <img src="FZLogo.png" alt="" className="contain"/>
      </div>
      <ul className='navList flex flex-col gap-20 text-[23px] w-full items-center'> 
        {navList.map((item, index) => {
          return (
            <li key={index} className='cursor-pointer hover:text-[#bcff6ff8] hover:font-bold hover:scale-[1.06] transition-all duration-110'>
              <p>{item}</p>
            </li>
          )
        })}
      </ul>
      <div className=' translate-y-[-50px]  w-[25%] cursor-pointer hover:scale-[1.2] transition-all duration-150 ease-in-out'>
        <img src="carrito.png" alt="" className='object-contain bg-[#fffffff8] rounded-full drop-shadow-xl hover:drop-shadow-2xl'/>
      </div>
      
      {/*}
        <button className='absolute right-[-60px] w-[40px] h-[20px]rounded-full' onClick={() => {
          setActive(prev => !prev)
        }}>
          <motion.img src="flecha-izquierda.png" alt="" variants={navArrowVariants} 
          animate={{rotate: active ? 0 : -540}} transition={{duration: 0.6}} 
          className='absolute '
          />
        </button>
      */}
    </motion.div>
  )
}

export default Navbar