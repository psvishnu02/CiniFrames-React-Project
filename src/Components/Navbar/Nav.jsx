import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className='nav'>
        <div className='nav-logo'>CiniFrames</div>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><Link to={''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to={'abt'} onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to={'gal'} onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to={'ser'} onClick={() => setMenuOpen(false)}>Services</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Nav
