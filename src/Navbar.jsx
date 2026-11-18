
import React, { useState } from "react";
import logo from "./assets/logo.jpeg";
import "./index.css";
import { NavLink } from "react-router-dom";


function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleTheme() {
        setDarkMode(!darkMode);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Castmind Socials logo" />
            </div>

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
                <ul className="navlink">
                    <NavLink to="/about">How it works</NavLink>
                    <NavLink to="/categories" onClick={closeMenu}>Categories</NavLink>
                    <NavLink to="/contact-us">contact us</NavLink>

                </ul>

                <div className="nav-actions">
                    <button
                        className="theme-btn"
                        onClick={toggleTheme}
                    >
                        {darkMode ? "☀ Light mode" : "☾ Dark mode"}
                    </button>

                    <button id="but1">Log in</button>
                    <button id="but2">Sign up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
