import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1> About  </h1>
      <div className="container">
        <Link to="/about/mission" className='btn btn-success'>  Mission </Link>
        
        <Link to="/about/vision" className='btn btn-success'>  Vision </Link>

        <Link to="/about/culture" className='btn btn-success'>  Culture </Link>

      </div>
      <Outlet />
    </div>
  )
}

export default About
