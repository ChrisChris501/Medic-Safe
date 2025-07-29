import React from 'react';
import ActivityHistory from '../../assets/ActivityHistory.png';
import HealthBook from '../../assets/HealthBook.png';
import Reading from '../../assets/Reading.png';
import Vector from '../../assets/Vector.png';
import { Link } from 'react-router-dom'; 
import './Styles/Services.css';
const Services = () => {
  return (
    <div className='LandingServices'>
        <div className='OurServices'>
            <h2>Our Services</h2>
            <h6>We offer a comprehensive array of features designed to cater to
                your health management needs. Our platform is committed to providing
                you with tools and resources that empower you to take control of your
                health journey. Experience the convenience of managing your medical
                records and health information in one centralized platform. Join us
                in enhancing healthcare coordination, fostering patient engagement,
                and achieving better health outcomes. Your journey to optimal
                health starts here. Explore our range of services below:</h6>
        </div>
      <div className='MedicalOffers'>
        <div className='MedicalHistory'>
        <img className="MedImg"src={ActivityHistory} alt="A notebook logo"/>
            <h2>Medical History</h2>
            <h6>Effortlessly document your medical history on our platform.
                Record past illnesses, surgeries, hospitalizations, and family
                medical history. This comprehensive record ensures that healthcare
                providers have a thorough understanding of your health background.
            </h6>
        </div>
        <div className='HealthRecord'>
        <img className="RecImg"src={HealthBook} alt="A health book logo"/>
          <h2>Health Record Integration</h2>
          <h6>Connect seamlessly with healthcare providers' electronic health
            record systems. Import and synchronize your medical records directly
            into our platform for a comprehensive overview of your health history.
          </h6>
        </div>
        <div className='HealthEdu'>
        <img className="EduImg"src={Reading} alt="Book logo"/>
          <h2>Health Education Resources</h2>
          <h6>Empower yourself with knowledge about managing your health
            effectively. Explore our library of health education resources,
            including articles, videos, and infographics, to stay informed
            and make informed decisions about your health.
          </h6>
        </div>
        </div>
        <div className='ServicesButton'>
          <Link to="/servicespage">
            <button>Go to Services <img src={Vector} alt="About Us" /></button>
          </Link>
        </div>
    </div>
  )
}

export default Services