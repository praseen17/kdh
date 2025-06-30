import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components (to be created)
import Header from './components/Header';
import Footer from './components/Footer';
// Pages (to be created)
import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import CosmeticDentistry from './pages/services/CosmeticDentistry';
import Invisalign from './pages/services/Invisalign';
import EmergencyDentalCare from './pages/services/EmergencyDentalCare';
import OralSurgery from './pages/services/OralSurgery';
import PreventiveCare from './pages/services/PreventiveCare';
import MtKisco from './pages/locations/MtKisco';
import SecondLocation from './pages/locations/SecondLocation';
import GeneralDentistry from './pages/services/FamilyDentistry';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* Services */}
          <Route path="/services/family-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/invisalign" element={<Invisalign />} />
          <Route path="/services/oral-surgery" element={<OralSurgery />} />
          <Route path="/services/emergency-dental-care" element={<EmergencyDentalCare />} />
          <Route path="/services/preventive-care" element={<PreventiveCare />} />
          {/* Locations */}
          <Route path="/locations/mt-kisco" element={<MtKisco />} />
          <Route path="/locations/second-location" element={<SecondLocation />} />
          {/* Doctors */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
