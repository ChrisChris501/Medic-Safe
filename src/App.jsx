import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import LogIn from './Components/LogIn/LogIn';
import DoctorsSignUp from './Components/SignUpPages/DoctorsSignUp';
import PatientsSignUp from './Components/SignUpPages/PatientsSignUp';
import Privacy_Security from './Components/Privacy&Security/Privacy_Security';
import Profile from './Components/Profile/Profile';
import PatientProfile from './Components/Profile/PatientProfile';
import DoctorProfile from './Components/Profile/DoctorProfile';
import HealthEdu from './Components/HealthEducationPage/HealthEdu';
import Authentication from './Components/AuthenticationPages/Authentication';
import SixDigitAuth from './Components/AuthenticationPages/SixDigitAuth';
import DoctorDashboard from './Components/DashBoardPages/DoctorDashboard';
import PatientDashboard from './Components/DashBoardPages/PatientDashboard';
import AuthSuccessful from './Components/AuthenticationPages/AuthSuccessful';
import NewCode from './Components/AuthenticationPages/NewCode';
import DoctorMedicalUpload from './Components/MedicalUpload/DoctorMedicalUpload';
import PatientMedicalUpload from './Components/MedicalUpload/PatientMedicalUpload';
import Notification from './Components/AuthenticationPages/Notification/Notification';
import ChoiceNotification from './Components/AuthenticationPages/Notification/ChoiceNotification';
import RejectedNotification from './Components/AuthenticationPages/Notification/RejectedNotification';
import AcceptedNotification from './Components/AuthenticationPages/Notification/AcceptedNotification';
import Footer from './Components/Home/Footer';


function App() {
  return (
      <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/DoctorsSignUp" element={<DoctorsSignUp />} />
          <Route path="/PatientsSignUp" element={<PatientsSignUp />} />
          <Route path="/Privacy_Security" element={<Privacy_Security />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PatientProfile" element={<PatientProfile />} />
          <Route path="/DoctorProfile" element={<DoctorProfile />} />
          <Route path="/HealthEdu" element={<HealthEdu />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/SixDigitAuth" element={<SixDigitAuth />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/AuthSuccessful" element={<AuthSuccessful />} />
          <Route path="/NewCode" element={<NewCode />} />
          <Route path="/DoctorMedicalUpload" element={<DoctorMedicalUpload />} />
          <Route path="/PatientMedicalUpload" element={<PatientMedicalUpload />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/ChoiceNotification" element={<ChoiceNotification />} />
          <Route path="/RejectedNotification" element={<RejectedNotification />} />
          <Route path="/AcceptedNotification" element={<AcceptedNotification />} />
        </Routes>
        <Footer />
    </div>
      </Router>
  );
}

export default App;
