import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()
    // State for Form Field
    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = (e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        // Destructure Object
        const {name, value} = e.target;

        setFormData(values=>({...values, [name]:value}))
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
        fname: "",
        email: "",
        phone: "",
        password: ""
    })
     }
    return (
        <>
            <div className="container">
                <form className=' w-50 border border-5 border-info p-5 m-auto' onSubmit={handleSubmit}>
                    <p className='fs-2 fw-bold fst-italic border-bottom border-5 border-info rounded-pill text-center'> Register </p>
                    <div className="mb-3">
                        <label htmlFor="" className='fs-3 mb-2'> Full Name  </label>
                        <input type="text"
                            className='form-control'
                            name='fname'
                            value={formData.fname}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className='fs-3 mb-2'> Email </label>
                        <input type="email"
                            className='form-control'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className='fs-3 mb-2'> Phone  </label>
                        <input type="text"
                            className='form-control'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className='fs-3 mb-2'> Password   </label>
                        <input type="password" className='form-control'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="submit" value="Register" className='btn btn-info fs-6 fw-bold' />
                    </div>

                    <div className='mb-3'>
                        <p> Already Register?  <span onClick={() => navigate("/")} className='fw-bold text-decoration-underline'> Login here </span>   </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
