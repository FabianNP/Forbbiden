import { motion } from "framer-motion"
import SpaceCity from "../assets/SpaceCity.jpg"

 
const Card = ({ img, price, size }) => {

  return (
    <div className='flex items-center justify-center h-[400px] 2xl:h-[500px] relative hover:scale-[1.2] transition-all duration-75'>
      <div className='flip-card h-[30vh] w-[15vw] min-[1600px]:w-[25vw] min-[1600px]:h-[40vh] min-w-[250px] max-w-[300px] min-h-[350px] max-h-[450px] rounded-md'>
        <motion.div 
          className='w-[100%] h-[100%]'
        > 
          <div 
            className='relative w-[110%] h-[110%] bg-cover border-[1px] text-white rounded-lg p-4 bg-center'
            style={{backgroundImage: `url(${img})`}}
          >
            
            <div className="absolute bg-gradient-to-r from-[#949494da] to-[#000000] text-[14px] w-[auto] rounded-xl  px-6 rotate-[80deg] left-0 top-8">
              <div className="rotate-[-90deg] flex flex-col items-center">
                <h3 className="text-[16px] border-b-2 border-white">Talla</h3>
                <p className="mt-1 text-[14px]">{size}</p>
              </div>
            </div>
            <div className="absolute bottom-[-2px] left-[-2px] bg-gradient-to-b from-[#00000000] to-[#030303] w-[102%] h-[50%] p-4 px-12 flex flex-col justify-center items-end" >
              <div className="absolute bottom-6 right-10 bg-gradient-to-r from-[#920000e0] to-[#2e0404b7] font-bold text-[18px] rounded-xl px-4 py-[6px] rotate-[-10deg]">
                <p>${price}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Card