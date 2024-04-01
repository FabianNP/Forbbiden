import {motion} from "framer-motion"
import { heroPhotos } from "../constants"
import "./carrousel.css"
import { useState } from "react"

const CarrouselFramer = () => {
  const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
      return updatedIndexes 
    })
  }
  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => {
        let newIndex = prevIndex - 1;
        if (newIndex < 0) {
          newIndex = 4; // O el número máximo de índice en tu caso
        }
        return newIndex;
      });
      return updatedIndexes;
    });
  }

  // const images = ["SpaceCity.jpg", "SpaceCity1.jpg", "SpaceCity2.jpg", "SpaceCity3.jpg", "SpaceCity4.jpg"]
  const positions = [
    "center",
    "left1",
    "left",
    "right",
    "right1"
  ]

  const imageVariants = {
    center: {x: "0%", scale: 1, zIndex: 5, opacity: 1},
    left1: {x: "-50%", scale: 0.7, zIndex: 2, opacity: 0.6},
    left: {x: "-90%", scale: 0.5, zIndex: 1, opacity: 0.3},
    right: {x: "90%", scale: 0.5, zIndex: 1, opacity: 0.3},
    right1: {x: "50%", scale: 0.7, zIndex: 2, opacity: 0.8},
  }

  return (
    <div className="flex items-center flex-col justify-center h-screen overflow-x-hidden">
      {heroPhotos.map((image, index) => {
        return (
          
          <motion.img 
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px] sm:w-[550px] md:w-[550px] xl:w-[600px] 2xl:w-[600px] absolute bottom-[350px] md:bottom-[280px] xl:bottom-[250px]"
            initial="center"
            animate={[positions[positionIndexes[index]]]}
            variants={imageVariants}
            transition={{duration: 0.33}}
            // style={{width: "400px", position: "absolute"}}
          />
        )
      })}
      <div className="text-white flex gap-10 justify-center relative h-screen w-[100vw]">
        <button className="bottom-[33%] z-10 left-20 absolute bg-[#0adb1831] rounded-full  h-14 w-14 py-4 px-6 bg-[url('left-arrow.png')] bg-no-repeat bg-center hover:scale-[1.22] transition-all ease-in" onClick={handleBack}></button>
        <button className="bottom-[33%] z-10 right-20 absolute bg-[#0adb1831] rounded-full h-14 w-14 py-4 px-6 bg-[url('right-arrow.png')] bg-no-repeat bg-center hover:scale-[1.22] transition-all ease-in" onClick={handleNext}></button>
      </div>
    </div> 
  )
}

export default CarrouselFramer