import React, { useContext } from 'react'
import { userContext } from '../main'

const Home = () => {
    const user = useContext(userContext)
  return (
    <div>
      <h1> Home </h1>
      <h1> Welcome {user.userInfo.fname} {user.userInfo.lname} </h1>
    </div>
  )
}

export default Home
