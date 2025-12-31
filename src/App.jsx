import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import VisionMission from './pages/VisionMission';
import Testimonials from './pages/Testimonials';
import Destination from './pages/Destination';
import PackageDetail from './pages/PackageDetail';
import Transport from './pages/Transport';
import TransportDetail from './pages/TransportDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/destinations/:slug" element={<Destination />} />
            <Route path="/package/:slug" element={<PackageDetail />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/transport/:type/:vehicleId" element={<TransportDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
