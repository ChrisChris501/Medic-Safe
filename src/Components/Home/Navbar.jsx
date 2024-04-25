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
            <Link key="Home" to="/">Home</Link>
        </li>
        <li className="Services">
            <Link key="About" to="/ServicesPage">Services</Link>
        </li>
        <li className="Blog">
            <Link key="Blog" to="/HealthEdu">Health Education</Link>
        </li>
        <li className="Profile">
            <Link key="Profile" to="/Profile">Profile</Link>
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