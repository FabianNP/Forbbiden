import { useContext } from 'react'
import { CartContext } from './NavContext'

const useCart = () => {
  const cartContext = useContext(CartContext)
  return cartContext
}

export default useCart