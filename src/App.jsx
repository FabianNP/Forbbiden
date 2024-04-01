
import './App.css'
import Hero from './Pages/Hero'
import Merch from './Pages/Merch'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Merch />
    </div>
  )
}

export default App
