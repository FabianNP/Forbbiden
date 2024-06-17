import Hero from './Pages/Hero'
import Merch from './Pages/Merch'
import Navbar from './Components/Navbar'
import Questions from './Pages/Questions'
// import { useEffect, useState, useContext, createContext } from 'react'
import Contacto from './Pages/Contacto'
import Footer from './Pages/Footer'
// import useNav from './hooks/useNav'
//import useIntersection from './hooks/useIntersection'
import InViewWrapper from './Components/InViewWrapper'

function App() {
  
  //const [isIntersecting, ref] = useIntersection({threshhold: 0.5 })
  // const state = useNav()

  return (
      <div className='overflow-x-hidden relative'>
        <Navbar />
        <Hero />
        {/*<Merch/>*/}
        {/*<Questions />*/}
        {/*<Contacto />*/}
        {/*<Merch isIntersecting={isIntersecting} ref={ref} />*/}
        <InViewWrapper index={0} threshold={0.1} id="products"><Merch/></InViewWrapper>
        <InViewWrapper index={1} threshold={1} id="questions"><Questions /></InViewWrapper>
        <InViewWrapper index={2} threshold={1} id="contact"><Contacto /></InViewWrapper>
        <Footer />
      </div>
  )
}

export default App
