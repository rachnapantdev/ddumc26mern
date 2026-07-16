import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'

const userInfo = {
  fname: "Uday",
  lname: "Yadav",
  email:'udayy@gmail.com',
  phone:3456786567
}
const getAllTask = async()=>{
 let resp =  await axios.get("http://localhost:3000/todos");
 resp =  await resp.data;
 return resp
}
// Create Context

export const userContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <userContext.Provider value={{userInfo, getAllTask}}>
      <App />
    </userContext.Provider>
  </StrictMode>,
)
