import React from 'react'
import "./Navbar.css"

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/*<Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>*/}
        <NavLink to="/" /*className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}*/>Home</NavLink>
        <NavLink to="/about" /*</nav> className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}*/>Sobre</NavLink>
    </nav>
  )
}

export default Navbar