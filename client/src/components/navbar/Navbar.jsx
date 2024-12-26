import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import AboutDropdown from './about-drop/AboutDropdown';
import ServicesDropdown from './services-drop/ServicesDropdown';
import { MdMenuOpen } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [hover, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const hamburgerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/images/okordel.png" alt="okor-del-logo" />
        </div>
        <div className="navbar-right">
          <div className="right-lg-srn">
            <Link to="/">
              <span
                className={
                  pathname === '/' ? 'navbar-link active' : 'navbar-link'
                }
              >
                Home
              </span>
            </Link>

            <div
              className={open ? 'navbar-link' : 'navbar-link drop-wrapper'}
              onMouseEnter={() => setHovered('about')}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to="/about">
                <div
                  className={
                    pathname.includes('/about') ? 'drop active' : 'drop'
                  }
                >
                  <span>About</span>
                  <IoMdArrowDropdown />
                </div>
              </Link>
            </div>
            {hover === 'about' && (
              <AboutDropdown
                onMouseEnter={() => setHovered('about')}
                onMouseLeave={() => setHovered(null)}
              />
            )}
            <div
              className="navbar-link drop-wrapper"
              onMouseEnter={() => setHovered('services')}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to="/services">
                <div
                  className={
                    pathname.includes('/services') ? 'drop active' : 'drop'
                  }
                >
                  <span>Services</span>
                  <IoMdArrowDropdown />
                </div>
              </Link>
            </div>
            {hover === 'services' && (
              <ServicesDropdown
                onMouseEnter={() => setHovered('services')}
                onMouseLeave={() => setHovered(null)}
              />
            )}
            <Link to="/blog">
              <span
                className={
                  pathname === '/blog' ? 'navbar-link active' : 'navbar-link'
                }
              >
                Blog
              </span>
            </Link>
            <Link to="/testimonials">
              <span
                className={
                  pathname === '/testimonials'
                    ? 'navbar-link active'
                    : 'navbar-link'
                }
              >
                Testimonials
              </span>
            </Link>
            <Link to="/contact-us">
              <button>Hire Us</button>
            </Link>
          </div>

          <div className="right-sm-srn">
            <nav className={open ? '' : 'active'}>
              <Link to="/">
                <div className="link-items" onClick={() => setOpen(false)}>
                  Home
                </div>
              </Link>
              <div className="sm-line"></div>
              <Link to="/about">
                <div className="link-items" onClick={() => setOpen(false)}>
                  About
                </div>
              </Link>
              <div className="sm-line"></div>
              <Link to="/services">
                <div className="link-items" onClick={() => setOpen(false)}>
                  Services
                </div>
              </Link>
              <Link to="/blog">
                <div className="sm-line"></div>
                <div className="link-items" onClick={() => setOpen(false)}>
                  Blog
                </div>
              </Link>
              <Link to="/testimonials">
                <div className="sm-line"></div>
                <div className="link-items" onClick={() => setOpen(false)}>
                  Testimonials
                </div>
              </Link>
              <Link to="/contact-us">
                <div className="sm-line"></div>
                <div className="link-items" onClick={() => setOpen(false)}>
                  Hire Us
                </div>
              </Link>
            </nav>
            {open ? (
              <MdOutlineClose
                onClick={hamburgerToggle}
                className="hamburger"
                size={25}
              />
            ) : (
              <MdMenuOpen
                onClick={hamburgerToggle}
                className="hamburger"
                size={25}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
