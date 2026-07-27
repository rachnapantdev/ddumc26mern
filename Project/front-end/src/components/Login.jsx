import React from 'react'

const Login = () => {
  return (
    <>
        <div className="container">
            <form className='w-25'> 
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='userName' />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Password' />
                </div>
                <div className="mb-3">
                    <input type="submit" className='btn btn-light' />
                </div>

            </form>
        </div>    
    </> 
  )
}

export default Login
