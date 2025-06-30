import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import chatgptLogo from '../assets/images/chatgpt.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="kdh-header">
      <div className="kdh-header-top">
        <div className="kdh-header-left">
          <div className="kdh-logo-area">
            <img src={chatgptLogo} alt="Logo" className="kdh-logo-img" />
          </div>
          <div className="kdh-title-group">
            <h1 className="kdh-title">Kokonda Dental Hospital</h1>
            <span className="kdh-tagline">Smile with style</span>
          </div>
        </div>
        <div className="kdh-header-right">
          <button className="kdh-hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
          <nav className={`kdh-navbar${menuOpen ? ' open' : ''}`}>
            <NavLink to="/" className="kdh-nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="kdh-nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <div className="kdh-dropdown">
              <span className="kdh-nav-link">Services ▼</span>
              <motion.div className="kdh-dropdown-content" initial={{ opacity: 0, y: -10 }} whileHover={{ opacity: 1, y: 0 }}>
                <Link to="/services/family-dentistry" onClick={() => setMenuOpen(false)}>General Dentistry</Link>
                <Link to="/services/cosmetic-dentistry" onClick={() => setMenuOpen(false)}>Cosmetic Dentistry</Link>
                <Link to="/services/invisalign" onClick={() => setMenuOpen(false)}>Orthodontics (Invisalign)</Link>
                <Link to="/services/oral-surgery" onClick={() => setMenuOpen(false)}>Oral Surgery</Link>
                <Link to="/services/emergency-dental-care" onClick={() => setMenuOpen(false)}>Emergency Care</Link>
                <Link to="/services/preventive-care" onClick={() => setMenuOpen(false)}>Preventive Care</Link>
              </motion.div>
            </div>
            <NavLink to="/contact" className="kdh-nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/appointment" className="kdh-nav-link kdh-cta" onClick={() => setMenuOpen(false)}>Book Appointment</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 