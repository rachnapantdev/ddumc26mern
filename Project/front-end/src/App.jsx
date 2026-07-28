import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Add from './components/Add'
import Edit from './components/Edit'
import Login from './components/Login'
import Register from './components/Register'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {

  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();
  const signup = () => login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () => auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return "Loading...";

  return (
    <>
      {
        isAuthenticated ? (
          <>
            <p>Logged in as {user.email}</p>

            <h1>User Profile</h1>

            <pre>{JSON.stringify(user, null, 2)}</pre>

            <button onClick={logout} className='btn btn-danger'>Logout</button>
          </>
        ) :
          (
            <>
              {error && <p>Error: {error.message}</p>}

              <button onClick={signup} className='btn btn-info'>Signup</button>

              <button onClick={login} className='btn btn-outline-info'>Login</button>
            </>
          )
      }

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
