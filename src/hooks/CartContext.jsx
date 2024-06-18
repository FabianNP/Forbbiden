import { useState, createContext } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState()

  const stateCart = {cartItems, setCartItems}

  return (
    <CartContext.Provider value={stateCart}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartProvider}