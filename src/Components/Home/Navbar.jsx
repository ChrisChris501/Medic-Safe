import React, { useState } from 'react';
import './Styles/NavBar.css';
import LOGO from '../../assets/LOGO.png';
import LogIn from '../LogIn/LogIn';
import DoctorsSignUp from '../SignUpPages/DoctorsSignUp';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav className="navigation">
        <img className="navLogo"src={LOGO} alt="My_HealthHubLogo"/>

        <div className={`menuIcon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
       <ul className={`navMenu ${isMenuOpen ? 'open' : ''}`}>
            <li className="home">
                <a key="Home" href="/">Home</a>
            </li>
            <li className="About Us">
                <a key="About" href="/Privacy_Security">About Us</a>
            </li>
            <li className="Services">
                <a key="About" href="/ServicesPage">Services</a>
            </li>
            <li className="Blog">
                <a key="Blog" href="/Blog">Blog</a>
            </li>
            <li className="Profile">
                <a key="Profile" href="/Profile">Profile</a>
            </li>
            <li className="LogIn">
                <Link to="/LogIn">
                    <button key="LogIn" onClick={() => {LogIn}}>Log in</button>
                </Link>
            </li>
            <li className='SignUp'>
                <Link to="/DoctorsSignUp">
                    <button key="SignUp" onClick={() => {DoctorsSignUp}}>Sign up</button>
                </Link>
             </li>
        </ul>
    </nav>
  )
}

export default Navbar