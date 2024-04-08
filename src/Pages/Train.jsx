import React, { useState } from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import './train.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import approach from '/images/approach.png'


function TrainingProgram() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current)
    };

    return (
        <div className="training-program">
            <Navbar />

            <h1>Our Expertise.</h1>

            <Slider {...settings}>
                <div className="training-info">
                    <h2>Record to Report</h2>
                    <p>Finance and Controlling</p>
                </div>
                <div className="training-info">
                    <h2>Order to cash</h2>
                    <p>Sales and Distribution</p>
                </div>
                <div className="training-info">
                    <h2>Procure to pay</h2>
                    <p>Materials Management and Warehouse Management</p>
                </div>
                <div className="training-info">
                    <h2>Plant Maintenance</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>Forecast to Deliver</h2>
                    <p>Production Planning</p>
                </div>
                <div className="training-info">
                    <h2>Project System</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>HCM and SuccessFactors</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>BW/B4HANA</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>Extended Warehouse Management</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>Global Trade Service : GTS</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>Funds Management</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                <div className="training-info">
                    <h2>Treasury Management</h2>
                    {/* <p>Sales and Distribution</p> */}
                </div>
                {/* Add more training programs here */}
            </Slider>

            <div className="approach">
                <h1>Training approach and Expected outcome </h1>

                <img src={approach} alt="train" />
            </div>

            <div className="further-details">
                <h2>For Further Details</h2>
                <p>For further details about our training programs or to inquire about customized training solutions, please contact us:</p>
                <Link to="/contact" className="contact-button">Contact Us</Link>
            </div>

            <Footer />
        </div>
    );
}

export default TrainingProgram;
