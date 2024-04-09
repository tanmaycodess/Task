import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import insansa from '/images/insansa.png'

function Footer() {
    const services = [
        "Business Transformation",
        "SAP Consulting",
        "Staffing Services",
        <Link to="/service" smooth={true} className='serlink'>more</Link>
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <Link to="/" className="footer-logo">
                           {/* <img src={insansa} alt="logo" /> */}
                           Insansa
                        </Link>
                        <p>Let's craft a service package tailored to your specific needs. Share a bit about your business, and we'll swiftly provide you with customized ideas.</p>
                        <div className="contact">
                            <span><a href="mailto:sales@insansa.com">sales@insansa.com</a></span>
                            <span><i className="fas fa-phone"></i>+919819847308</span>
                        </div>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/insansa-technologies-60153a247/"><i className="fab fa-facebook"></i>linkedin</a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/service" smooth={true}>Service</Link></li>
                            <li><Link to="/Success" smooth={true}>Success Stories</Link></li>
                            <li><Link to="/Train" smooth={true}>Training</Link></li>
                            <li><Link to="/about" smooth={true}>Our Team</Link></li>
                            <li><Link to="/contact" smooth={true}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="servi">
                    <h2>Services We Offer</h2>
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
