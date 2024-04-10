import React, { useState } from 'react';
import LogInImage from '../../assets/LogInImage.png';
import LOGO from '../../assets/LOGO.png';
import Home from '../Home/Home';
import './LogIn.css';

function LogIn() {
  const [uniqueId, setUniqueId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleSubmit = async (event) => { // make the function async
    event.preventDefault();
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uniqueId,
          email,
          password,
          rememberMe,
        }),
      });

      if (response.ok) {
        // Login successful, handle accordingly (e.g., redirect to dashboard)
        console.log('Login successful');
        // Example: Redirect to dashboard
        // history.push('/dashboard');
      } else {
        // Login failed, handle accordingly (e.g., display error message)
        console.error('Login failed');
        const errorData = await response.json();
        console.error(errorData.message); // Assuming server sends error message
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className="LogInWrapper">
        <div className="MediSafeLogIncontainer">
        <div className='LogIn'>
          <i className="fa-solid fa-arrow-left"></i>
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
        </form>
        <div className="CheckBox">
            <input
              type="checkbox"
              id="signupCheck"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="signupCheck">Keep me signed in</label>
          </div>
          <div className='LogInButton'>
            <button type="submit" className="form_btn">Log in</button>
          </div>
          <div className="LogInLine"></div>
          <ul className="MediaOptions">
            <li>
                <a href="#" className="Google">
                  <i className="fab fa-google fa-3x"></i>
                  Sign in with Google
                </a>
            </li><br></br>
            <li>
                <a href="#" className="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                  Sign in with Facebook
                </a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default LogIn;
