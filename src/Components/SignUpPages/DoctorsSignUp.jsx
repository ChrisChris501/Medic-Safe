import React from 'react';

function DoctorsSignUp() {
  return (
        <div className="wrapper">
          <div className="container">
            <div className="login-container">
            <h2>Create Account</h2>
              <form>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last name" required />
                <input type="text" placeholder="Doctor's I.D" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <i class="bx bx-hide eye-icon"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <i class="bx bx-hide eye-icon"></i>
                <div className="checkbox">
                  <input type="checkbox" id="signupCheck" />
                  <label for="signupCheck">Remember me</label>
                </div>
                <button className="form_btn">SignUp</button>
                <div className="line"></div>
                <div className="media-options">
                  <a href="#" className="field facebook">
                    <i
                      className="fa-brands fa-facebook"
                      style={{ marginRight: '20px', fontSize: '20px' }}
                    ></i>
                    <span>Sign in with Facebook</span>
                  </a>
                  <a href="#" className="field google">
                    <i
                      className="fab fa-google fa-3x"
                      style={{ marginRight: '21px', fontSize: '20px' }}
                    ></i>
                    <span> Sign in with Google</span>
                  </a>
                </div>
                <div className="sign-in">
                  Already have an account?
                  <a href="#">Sign In</a>
                </div>
                <div className="terms">
                  By clicking the create account button, you agree to the
                  <a href="#">Terms & Condition? Privacy policy</a>
                </div>
              </form>
            </div>
            <div className="medi-safe-container">
              <p>Go back to homepage</p>
              <i className="fa-solid fa-arrow-left"></i>
              <img
                src="./images/Signup Screens.png"
                style={{ height: '250px', paddingLeft: '100px' }}
              />
              <h1>Medic-Safe</h1>
              <img
                src="/images/Knowledge Sharing.png"
                style={{
                  height: '35px',
                  paddingLeft: '240px',
                  marginTop: '80px',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
          </div>
        </div>
  );
}

export default DoctorsSignUp;
