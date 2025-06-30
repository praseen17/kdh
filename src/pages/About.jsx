import React from 'react';
import './About.css';

const About = () => (
  <div className="kdh-about">
    {/* Hero Section */}
    <section className="kdh-about-hero">
      <h1>About Kokonda Dental Hospital</h1>
      <p>Excellence in dental care with a commitment to your comfort<br />and health</p>
    </section>

    {/* Our Story */}
    <section className="kdh-about-story">
      <h2>Our Story</h2>
      <p>
        Founded in 2008, Kokonda Dental Hospital has been at the forefront of dental excellence for over 15 years. What started as a small practice with a vision to provide compassionate, high-quality dental care has grown into a comprehensive dental facility serving thousands of patients.<br /><br />
        Our commitment to innovation, patient comfort, and exceptional results has made us a trusted name in dental care. We combine state-of-the-art technology with a warm, welcoming environment to ensure every patient receives the best possible experience.<br /><br />
        At Kokonda Dental Hospital, we believe that everyone deserves a healthy, beautiful smile. Our team of experienced professionals is dedicated to helping you achieve optimal oral health through personalized treatment plans and the latest dental techniques.
      </p>
      <div className="kdh-about-mission-vision">
        <h3>Our Mission</h3>
        <p>To provide exceptional dental care that combines advanced technology with compassionate service, ensuring every patient feels comfortable, informed, and confident in their treatment.</p>
        <h3>Our Vision</h3>
        <p>To be the leading dental healthcare provider, recognized for our commitment to excellence, innovation, and patient-centered care that transforms lives through healthy, beautiful smiles.</p>
      </div>
    </section>

    {/* Search Bar Placeholder */}
    <div className="kdh-about-search-placeholder" />

    {/* Meet Our Expert Team */}
    <section className="kdh-about-team">
      <h2>Meet Our Expert Team</h2>
      <div className="kdh-about-team-card">
        <div className="kdh-about-team-img-placeholder">
          <img src={require('../assets/images/dentist-with-female-patient.jpg')} alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        </div>
        <div className="kdh-about-team-info">
          <div className="kdh-about-team-name-placeholder" />
          <a href="#" className="kdh-about-team-profile-link">View Full Profile &rarr;</a>
        </div>
      </div>
    </section>

    {/* Camps Section */}
    <section className="kdh-about-camps">
      <h2>Our Dental Camps</h2>
      <p className="kdh-about-camps-intro">
        We regularly organize dental health camps to provide free dental care and education to underserved communities. Our commitment to community health extends beyond our clinic walls.
      </p>
      <div className="kdh-about-camps-grid">
        <div className="kdh-about-camp-card">
          <div className="kdh-about-camp-img-placeholder">
            <img src={require('../assets/images/dentist-with-child.jpg')} alt="Camp" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          </div>
          <div className="kdh-about-camp-content">
            <h3>Rural Health Camps</h3>
            <p>Free dental check-ups, cleanings, and basic treatments for rural communities with limited access to dental care.</p>
            <ul>
              <li>Free consultations</li>
              <li>Basic dental procedures</li>
              <li>Oral health education</li>
              <li>Follow-up care coordination</li>
            </ul>
          </div>
        </div>
        <div className="kdh-about-camp-card">
          <div className="kdh-about-camp-img-placeholder">
            <img src={require('../assets/images/dental-tools.jpg')} alt="Camp" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          </div>
          <div className="kdh-about-camp-content">
            <h3>School Dental Programs</h3>
            <p>Comprehensive dental health programs for school children, including screenings, education, and preventive treatments.</p>
            <ul>
              <li>Dental screenings</li>
              <li>Fluoride treatments</li>
              <li>Oral hygiene workshops</li>
              <li>Parent education sessions</li>
            </ul>
          </div>
        </div>
        <div className="kdh-about-camp-card">
          <div className="kdh-about-camp-img-placeholder">
            <img src={require('../assets/images/dentist-with-female-patient.jpg')} alt="Camp" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          </div>
          <div className="kdh-about-camp-content">
            <h3>Senior Citizen Camps</h3>
            <p>Specialized dental care for senior citizens, focusing on denture care, gum health, and age-related dental issues.</p>
            <ul>
              <li>Denture maintenance</li>
              <li>Gum disease treatment</li>
              <li>Oral cancer screening</li>
              <li>Medication review</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="kdh-about-camps-cta">
        <p>Interested in hosting a dental camp or volunteering?</p>
        <a href="/contact" className="kdh-about-camps-contact-btn">Contact Us &rarr;</a>
      </div>
    </section>

    {/* Hospital Information */}
    <section className="kdh-about-hospital-info">
      <h2>Hospital Information</h2>
      <div className="kdh-about-hospital-info-content">
        <div className="kdh-about-hospital-info-left">
          <h3>Facilities &amp; Equipment</h3>
          <ul>
            <li>State-of-the-art digital X-ray systems</li>
            <li>Advanced 3D imaging technology</li>
            <li>Laser dentistry equipment</li>
            <li>Sterilization and infection control systems</li>
            <li>Comfortable patient recovery areas</li>
            <li>Emergency dental care unit</li>
          </ul>
        </div>
        <div className="kdh-about-hospital-info-right">
          <h3>Operating Hours</h3>
          <div className="kdh-about-hospital-hours">
            <div>Monday - Friday</div><div>8:00 AM - 7:00 PM</div>
            <div>Saturday</div><div>9:00 AM - 5:00 PM</div>
            <div>Sunday</div><div>10:00 AM - 3:00 PM</div>
            <div className="kdh-about-hospital-emergency">Emergency Care</div><div className="kdh-about-hospital-emergency-time">24/7 Available</div>
          </div>
          <h3>Contact Information</h3>
          <ul className="kdh-about-hospital-contact">
            <li>123 Dental Street, Medical District, City 12345</li>
            <li>+1 (555) 123-4567</li>
            <li>info@kokondadental.com</li>
          </ul>
        </div>
      </div>
    </section>

    {/* CTA Button */}
    <div className="kdh-about-cta-row">
      <a href="/appointment" className="kdh-about-cta-btn">Schedule Your Consultation Today &rarr;</a>
    </div>
  </div>
);

export default About; 