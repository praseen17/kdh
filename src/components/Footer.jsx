import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="kdh-footer">
    <div className="kdh-footer-main">
      <div className="kdh-footer-col">
        <h4>Company</h4>
        <ul>
          <li><FontAwesomeIcon icon={faAngleRight} /> <a href="/about">About Us</a></li>
          <li><FontAwesomeIcon icon={faAngleRight} /> <a href="/contact">Contact Us</a></li>
          <li><FontAwesomeIcon icon={faAngleRight} /> <a href="/appointment">Reservation</a></li>
          <li><FontAwesomeIcon icon={faAngleRight} /> <a href="/">Privacy Policy</a></li>
          <li><FontAwesomeIcon icon={faAngleRight} /> <a href="/">Terms & Condition</a></li>
        </ul>
      </div>
      <div className="kdh-footer-col">
        <h4>Contact</h4>
        <p>123 Street, New York, USA<br />+012 345 67890<br />info@kokondadental.com</p>
        <div className="kdh-footer-socials">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
      <div className="kdh-footer-col">
        <h4>Opening</h4>
        <p>Monday - Saturday<br />09AM - 09PM<br />Sunday<br />10AM - 08PM</p>
      </div>
      <div className="kdh-footer-col">
        <h4>Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <form className="kdh-footer-newsletter" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email" />
          <button type="submit">SIGNUP</button>
        </form>
      </div>
      <div className="kdh-footer-col kdh-footer-map-col">
        <h4>Our Location</h4>
        <div className="kdh-footer-map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30471.745498924734!2d78.49429417431641!3d17.317084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba26861bb550d%3A0x2cff2c9028691d04!2sKokonda&#39;s%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1750764941633!5m2!1sen!2sin" width="100%" height="180" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kokonda Dental Hospital Location"></iframe>
        </div>
      </div>
    </div>
    <div className="kdh-footer-bottom">
      <span>© <span className="kdh-footer-link">Kokonda Dental Hospital</span>, All Right Reserved.</span>
      <div className="kdh-footer-links">
        <a href="/" className="kdh-footer-link-item">Home</a>
        <span className="kdh-footer-link-sep"></span>
        <a href="/" className="kdh-footer-link-item">Cookies</a>
        <span className="kdh-footer-link-sep"></span>
        <a href="/" className="kdh-footer-link-item">Help</a>
        <span className="kdh-footer-link-sep"></span>
        <a href="/" className="kdh-footer-link-item">FAQs</a>
      </div>
    </div>
  </footer>
);

export default Footer; 