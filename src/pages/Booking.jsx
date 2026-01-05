import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import CustomCalendar from '../components/CustomCalendar';
import GuestSelector from '../components/GuestSelector';
import {
  FiTruck, FiGrid, FiGlobe, FiMap, FiBriefcase,
  FiPhone, FiMail, FiMapPin, FiCheck, FiArrowRight
} from 'react-icons/fi';
import trekkingImg from '../assets/images/treaking.jpg';

const Booking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type') || 'taxi';

  // Form State
  const [travelDate, setTravelDate] = useState(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const transportTypes = {
    taxi: { id: 'taxi', name: 'Luxury Taxi', icon: <FiTruck /> },
    volvo: { id: 'volvo', name: 'Volvo Bus', icon: <FiGrid /> },
    flight: { id: 'flight', name: 'Flight', icon: <FiGlobe /> },
    railway: { id: 'railway', name: 'Train', icon: <FiMap /> },
    general: { id: 'general', name: 'Custom Package', icon: <FiBriefcase /> }
  };

  const handleTypeChange = (newType) => {
    setSearchParams({ type: newType });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Request Sent!');
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 lg:p-8 font-poppins selection:bg-[#39a34a] selection:text-white">

      <div className="bg-white w-full max-w-7xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px]">

        {/* 1. LEFT SIDE: CONTACT & INFO PANEL (Dark/Green Theme) */}
        <div className="lg:w-[35%] bg-[#1A1A1A] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#39a34a] blur-[100px]"></div>
            <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-blue-500 blur-[120px]"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 rounded-full bg-[#39a34a] blur-[100px]"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Plan Your <br /><span className="text-[#39a34a]">Perfect Trip</span></h2>
            <p className="text-gray-400 leading-relaxed mb-12">
              Our team of travel experts is ready to craft an unforgettable itinerary for you. Fill out the form to get started.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#39a34a] shrink-0 text-xl">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us 24/7</p>
                  <p className="text-lg font-bold">+91 98160 12345</p>
                  <p className="text-lg font-bold text-gray-400">+91 98160 54321</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#39a34a] shrink-0 text-xl">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-lg font-medium">booking@inventrip.in</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#39a34a] shrink-0 text-xl">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-base font-medium leading-relaxed text-gray-300">
                    Shop No. 5, Near Old Bus Stand,<br />Shimla, Himachal Pradesh 171001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <FiCheck className="text-[#39a34a]" /> Why Choose Us?
            </h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Best Price Guarantee</li>
              <li>• 24/7 Customer Support</li>
              <li>• Verified & Secure Booking</li>
            </ul>
          </div>
        </div>

        {/* 2. RIGHT SIDE: BOOKING FORM (White Theme) */}
        <div className="lg:w-[65%] p-6 md:p-12 lg:p-16 flex flex-col h-full bg-white overflow-y-auto">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Booking Details</h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-3 p-1">
              {Object.values(transportTypes).map((t) => {
                const isActive = type === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleTypeChange(t.id)}
                    className={`
                                            flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                                            ${isActive
                        ? 'bg-[#39a34a] border-[#39a34a] text-white shadow-lg shadow-[#39a34a]/30'
                        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50'}
                                        `}
                  >
                    {t.icon}
                    <span>{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">

            {/* Row 1: Date & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Journey Date</label>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 focus-within:bg-white focus-within:border-[#39a34a] focus-within:ring-4 focus-within:ring-[#39a34a]/10 transition-all">
                  <CustomCalendar selectedDate={travelDate} onDateSelect={setTravelDate} label="Select Date" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Passengers</label>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 focus-within:bg-white focus-within:border-[#39a34a] focus-within:ring-4 focus-within:ring-[#39a34a]/10 transition-all">
                  <GuestSelector guests={guests} setGuests={setGuests} />
                </div>
              </div>
            </div>

            {/* Row 2: Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-semibold text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-semibold text-gray-900 placeholder:text-gray-400"
                  placeholder="+91 Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Row 3: Email & Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-semibold text-gray-900 placeholder:text-gray-400"
                placeholder="name@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Special Features / Notes</label>
              <textarea
                rows="3"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                placeholder="Pickup location, meal preferences, etc."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-4 mt-auto">
              <button className="group w-full py-5 bg-[#39a34a] text-white rounded-2xl font-bold text-xl shadow-xl shadow-[#39a34a]/20 hover:bg-[#2e8a3b] hover:shadow-2xl hover:shadow-[#39a34a]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden">
                <span className="relative z-10">Confirm Booking</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Booking;
