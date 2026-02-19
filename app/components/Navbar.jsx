"use client";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Collections", href: "#collections" },
  { name: "Feature", href: "#feature" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    handleClose();
  };

  return (
    <header className="navbar">
      <div className="navbar-section">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleScroll(e, "#home")}
        >
          Psycho<span>Art</span>
        </a>

        <div className="search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search items and collections" />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="nav-link"
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a href="#" className="wallet-btn" onClick={handleClose}>
            Select Wallet
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={handleClose}></div>}
    </header>
  );
}