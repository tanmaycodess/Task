import React, { useState } from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import './Service.css';
import { Link } from 'react-router-dom';

function Service() {

    const [popupVisibility, setPopupVisibility] = useState({
        service1: false,
        service2: false,
        service3: false
    });

    const togglePopup = (service) => {
        setPopupVisibility({
            ...popupVisibility,
            [service]: !popupVisibility[service]
        });
    };

    return (
        <div>
            <Navbar />
            <div className="first">
                {/* Your image goes here */}
            </div>

            <div className="head">
                <h1>Our Services.</h1>
            </div>

            {/* <h1 className='heading'>Services</h1> */}
            {/* <div className="services-container">
                <div className="services5">
                    <div className="service5" style={{ flex: currentService === 1 ? '1 0 100%' : '0 0 0', transition: 'flex 0.5s ease' }}>
                        <img src="one.png" alt="Service 1" />
                        <div className="service-description">
                            <h3>Business Transformation</h3>
                            <p>At INSANSA TECHNOLOGIES, we believe that true growth comes from transforming your organization's core processes and strategies. With our comprehensive suite of SAP solutions, we empower businesses to navigate the challenges of today's dynamic markets and emerge stronger, more agile, and more competitive than ever before</p>
                        </div>
                    </div>
                    <div className="service5" style={{ flex: currentService === 2 ? '1 0 100%' : '0 0 0', transition: 'flex 0.5s ease' }}>
                        <img src="two.png" alt="Service 2" />
                        <div className="service-description">
                            <h3>SAP Consulting</h3>
                            <p>INSANSA TECHNOLOGIES provides expert guidance, advice, and services to businesses that use SAP. SAP consulting aims to help organizations maximize the value they get from their SAP implementations, improve business processes, and address their unique challenges and goals. Here's an overview of our SAP consulting services </p>
                        </div>
                    </div>
                    <div className="service5" style={{ flex: currentService === 3 ? '1 0 100%' : '0 0 0', transition: 'flex 0.5s ease' }}>
                        <img src="three.png" alt="Service 3" />
                        <div className="service-description">
                            <h3>Staffing</h3>
                            <p>Finding the right IT professionals can be a game-changer for your business. At INANSA TECHNOLOGIES we specialize in providing top-tier IT staffing solutions that match your organization's unique needs. Our mission is to bridge the gap between exceptional talent and forward-thinking companies, ensuring mutual success and growth.</p>
                        </div>
                    </div>
                </div>
                <button className="next-button" onClick={nextService}>{'>'}</button>
            </div> */}

            <div className="services1">
                <div className="services-container">
                    <div className="service" onClick={() => togglePopup('service1')}>
                        <h3>Business Transformation</h3>
                        {/* <p>Description of Service 1 goes here.</p> */}
                    </div>
                    <div className="service" onClick={() => togglePopup('service2')}>
                        <h3>SAP Consulting</h3>
                        {/* <p>Description of Service 2 goes here.</p> */}
                    </div>
                    <div className="service" onClick={() => togglePopup('service3')}>
                        <h3>Staffing</h3>
                        {/* <p>Description of Service 3 goes here.</p> */}
                    </div>
                </div>
            </div>


            {/* Pop-up containers */}

            <div className={popupVisibility.service1 ? "popup active" : "popup"}>
                <button className="close-button" onClick={() => togglePopup('service1')}>X</button>
                <h1>Business Transformation</h1>
                <hr />
                <div className="sr">
                    <h2>Strategic Roadmapping</h2>
                    <p>We work closely with you to chart a comprehensive roadmap that aligns your business goals with SAP solutions, ensuring a clear path to transformation</p>
                </div>
                <div className="sr">
                    <h2>Process Reengineering</h2>
                    <p>Rethink and optimize your business processes to increase efficiency, reduce costs, and align with industry best practices.</p>
                </div>
                <div className="sr">
                    <h2>Change Management</h2>
                    <p>Transformation requires buy-in and engagement from your team. Our change management strategies ensure a smooth transition and enthusiastic adoption.</p>
                </div>
            </div>

            <div className={popupVisibility.service2 ? "popup active" : "popup"}>
                <button className="close-button" onClick={() => togglePopup('service2')}>X</button>
                <h1>SAP Consulting</h1>
                <hr />
                <div className="sr">
                    <h2>Implementation</h2>
                    <p>Embarking on an SAP implementation journey is a strategic move that can redefine the way your business operates. At INSANSA we specialize in delivering seamless SAP implementation solutions that empower organizations to achieve their goals, optimize processes, and thrive in a competitive landscape</p>
                </div>
                <div className="sr">
                    <h2>Support</h2>
                    <p>What's something exciting your business offers? Say it here.When you're running critical business operations on SAP, having reliable support is non-negotiable. At INSANSA, we offer comprehensive SAP support services to ensure that your SAP environment remains efficient, secure, and optimized. Our mission is to be your trusted partner in maintaining the health and performance of your SAP systems.</p>
                </div>
                <div className="sr">
                    <h2>Strategic Consulting</h2>
                    <p>Beyond technical aspects, INSANSA provide strategic advice on how SAP can align with the client's long-term business objectives, helping them make informed decisions. Our SAP consulting services are tailored to each client's unique requirements, and you work closely with them to ensure that their SAP implementation not only meets their current needs but also supports their future growth and success</p>
                </div>
            </div>

            <div className={popupVisibility.service3 ? "popup active" : "popup"}>
                <button className="close-button" onClick={() => togglePopup('service3')}>X</button>
                <h1>Staffing</h1>
                <hr />
                <div className="sr">
                    <h2>Temporary Staffing</h2>
                    <p>Need skilled IT professionals for short-term projects? We have a diverse pool of experts ready to join your team and deliver results</p>
                </div>
                <div className="sr">
                    <h2>Permanent Staffing</h2>
                    <p>Build a strong, long-term IT team with our permanent staffing services. We help you find the right talent that fits your company culture</p>
                </div>
                <div className="sr">
                    <h2>Contract-to-Hire</h2>
                    <p>Unsure about a long-term commitment? Our contract-to-hire option lets you evaluate candidates on the job before making a permanent decision</p>
                </div>
            </div>

            {/* <section className='nowservice'>

                <div className='nowheading'>
                    <h2>Our firm offers an upgrade, migration, implementation, testing, AMS, integration services & facilitation for finance with focus on SAP as technology platform</h2>
                </div>

            </section> */}

            <div className="offer">
                <div className="offer-container">
                    <h1 className="offer-heading">What Our Firm Offers</h1>
                    <hr />
                    <div className="offer-item"> S/4HANA Finance & CFIN</div>
                    <div className="offer-item"> SAP subledger</div>
                    <div className="offer-item"> S/4HANA</div>
                    <div className="offer-item"> SAP BTP</div>
                    <div className="offer-item"> Data Migration</div>
                </div>
            </div>

            <div className="tools">
                <h1>Accelerators</h1>
            </div>
            <div className="tool">
                <h1>Timesheet management Tool</h1>
                <div className="des">
                    <p>The Timesheet Tool developed for Teams simplifies time tracking and management within the collaborative environment of Microsoft Teams. Seamlessly integrated into the Teams platform, this tool enables users to efficiently record, monitor, and manage their work hours, tasks, and projects. With intuitive features and user-friendly interface, it empowers teams to streamline their timekeeping processes, enhance productivity, and ensure accurate billing and reporting.</p>
                </div>
            </div>
            {/* <div className="tool">
                <h1>Second</h1> 
                    <div className="des1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas quia cupiditate atque fugit cumque neque eum, reprehenderit at, enim tempore deserunt! Facere, accusamus vitae qui est natus porro blanditiis!</p>
                    </div>
            </div> */}


            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>Have any questions? Feel free to reach out to us!</p>
                <Link to="/contact" className="contact-link">Contact Us</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Service;
