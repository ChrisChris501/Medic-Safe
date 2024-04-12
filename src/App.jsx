import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import LogIn from './Components/LogIn/LogIn';
import DoctorsSignUp from './Components/SignUpPages/DoctorsSignUp';
import PatientsSignUp from './Components/SignUpPages/PatientsSignUp';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/DoctorsSignUp" element={<DoctorsSignUp />} />
          <Route path="/PatientsSignUp" element={<PatientsSignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
