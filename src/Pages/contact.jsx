import React from 'react';
import Navbar from '../Components/Nav';
import './Contact.css';
import Footer from '../Components/Footer';
import Phone from '/images/phone.png'; // Import your phone image here

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="connect">
                <h2>Connect with us</h2>
            </div>
            <section className="contact-section">
                <div className="container">
                    <div className="contact-info">
                        <div className="contact-details">
                            <div className="contact-box">
                                <h3>Sales</h3>
                                <div className="contact-details">
                                    <p>Email: <a href="mailto:sales@insansa.com">sales@insansa.com</a></p>
                                    <p>Phone: +919819847308</p>
                                </div>
                            </div>
                            <div className="contact-box">
                                <h3>Talent Hunt</h3>
                                <div className="contact-details">
                                    <p>Email: <a href="mailto:talent@insansa.com">talent@insansa.com</a></p>
                                    {/* <p>Phone: +919427755227</p> */}
                                </div>
                            </div>
                            <div className="contact-box">
                                <h3>Office Address</h3>
                                <div className="address-details">
                                    <p>A/ 221 Monalisa Business Center Manjalpur Vadodara Gujarat INDIA 390011</p>
                                </div>
                            </div>
                            {/* <div className="contact-box">
                                <h3>Office Timing</h3>
                                <div className="contact-details">
                                    <p>Monday - Friday: 9am - 5pm</p>
                                    <p>Saturday - Sunday: Closed</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="phone-image">
                            <img src ={Phone} alt="Phone" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;
