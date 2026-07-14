import React from 'react'
import Add from './components/Add'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/add' element={<Add />} />
          {/* Dynamic Routing */}
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
