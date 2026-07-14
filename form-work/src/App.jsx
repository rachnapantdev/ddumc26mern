 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import LoginWithUser from './components/LoginWithUser'
 
 const App = () => {
   return (
     <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/login-user' element={<LoginWithUser />} />
            </Routes>
        </BrowserRouter>
     </>
   )
 }
 
 export default App
 