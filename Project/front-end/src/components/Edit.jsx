import React from 'react'

const Edit = () => {
    const handleChange = ()=>{
        
    }
    return (
        <>
            <div className="container py-5">
                <form className='w-50 m-auto border border-4 border-light p-5'>
                    <div>
                        <div className="mb-3">
                            <input type="text" className='form-control'
                                value=""
                                name=''
                                placeholder='First Name'
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control'
                                value=""
                                name=''
                                placeholder='Last Name'
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control'
                                value=""
                                name=''
                                placeholder='Email'
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control'
                                value=""
                                name=''
                                placeholder='Phone'
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

export default Edit
