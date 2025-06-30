import React from 'react';
import { motion } from 'framer-motion';

const Appointment = () => (
  <motion.div className="kdh-appointment-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
    <h2 style={{ color: '#B22222', marginBottom: '1.5rem' }}>Book an Appointment</h2>
    <form className="kdh-appointment-form" style={{ maxWidth: 500, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="text" placeholder="Your Name" style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }} />
      <input type="email" placeholder="Your Email" style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }} />
      <input type="tel" placeholder="Your Phone" style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }} />
      <input type="date" style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }} />
      <input type="time" style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }} />
      <select style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }}>
        <option value="">Select Service</option>
        <option value="Family Dentistry">Family Dentistry</option>
        <option value="Teeth Whitening">Teeth Whitening</option>
        <option value="Invisalign">Invisalign</option>
        <option value="Dental Implants">Dental Implants</option>
        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
        <option value="Emergency Dental Care">Emergency Dental Care</option>
      </select>
      <textarea placeholder="Notes (optional)" rows={3} style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #FFD700' }} />
      <button type="submit" style={{ background: '#B22222', color: '#FFD700', border: 'none', borderRadius: 6, padding: '0.7rem', fontWeight: 'bold', fontSize: '1rem' }}>Book Appointment</button>
    </form>
  </motion.div>
);

export default Appointment; 