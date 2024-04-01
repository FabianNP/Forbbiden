import React from 'react'
import {motion} from "framer-motion"


const Navbar = ({active}) => {

  const positions= ["hide", "show"]

  const navbarVariants = {
    hide: {left: "-100%", opacity: 0},
    show: {left: "0", opacity: 1}
  }

  const navList = ["Products", "Contacto", "Preguntas"]

  return (
    <motion.div 
      className='flex items-center text-white gap-[25%] flex-col fixed h-screen w-[20%] max-w-[380px] min-w-[280px] ease-in-out border-e-2 border-[#ffffff48] py-10 bg-[#36363641]' 
      initial="hide" 
      variants={navbarVariants} 
      animate={[positions[active]]}
      transition={{duration: 0.8}}
    >
      <div className="w-[85%]">
        <img src="FZLogo.png" alt="" className="contain"/>
      </div>
      <ul className='flex flex-col gap-20 text-[23px] w-full items-center'> 
        {navList.map((item, index) => {
          return (
            <div key={index} className='cursor-pointer hover:text-[#bcff6ff8] hover:font-bold hover:scale-[1.06] transition-all duration-110'>
              <p>{item}</p>
            </div>
          )
        })}
      </ul>
      <div className=' translate-y-[-50px]  w-[25%] cursor-pointer hover:scale-[1.3] transition-all duration-150 ease-in-out'>
        <img src="carrito.png" alt="" className='object-contain bg-[#fffffff8] rounded-full drop-shadow-xl hover:drop-shadow-2xl'/>
      </div>
      <button className='absolute right-[-90px] w-[50px] h-[20px]rounded-full' onClick={() => {}}>
        <img src={`${active ? "flecha-derecha.png" : "flecha-derecha.png"}`} alt="" />
      </button>
    </motion.div>
  )
}

export default Navbar