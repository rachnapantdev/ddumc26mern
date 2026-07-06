import React, { useState } from 'react'
const Counter = () => {
    const [qty, setQty] = useState(1);
    const [flag, setFlag] = useState(true)

    const minus = () => {
        if(qty<=1)
        {
            setFlag(true)
        }
        else{
            setQty(qty - 1)
        }
    }
    const plus = () => {
        if(qty>=5){
            alert('You cannot add more of this item ')
        }
        else{
            setQty(qty + 1)
        }
    }
    return (
        <>
            <div className="container w-25 mb-5">
                <div className="card">
                    <div className="card-header">
                        <img src="https://cdn.pixabay.com/photo/2014/12/04/15/21/tea-556777_1280.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="card-body">
                        Tea
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <span> 20 </span>
                       {
                        flag?
                        <button className='btn btn-outline-success' onClick={()=>setFlag(false)}> Add </button>
                        :
                        <button className='btn btn-success w-50'>
                            <span className='mx-2' onClick={minus}> - </span>
                            <span className='mx-2'> {qty} </span>
                            <span className='mx-2' onClick={plus}> + </span>
                        </button>
                    }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
