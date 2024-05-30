import React from 'react'
import './MedicalHistory.css';
import { faSync } from "@fortawesome/free-solid-svg-icons";
import WhiteLogo from '../../assets/WhiteLogo.png';

const MedicalHistory = () => {
  return (
        <div className='TheDoctorProfile'>
          <div className='TheDoctorProfileLinks'>
            <div className="TheProfileLogo">
              <img className="navLogo" src={WhiteLogo} alt="My_HealthHubLogo" />
            </div>
            <div className='PatientFirstLinks'>
            <Link to="/PatientDashboard">
            <button key="Dashboard"><FontAwesomeIcon icon={faThLarge} /> Dashboard</button><br />
            </Link>
            <Link to="/PatientProfile">
            <button key="Profile"><FontAwesomeIcon icon={faUserGraduate} /> Profile</button><br />
            </Link>
            <Link to="/MedicalHistory">
            <button key="MedicalHistory"><FontAwesomeIcon icon={faClock} /> Medical Upload</button><br />
            </Link>
            <Link to="/DoctorMedicalUpload">
            <button key="MedicalUpload"><FontAwesomeIcon icon={faUpload} /> Medical History</button><br />
            </Link>
            <Link to="/HealthEdu">
            <button key="HealthEdu"><FontAwesomeIcon icon={faCalendar} /> Health Education</button><br />
            </Link>
        </div>
        <div className='PatientDashboardSecondLinks'>
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
              <input
                type="text"
                placeholder="Search"
                className="TextInput"
              />
              <div className='SideBarImage'>
                <img className="DoctorProfileImg" src={PatientProfileImage} alt="Doctor Profile Image" />
              </div>
            </div>
            <div className="TheUploadDetails">
              <div className='TheUploadWrapper'>
                <div className='DocUploads'>
                  <h2>Uploaded documents</h2>
                  <ul>
                    <li>Documents <h3>Records</h3></li>
                    <li>Scan <h4>6</h4></li>
                    <li>X-Ray <h4>2</h4></li>
                    <li>Hepatitis <h4>1</h4></li>
                    <li>Physical Screening <h4>2</h4></li>
                    <li>Biopsy <h4>1</h4></li>
                    <li>Pregnancy <h4>2</h4></li>
                    <li>Blood Test <h4>1</h4></li>
                  </ul>
                </div>
              </div>
              <div className='SaveDoc'>
                <h4><FontAwesomeIcon icon={faSync} /> Saving</h4>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default MedicalHistory