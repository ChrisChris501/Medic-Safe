import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Notification';
import { Link } from 'react-router-dom';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const AcceptedNotification = () => {
  return (
    <div className='SuccessfulIdent'>
        <Link to="/PatientProfile">
            <div className='BlueHead'><FontAwesomeIcon icon={faTimesCircle} size="1.5x" style={{ color: 'white' }}/></div>
        </Link>
        <div className='Successful'>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ color: '#42BE65' }}/>
        <h2>Accepted</h2>
        <h6>
          You accepted Dr Eric Augustine request to upload some
          file to your medical history
        </h6>
     </div>
    </div>
  )
}

export default AcceptedNotification;