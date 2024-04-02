import Hero from './Pages/Hero'
import Merch from './Pages/Merch'
import Navbar from './Components/Navbar'
import Questions from './Pages/Questions'
import { useEffect, useState, useContext, createContext } from 'react'
//import useNavContext from './hooks/useNavContext'

function App() {
  //  const [state, setNav, setIsHero, Provider] = useNavContext()
  // const ThemeContext = createContext("light")

  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
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
        <Merch active={toggleNavbar} />
        <Questions />
      </div>
  )
}

export default App
