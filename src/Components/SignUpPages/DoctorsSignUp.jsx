import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpPatients from '../../assets/SignUpPatients.png';
import LOGO from '../../assets/LOGO.png';
import GoogleIcon from '../../assets/GoogleIcon.png';
import './SignUp.css';

function DoctorsSignUp() {
  const [DoctorsId, setDoctorsId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUniqueIdChange = (event) => {
    setDoctorsId(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (DoctorsId.length < 10) {
      setErrorMessage('Doctor\'s ID must be at least 10 digits.');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      // Redirect to Authentication page if all details are valid
      window.location.href = "/Authentication";
    }
  };

  return (
    <div className="SignUpWrapper">
      <div className="MediSafeSignUPcontainer">
        <div className='SignUp'>
          <i className="fa-solid fa-arrow-left"></i>
          <h6><a key="Home" href="/Home">Go back to homepage</a></h6>
          <img className="SignUpImg" src={SignUpPatients} alt="Picture of Doctor and patient"/>
        </div>
        <div className='SignUpMediCurve'>
          <img className="Medic-Logo" src={LOGO} alt="MediC logo"/>
        </div>
      </div>
      <div className="SignUpContainer">
        <h5>Create Account (Doctors)</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            className="TextInput"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
            className="TextInput"
          />
          <input
            type="text"
            placeholder="Doctor's I.D"
            value={DoctorsId}
            onChange={handleUniqueIdChange}
            required
            className="TextInput"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
            className="TextInput"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="TextInput"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            className="TextInput"
          />
          <div className="CheckBox">
            <input
              type="checkbox"
              id="signupCheck"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="CheckBoxInput"
            />
            <label htmlFor="SignUpCheck">Remember me</label>
          </div>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          <div className='SignUpButton'>
            <button type="submit">Sign up</button>
          </div>
          <div className="SignUpLine"></div>
          <ul className="MediaOptions">
            <li>
              <a href="#" className="Google"><img src={GoogleIcon} alt="Google Logo" /> Sign in with Google</a>
            </li>
          </ul>
          <div className='SignUpFooter'>
            <h5>Already have an account? <Link to="/LogIn" className="CustomLink">Sign in</Link></h5>
            <h6>By clicking the create account button you agree to the
            <Link to="/Privacy_Security">Terms & Condition / Privacy policy</Link>
            </h6>
          </div>
          <div className='PatienceRedirection'>
            <h6>
              For patients to create an account, please click <Link to="/PatientsSignUp" className="CustomLink">here</Link> 
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorsSignUp;
