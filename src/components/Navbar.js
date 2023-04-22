import React, { useEffect, useState } from 'react'
import '../sass/Navbar.scss'
import { HashLink as Link } from 'react-router-hash-link'
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
            <Link className='animate__animated animate__fadeInDown' to="#home" onClick={closeMobileMenu}>
              <h1>francebeam</h1>
            </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className='navbar-icon' /> : <FaBars className='navbar-icon' />}
        </div>
          <ul className={click ? `nav-items active ${navClassList.join(" ")}` : "nav-items"} onClick={closeMobileMenu}>
            <li className='animate__animated animate__fadeInDown nav-item'>
              <Link className="nav-link" to="#home">
                Home
              </Link>
            </li>
            <li className='animate__animated animate__fadeInDown nav-item'>
              <Link className="nav-link" to="#about">
                About
              </Link>
            </li>
            <li className='animate__animated animate__fadeInDown nav-item'>
              <Link className="nav-link" to="#projects">
                Projects
              </Link>
            </li>
            <li className='animate__animated animate__fadeInDown nav-item'>
              <Link className="nav-link" to="#work">
                Work
              </Link>
            </li>
            <li className='animate__animated animate__fadeInDown nav-item'>
              <Link className="nav-link" to="#contact">
                Contact
              </Link>
            </li>
            <li className='animate__animated animate__fadeInDown nav-item'>
              <a href='Francis Beam Santander Resume.pdf' download="Francis Beam Santander Resume.pdf">
                <button className="nav-link" id="btn-resume">
                  Resume <HiOutlineDocumentDownload size='22' />
                </button>
              </a>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
