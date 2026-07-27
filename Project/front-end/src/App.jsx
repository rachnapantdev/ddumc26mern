import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Add from './components/Add'
import Edit from './components/Edit'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
