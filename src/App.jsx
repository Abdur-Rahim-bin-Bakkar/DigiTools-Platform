// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Heor/Hero'
import Rating from './components/Rating/Rating'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Rating/>
    </>
  )
}

export default App
