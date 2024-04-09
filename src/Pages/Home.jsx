import React, { useState } from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import wall2 from '/images/wall2.jpg';
import Raheja from '/images/Raheja.png';
import Indus from '/images/Indus.png';
import OTE from '/images/OTE.png';
import TieTo from '/images/TieTO.png';
import Luthra from '/images/Luthra1.png';

function Home() {
    const [currentService, setCurrentService] = useState(1);

    const nextService = () => {
        setCurrentService(currentService === 3 ? 1 : currentService + 1);
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current)
    };

    const clients = [
        { id: 1, name: 'Raheja', logo: Raheja },
        { id: 2, name: 'Indus Novateur', logo: Indus },
        { id: 3, name: 'OTE', logo: OTE },
        { id: 4, name: 'TietoEvry', logo: TieTo },
        { id: 5, name: 'Luthra', logo: Luthra },
    ];

    return (
        <div className="main">
            <Navbar />
            <div className="home-container">
                <div className="background-image">
                    {/* Your background image */}
                    <img src={wall2} className="bimg" alt="" />
                </div>
                <div className="company-name">
                    <h1>Insansa Technologies</h1>
                </div>
            </div>

            <div className="who">
                <h3>Who We Are</h3>
                    <p>INSANSA Technologies is formed by professionals with diversified experience of more than a decade in SAP consulting serving clients across industries & geographies. Our ERP experience is backed by equally enriching experience in domain.</p>
                    <p>We are young, agile & aspire to be your trusted partner to solve business challenges & address technology needs with collective knowledge & deep insights</p>   
            </div>
            <div className="overview">
                <h3>Grab Interest</h3>
                <p>Over the years, we have witnessed Technology is the catalyst to enhance processes & positively impact business outcomes irrespective of type of industry. There has been a paradigm shift in the way technology is conceived, delivered & consumed. We help our clients excel by offering Technology solutions relevant to changing times with broad portfolio of solutions & services that has immense utility across multiple functions and departments of modern global organizations</p>
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

            

            <div className="wins">
                <h1>Our Wins.</h1>

                <Slider {...settings}>
                    <div className="wins-info">
                        <p>Working with MNC's on various initiatives, training and consulting</p>
                    </div>
                    <div className="wins-info">
                        <p>Working with U.S based IT firms on consulting and staff augmentation in Supply chain, finance and technical area</p>
                    </div>
                    <div className="wins-info">
                        <p>Worked with one of the best consulting company for strategic consulting assignment in supply chain area for Bestseller client</p>
                    </div>
                    <div className="wins-info">
                        <p>Working as a strategic partner for new initiative in process harmonization for a German Recall MNC</p>
                    </div>
                    <div className="wins-info">
                        <p>Working on analytics assignment for a digital enterprise</p>
                    </div>
                    <div className="wins-info">
                        <p>implemented accounting interface for one of the saudi based company in various service and manufacturing business</p>
                    </div>
                    <div className="wins-info">
                        <p>Completed asignment related to SAP for one of the leading real estate company in residential and commercial segment</p>
                    </div>
                    <div className="wins-info">
                        <p>Successfully delivered corporate training in S/4HANA for a company engaged in delivering global technology and supply chain service to support cloud aggregation, data center management, logistics, technology distribution, mobility device</p>
                    </div>
                    <div className="wins-info">
                        <p>Implemented Product Hierarchy project and developed Daily P&L dashboard in BW and SAC area for one of the largest food processing company based out of sharjah</p>
                    </div>
                    <div className="wins-info">
                        <p>Working on Financial Transformation for one of the leading and well equipped processing house of surat</p>
                    </div>
        
                </Slider>

            </div>

            <div className="client-list">
                <h1>Clients we have worked with

                </h1>
                <div className="client-logos">
                    {clients.map(client => (
                        <div key={client.id} className="client">
                            <img src={client.logo} alt={client.name} />
                            <p>{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className="heading">Training</h1>
            <div className="training-box">
                <h2>Unlock Your Potential with Our Training Programs</h2>
                <p>Explore our range of expert-led training courses to enhance your skills and accelerate your career.</p>
                <Link to="/Train" className="training-link">Explore Training</Link>
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

export default Home;
