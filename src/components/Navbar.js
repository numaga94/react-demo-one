import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbarStyle, setNavbarStyle] = useState('navbar');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeNavbarBgOnScroll = () => {
    // if (window.scrollY >= 80) {
    //   setNavbarStyle(true);
    // } else {
    //   setNavbarStyle(false);
    // }

    if (window.scrollY >= 80) {
      setNavbarStyle('navbar active');
    } else {
      setNavbarStyle('navbar');
    }
  };

  window.addEventListener('scroll', changeNavbarBgOnScroll);

  const changeNavbarBgOnClick = () => {
    const pathname = window.location.pathname;

    if (pathname.length > 1) {
      setNavbarStyle('navbar global');
    } else if (pathname.length === 1) {
      setNavbarStyle('navbar');
    }
  };

  return (
    <>
      <nav className={navbarStyle} onClick={changeNavbarBgOnClick}>
        <div className="navbar-container">
          <Link to="/demo-site-one" className="navbar-logo" onClick={closeMobileMenu}>
            ARTI
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/demo-site-one" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>

            <li>
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" buttonSize="btn--medium" linkTo="/sign-up">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
