import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { deleteUser, getAllUsers, storeUserInfo } from './userApis.js'

export const userContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <userContext.Provider value={{getAllUsers, storeUserInfo, deleteUser}}>
      <App />
    </userContext.Provider>
  </StrictMode>,
)
