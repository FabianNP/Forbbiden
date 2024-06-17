import CarrouselFramer from "../Components/CarrouselFramer"
import  { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"
import particlesConfig from "./config/particles.json"
import { Container } from "postcss"


const Hero = () => {
  
  
  const [init, setInit] = useState()
  useEffect(()=>{
    initParticlesEngine(async (engine) => {

      await loadFull(engine);
    }).then(() => {
      setInit(true);
    })
  }, [])
  

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)

  }, [])

  const particlesLoaded = useCallback(async (Container) => {

  }, [])

  return (
    <section className="h-screen flex flex-col items-center pt-14 sm:pt-10 md:pt-8 xl:pt-0 relative overflow-hidden">
      <div className="flex flex-col items-center pt-5">
        <img src="FZLogo.png" alt="" className="object-cover sm:h-[150px] md:h-[200px] xl:h-auto h-[130px] drop-shadow-xl"/>
        
      </div>
      <CarrouselFramer />
      <div className="w-full h-3/5 md:w-4/5 flex justify-center z-0 absolute bottom-[-10%]">
        <img src="portal.svg" alt="" />
      </div>
      {init && <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={particlesConfig} className="z-[-2]" />}
    </section>
  )
}

export default Hero