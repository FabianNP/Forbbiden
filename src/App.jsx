import Hero from './Pages/Hero'
import Merch from './Pages/Merch'
import Navbar from './Components/Navbar'
import Questions from './Pages/Questions'
// import { useEffect, useState, useContext, createContext } from 'react'
import Contacto from './Pages/Contacto'
import Footer from './Pages/Footer'
import { NavProvider } from './hooks/NavContext'
// import useNav from './hooks/useNav'

function App() {
  // const state = useNav()
  return (
    <NavProvider className='overflow-x-hidden relative'>
        <Navbar />
        <Hero />
        <Merch />
        <Questions />
        <Contacto />
        <Footer />
    </NavProvider>
  )
}

export default App
