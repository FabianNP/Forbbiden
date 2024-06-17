import { useContext } from 'react'
import { NavContext } from './NavContext'

const useNav = () => {
  const navContext = useContext(NavContext)
  return navContext
}

export default useNav