import React, { useContext } from 'react'
import { userContext } from '../main'

const Contact = () => {
    const user = useContext(userContext);
  return (
    <>
      
      <h2> Contact {user.userInfo.fname} </h2>
      <ul>
        <li> Email : {user.userInfo.email} </li>
        <li> Phone : {user.userInfo.phone} </li>
      </ul>
    </>
  )
}

export default Contact
