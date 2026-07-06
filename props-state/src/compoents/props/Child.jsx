import React from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <>
      <h1> This is Child Component  </h1>
      <h2> Welcome {props.fname} </h2>
    </>
  )
}

export default Child
