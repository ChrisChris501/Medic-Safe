import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import UserProfile from './UserProfile';
import ContactUs from './ContactUs';


function Home() {
  return (
    <div>
        <HeroSection />
        <AboutUs />
        <Services />
        <UserProfile />
        <ContactUs />
    </div>
  )
}

export default Home