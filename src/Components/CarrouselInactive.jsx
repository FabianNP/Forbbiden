import { useMemo, useState } from "react"
import { heroPhotos } from "../constants"
import "./css/carrousel.css"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"


const Carrousel = () => {
  // const [cardsCount, setCardsCount] = useState(0)
  const [activeCard, setActiveCard] = useState(2)
  const [animation, setAnimation] = useState("")
  const lastCard = heroPhotos.length - 1;


  
  //const randonNumber = () => Math.floor(Math.random() * (heroPhotos.length - 2 )) + 1;

  const activeArray = useMemo(() => {
    const newArray = heroPhotos

    if (activeCard === 0){
      newArray.unshift(heroPhotos[lastCard])
      //setActiveCard(lastCard);
    }else if(activeCard  === lastCard){
      newArray.push(heroPhotos[0]);
      //setActiveCard(0);
    }
    return newArray;

  }, [activeCard])


  console.log(activeArray)
 
  const handleLeftArrow = () => {
    if (activeCard  === 0){
      setActiveCard(lastCard)
      setAnimation("left")

      setTimeout(() => {
        setAnimation("")
      }, 1000)
      
    }else{
      setActiveCard((lastValue) => lastValue - 1)
      setAnimation("right")
    }
    console.log(activeCard)

  }

  const handleRightArrow = () => {
    if(activeCard === lastCard){
      setActiveCard(0)
    } else {
      setActiveCard((lastValue) => lastValue + 1)
    }
    
    console.log(activeCard)
  }

 
  return (
    <div className="mt-20 mb-16 max-w-[80%] relative">
      <div onClick={handleLeftArrow} className="absolute left-[-150px] top-[230px] opacity-80 hover:opacity-100 hover:scale-125 transition-all ">
        <img src="left-arrow.png" alt="" className="object-cover h-12 w-12"/>
      </div>
      <div className="cardsContainer flex gap-20">
        {heroPhotos.map((photo, index) => {
          return (
            <div key={index} className={`heroPhoto min-w-[350px] h-[450px] rounded-[40px] justify-center  items-center font-bold text-5xl
            ${index == activeCard ? "activeHeroCard" : "inactiveHeroCard" } 
            ${index >= activeCard - 1 && index <= activeCard + 1 ? "flex" : "hidden"}
            ${animation == "left" && index == activeCard + 2 ? "hideLeft" : animation == "right" && index == activeCard - 2 ? "hideRight" : ""}`} 
            >
              <h2>{photo}</h2>
            </div>
          )
        })}
      </div>
      <div onClick={handleRightArrow} className="absolute right-[-150px] top-[230px] opacity-80 hover:opacity-100 hover:scale-125 transition-all">
        <img src="right-arrow.png" alt="" className="object-cover h-12 w-12"/>
      </div>
    </div>
  )
}

export default Carrousel