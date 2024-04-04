import React from 'react';
import '../Components/Styles/Footer.css';
import WhiteLogo from '../assets/WhiteLogo.png';
import FooterFacebookLogo from '../assets/FooterFacebookLogo.png';
import FooterInstaLogo from '../assets/FooterInstaLogo.png';
import FooterTwitterLogo from '../assets/FooterTwitterLogo.png';
import FooterWhatsAppLogo from '../assets/FooterWhatsAppLogo.png';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Container1'>
        <div className='FooterLogo'>
          <img className="UserProfile" src={WhiteLogo} alt="Smiling patient and doctor" />
        </div>
        <div className='SocialIcons'>
          <img className="UserProfile" src={FooterFacebookLogo} alt="FacebookLogo" />
          <img className="UserProfile" src={FooterInstaLogo} alt="InstaLogo" />
          <img className="UserProfile" src={FooterTwitterLogo} alt="TwitterLogo" />
          <img className="UserProfile" src={FooterWhatsAppLogo} alt="WhatsAppLogo" />
        </div>
        <div className= 'FooterText'>
          <h5>&copy; 2023 Medi-safe, Inc.</h5>
        </div>
      </div>
      <div className='Container2'>
        <h5><a href="">Home</a></h5>
        <h5><a href="">Blog</a></h5>
        <h5><a href="">About us</a></h5>
        <h5><a href="">Contact us</a></h5>
        <h5><a href="">Profile info</a></h5>
      </div>
      <div className='Container3'>
        <h5>Services</h5>
        <h5>Personal Health Profile</h5>
        <h5>Medical History Documentation</h5>
        <h5>Integration with Healthcare Providers</h5>
        <h5>Health Metrics Tracking</h5>
        <h5>Contact Information </h5>
        <h5>Access to Health </h5>
      </div>
      <div className='Container4'>
        <h5>+234 808 000 0000</h5>
        <h5><a href="">medi-safe@gmail.com</a></h5>
        <h5><a href="">Advertise with us</a></h5>
        <h5><a href="">Privacy policy</a></h5>
      </div>
    </div>
  );
};

export default Footer;
