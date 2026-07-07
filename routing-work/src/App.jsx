import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Navbar from './components/Navbar'
import Mission from './components/about/Mission'
import Vision from './components/about/Vision'
import Culture from './components/about/Culture'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          {/* Nested Routing */}
          <Route path='/about' element={<About />} >
              <Route path='mission' element={ <Mission />} />
              <Route path='vision' element={ <Vision />} />
              <Route path='culture' element={ <Culture />} />
          </Route>

          <Route path='/contact' element={<Contact />} />

          {/* Wild Card Routing */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
