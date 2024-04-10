import { motion } from "framer-motion"
import SpaceCity from "../assets/SpaceCity.jpg"

 
const Card = ({ img, price }) => {

  return (
    <div className='flex h-[75%] items-center justify-center cursor-pointer relative hover:scale-[1.1] transition-all duration-75'>
      <div className='h-[100%] w-[15vw] min-[1600px]:w-[25vw] min-[1600px]:h-[40vh] min-w-[250px]  rounded-md'>
        <motion.div 
          className='w-[100%] h-[100%]'
        > 
          <div 
            className='w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg bg-center'
            style={{backgroundImage: `url(${img})`}}
          >
            <div className="absolute rounded-lg bottom-0 left-0 b bg-gradient-to-b from-[#00000000] to-[#030303] w-[100%] h-[50%] p-4 px-12 flex flex-col justify-center items-end">
              <div className="absolute bg-gradient-to-r from-[#9200008a] to-[#240000] font-bold text-[18px] w-[auto] rounded-xl p-2 px-5 rotate-[-10deg] right-4 bottom-6">
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