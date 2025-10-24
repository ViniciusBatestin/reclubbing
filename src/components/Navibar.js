import React, { useState } from "react";
import "../style/Navbar.css";
import navbarLogo from "../assets/logo.jpg";

const NavBar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav-wrapper ${className}`}>
      <a href="/" className="navbar-logo">
        <img src={navbarLogo} alt="Company Logo" className="logo-image" />
      </a>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#events">EVENTS</a></li>
        <li><a href="#tickets">TICKETS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
