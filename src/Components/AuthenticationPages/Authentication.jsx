import React, { useState } from 'react';
import LogInImage from '../../assets/LogInImage.png';
import LOGO from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import './Authentication.css';

const Authentication = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate sending a verification code to the email
    // Replace this with actual authentication logic
    console.log('Sending verification code to:', email);
    // Redirect to the SixDigitAuth page
    window.location.href = "/SixDigitAuth";
  };

  return (
    <div className="AuthenticationWrapper">
      <div className="MediSafeAuthenticationcontainer">
        <div className='Auth'>
          <i className="fa-solid fa-arrow-left"></i>
          <h6><a key="Home" href="/Home">Go back to homepage</a></h6>
          <img className="AuthImg" src={LogInImage} alt="Picture of Doctor and patient"/>
        </div>
        <div className='AuthMediCurve'>
          <img className="Medic-Logo" src={LOGO} alt="MediC logo"/>
        </div>
      </div>
      <div className="AuthenticationContainer">
        {/* Right Side of the page */}
        <div className="Authentication">
          <form className='AuthenticationForm' onSubmit={handleSubmit}>
            <span>Verify Account</span>
            <p>
              Now that you have signed up, please verify your account.
              A unique six-digit code will be sent to your email through which you can
              authenticate your account.
            </p>
            <div className='AuthForm'>
              <h6>Verify using your email</h6>
              <input
                type="email"
                placeholder="dcn*********@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <h6> Not your email? <Link to="">Click here</Link></h6>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
