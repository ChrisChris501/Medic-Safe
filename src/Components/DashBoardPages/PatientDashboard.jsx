import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faThLarge, faUserGraduate, faClock, faUpload, faCalendar, faSearch, faHandHoldingUsd, faCog, faQuestion } from "@fortawesome/free-solid-svg-icons";
import Chart from 'chart.js/auto';
import PatientProfileImage from '../../assets/PatientProfileImage.png';
import WhiteLogo from '../../assets/WhiteLogo.png';
import './PatientDashboard.css';

const PatientDashboard = () => {
  useEffect(() => {
    // Initialize line chart when the component mounts
    const ctx = document.getElementById('lineChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Days of the week',
                data: [0, 10, 20, 30, 0, 50],
                backgroundColor: [
                    'rgba(85,85,85, 1)'
                ],
                borderColor: 'rgb(41, 155, 99)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });

    // Clean up function to destroy the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
      <div className="PatientDashboardContainer">
      <div className='PatientDashboardLinks'>
        <div className="PatientDashboardLogo">
            <img className="DashboardLogo" src={WhiteLogo} alt="My_HealthHubLogo"/>
        </div>
          <div className='PatientDashboardFirstLinks'>
            <Link to="/PatientDashboard">
              <button key="Dashboard"><FontAwesomeIcon icon={faThLarge} /> Dashboard</button><br />
            </Link>
            <Link to="/PatientProfile">
              <button key="Profile"><FontAwesomeIcon icon={faUserGraduate} /> Profile</button><br />
            </Link>
            <Link to="/PatientMedicalUpload">
              <button key="MedicalHistory"><FontAwesomeIcon icon={faClock} /> Medical History</button><br />
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
      <div className="PatientDashboardMain">
      <div className='BarMenu'>
        <div className='DashboardHeader'>
         <h2>Dashboard</h2>
        </div>
        <div className='SearchDetails'>
          <input
            type="text"
            placeholder="Search"
            className="TextInput"
          />
          <div className='SideBarImage'>
            <img className="DoctorProfileImg"src={PatientProfileImage} alt="Doctor Profile Image"/>
          </div>
        </div>
        </div>
      <div className="PatientWelcome" style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px', marginBottom: '15px', marginLeft: '10px' }}>
        Welcome Denzel,
      </div>
      <div className="welcome-message" style={{ marginLeft: '10px' }}>
        See what your dashboard looks like today
      </div>
      <div className="cards">
        <div className="card1">
          <div className="icon-box">
            <i className="fas fa-clock"></i>
          </div>
          <div className="card-content">
            <div className="number">10</div>
            <div className="card-name">Medical History</div>
          </div>
        </div>
        <div className="card2">
          <div className="icon-box">
            <i className="fas fa-upload"></i>
          </div>
          <div className="card-content">
            <div className="number">5</div>
            <div className="card-name">Medical Uploads</div>
          </div>
        </div>
        <div className="card3">
          <div className="icon-box">
            <i className="fas fa-calendar"></i>
          </div>
          <div className="card-content">
            <div className="number">8</div>
            <div className="card-name">Health Education</div>
          </div>
        </div>
      </div>
      <div className="charts">
        <div className="side-chart-details">
          <div className="side-chart-details2">
            <div className="dot4"></div>
            <div className="number">15</div>
            <div className="card-name">Total login this week</div>
          </div>
          <div className="side-chart-details3">
            <div className="dot5"></div>
            <div className="number">20</div>
            <div className="card-name">Total permission given this week</div>
          </div>
          <div className="side-chart-details4">
            <div className="dot6"></div>
            <div className="number">40</div>
            <div className="card-name">Total active</div>
          </div>
        </div>
        <div className="chart">
          <h2 className="chart-heading">Patient Weekly Statistics</h2>
          <div>
            <canvas id="lineChart"></canvas>
          </div>
        </div>
        <div className="pie-chart">
          <h3>Patient Analytics</h3>
          <div className="piechart"></div>
          <div className="piechart-details">
            <ul>
              <li>Consultations <span className="dot1"></span> <span className="piechart-percentage">100% completed</span></li>
              <li>Analysis <span className="dot2"></span> <span className="piechart-percentage">100% completed</span> </li>
              <li>Meetings <span className="dot3"></span> <span className="piechart-percentage">100% completed</span> </li>
              <li>Analysis <span className="dot2"></span> <span className="piechart-percentage">100% completed</span> </li>
              <li>Meetings <span className="dot1"></span> <span className="piechart-percentage">100% completed</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PatientDashboard;
