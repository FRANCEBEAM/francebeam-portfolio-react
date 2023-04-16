import React, { useEffect, useState } from 'react'
import '../sass/Navbar.scss'
import { Link } from 'react-router-dom'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { FaBars, FaTimes } from 'react-icons/fa'
import useScrollListener from "../hooks/UseScroll";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Hide navbar
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("navbar-hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav className={`navbar-container ${navClassList.join(" ")}`} >
      <div className='wrapper'>
        <div className='logo'>
            <Link to="/" onClick={closeMobileMenu}>
              <h1>francebeam</h1>
            </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className='navbar-icon' /> : <FaBars className='navbar-icon' />}
        </div>
          <ul className={click ? `nav-items active ${navClassList.join(" ")}` : "nav-items"} onClick={closeMobileMenu}>
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
                Resume <HiOutlineDocumentDownload size='22' />
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
