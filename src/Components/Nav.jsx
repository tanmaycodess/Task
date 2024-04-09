import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '/images/logo1.png';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" className="navbar-logo-img" />
                </Link>
            </div>
            <div className="navbar-right">
                <button
                    className="menu-icon"
                    onClick={toggleDropdown} // Toggle dropdown on button click
                >
                    <i className="fas fa-bars">|||</i>
                </button>
                <ul
                    className={`navbar-nav ${isDropdownOpen ? 'open' : ''}`}
                >
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={closeDropdown}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link" onClick={closeDropdown}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={closeDropdown}>
                            Our Team
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/success" className="nav-link" onClick={closeDropdown}>
                            Success Stories
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={closeDropdown}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
