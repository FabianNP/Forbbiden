
import './App.css'
import Hero from './Pages/Hero'
import Merch from './Pages/Merch'
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight - 500) {
        setIsHero(false)
        setToggleNavbar(true)
      }
      else setIsHero(true);

      return () =>  document.removeEventListener("scroll", scrollListener);
  })}, [])

  return (
    <div className='overflow-x-hidden relative'>
      <Navbar active={toggleNavbar ? 1 : 0} setActive={setToggleNavbar} isHero={isHero}/>
      <Hero />
      <Merch />
    </div>
  )
}

export default App
