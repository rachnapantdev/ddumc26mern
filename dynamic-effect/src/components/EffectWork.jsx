import React, { useEffect, useState } from 'react'

const EffectWork = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(true)
    useEffect(()=>{
        console.log("Effect Executes: ",count )
    },[flag])
  return (
    <>
      <h1> Welcome  </h1>
      <button className='btn btn-success w-25'> 
            <span className='mx-3' onClick={()=>setCount(count-1)}>-</span>
            <span className='mx-3'> {count} </span>
            <span className='mx-3' onClick={()=>{setCount(count+1)}}> + </span>
      </button>

      {
        flag?
        <button className='btn btn-dark' onClick={()=>setFlag(false)}> Dark Mode </button>
        : 
        <button className='btn btn-primary' onClick={()=>setFlag(true)}> Light Mode </button>
      }
    </>
  )
}

export default EffectWork
