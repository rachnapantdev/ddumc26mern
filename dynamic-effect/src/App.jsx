import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EffectWork from './components/EffectWork'
import Navbar from './components/Navbar'
import DigitalClock from './components/DigitalClock'
import APICalling from './components/APICalling'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<EffectWork />} />
          <Route path='/digital' element={<DigitalClock />} />
          <Route path='/api' element={<APICalling />} />
          {/* Dynamic Routing  */}
          <Route path='/api/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
