import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userName);
        console.log(password);
        setPassword("")
        setUserName("")        
    }
  return (
    <>
    <div className="container">
        <form className=' w-50 border border-5 border-info p-5 m-auto' onSubmit={handleSubmit}>
            <p className='fs-2 fw-bold fst-italic border-bottom border-5 border-info rounded-pill text-center'> Login </p>
            <div className="mb-3">
                <label htmlFor="" className='fs-3 mb-2'> UserName  </label>
                <input type="text"
                 className='form-control'
                 value={userName}
                 onChange={(event)=>setUserName(event.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="" className='fs-3 mb-2'> Password   </label>
                <input type="password" className='form-control' 
                    value={password}
                onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="submit" value="Login" className='btn btn-info fs-6 fw-bold' />
            </div>
            
            <div className='mb-3'>
                    <p>  <span onClick={()=>navigate("/register")} className='fw-bold text-decoration-underline'> Click here </span>  to Register </p>
            </div>

            <div className='mb-3'>
                    <p>  <span onClick={()=>navigate("/login-user")} className='fw-bold text-decoration-underline'> Click here </span>  to Login with User </p>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login
