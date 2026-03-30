// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Heor/Hero'
import Rating from './components/Rating/Rating'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'
import Account from './components/Acount/Account'
import Pricing from './components/Pricing/Pricing'
import Tabs from './components/Tabs/Tabs'
import { Suspense, useState } from 'react'
import Main from './components/Main/Main'
import { ToastContainer } from 'react-toastify'
import Collection from './components/Collecion/Collection'
const fetchData = fetch('/data.json').then(res => res.json())

function App() {
  const [tab, setTab] = useState(true)
  // const [count, setCount] = useState(0)
  const [card, setCard] = useState([])
  // console.log(card)

  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Tabs tab={tab} setTab={setTab} />
      {tab && <Suspense fallback={<span className='loading fixed top-[50%] left-[50%]'></span>}>
        <Main fetchData={fetchData} card={card} setCard={setCard} />
      </Suspense>}
      
      {tab || <Collection card={card} setCard={setCard} />}

      <Account />
      <Pricing />
      <Workflow />
      <Footer />


      <ToastContainer />
    </>
  )
}

export default App
