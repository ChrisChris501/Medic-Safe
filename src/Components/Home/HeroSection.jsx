import React from 'react';
import './Styles/HeroSection.css';
import HeroImg from '../../assets/HeroImg.png';
import HeroImg2 from '../../assets/HeroImg2.png';

const HeroSection = () => {
  return (
    <div className='Hero'>
        <div className='HeroText'>
          <h1>Medi-Safe; Your Personal Health Hub</h1>
          <h5>Your one-stop solution for organizing,
            accessing, and sharing your health information securely.</h5>
          <div className='Hero-button'>
            <button>Get Started</button>
          </div>
        </div>
        <div className='HeroImg'>
          <div className='Background-color'></div>
          <img className="navLogo"src={HeroImg} alt="Patient and Health Praction discussing"/>
        </div>
        <div className='HeroImg2'>
          <div className='Background-color2'></div>
          <img className="navLogo"src={HeroImg2} alt="A Doctor at her Desk"/>
        </div>
    </div>
  )
}

export default HeroSection
