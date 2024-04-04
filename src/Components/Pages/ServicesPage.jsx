import React from 'react';
import ServicesLandingImg from '../../assets/ServicesLandingImg.png';
import ProfilePicture from '../../assets/ProfilePicture.png';
import ServicesDocImg from '../../assets/ServicesDocImg.png';
import ServicesEmergencyImg from '../../assets/ServicesEmergencyImg.png';
import ServicesHealth from '../../assets/ServicesHealth.png';
import ServicesSecurityImg from '../../assets/ServicesSecurityImg.png';
import MobilePicture from '../../assets/MobilePicture.png';
import ServicesPersonalizedImg from '../../assets/ServicesPersonalizedImg.png';
import ServicesEducationalResources from '../../assets/ServicesEducationalResources.png';
import '../../Components/Styles/ServicesPage.css';

// Card component
const Card = ({ image, title, description }) => {
  return (
    <div className='Card'>
      <img className="CardImg" src={image} alt="What we do"/>
      <h5>Medi-Safe 2024</h5>
      <h3>{title}</h3>
      <h6>{description}</h6>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className='ServicePage'>
        <div className='ServicesLanding'>
            <div className='ServicesLandingText'>
                <h3>Services</h3>
                <h6>The Medi-Safe services is committed to providing you with tools
                    and resources that empower you to take control of your health journey.
                    Explore our range of services below:
                </h6>
            </div>
            <img className="LandingImg" src={ServicesLandingImg} alt="Man on laptop"/>
        </div>
        <div className='ServicesCards'>
          <Card
            image={ProfilePicture}
            title="Personal Health Profile Creation"
            description="Embark on your health journey by creating a personalized profile. Input essential details such as age, gender, allergies, medical conditions, and medications. Your profile serves as the foundation for tailored health recommendations and medical record management."
          />
          <Card
            image={ServicesDocImg}
            title="Seamless Medical History Documentation"
            description="Effortlessly document your medical history on our platform. Record past illnesses, surgeries, hospitalizations, and family medical history. This comprehensive record ensures that healthcare providers have a thorough understanding of your health background."
          />
          <Card
            image={ServicesHealth}
            title="Integration with Healthcare Providers' Systems"
            description="Connect seamlessly with healthcare providers' electronic health record systems. Import and synchronize your medical records directly into our platform for a comprehensive overview of your health history."
          />
          <Card
            image={ServicesPersonalizedImg}
            title="Personalized Health Recommendations"
            description="Receive personalized health recommendations based on your profile, medical history, and health metrics. Benefit from insights and tips for improving your overall well-being and leading a healthier lifestyle."
          />
          <Card
            image={ServicesEmergencyImg}
            title="Emergency Contact Information Management"
            description="Input emergency contact details and designate individuals to be notified in case of a medical emergency. Your safety and peace of mind are our top priorities."
          />
          <Card
            image={ServicesSecurityImg}
            title="Robust Privacy and Security Measures"
            description="Rest assured that your medical information is safe and secure with us. We employ robust encryption and privacy measures to ensure the confidentiality and security of your data."
          />
          <Card
            image={MobilePicture}
            title="Mobile Accessibility for On-the-Go Health Management"
            description="Access your health information anytime, anywhere, with our mobile-friendly platform. Stay connected to your medical records and health information on your smartphone or tablet."
          />
          <Card
            image={ServicesEducationalResources}
            title="Access to Health Education Resources"
            description="Empower yourself with knowledge about managing your health effectively. Explore our library of health education resources, including articles, videos, and infographics, to stay informed and make informed decisions about your health."
          />
        </div>
        <div>

        </div>
    </div>
  )
}

export default ServicesPage;
