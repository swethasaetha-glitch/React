import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='navbar'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/service'>Service</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar