import React from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import './Success.css';
import { Link } from 'react-router-dom';

function SuccessStories() {
    return (
        <div>
            <Navbar />
            <div className="success-stories">
                <div className="success-header">
                    <h1>Success Stories</h1>
                    <p>Check out some of our success stories below:</p>
                </div>
                <div className="success-list">
                    <div className="success-item">
                        <h2>Success Story 1</h2>
                        <p>Streamlined payment processing and reduced high level of manual processing & maintenance cost​</p>
                    </div>
                    <div className="success-item">
                        <h2>Success Story 2</h2>
                        <p>Identified errors leading to monetary leakage and excessive exception handling by implementing a robust Budgeting system</p>
                    </div>
                    <div className="success-item">
                        <h2>Success Story 3</h2>
                        <p>Streamlined Chart of Accounts and enabled splitting transaction data into multiple control and recon accounts to facilitate external reporting ​</p>
                    </div>
                    <div className="success-item">
                        <h2>Success Story 4</h2>
                        <p>Financial and Controlling data were unified and harmonized for reporting and faster month end close.​</p>
                    </div>
                    <div className="success-item">
                        <h2>Success Story 5</h2>
                        <p>Reengineered complex business processes and created multiple reusable reports to meet reporting requirements of Ind AS ​​</p>
                    </div>
                    {/* Add more success stories here */}
                </div>

            </div>

            <div className="introduction">
                <p>Our Success stories are based Approach to resolve the issues with least disturbance to existing system and reusability</p>
                <p>The enactment of the companies Act, 2013 was one of the most significant legal reforms in India, aimed at bringing Indian Companies law in line with the global standards. In the midst of these market trends, we developed a Finance Reporting assessment approach & a finance structure road map to help drive growth, build operational excellence and optimize financial performance to outperform the competition. ​</p>
            </div>

            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>Have any questions? Feel free to reach out to us!</p>
                <Link to="/contact" className="contact-link">Contact Us</Link>
            </div>
            <Footer />
        </div>
    );
}

export default SuccessStories;
