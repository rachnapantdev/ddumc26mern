import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './compoenents/Home'
import Contact from './compoenents/Contact'
import About from './compoenents/About'
import Nav from './compoenents/Nav'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
