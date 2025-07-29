import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/HeroSection.css';
import HeroImg from '../../assets/HeroImg.png';
import HeroImg2 from '../../assets/HeroImg2.png';

const HeroSection = () => {
  return (
    <div className="Hero">
      <div className="HeroText">
        <h1>Medic-Safe; Your Personal Health Hub</h1>
        <h5>
          Your one-stop solution for organizing, accessing, and sharing your
          health information securely.
        </h5>
        <div className="HeroSectionLink">
          <Link to="/DoctorsSignUp" className="HeroLink">
            <button>Get started</button>
          </Link>
        </div>
      </div>
      <div className="HeroImg">
        <img
          className="navLogo"
          src={HeroImg}
          alt="Patient and Health Praction discussing"
        />
      </div>
      <div className="HeroImg2">
        <img className="navLogo" src={HeroImg2} alt="A Doctor at her Desk" />
      </div>
    </div>
  );
}

export default HeroSection
