import React from 'react';
import './Styles/AboutUs.css';
import AboutUsBackgroundPicture from '../../assets/AboutUsBackgroundPicture.png';
import AboutUsTopPicture from '../../assets/AboutUsTopPicture.png';
const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <div className='AboutUsImages'>
          <img className="AboutUsImg1"src={AboutUsBackgroundPicture} alt="What we do" />
      </div>
        <div className='AboutUsText'>
            <h4> About Us</h4>
            <h3>
              Our comprehensive platform is designed to revolutionize
              the way you manage your health.
            </h3>
            <h5>
                <p>
                  We prioritize your well-being. Here's how we empower you:
                </p>
                <p>
                  <br></br>
                  By creating a secure profile tailored to your needs.
                  Input vital information such as age, gender, allergies, medical conditions, and medications.
                  Your profile forms the cornerstone for personalized health recommendations and medical records.
                </p>
                <br></br>
                <p>
                  This comprehensive record ensures healthcare providers understand your health background thoroughly. <br></br>
                  We seamlessly document your medical journey, including past illnesses, surgeries, hospitalizations, and family medical history.
                </p>
                <br></br>
                <p>
                  Benefit from tailored health recommendations based on your profile, medical history, and health metrics. 
                  Unlock insights for enhancing your overall well-being.
                </p>
            </h5>
        </div>
    </div>
  )
}

export default AboutUs