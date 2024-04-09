import { motion } from "framer-motion"
import SpaceCity from "../assets/SpaceCity.jpg"

 
const Card = ({ img, price }) => {

  return (
    <div className='flex items-center justify-center h-[400px] 2xl:h-[500px] cursor-pointer relative hover:scale-[1.1] transition-all duration-75'>
      <div className='flip-card h-[30vh] w-[15vw] min-[1600px]:w-[25vw] min-[1600px]:h-[40vh] min-w-[250px] max-w-[300px] min-h-[350px] max-h-[450px] rounded-md'>
        <motion.div 
          className='w-[100%] h-[100%]'
        > 
          <div 
            className='w-[110%] h-[110%] bg-cover border-[1px] text-white rounded-lg p-4 bg-center'
            style={{backgroundImage: `url(${img})`}}
          >
            <div className="absolute bottom-[-10%] left-0 b bg-gradient-to-b from-[#00000000] to-[#030303] w-[120%] h-[50%] p-4 px-12 flex flex-col justify-center items-end">
              <div className="bg-gradient-to-r from-[#9200008a] to-[#240000] font-bold text-[24px] mt-[55px] w-[50%] rounded-xl px-4 py-2 rotate-[-10deg]">
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