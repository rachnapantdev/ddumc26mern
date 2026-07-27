import React, { useContext, useState } from 'react'
import { userContext } from '../main'
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [user, setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        isActive:""
    }) 

    const {storeUserInfo} = useContext(userContext);
    const navigate =  useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((preVal)=>({...preVal, [name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        storeUserInfo(user)
        navigate("/")
        
    }
    return (
        <>
            <div className="container py-5">
                <form className='w-50 m-auto border border-4 border-light p-5' onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-3">
                            <input type="text" className='form-control' 
                                value={user.fname} 
                                name='fname' 
                                placeholder='First Name' 
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' 
                                value={user.lname} 
                                name='lname' 
                                placeholder='Last Name' 
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' 
                                value={user.email} 
                                name='email' 
                                placeholder='Email' 
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' 
                                value={user.phone} 
                                name='phone' 
                                placeholder='Phone' 
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control' 
                                value={user.isActive} 
                                name='isActive' 
                                placeholder='IS ACTIVE' 
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="submit" value="Add" className='btn btn-light' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Add
