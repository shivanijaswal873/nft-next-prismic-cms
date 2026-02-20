"use client";

import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import "../styles/Navbar.css";
import Link from "next/link";

export default function ClientNavbar({ settings }: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!settings?.data) return null;

  return (
    <header className="navbar">
      <div className="navbar-section">
        <Link href="/" className="logo">
          Psycho<span>Art</span>
        </Link>

        <div className="search">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder={settings.data.search_placeholder || "Search"}
          />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {settings.data.navigation?.map((item: any, i: number) => (
            <PrismicNextLink key={i} field={item.link} className="nav-link">
              {item.label}
            </PrismicNextLink>
          ))}

          {isFilled.keyText(settings.data.wallet_text) && (
            <a href="#" className="wallet-btn">
              {settings.data.wallet_text}
            </a>
          )}
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
