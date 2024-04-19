import React from 'react'
import { Link } from 'react-router-dom';
import './PatientProfile.css';
import WhiteLogo from '../../assets/WhiteLogo.png';
import PatientProfileImage from '../../assets/PatientProfileImage.png';

const PatientProfile = () => {
  return (
    <div className='ThePatientProfile'>
      <div>
      <div className='ThePatientProfileLinks'>
      <div className="TheProfileLogo">
          <img className="navLogo"src={WhiteLogo} alt="My_HealthHubLogo"/>
      </div>
      <div className='PatientFirstLinks'>
            <Link to="/Dashboard">
              <button key="Dashboard" onClick={() => {Dashboard}}>Dashboard</button><br></br>
            </Link>
            <Link to="/Profile">
              <button key="Profile" onClick={() => {Profile}}>Profile</button><br></br>
            </Link>
            <Link to="/MedicalHistory">
              <button key="MedicslHistory" onClick={() => {MedicalHistory}}>Medical History</button><br></br>
            </Link>
            <Link to="/MedicalUpload">
              <button key="Medical Upload" onClick={() => {MedicalUpload}}>Medical Upload</button><br></br>
            </Link>
            <Link to="/HealthEdu">
              <button key="Health Edu" onClick={() => {MedicalUpload}}>Health Education</button><br></br>
            </Link>
            </div>
            <div className='PatientSeconLinks'>
            <Link to="/Privacy_Security">
              <button key="PrivacyPolicy" onClick={() => {PrivacyPolicy}}>Privacy Policy</button><br></br>            </Link>
            <Link to="/DoctorsSignUp">
              <button key="Settings" onClick={() => {Settings}}>Settings</button><br></br>
            </Link>
            <Link to="/DoctorsSignUp">
              <button key="Logout" onClick={() => {Logout}}>Logout</button><br></br>
            </Link>
          </div>
        </div>
      </div>
      <div className="ThePatientDetails">
      <div className='SearchDetails'>
      <input
          type="text"
          placeholder="Search"
          className="TextInput"
          />
          <div className='SideBarImage'>
            <img className="PatientProfileImg"src={PatientProfileImage} alt="Patient Profile Image"/>
          </div>
        </div>
      <div className="ThePatientProfileDetails">
          <h1>Dashboard/<h2>Profile</h2></h1>
      </div>
      <div className='TheProfileHeading'>
      <img className="HeadingImage"src={PatientProfileImage} alt="Patient Profile Image"/>
        <h3>Denzel Williams</h3>
      </div>
      <div className="ThePersonalDetails">
      <div className='CompletionPercentage'>
          <h6>Your profile is 100% completed</h6>
      <div className='PercentageBar'></div>
      </div>
          <div>
            <h3>Email</h3>
            <input type="email" id="email" name="email" placeholder="user@example.com" />
          </div>
          <div>
            <h3>Phone Number</h3>
            <input type="tel" id="phone" name="phone" placeholder="+234 456789903" />
          </div>
          <div>
            <h3>Location</h3>
            <input type="text" id="location" name="location" placeholder="No 3, Cassandra Street, Natana Abuja." />
          </div>
        </div>
      </div>
      <div className='TheProfileDetails'>
      <div className='TheOtherDetails'>
        <h3>Other Details</h3>
        <input
            type="Name"
            placeholder="Occupation"
            value= 'Occupation: Accountant'
            className="TextInput"
          />
          <input
            type="Date of Birth"
            placeholder="Date of Birth"
            value= 'Date of Birth: January 1, 1990'
            className="TextInput"
          />
          <input
            type="Status"
            placeholder="Marital Status"
            value= 'Marital Status: Married'
            className="TextInput"
          />
          <input
            type="Text"
            placeholder="Company"
            value= 'Company: ABC Corporation'
            className="TextInput"
          />
          <input
            type="Age"
            placeholder="Age"
            value= 'Age: 35'
            className="TextInput"
          />
        </div>
        <div className='TheMedicalDetails'>
          <h3>Medical Details</h3>
          <input
            type="Weight"
            placeholder="Weight"
            value= 'Weight: 70 kg'
            className="TextInput"
          />
          <input
            type="Height"
            placeholder="Height"
            value= 'Height: 5.11 inch'
            className="TextInput"
          />
          <input
            type="BMI"
            placeholder="BMI"
            value= 'BMI: 24.2'
            className="TextInput"
          />
            <input
            type="BMI"
            placeholder="BMI"
            value= 'BMI: 24.2'
            className="TextInput"
          />
          <input
            type="Genotype"
            placeholder="Genotype"
            value= 'Genotype: AA'
            className="TextInput"
          />
          <input
            type="Blood Group"
            placeholder="Blood Group"
            value= 'Blood Group: O+'
            className="TextInput"
          />
          <input
            type="HIV Status"
            placeholder="HIV Status"
            value= 'HIV Status: Negative'
            className="TextInput"
          />
      </div>
    <div className='PatientSideColor'></div>
  </div>
</div>
  )
}

export default PatientProfile