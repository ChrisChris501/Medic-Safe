import React from 'react';
import './Notification.css';
import { Link } from 'react-router-dom';
import DoctorProfileImage from '../../../assets/DoctorProfileImage.png';
import NotificationImage2 from '../../../assets/NotificationImage2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';


const Notification = () => {
  return (
    <div className='NotifcationfulIdent'>
        <Link to="/Home">
            <div className='BlueHead'><FontAwesomeIcon icon={faTimesCircle} size="1.5x" style={{ color: 'white' }}/></div>
        </Link>
        <div className='NotificationHeader'>
            <h5>Notifcations</h5>
            <h5>View All</h5>
        </div>
        <div className='Notification'>
        <img className="NotificationImg"src={DoctorProfileImage} alt="Doctor Profile Image"/>
        <Link to="/ChoiceNotification">
            <h6>
             Dr Eric Augustine request to upload some <br></br> documents to your file.
            </h6>
        </Link>
        </div>
     <div className='Notification'>
     <img className="NotificationImg"src={NotificationImage2} alt="Doctor Profile Image"/>
     <Link to="/ChoiceNotification">
        <h6>
        Dr Dan Emmanuel request to upload some <br></br>documents to your file
        </h6>
    </Link>
    </div>
  </div>
  )
}

export default Notification;