import React, { useState } from 'react';
import Navbar from '../Components/Nav';
import './About.css';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Bharat from '/images/BHARAT PHOTO.jpg'
import Divyendra from '/images/Divyendra Photo.jpg'
import Gerson from '/images/Gerson.png'


function About() {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const toggleModal = (member) => {
        setSelectedMember(member);
        setShowModal(!showModal);
    };

    const getLinkedInLink = (member) => {
        // Define LinkedIn links for each team member
        const linkedInLinks = {
            Bharat: "https://www.linkedin.com/in/bharat-gadkar-31455910/",
            Divyendra: "https://www.linkedin.com/in/divyendra-purohit-210b4317/",
            Gerson: "https://www.linkedin.com/in/gerson-dlima-56724515/"
        };
        return linkedInLinks[member];
    };

    return (
        <div>
            <Navbar />

            <section id="about-us" className="section">
                <div className="intro">
                    <h2>Our Team</h2>
                </div>
                <div className="container">
                    <div className="about-content">
                       
                        <div className="team">
                            <h3>People Who Made Insansa Technologies</h3>
                            <div className="team-member-container">
                                <div className="team-member">
                                    <img src={Bharat} alt="Team Member 1" />
                                    <h4>Bharat Gadkar</h4>
                                    <p>Co Founder</p>
                                    <button onClick={() => toggleModal('Bharat')}>More About Bharat</button>
                                </div>
                                <div className="team-member">
                                    <img src={Divyendra} alt="Team Member 2" />
                                    <h4>Divyendra Purohit</h4>
                                    <p>Co Founder</p>
                                    <button onClick={() => toggleModal('Divyendra')}>More About Divyendra</button>
                                </div>
                                <div className="team-member">
                                    <img src={Gerson} alt="Team Member 3" />
                                    <h4>Gerson Dilima</h4>
                                    <p>CTO</p>
                                    <button onClick={() => toggleModal('Gerson')}>More About Gerson</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-statistics">
                <div className="about-statistics">
                    <div className="statistics-container">
                        <div className="statistic">
                            <p>30</p>
                            <h4>Number of Employees</h4>
                           
                        </div>
                        <div className="statistic">
                            <p>10</p>
                            <h4>Number of Clients Served</h4>
                            
                        </div>
                    </div>
                </div>
            </section>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <h2>{selectedMember}'s Specialty</h2>
                        {selectedMember === 'Bharat' && (
                            <>
                                {/* <p>SAP Consulting</p> */}
                                <p>Bharat is a Certified Project Management Professional (PMP) with over 22 years of SAP and
                                    Functional experience in areas of IT & Financial Consulting.
                                    This includes over 18 years of experience in SAP spanning multi-country
                                    implementations, upgrades, and rollout projects, and includes Twelve Greenfield
                                    Implementations, One upgrade, One product development (certified by SAP), and Two
                                    Global Support Projects. Have spent most of my career working at the intersection of
                                    Technology and Finance. Specialized in designing and implementing business and
                                    technical solutions in Financial Transformation projects with a specific focus on the C&IP
                                    industry and has experience in implementing solutions across multiple industries viz.,
                                    Healthcare, Manufacturing, and Retail.</p>
                                <a href={getLinkedInLink(selectedMember)} target="_blank" className="linkedin-link">LinkedIn</a>
                            </>
                        )}
                        {selectedMember === 'Divyendra' && (
                            <>
                                {/* <p>Business Transformation</p> */}

                                <p>Divyendra Purohit is an SAP logistic solution architect. He has more
                                    than 15 years of SAP experience, including multi-country implementations,
                                    upgrades, and rollouts. He is a cofounder Insansa Technologies,
                                    an SAP consulting startup. He is an SAP S/4HANA certified sales
                                    and distribution consultant. He has worked on rebates (settlement
                                    management) and commission management functionality with SAP
                                    ERP, SAP S/4HANA, and Vistex.</p>

                                <a href={getLinkedInLink(selectedMember)} target="_blank" className="linkedin-link">LinkedIn</a>
                            </>
                        )}
                        {selectedMember === 'Gerson' && (
                            <>
                                {/* <p>Staffing Services</p> */}
                                <p>Gerson has worked at the intersection of technology and Finance for 23 years . Specialized in designing and implementing business and technical solutions in Financial Transformation projects with a specific focus on the C&IP industry and has experience in implementing solutions across multiple industries viz., Healthcare, Manufacturing, and Retail.
                                    Can add value with business leaders through all aspects of the transformation – from developing a vision and integrated design through successful implementation and user adoption. Have successfully helped clients gain operational efficiency, and improve planning, reporting, and decision-making capabilities through SAP S/4HANA-enabled business transformation initiatives.
                                    He has extensive experience in Project Management and has a proven track record in guiding programs with complex risks and stakeholder implications.</p>
                                <a href={getLinkedInLink(selectedMember)} target="_blank" className="linkedin-link">LinkedIn</a>
                            </>
                        )}
                    </div>
                </div>
            )}
            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>Have any questions? Feel free to reach out to us!</p>
                <Link to="/contact" className="contact-link">Contact Us</Link>
            </div>
            
            <Footer />
        </div>
    );
}

export default About;
