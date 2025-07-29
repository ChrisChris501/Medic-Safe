import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AuthSuccessful.css';
import { Link } from 'react-router-dom';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const AuthSuccessful = () => {
  return (
    <div className='SuccessfulIdent'>
        <Link to="/Home">
            <div className='BlueHead'><FontAwesomeIcon icon={faTimesCircle} size="1.5x" style={{ color: 'white' }}/></div>
        </Link>
        <div className='Successful'>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ color: '#007D79' }}/>
        <h2>Successful</h2>
        <h6>
        Your request for a new code was successful,  <br></br>
        check your mail for the new code.
        </h6>
     </div>
    </div>
  )
}

export default AuthSuccessful