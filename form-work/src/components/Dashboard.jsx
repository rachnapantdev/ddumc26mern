import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate =useNavigate()
    const logout = ()=>{
      if(confirm("Are you sure?")){
          localStorage.removeItem("fullName");
        navigate("/login-user")
      }
    }   
  return (
    <div>
      <h1 className='text-center'> Welcome {localStorage.getItem("fullName")} </h1>
      <button className='btn btn-danger' onClick={logout}> Logout </button>
    </div>
  )
}

export default Dashboard
