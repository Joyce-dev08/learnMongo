import React from 'react'
import  { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Blog</h1>
        <Link to='/people'>People</Link>
        <Link to='/posts'>Posts</Link>
        
    </div>
  )
}

export default Navbar
