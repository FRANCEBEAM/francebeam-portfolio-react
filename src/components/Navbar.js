import React, { useState }from 'react'
import '../sass/Navbar.scss'
import { Link } from 'react-router-dom'
import { GrDocumentDownload } from 'react-icons/gr'
import { FaBars, FaTimes } from 'react-icons/fa'
import Home from '../pages/Home'


function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <nav className='navbar-container'>
      <div className='wrapper'>
        <div className='logo'>
            <Link to="/">
              <h1>francebeam</h1>
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes className='navbar-icon' /> : <FaBars className='navbar-icon' />}
          </div>
          <ul className={click ? "nav-items active" : "nav-items"}>
            <li className='nav-item'>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/">
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/">
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" id="btn-resume" to="/">
                Resume <GrDocumentDownload size='22' color='white'/>
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
