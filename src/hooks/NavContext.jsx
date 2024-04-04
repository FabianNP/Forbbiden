import {useState, useContext, createContext, useEffect } from 'react'

const NavContext = createContext()

const NavProvider = ({ children }) => {
  
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const [navActive, setNavActive] = useState(0)

  const state = {
    toggleNavbar: toggleNavbar,
    isHero: isHero,
    navActive: navActive,
    setToggleNavbar: setToggleNavbar,
    setIsHero: setIsHero,
    setNavActive: setNavActive
  }

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        setToggleNavbar(true)
        setIsHero(false)
      }
      else setIsHero(true);
      console.log()

      return () =>  document.removeEventListener("scroll", scrollListener);
  })}, [])


  // return [state, setToggleNavbar, setIsHero, NavContext.Provider]
  return (
    <NavContext.Provider value={state}>
      {children}
    </NavContext.Provider>
  )

}

export {NavContext, NavProvider};

