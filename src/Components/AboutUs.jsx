import React from 'react';
import '../Components/Styles/AboutUs.css';
import AboutUsBackgroundPicture from '../assets/AboutUsBackgroundPicture.png';
import AboutUsTopPicture from '../assets/AboutUsTopPicture.png';
const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <div className='AboutUsImages'>
        <div className='AboutUs1'>
          <img className="AboutUsImg1"src={AboutUsBackgroundPicture} alt="What we do"/>
        </div>
        <div className='AboutUs2'>
          <img className="AboutUsImg2"src={AboutUsTopPicture} alt="What we do"/>
        </div>
      </div>
        <div className='AboutUsText'>
            <h4> About Us</h4>
            <h3>
              Our comprehensive platform is designed to revolutionize
              the way you manage your health.
            </h3>
            <h5>
                <paragraph>
                  We prioritize your well-being. Here's how we empower you:
                </paragraph>
                <paragraph>
                  <br></br>
                  By creating a secure profile tailored to your needs.
                  Input vital information such as age, gender, allergies, medical conditions, and medications.
                  Your profile forms the cornerstone for personalized health recommendations and medical records.
                </paragraph>
                <br></br>
                <paragraph>
                  This comprehensive record ensures healthcare providers understand your health background thoroughly. <br></br>
                  We seamlessly document your medical journey, including past illnesses, surgeries, hospitalizations, and family medical history.
                </paragraph>
                <br></br>
                <paragraph>
                  Benefit from tailored health recommendations based on your profile, medical history, and health metrics. 
                  Unlock insights for enhancing your overall well-being.
                </paragraph>
            </h5>
            <div className='AboutUsButton'>
        <button>Learn more</button>
        </div>
        </div>
    </div>
  )
}

export default AboutUs