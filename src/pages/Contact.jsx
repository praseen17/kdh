import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => (
  <motion.div className="kdh-contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
    <div className="kdh-contact-hero">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out for appointments, questions, or feedback.</p>
    </div>
    <div className="kdh-contact-main">
      <div className="kdh-contact-info-card">
        <h3>Contact Information</h3>
        <ul className="kdh-contact-info-list">
          <li><span className="kdh-contact-icon">📍</span>123 Street, New York, USA</li>
          <li><span className="kdh-contact-icon">📞</span>+012 345 67890</li>
          <li><span className="kdh-contact-icon">✉️</span>info@kokondadental.com</li>
        </ul>
        <div className="kdh-contact-map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30471.745498924734!2d78.49429417431641!3d17.317084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba26861bb550d%3A0x2cff2c9028691d04!2sKokonda&#39;s%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1750764941633!5m2!1sen!2sin" width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kokonda Dental Hospital Location"></iframe>
        </div>
      </div>
      <div className="kdh-contact-form-card">
        <h3>Send Us a Message</h3>
        <form className="kdh-contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={4} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </motion.div>
);

export default Contact; 