import { motion } from "framer-motion"
import SpaceCity from "../assets/SpaceCity.jpg"

  
const Card = ({ img, price, size }) => {

  return (
    <div className='flex h-[300px] items-center justify-center relative transition-all duration-75'>
      <div className='h-[100%] w-[10%] min-[1600px]:w-[15%] min-[1600px]:h-[40vh] min-w-[250px] rounded-md' >
        <motion.div 
          className='w-[100%] h-[100%]'
        > 
          <div 
            className='relative w-[100%] h-[100%] max-w-[300px]  max-h-[350px] bg-cover border-[1px] text-white rounded-lg bg-center bg-white'
            style={{backgroundImage: `url(${img})`}}
          >
              
              <div className="absolute bg-gradient-to-r from-[#949494da] to-[#000000] text-[12px] rounded-xl  px-5 rotate-[80deg] left-0 top-8">
                <div className="rotate-[-90deg] flex flex-col items-center">
                  <h3 className="text-[14px] border-b-2 border-white">Talla</h3>
                  <p className="mt-1 text-[14px]">{size}</p>
                </div>
              </div>
            <div className="absolute rounded-lg bottom-0 left-0 b bg-gradient-to-b from-[#00000000] to-[#030303] w-[100%] h-[15%] flex flex-col justify-center items-end" >
            <div className="absolute bg-gradient-to-r from-[#920000] to-[#240000e3] font-bold text-[16px] rounded-xl py-[6px] px-4 rotate-[-10deg] right-3 bottom-5">
                <p>${price}</p>
              </div>
            </div>
            </div>
            <div className="w-10 h-10 absolute top-3 right-4 hover:scale-[0.9] transition-all">
              <img src="./carrito-menos.png" alt="" />
            </div>
        </motion.div>
      </div>
    </div>
  )
}


export default Card