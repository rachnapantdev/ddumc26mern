import React, { useState } from 'react'

const User = () => {
    let [userName, setUserName] = useState("Purvi");
    const changeName = ()=>{
        // alert('working !!')
        // userName = "Astha";
        console.log(userName)
        setUserName("Astha")
    }
  return (
    <>
      <h1> Welcome {userName} </h1>
      <button className='btn btn-success' onClick={changeName}> Change Name </button>
    </>
  )
}

export default User
