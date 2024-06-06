import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faThLarge, faUserGraduate, faClock, faUpload, faCalendar, faSearch, faHandHoldingUsd, faCog, faQuestion } from "@fortawesome/free-solid-svg-icons";
import Chart from 'chart.js/auto'; // Importing Chart.js library
import DoctorProfileImage from '../../assets/DoctorProfileImage.png';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  useEffect(() => {
    // Initialize doughnut chart when the component mounts
    const ctx2 = document.getElementById('doughnut').getContext('2d');
    const myChart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Consultations', 'Analysis', 'Meetings'],
        datasets: [{
          label: 'Patient Analytics',
          data: [20, 12, 35],
          backgroundColor: [

            '#484be9',
            '#e9ca1e',
            '#009D9A',
          ],
          borderColor: [
            '#484be9',
            '#e9ca1e',
            '#009D9A',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        cutout: 70,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

    // Clean up function to destroy the chart when the component unmounts
    return () => {
      myChart2.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="DoctorDashBoardcontainer">
      <div className='DoctorDashboardLinks'>
        <div className="DocDashboardLogo">
          <img className="DashboardLogo" src={WhiteLogo} alt="My_HealthHubLogo"/>
        </div>
        <div className='DoctorDashboardFirstLinks'>
          <Link to="/DoctorDashboard">
            <button key="Dashboard"><FontAwesomeIcon icon={faThLarge} /> Dashboard</button><br />
          </Link>
          <Link to="/DoctorProfile">
            <button key="Profile"><FontAwesomeIcon icon={faUserGraduate} /> Profile</button><br />
          </Link>
          <Link to="/DoctorMedicalUpload">
            <button key="MedicalUpload"><FontAwesomeIcon icon={faUpload} /> Medical Upload</button><br />
          </Link>
          <Link to="/DocumentScanner">
            <button key="DocumentScanner"><FontAwesomeIcon icon={faCalendar} /> Document Scanner</button><br />
          </Link>
        </div>
        <div className='DoctorDashboardSecondLinks'>
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
      <div className="DoctorDashboardMain">
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
            <img className="DoctorProfileImg"src={DoctorProfileImage} alt="Doctor Profile Image"/>
          </div>
        </div>
        </div>
        <div className="welcome" style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px', marginBottom: '15px', marginLeft: '10px' }}>
          Welcome Dr. Vanhausen,
        </div>
        <div className="DocWelcomeMessage" style={{ marginLeft: '10px' }}>
        Here's a snapshot of your activity and upcoming appointments.
        </div>
        <div className="cards">
          <div className="card1">
            <div className="card-content">
              <div className="number">45</div>
              <div className="card-name">Patients Scan</div>
            </div>
          </div>
          <div className="card2">
            <div className="card-content">
              <div className="number">10</div>
              <div className="card-name">Surgeries</div>
            </div>
          </div>
          <div className="card3">
            <div className="icon-box">
              <i className="fas fa-calendar"></i>
            </div>
            <div className="card-content">
              <div className="number">15 min</div>
              <div className="card-name">Wait time</div>
            </div>
          </div>
          <div className="calendar">
            <div className="month">April 2024</div>
            <div className="days">
              {[...Array(30)].map((_, index) => (
                <div className="day" key={index + 1}>{index + 1}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="DoctorChart">
            <h2 className="chart-heading">My Scheduled Appointment</h2>
            <div>
              <canvas id="doughnut"></canvas>
            </div>
            <div className="doughnut-details">
              <ul>
                <li>Consultations <span className="dot1"></span> <span className="doughnut-percentage">100% completed</span></li>
                <li>Analysis <span className="dot2"></span><span className="doughnut-percentage">100% completed</span> </li>
                <li>Meetings <span className="dot3"></span> <span className="doughnut-percentage">100% completed</span> </li>
              </ul>
            </div>
          </div>
          <div className="note-cards">
            <div className="note-card1">
              <h5 className="note-card-heading">Today's Schedule</h5>
              <div className="details"> 9:00am <span className="dot4"></span> Patient consultation <br /> 
                11:00am <span className="dot4"></span> Surgery <br /> 
                2:00pm <span className="dot4"></span> Follow up appointment</div>
            </div>
            <div className="note-card2">
              <h5 className="note-card-heading">Upcoming Appointments</h5>
              <div className="details"> Tomorrow 10:00am <span className="dot4"></span> Patient consultation John Smith<br /> 
                April 5th 1:30pm <span className="dot4"></span> Pre-Operative consultation Micheal Johnson <br /> 
                April 8th 9:30pm <span className="dot4"></span> Post-Operative follow-up Emily Nelson</div>
            </div>
            <div className="note-card3">
              <h5 className="note-card-heading">Patient Notification</h5>
              <div className="details"> New Appointment Request <span className="dot4"></span> Mary Thomson. April 12th 5:00pm <br /> 
                Appointment Reminder <span className="dot4"></span> Grace Philips 9:00am <br /> 
                Patient Massage <span className="dot4"></span> Rebecca Linus. Rehabilitation inquiry</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
