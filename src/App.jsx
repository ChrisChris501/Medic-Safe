import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import UserProfile from './Components/UserProfile';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import ServicesPage from './Components/Pages/ServicesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <UserProfile />
      <ContactUs />
      <ServicesPage />
      <Footer />
    </div>
  );
}

export default App;
