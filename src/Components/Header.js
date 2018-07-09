import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li className="navlink readable" id="home"><NavLink to='/' exact={true} activeStyle={{ color: 'coral' }}>Home</NavLink></li>
        <li className="navlink readable" id="projects"><NavLink to='/projects' activeStyle={{ color: 'coral' }}>Projects</NavLink></li>
        <li className="navlink readable" id="contact"><NavLink to='/contact' activeStyle={{ color: 'coral' }}>Contact</NavLink></li>
        <li className="navlink readable" id="blog"><NavLink to='/blog' activeStyle={{ color: 'coral' }}>Blog</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
