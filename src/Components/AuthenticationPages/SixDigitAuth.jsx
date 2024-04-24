import React, { useState } from 'react';
import LogInImage from '../../assets/LogInImage.png';
import LOGO from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import './Authentication.css';

const SixDigitAuth = () => {
  const [codeInputs, setCodeInputs] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCodeChange = (index, value) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = value;
    setCodeInputs(newCodeInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = codeInputs.join('');
    if (code.length === 6) {
      // Simulate verifying the code (replace with actual logic)
      console.log('Verifying code:', code);
      // Redirect to the AuthSuccessful page
      window.location.href = "/AuthSuccessful";
    } else {
      setErrorMessage('Please enter exactly 6 digits for the authentication code.');
    }
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
          <form className='SixDigitAuth' onSubmit={handleSubmit}>
            <div className='AuthDetails'>
              <span>Authenticate</span>
              <p>Please put in the six-digit code that was sent to your email to authenticate your account.</p>
            </div>

            <div className='AuthenticationBox'>
              <h6>Input code</h6>
              <div className="AuthBox">
                {codeInputs.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(event) => handleCodeChange(index, event.target.value)}
                  />
                ))}
              </div>
            </div>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            <div className="click-here">
              <h6>Didn't get a code?<a href="#"> Resend code</a></h6>
              <button type="submit">Verify</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SixDigitAuth;
