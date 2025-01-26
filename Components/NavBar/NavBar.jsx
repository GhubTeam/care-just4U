"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation">
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500}>
          <img
            src= "/logo.jpg" 
            alt="Care Just4U Logo"
            className="logo"
          />
        </Link>
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        <div
          id="navbar-menu"
          className={`nav-links ${isMenuOpen ? "active" : ""}`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="services-section"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="review-section"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="book-button"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
