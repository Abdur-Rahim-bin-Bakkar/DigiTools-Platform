// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Heor/Hero'
import Rating from './components/Rating/Rating'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'
import Account from './components/Acount/Account'
import Pricing from './components/Pricing/Pricing'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Rating/>
        <Account/>
        <Pricing/>
        <Workflow/>
        <Footer/>
    </>
  )
}

export default App
