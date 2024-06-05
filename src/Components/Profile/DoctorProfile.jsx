import React from 'react'
import { Link } from 'react-router-dom';
import './DoctorProfile.css';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faThLarge, faUserGraduate, faClock, faUpload, faCalendar, faSearch, faHandHoldingUsd, faCog, faQuestion } from "@fortawesome/free-solid-svg-icons";
import DoctorProfileImage from '../../assets/DoctorProfileImage.png';

const DoctorProfile = () => {
  return (
    <div div className='TheDoctorProfile'>
      <div className='TheDoctorProfileLinks'>
        <div className="TheProfileLogo">
            <img className="navLogo"src={WhiteLogo} alt="My_HealthHubLogo"/>
        </div>
      <div className='DoctorFirstLinks'>
            <Link to="/DoctorDashboard">
              <button key="Dashboard"><FontAwesomeIcon icon={faThLarge} /> Dashboard</button><br />
            </Link>
            <Link to="/DoctorProfile">
              <button key="Profile"><FontAwesomeIcon icon={faUserGraduate} /> Profile</button><br />
            </Link>
            <Link to="/DoctorMedicalUpload">
              <button key="MedicalUpload"><FontAwesomeIcon icon={faUpload} /> Medical Upload</button><br />
            </Link>
           </div>
          <div className='DoctorProfileSecondLinks'>
            <Link to="/Privacy_Security">
              <button key="PrivacyPolicy"><FontAwesomeIcon icon={faHandHoldingUsd} /> Privacy Policy</button><br />
            </Link>
            <Link to="/Settings">
              <button key="Settings"><FontAwesomeIcon icon={faCog} /> Settings</button><br />
            </Link>
            <Link to="/LogOut">
              <button key="Logout"><FontAwesomeIcon icon={faQuestion} /> Logout</button><br />
            </Link>
          </div>
        </div>
  <div className="TheDoctorDetails">
    <div className='SearchDetails'>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="TextInput"
          />
        </div>
          <div className='SideBarImage'>
            <FontAwesomeIcon icon={faBell} />
            <img className="PatientProfileImg"src={DoctorProfileImage} alt="Patient Profile Image"/>
          </div>
        </div>
       <div className="TheDoctorProfileDetails">
        <h1>Dashboard/<h2>Doctor's Profile</h2></h1>
        <div className='DoctorDetails'>
        <div className='DoctorPrimaryDetails'>
          <img className="DoctorProfileImg"src={DoctorProfileImage} alt="Doctor Profile Image"/>
          <h3>Dr. Eric Augustine</h3>
          <h5>Orthopedic Surgery</h5>
          <h5>Sports Medicine</h5>
        <div className='DoctorBio'>
          <h4>Bio</h4>
          <h6>
          Dr. Eric Augustine is dedicated to providing personalized orthopedic
          care with a focus on restoring function and mobility for patients of all ages.
          With expertise in both orthopedic surgery and sports medicine, Dr. Augustine
          combines advanced techniques with compassionate care to help patients achieve
          optimal outcomes.
          </h6>
         </div>
        </div>
        <div className='DoctorLocation'>
          <div className='PercentageCompletion'>
            <h6>Your profile is 100% completed</h6>
            <div className='CompletionBar'></div>
          </div>
         <div>
            <h3>Email Address</h3>
            <input type="email" id="email" name="email" placeholder="user@example.com" />
          </div>
          <div>
            <h3>Phone no</h3>
            <input type="tel" id="phone" name="phone" placeholder="+234 9176456354" />
          </div>
          <div>
            <h3>Office Address</h3>
            <input type="text" id="location" name="location" placeholder="No.1 Gbolahan Street, Magodo GRA." />
          </div>
          <div>
            <h3>City, State</h3>
            <input type="text" id="State" name="State" placeholder="Kosofe, Ikeja-Lagos" />
          </div>
       </div>
       <div className='MoreDetails'>
          <div className='appointment'>
            <h3>Available for appointment:</h3>
            <input type="text" id="Appointment" name="Appointment" placeholder="Monday - Friday: 9:00 AM - 5:00 PM Saturday: By appointment only" />
          </div>
          <div>
            <h3>Country</h3>
            <input type="text" id="Country" name="Country" placeholder="Nigeria" />
          </div>
          <div>
            <h3>Languages</h3>
            <input type="text" id="Languages" name="Languages" placeholder="English, Igbo, Yoruba, Hausa, French" />
          </div>
        </div>
      </div>
      <div>
    </div>
  </div>
      <div id='DoctorSecondaryDetails'>
        <div className='SecondaryDetails'>
        <div className='FirstDetails'>
         <div>
            <h4>Education and Qualifications</h4>
            <li>Doctor of Medicine (MD), University of Cityville School of Medicine</li>
            <li>Residency in Orthopedic Surgery, Cityville General Hospital</li>
            <li>Fellowship in Sports Medicine, Sports Institute of Excellence</li>
            </div>
          <div>
            <h4>Professional Experience</h4>
            <li>Orthopedic Surgeon, Cityville Orthopedics Center</li>
            <li>Team Physician, Cityville Spartans Football Team</li>
            <li>Consultant Orthopedic Surgeon, Sports Institute of Excellence</li>
         </div>
         </div>
         <div className='SecondDetails'>
         <div>
            <h4>Treatment Services Offered:</h4>
            <li>Arthroscopic Surgery</li>
            <li>Joint Replacement </li>
            <li>Fracture Care</li>
            <li>Sports Injury Treatment</li>
            <li>Rehabilitation Services</li>
          <div>
            <h4>Social Media Links</h4>
            <h6>Connect with Dr. Vanhausen on </h6>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default DoctorProfile