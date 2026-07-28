import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { deleteUser, getAllUsers, getUsersByName, storeUserInfo } from './userApis.js'
import { Auth0Provider } from "@auth0/auth0-react";

export const userContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-b5rohpl0a48zqqgv.us.auth0.com"
      clientId="vxJHTzpK1UdarqLa1h34lBsrYGxFYQDZ"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <userContext.Provider value={{ getAllUsers, storeUserInfo, deleteUser, getUsersByName }}>
        <App />
      </userContext.Provider>
    </Auth0Provider>
  </StrictMode>,
)
