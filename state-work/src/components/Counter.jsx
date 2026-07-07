import React, { useState } from 'react'

const Counter = () => {
    const [ count , setCount] = useState(1)
    const [flag, setFlag] = useState(true)
    const minus = ()=>{
        if(count<=1){
            setFlag(true)
        }
        else{
            setCount(count-1)
        }

    }
    const plus = ()=>{
        if(count>=5)
        {
            alert('You cannot add more of this item')
        }
        else {
            setCount(count+1)
        }
    }
  return (
    <>
      <div className="container w-25">
            {
                flag ? 
                <button className='btn btn-outline-success' onClick={()=> setFlag(false)}> Add to Cart </button>
                :
            <button className='btn btn-success w-50'>
                <span className='mx-2 fw-bold fs-5' onClick={minus}> - </span>
                <span className='mx-2'> {count} </span>
                <span className='mx-2 fw-bold fs-5' onClick={plus}> + </span>
            </button>
            }

      </div>
    </>
  )
}

export default Counter
