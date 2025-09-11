import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
