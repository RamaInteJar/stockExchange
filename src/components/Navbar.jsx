import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div>
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="About">About</Link>
            <Link to="Stocklisting">Stocklist</Link>
        </nav>
    </div>
  )
}

export default Navbar