import {useState, createContext, useEffect, useCallback } from 'react'

const NavContext = createContext()

const NavProvider = ({ children }) => {
  
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const [navActive, setNavActive] = useState()

  const state = {
    toggleNavbar: toggleNavbar,
    isHero: isHero,
    navActive: navActive,
    setToggleNavbar: setToggleNavbar,
    setIsHero: setIsHero,
    setNavActive: setNavActive
  }

  useEffect(() => {
    const sectionsArray = [document.getElementById("products"), document.getElementById("questions"), document.getElementById("contact")]

   

    const scrollListener = document.addEventListener('scroll', () => {
      //console.log(sectionsArray[0].getBoundingClientRect().y)
      //console.log(sectionsArray[1].getBoundingClientRect().y)
      //console.log(sectionsArray[2].getBoundingClientRect().y)
      let scrolled = window.scrollY
      // console.log(scrolled)

      if (scrolled > window.innerHeight -200) {
        setToggleNavbar(true)
        setIsHero(false)
        
        // checkNavActive(sectionsArray, scrolled)
        // console.log(window.scrollY)
      }
      else setIsHero(true);

    })
    

    return () =>  document.removeEventListener("scroll", scrollListener);
}, [])


  return (
    <NavContext.Provider value={state}>
      {children}
    </NavContext.Provider>
  )

}

export {NavContext, NavProvider};

