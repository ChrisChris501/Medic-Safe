import React from 'react'
import LogInImage from '../../assets/LogInImage.png';
import KnowledgeSharing from '../../assets/KnowledgeSharing.png';

function LogIn() {
  return (
    <div>
      <div className="wrapper">
      <div className="container">
        <div className="login-container">
          <form>
            <h5>Welcome back, <br /> Login to account</h5>
            <input type="text" placeholder="Unique id" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <i className='bx bx-hide eye-icon'></i>
            <div className="checkbox">
              <input type="checkbox" id="signupCheck" />
              <label htmlFor="signupCheck">Remember me</label>
            </div>

            <button className="form_btn">Login</button>

            <div className="line"></div>

            <div className="media-options">
              <a href="#" className="field facebook">
                <i className="fa-brands fa-facebook" style={{ marginRight: '20px', fontSize: '20px' }}></i>
                <span>Sign in with Facebook</span>
              </a>
              <a href="#" className="field google">
                <i className="fab fa-google fa-3x" style={{ marginRight: '21px', fontSize: '20px' }}></i>
                <span> Sign in with Google</span>
              </a>
            </div>
          </form>
        </div>
        <div className="medi-safe-container">
        <a href="./Home" className="field google">Go back to homepage</a>
          <i className="fa-solid fa-arrow-left"></i>
          <img className="LogInImg" src={LogInImage} alt="Picture of Doctor and patient"/>
          <h1>Medic-Safe</h1>
          <img className="KnowledgeImg" src={KnowledgeSharing} alt="Knowledge logo"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LogIn