import React from 'react'
import {motion} from "framer-motion"
import { navList } from '../constants'
import useNav from '../hooks/useNav'
import { Link } from "react-scroll";
import ProductsFilter from './ProductsFilter';
import ShopCar from "./ShopCar"

import "./css/navbar.css"


const Navbar = () => {

  const {isHero, toggleNavbar, navActive, setCarActive, carActive } = useNav()

  const positions= ["hide", "show"]

  const navbarVariants = {
    hide: {left: "-20%", opacity: 1},
    show: {left: "0", opacity: 1}
  }

  const handleNav = (e) => {
    e.preventDefault()

  }

  const handleLogo = () => {
    window.scrollTo({top: 0,  behavior: "smooth"})
  }

  const handleCar = () => {
    setCarActive(prev => !prev)
 }
  return (
    <motion.div 
      className='flex items-center gap-[25%] flex-col fixed h-screen w-[22%] max-w-[380px] min-w-[280px] ease-in-out py-10 bg-[#36363641] z-10' 
      initial="hide" 
      variants={navbarVariants} 
      animate={!isHero ? [positions[toggleNavbar ? 1 : 0]] : {opacity: 0}}
      transition={{duration: 0.4}}
    >
      <div className="w-[80%] cursor-pointer" onClick={handleLogo}>
        <img src="FZLogo.png" alt="" className="contain drop-shadow-lg hover:drop-shadow-xl shadow-white transition-all duration-200"/>
      </div>
      <ul className='navList flex flex-col gap-20 text-[23px] w-full items-center'> 
        {navList.map((item, index) => {
          return (
            <li key={index} className={`cursor-pointer hover:text-[#A3E635] hover:font-bold transition-all duration-110 ${navActive == index ? "activeLinkNav" : "inactiveLinkNav"} transition-all duration-300`}>
              
                <p  onClick={handleNav}><Link to={`${item.id}`} smooth={true} duration={500} offset={-150}>{item.text}</Link></p>
                {index == 0 ? <ProductsFilter navActive={navActive}/> : <></>}
            </li>
          )
        })}
      </ul>
      <div onClick={handleCar} className={`z-20 translate-y-[-70px] w-[23%] max-w-[80px] cursor-pointer hover:scale-[1.2] transition-all duration-150 ease-in-out ${carActive ? " hover:scale-[0.9] " : ""}`}>
        <img src="carrito.png" alt="" className='object-contain bg-[#fffffff8] rounded-full hover:drop-shadow-2xl'/>
      </div>
      <ShopCar />
      
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