import {useState, useContext, createContext } from 'react'


const useNavContext = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [isHero, setIsHero] = useState(true);

  const NavContext = createContext({active: toggleNavbar, hero: isHero})

  const state = useContext(NavContext)

  return [state, setToggleNavbar, setIsHero, NavContext.Provider]
}

export default useNavContext
