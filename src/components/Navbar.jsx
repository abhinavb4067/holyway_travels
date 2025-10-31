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
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

  <div className="navbar-center">
  <div className="logo-container">
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/3333.png`}
      alt="Holyway Travels"
      className="company-logo"
    />
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
  {/* ❌ Close Icon */}
  <button
    className="close-menu-btn"
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
  >
    &times;
  </button>

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
