import React from 'react'
import { motion } from "framer-motion"
//import Select from "react-select"
//import makeAnimated from "react-select/animated"


const ProductsFilter = ({ navActive }) => {

const  variantsProducts = {hide: { height: 0, opacity: 0 }, show: { height: 33, opacity: 1 }}
const positions= ["hide", "show"]


//const animatedComponents = makeAnimated()
// const optionsMerch = ["Todos", "Pantalones", "Sudaderas", "Playeras", "Gorras"]
//const optionsMerch = [{todos: "Todos"}, {pantalones: "Pantalones"}, {sudaderas: "Sudaderas"}, {playeras: "Playeras"}, {gorras: "Gorras"}]

  return (
    <motion.div 
      className='text-white text-[15px] pl-5 font-normal mt-4 focus:border-none'
      initial="hide"
      variants={variantsProducts}
      animate={navActive == 0 ?  positions[1] : positions[0]}
    >
      <select name='filterByCategory' id='filterByCategory' className='p-2 rounded-lg bg-transparent' >
          <option value="todos" className=''>Todos</option>
          <option value="pantalones">Pantalones</option>
          <option value="playeras">Playeras</option>
          <option value="gorras">Gorras</option>
          <option value="sudaderas">Sudaderas</option>
          <option value="mujer">Mujer</option>
      </select>
      <button></button>
      <button></button>
    </motion.div>
  )
}

export default ProductsFilter