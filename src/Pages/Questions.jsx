import React, { useState } from 'react'
import { questions } from '../constants'
import Question from '../Components/Question'

const Questions = () => {
  const [quActive, setQuActive] =  useState(null)

  return (
    <section id="questions" className='w-screen bg-gradient-to-r from-[#4949499f] to-[#7272729f] mt-20 flex flex-col items-center py-24'>
      <h1 className="text-lime-400 font-paint text-5xl ">Preguntas Frecuentes</h1>
      <div className='flex w-screen justify-end'>
        <div className='sm:w-[80%] mt-20 flex flex-col justify-center gap-12 items-center'>
          {questions.map((question, index) => {
            return <Question key={index} question={question} active={quActive} setActive={setQuActive} index={index}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default Questions