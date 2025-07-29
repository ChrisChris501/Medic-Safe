import React from 'react'
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
<div >
    <div className='ProfileOption'>
        <h2>Click on one of the buttons below to navigate to your profile</h2>
    </div>
    <div className='GeneralProfile'>
    <div className='PatientLink'>
        <Link to="/PatientProfile">
            <button key="PatientProfile" onClick={() => {PatientProfile}}>Patients Profile</button>
        </Link>
    </div>
    <div className='DoctorLink'>
        <Link to="/DoctorProfile">
            <button key="DoctorProfile" onClick={() => {DoctorProfile}}>Doctors Profile</button>
        </Link>
    </div>
    </div>
</div>
  )
}

export default Profile