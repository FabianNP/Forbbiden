import {motion} from "framer-motion"

const Contacto = () => {
  function handleContact (button) {
    if(button === "whatsapp"){
      //Something whit whatsapp
      window.open("https://wa.me/5618002140?text=Hola, buen dia.", "_blank")
    }else{
      window.open("https://maps.app.goo.gl/Xa7xv3znf3CaH4q37", "_blank")
      //Open other page
    }
  }

  return (
    <div className="w-screen flex justify-end py-20 pt-32">
      <div className="w-[80%]"> 
      <div className="flex justify-center gap-10 w-full">
        <motion.div
          onClick={() => (handleContact("whatsapp"))}
          className="max-w-[500px] cursor-pointer bg-[#e9e9e9b0] h-[160px] w-[40%] rounded-lg shadow-inner shadow-[#bebebea2] relative flex justify-center transition-all duration-[0.5s] hover:shadow-[#ffffffc9]" 
          initial={{opacity: 0, transform: "translateX(-130px)"}}
          whileInView={{opacity: 1, transform: "translateX(0)"}}
          transition={{duration: 0.8}}
          // viewport={{once: true }}
        >
          <h1 className="text-[30px] absolute top-[-80px] text-white">Realiza tus pedidos desde casa</h1>
          <div className="w-[90px] flex justify-center items-center">
            <img src="whatsapp.png" alt="" className="cover" />
          </div>

        </motion.div>
        <h1 className="text-white text-[30px] translate-y-16">Ó</h1>
        <motion.div
          onClick={() => (handleContact("location"))}
          className="max-w-[500px] cursor-pointer bg-[#e9e9e9b0] h-[160px] w-[40%] rounded-lg shadow-inner shadow-[#bebebea2] relative flex justify-center transition-all duration-[0.5s] hover:shadow-[#ffffffc9]" 
          initial={{opacity: 0, transform: "translateX(130px)"}}
          whileInView={{opacity: 1, transform: "translateX(0)"}}
          transition={{duration: 0.8}}
          // viewport={{once: true }}
        >
          <h1 className="text-[30px] absolute top-[-80px] text-white">Visitanos en tienda</h1>
          <div className="flex items-center text-[20px]">
            <div className="w-[70px] flex justify-center items-center px-2">
              <img src="ubicacion.png" alt="" />
            </div>
            <p>Av. Carmelo Pérez 648, Benito Juárez</p>
          </div>
        </motion.div>

      </div>
        
      </div>
    </div>
  )
}

export default Contacto