import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/add">Addres</Link>
        <Link to="/get">Getallstdres</Link>
    </div>
  )
}

export default Nav