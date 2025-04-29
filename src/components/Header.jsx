import React, { useState, useRef, useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import './Header.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {!isHome && (
        <nav className="main-navbar">
          <div className="navbar-container" ref={menuRef}>
            <div className="logo">Dumsday</div>
            <div className="hamburger" onClick={toggleMenu}>
              &#9776;
            </div>
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/products" onClick={closeMenu}>Products</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </nav>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;