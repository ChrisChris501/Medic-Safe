import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Notification';
import { Link } from 'react-router-dom';
import {faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const RejectedNotification = () => {
  return (
    <div className='SuccessfulIdent'>
        <Link to="/PatientProfile">
            <div className='BlueHead'><FontAwesomeIcon icon={faTimesCircle} size="1.5x" style={{ color: 'white' }}/></div>
        </Link>
        <div className='Successful'>
        <FontAwesomeIcon icon={faExclamationCircle} size="2x" style={{ color: '#E73636' }}/>
        <h2>Rejected</h2>
        <h6>
          You rejected Dr Eric Augustine request to upload some <br></br>
          file to your medical history
        </h6>
     </div>
    </div>
  )
}

export default RejectedNotification

