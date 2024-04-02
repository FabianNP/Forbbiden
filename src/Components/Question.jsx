import React from 'react'
import { motion } from "framer-motion"


const Question = ({active, setActive, question, index}) => {
  const handleQuestionClick = (index) => { 
    setActive((prev) => {
      if(index === prev){
        return null
      }else{
        return index
      }
    })
  }

  const questionVariants = {
    hidden: { height: "0", marginTop: "0",},
    visible: { height: "auto", marginTop: "25px" }
  }


  return (
    <div 
      className={`${active == index ? "active":""} rounded-lg bg-[#ffffff94] text-[33px] w-[80%] p-4 ps-12 cursor-pointer 
        hover:bg-[#ffffffc4] hover:scale-[1.05] transition-all duration-[0.3] max-w-[1000px] min-w-[700px]
      `} 
      onClick={() => handleQuestionClick(index)}
    >
      <h4>{question.title}</h4>
      <motion.div 
        className="infoContainer overflow-hidden text-[25px]"
        variants={questionVariants} 
        initial="hidden" 
        animate={active === index ? "visible" : "hidden"}  
      >
        <div className="infoElement">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto quibusdam voluptatum soluta consequuntur.</p>            
        </div>
      </motion.div>
    </div>
  )
}

export default Question