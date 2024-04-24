import React, { useState } from 'react';
import LogInImage from '../../assets/LogInImage.png';
import LOGO from '../../assets/LOGO.png';
import GoogleIcon from '../../assets/GoogleIcon.png';
import './LogIn.css';

function LogIn() {
  const [uniqueId, setUniqueId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

  const handleUniqueIdChange = (event) => {
    setUniqueId(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (uniqueId.length < 10) {
      setErrorMessage('Unique ID must be at least 10 digits.');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
    } else {
      // Redirect to profile page if all details are valid
      window.location.href = "/Profile";
    }
  };

  return (
    <div className="LogInWrapper">
      <div className="MediSafeLogIncontainer">
        <div className='LogIn'>
          <h6><a key="Home" href="/Home">Go back to homepage</a></h6>
          <img className="LogInImg" src={LogInImage} alt="Picture of Doctor and patient"/>
        </div>
        <div className='MediCurve'>
          <img className="Medic-Logo" src={LOGO} alt="MediC logo"/>
        </div>
      </div>
      <div className="LogIncontainer">
        <h5>Welcome back, <br /> Login to account</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Unique id"
            value={uniqueId}
            onChange={handleUniqueIdChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="CheckBox">
            <input
              type="checkbox"
              id="signupCheck"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="signupCheck">Keep me signed in</label>
          </div>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          <div className='LogInButton'>
            <button type="submit">Log in</button>
          </div>
          <div className="LogInLine"></div>
          <ul className="MediaOptions">
            <li>
              <a href="#" className="Google"><img src={GoogleIcon} alt="Google Logo" /> Sign in with Google</a>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
