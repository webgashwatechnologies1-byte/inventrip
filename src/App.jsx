import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import VisionMission from './pages/VisionMission';
import Testimonials from './pages/Testimonials';
import Destination from './pages/Destination';
import AllDestinations from './pages/AllDestinations';
import PackageDetail from './pages/PackageDetail';
import Transport from './pages/Transport';
import TransportDetail from './pages/TransportDetail';
import Tracking from './pages/Tracking';
import TrackingDetail from './pages/TrackingDetail';
import Expedition from './pages/Expedition';
import ExpeditionDetail from './pages/ExpeditionDetail';
import { PopupProvider } from './context/PopupContext';
// import TopLoader from './components/TopLoader';
import GlobalPopup from './components/GlobalPopup';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <PopupProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* <TopLoader /> */}
          <ScrollToTop />
          <GlobalPopup />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/destination" element={<AllDestinations />} />
              <Route path="/destinations/:slug" element={<Destination />} />
              <Route path="/package/:slug" element={<PackageDetail />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/transport/:category/:id" element={<TransportDetail />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/tracking/:slug" element={<TrackingDetail />} />
              <Route path="/expedition" element={<Expedition />} />
              <Route path="/expedition/:type" element={<Expedition />} />
              <Route path="/expedition/:type/:slug" element={<ExpeditionDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PopupProvider>
  );
}

export default App;
