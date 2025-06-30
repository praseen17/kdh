import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import heroBg from '../assets/images/image.png';

const Home = () => (
  <div className="kdh-home">
    {/* Hero Section */}
    <motion.section className="kdh-hero-diagonal" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="kdh-hero-bg-img" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="kdh-hero-overlay" />
      <div className="kdh-hero-content-diagonal">
        <h1 className="kdh-hero-title-diagonal">SMILE WITH A STYLE</h1>
        <div className="kdh-hero-btns-diagonal">
          <a href="/appointment" className="kdh-hero-cta-diagonal">book appointment</a>
          <a href="/about" className="kdh-hero-secondary-diagonal">Meet Our Doctors</a>
        </div>
         </div>
    </motion.section>

    {/* Welcome Section */}
    <motion.section className="kdh-welcome-section-diagonal" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="kdh-welcome-left-diagonal">
        <h2>Welcome to Kokonda Dental Hospital</h2>
        <p>We provide comprehensive dental care with a focus on patient comfort and exceptional results. Our experienced team is dedicated to helping you achieve a healthy, beautiful smile.</p>
        <a href="/appointment" className="kdh-hero-cta-diagonal">book appointment</a>
      </div>
      <div className="kdh-welcome-right-diagonal">
        <img src={require('../assets/images/dentist-with-female-patient.jpg')} alt="Hospital" />
      </div>
    </motion.section>

    {/* Leadership Section */}
    <motion.section className="kdh-leadership-section-diagonal" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <h2 className="kdh-leadership-title-diagonal">Our Leaderships</h2>
      <div className="kdh-leadership-cards-diagonal">
        <div className="kdh-leader-card-diagonal">
          <div className="kdh-leader-hexagon">
            <img src={require('../assets/images/dentist-with-female-patient.jpg')} alt="Doctor" />
          </div>
          <div className="kdh-leader-info-diagonal">
            <h3>DOCTOR NAME</h3>
            <p>CEO</p>
          </div>
        </div>
        <div className="kdh-leader-card-diagonal">
          <div className="kdh-leader-hexagon">
            <img src={require('../assets/images/dentist-with-child.jpg')} alt="Doctor" />
          </div>
          <div className="kdh-leader-info-diagonal">
            <h3>DOCTOR NAME</h3>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Services Section */}
    <motion.section className="kdh-section kdh-services-section-diagonal" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <h2 className="kdh-services-title-diagonal">Our Services</h2>
      <p className="kdh-services-desc-diagonal">We offer comprehensive dental care services designed to meet all your oral health needs with the highest standards of care and comfort.</p>
      <div className="kdh-services-list-diagonal">
        <div className="kdh-service-card-diagonal">
          <img src={require('../assets/icons/download.png')} alt="General Dentistry" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <h3>General Dentistry</h3>
          <p>Comprehensive oral health care including cleanings, fillings, extractions, and preventive treatments to maintain your dental health.</p>
          <a href="/services/family-dentistry" className="kdh-learn-more-diagonal">Learn More &rarr;</a>
        </div>
        <div className="kdh-service-card-diagonal">
          <img src={require('../assets/icons/download (1).png')} alt="Cosmetic Dentistry" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <h3>Cosmetic Dentistry</h3>
          <p>Transform your smile with veneers, teeth whitening, bonding, and other aesthetic treatments for a confident, beautiful smile.</p>
          <a href="/services/cosmetic-dentistry" className="kdh-learn-more-diagonal">Learn More &rarr;</a>
        </div>
        <div className="kdh-service-card-diagonal">
          <img src={require('../assets/icons/download (2).png')} alt="Orthodontics" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <h3>Orthodontics</h3>
          <p>Straighten your teeth with traditional braces, clear aligners, and other orthodontic solutions for proper bite alignment.</p>
          <a href="/services/invisalign" className="kdh-learn-more-diagonal">Learn More &rarr;</a>
        </div>
        <div className="kdh-service-card-diagonal">
          <img src={require('../assets/icons/download (3).png')} alt="Oral Surgery" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <h3>Oral Surgery</h3>
          <p>Advanced surgical procedures including wisdom tooth extraction, dental implants, and corrective jaw surgery performed with precision.</p>
          <a href="/services/oral-surgery" className="kdh-learn-more-diagonal">Learn More &rarr;</a>
        </div>
        <div className="kdh-service-card-diagonal">
          <img src={require('../assets/icons/4827454.png')} alt="Emergency Care" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <h3>Emergency Care</h3>
          <p>Immediate dental care for urgent situations including severe pain, trauma, infections, and other dental emergencies.</p>
          <a href="/services/emergency-dental-care" className="kdh-learn-more-diagonal">Learn More &rarr;</a>
        </div>
        <div className="kdh-service-card-diagonal">
          <img src={require('../assets/icons/images (1).png')} alt="Preventive Care" style={{ width: 48, height: 48, objectFit: 'contain' }} />
          <h3>Preventive Care</h3>
          <p>Regular check-ups, professional cleanings, fluoride treatments, and sealants to prevent dental problems before they start.</p>
          <a href="/services/preventive-care" className="kdh-learn-more-diagonal">Learn More &rarr;</a>
        </div>
      </div>
      <a href="/appointment" className="kdh-cta-btn-diagonal">Schedule Your Appointment &rarr;</a>
    </motion.section>

    {/* Testimonials Section */}
    <motion.section className="kdh-section kdh-testimonials-section-diagonal" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <h2 className="kdh-testimonials-title-diagonal">What Our Patients Say</h2>
      <p className="kdh-testimonials-desc-diagonal">Read authentic reviews from our satisfied patients and see why they choose Kokonda Dental Hospital for their dental care needs.</p>
      {/* Elfsight Google Reviews Widget */}
      <div className="kdh-google-reviews-placeholder">
      <div className="kdh-google-reviews-header">
          <img src="https://via.placeholder.com/32x32?text=G" alt="Google" className="kdh-google-icon" />
          <div className="kdh-google-reviews-info">
            <h3>Google Reviews</h3>
            <div className="kdh-google-rating">
              <span className="kdh-stars">★★★★★</span>
              <span className="kdh-rating-text">4.8 out of 5</span>
              <span className="kdh-review-count">(150+ reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="kdh-testimonials-grid">
          <div className="kdh-testimonial-card">
            <div className="kdh-testimonial-header">
              <div className="kdh-testimonial-avatar-placeholder">
                <img src={require('../assets/images/dentist-with-child.jpg')} alt="Patient" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="kdh-testimonial-author">
                <h4>Sarah Johnson</h4>
                <div className="kdh-testimonial-stars">★★★★★</div>
              </div>
            </div>
            <p className="kdh-testimonial-text">
              "Excellent dental care! The staff is professional and caring. Dr. Smith made my root canal procedure completely painless. Highly recommend!"
            </p>
            <span className="kdh-testimonial-date">2 weeks ago</span>
          </div>
          
          <div className="kdh-testimonial-card">
            <div className="kdh-testimonial-header">
              <div className="kdh-testimonial-avatar-placeholder">
                <img src={require('../assets/images/dentist-with-child.jpg')} alt="Patient" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="kdh-testimonial-author">
                <h4>Michael Chen</h4>
                <div className="kdh-testimonial-stars">★★★★★</div>
              </div>
            </div>
            <p className="kdh-testimonial-text">
              "The best dental experience I've ever had. Modern equipment, friendly staff, and Dr. Williams is incredibly skilled. My Invisalign treatment is going perfectly!"
            </p>
            <span className="kdh-testimonial-date">1 month ago</span>
          </div>
          
          <div className="kdh-testimonial-card">
            <div className="kdh-testimonial-header">
              <div className="kdh-testimonial-avatar-placeholder">
                <img src={require('../assets/images/dentist-with-child.jpg')} alt="Patient" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="kdh-testimonial-author">
                <h4>Emily Rodriguez</h4>
                <div className="kdh-testimonial-stars">★★★★★</div>
              </div>
            </div>
            <p className="kdh-testimonial-text">
              "Amazing cosmetic dentistry work! I got veneers and the results are stunning. The entire process was comfortable and the team was so supportive throughout."
            </p>
            <span className="kdh-testimonial-date">3 weeks ago</span>
          </div>
        </div>
        
        <div className="kdh-testimonials-cta">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="kdh-google-reviews-btn">
            Read More Reviews on Google &rarr;
          </a>
        </div>

      </div>
    </motion.section>
  </div>
);

export default Home; 