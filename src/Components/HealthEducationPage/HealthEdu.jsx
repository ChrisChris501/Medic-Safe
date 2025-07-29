import React from 'react';
import EduLandingImg from '../../assets/EduLandingImg.png';
import Edu1 from '../../assets/Edu1.png';
import Edu2 from '../../assets/Edu2.png';
import Edu3 from '../../assets/Edu3.png';
import Edu4 from '../../assets/Edu4.png';
import Edu5 from '../../assets/Edu5.png';
import Edu6 from '../../assets/Edu6.png';
import './HealthEdu.css';

// Card component
const Card = ({ image, title, description }) => {
  return (
    <div className='HealthEduCard'>
      <img className="HealthEduCardImg" src={image} alt="What we do"/>
      <h5>Medic-Safe 2024</h5>
      <h3>{title}</h3>
      <h6>{description}</h6>
    </div>
  );
};

const HealthEdu = () => {
  return (
    <div className='HealthEduPage'>
        <div className='HealthEduLanding'>
            <div className='HealthEduLandingText'>
                <h3>Health Education Resouces</h3>
                <h6>The Medi-Safe Health Education platform is committed to providing you with tools
                    and resources that empower you to take control of your health journey.
                    Explore our range of services below:
                </h6>
            </div>
            <img className="HealthEduLandingImg" src={EduLandingImg} alt="Wine and fruits Picture"/>
        </div>
        <div className='HealthEduCards'>
          <Card
            image={Edu1}
            title="Benefits of fermented food"
            description="Foods that have undergone fermentation are easier to digest and retain more of their nutritional value. For instance, our digestive system can more easily absorb gluten thanks to the fermentation process in sourdough bread. Wheat's FODMAP levels are even reduced by it. Those who have IBS and other FODMAP difficulties, such as bloating after meals, will find it simpler to digest as a result."
          />
          <Card
            image={Edu2}
            title="Everyday wellness"
            description="Any action, no matter how minor, that promotes health and vitality can be considered to be part of wellness. Wellness includes eating healthily and exercising, but it also includes things like going on a stroll with a friend, practicing a balance exercise, and doing everyday tasks in novel ways."
          />
          <Card
            image={Edu3}
            title="The Ant-Inflammatory Diet"
            description="Understanding what inflammation is in the first place is useful in understanding why an anti-inflammatory diet might be beneficial and is currently one of the most talked-about diets. Anti-inflammatory diet. According to the Cleveland Clinic, places an emphasis on whole grains, vegetables, fruit, and healthy fats from plants. Inflammation is reduced by the antioxidants, healthy fats, and fiber."
          />
          <Card
            image={Edu4}
            title="Personalized Health Recommendations"
            description="There is no formula for wellness. Finding what works for you is key. We cut through the clutter and provide expert-verified health information with a practical perspective. We're here to encourage and assist you so that you can take daily steps toward living your greatest life."
          />
          <Card
            image={Edu5}
            title="Healthy eating"
            description="Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood. Healthy eating doesn’t have to be overly complicated."
          />
          <Card
            image={Edu6}
            title="Exercise and arthritis"
            description="An umbrella term for more than 150 distinct illnesses, arthritis. The correct word for this set of ailments is musculoskeletal illnesses, as they have an impact on the bones, muscles, and joints. Knowing a little something about the muscles, bones, and joints will help you better grasp how arthritis and other musculoskeletal disorders function."
          />
        </div>

        <div className='HealthEduBar'></div>
    </div>
  )
}

export default HealthEdu;
