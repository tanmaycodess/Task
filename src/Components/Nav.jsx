import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file for Navbar styling
import logo from '/images/logo1.png'; // Import your logo image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <div className='logoclass'>
                        <img src={logo} alt="Logo" className="navbar-logo-img" />

                    </div>

                    {/* <p>Insansa</p> */}
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Success" className="nav-link">Success Stories</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
