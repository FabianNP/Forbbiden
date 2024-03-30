import Carrousel from "../Components/Carrousel"

const Hero = () => {
  return (
    <section className="border-black border-4 h-screen flex flex-col items-center">
      <div className="flex flex-col items-center pt-5">
        <div className="flex mr-20 select-none">
          <div className="h-48 w-48 relative">
            <img src="F.png" alt="F" className="bg-cover h-52 w-52 absolute left-12 bottom-2"/>
          </div>
          <h1 className="text-8xl mt-16 text-lime-400 font-spray">orbbiden Zone</h1>
        </div>
        <h3 className="text-5xl  mt-8 text-white select-none font-paint">Cruza el portal hacia otra dimension <span className="text-lime-400 text-7xl italic ">!</span></h3>
      </div>
      <Carrousel />
      <div className="h-3/5 w-3/5 flex justify-center">
        <img src="portal.svg" alt="" />
      </div>
    </section>
  )
}

export default Hero