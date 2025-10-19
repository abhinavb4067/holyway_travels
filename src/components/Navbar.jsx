import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo_without_name.png`}
            alt="Logo"
            className="navbar-logo"
          />

          <div className="navbar-title">
            <h3 className="company-name">Holyway Travels</h3>
            <p className="company-slogan">Creating divine memories...</p>
          </div>

          <div className="divider"></div>

          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="navbar-right">
        <button onClick={() => navigate("/")}>GET STARTED</button>
      </div>

      {/* Menu button */}
      <button className="menu-btn" onClick={toggleMenu}>
        <div className={`menu-icon ${menuOpen ? "active" : ""}`} id="menuIcon">
          <div className="menu-circle"></div>
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        id="mobileMenu"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <div className="mobile-getstarted">
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
