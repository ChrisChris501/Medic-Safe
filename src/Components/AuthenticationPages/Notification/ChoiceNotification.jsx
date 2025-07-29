import React from 'react';
import './Notification';
import { Link } from 'react-router-dom';
import DoctorProfileImage from '../../../assets/DoctorProfileImage.png';
import NotificationImage2 from '../../../assets/NotificationImage2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';


const ChoiceNotification = () => {
  return (
    <div className='NotifcationfulIdent'>
        <Link to="/PatientProfile">
            <div className='BlueHead'><FontAwesomeIcon icon={faTimesCircle} size="1.5x" style={{ color: 'white' }}/></div>
        </Link>
        <div className='NotificationHeader'>
            <h5>Notifications</h5>
            <h5>View All</h5>
        </div>
        <div className='Notification'>
        <img className="NotificationImg"src={DoctorProfileImage} alt="Doctor Profile Image"/>
            <h6>
             Dr Eric Augustine request to upload some <br></br> documents to your file.
            </h6>
            <div className='NotificationButton'>
          <Link to="/AcceptedNotification">
            <button className='Accepted'>Accept</button>
          </Link>
          <Link to="/RejectedNotification">
            <button className='Rejected'>Reject</button>
          </Link>
        </div>
      </div>
     <div className='Notification'>
     <img className="NotificationImg"src={NotificationImage2} alt="Doctor Profile Image"/>
        <h6>
          Dr Dan Emmanuel request to upload some <br></br>documents to your file
        </h6>
        <div className='NotificationButton'>
      <Link to="/AcceptedNotification">
          <button className='Accepted'>Accept</button>
      </Link>
      <Link to="/RejectedNotification">
          <button className='Rejected'>Reject</button>
      </Link>
    </div>
    </div>
  </div>
  )
}

export default ChoiceNotification;


