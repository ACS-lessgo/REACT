import React from 'react'
import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <>
        <nav>
            <div>
                <Link to="/">My Portfolio</Link>
            </div>
            <div>
                <Link to="/about">About Me</Link>
            </div>
        </nav>
    </>
  )
}

export default Header