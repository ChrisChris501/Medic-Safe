import React, { useState } from 'react';
import './Styles/NavBar.css';
import LOGO from '../../assets/LOGO.png';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav className="navigation">
        <img className="navLogo"src={LOGO} alt="My_HealthHubLogo"
        />

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
                <a key="About" href="/about">About Us</a>
            </li>
            <li className="Blog">
                <a key="Blog" href="/Blog">Blog</a>
            </li>
            <li className="Profile">
                <a key="Profile" href="/Profile">Profile</a>
            </li>
            <li className="LogIn">
                <button key="LogIn" onClick={() => { /* Add your sign in logic here */ }}>Log in</button>
            </li>
            <li className="SignUp">
                <button key="SignUp" onClick={() => { /* Add your sign up logic here */ }}>Sign up</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar