// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Heor/Hero'
import Rating from './components/Rating/Rating'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Rating/>
        <Workflow/>
        <Footer/>
    </>
  )
}

export default App
