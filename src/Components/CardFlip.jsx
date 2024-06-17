import { useState } from 'react'
import { motion } from "framer-motion"
import SpaceCity from "../assets/SpaceCity.jpg"
import SpaceCity1 from "../assets/SpaceCity1.jpg"

import "./css/cardFlip.css"
 
const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if(!isAnimating){
      setIsFlipped(prev => !prev)
      setIsAnimating(true)
    }
  }

  return (
    <div className='flex items-center justify-center h-[450px] 2xl:h-[500px] cursor-pointer relative hover:scale-[1.1] transition-all duration-75'>
      <div className='flip-card h-[40vh] w-[20vw] min-[1600px]:w-[25vw] min-[1600px]:h-[45vh] min-w-[300px] max-w-[330px] min-h-[350px] max-h-[450px] rounded-md' onClick={handleFlip}>
        <motion.div 
          className='flip-card-inner w-[100%] h-[100%]'
          initial={false}
          animate={{rotateY: isFlipped ? 180 : 360}}
          transition={{ duration: 0.2, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        > 
          <div 
            className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
            style={{backgroundImage: `url(${SpaceCity})`}}
          >
            <h1 className=''>Sky</h1>
            <p>Live on top of the world</p>
          </div>
          <div 
            className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
            style={{backgroundImage: `url(${SpaceCity1})`}}
          >
            <h1 className=''>Earth</h1>
            <p>Or in the maze of the city</p>
          </div>
          
        </motion.div>
      </div>
    </div>
  )
}

export default CardFlip