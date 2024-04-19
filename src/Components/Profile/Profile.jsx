import React from 'react'
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
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
  )
}

export default Profile