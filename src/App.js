import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutSchool from './pages/AboutSchool';
import AboutChurch from './pages/AboutChurch';
import Teachers from './pages/Teachers';
import Schedule from './pages/Schedule';
import SchoolCharter from './pages/SchoolCharter';
import SchoolNutrition from './pages/SchoolNutrition';
import Calendar from './pages/Calendar';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import './styles.css';

const GA_TRACKING_ID = 'G-2EF6NF3WCJ';
function GATracker() {
  const location = useLocation();

  useEffect(() => {
    // Check if the gtag function exists (it should, from the script in index.html)
    if (typeof window.gtag === 'function') {
      // Send the 'page_view' event to GA4 whenever the route changes.
      window.gtag('config', GA_TRACKING_ID, {
        'page_path': location.pathname + location.search,
        'page_title': document.title // Optional: Sends the document title
      });
    }
  }, [location]); // Re-run this effect every time 'location' changes

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GATracker />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-school" element={<AboutSchool />} />
          <Route path="/about-church" element={<AboutChurch />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/school-charter" element={<SchoolCharter />} />
          <Route path="/school-nutrition" element={<SchoolNutrition />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
