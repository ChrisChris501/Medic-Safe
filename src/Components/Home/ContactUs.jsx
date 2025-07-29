import React, { useState } from 'react';
import './Styles/ContactUs.css';
import ContactUsImg from '../../assets/ContactUsImg.png';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='Contact'>
      <div className='ContactImage'>
        <img className="ContactUs" src={ContactUsImg} alt="A man typing on Laptop"/>
      </div>
      <div>
        <div className='ContactText'>
          <h3>Get in touch with us</h3>
          <h4>Ready to take the next step towards better health?</h4>
          <h5>We are your gateway to personalized support and assistance.
            Whether you have questions about our platform, need technical assistance,
            or want to explore partnership opportunities, we are just a click away.
          </h5>
        <form id='ContactForm' onSubmit={handleSubmit}>
          <div className='Name'>
            <label></label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='Email'>
            <label></label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='Message'>
            <label></label>
            <textarea
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className='Button'>
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
