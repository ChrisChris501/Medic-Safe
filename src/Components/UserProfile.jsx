import React from 'react';
import '../Components/Styles/UserProfile.css';
import UserProfilePicture from '../assets/UserProfilePicture.png';

const UserProfile = () => {
  return (
    <div className='Profile'>
        <div className='ProfileText'>
            <h3>User Profile</h3>
            <h4>We employ robust encryption and privacy measures to
                safeguard your medical information.
            </h4>
            <h5>Step into your personal health profile page - the central
                hub for managing your health information and empowering your
                well-being. Here, you will find a secure and tailored space
                designed to cater to your unique health needs and preference.
                With us, you get to explore the features and functionalities
                of your personal health profile page.
            </h5>
            <h5>
            Your personal health profile page is more than just a collection of
            information, -it is a powerful tool for empowering you to take control
            of your health journey. By providing a secure and tailored space for
            managing your health information, we help you make informed decisions
            and achieve better health outcomes.
            </h5>
            <button>Go to Profile</button>
        </div>
        <div className='ProfileImg'>
        <img className="UserProfile"src={UserProfilePicture} alt="Smiling patient and doctor"/>
        </div>
    </div>
  )
}

export default UserProfile