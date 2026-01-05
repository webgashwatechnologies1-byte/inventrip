import { Link } from "react-router-dom";
import { transport } from "../data/transport";
import {
  FiArrowRight,
  FiActivity,
  FiZap,
  FiTruck,
  FiMapPin,
  FiCheck,
  FiUser,
  FiPhone,
  FiMessageSquare,
} from "react-icons/fi";
import { FaTaxi, FaBus, FaPlane, FaTrain } from "react-icons/fa";
import imghero from "../assets/images/transport/i20.jpg";

const handleImageError = (e) => {
  e.target.src =
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800";
};

const Transport = () => {
  const categories = [
    {
      id: "taxi",
      name: "Cab Booking",
      icon: <FaTaxi />,
      items: transport.taxi,
      desc: "Luxury sedans and 4x4 SUVs for rugged Himalayan terrains.",
    },
    {
      id: "bus",
      name: "Luxury Coaches",
      icon: <FaBus />,
      items: transport.bus,
      desc: "Intercity Volvo semi-sleepers and premium group travelers.",
    },
    {
      id: "flight",
      name: "Air Expeditions",
      icon: <FaPlane />,
      items: transport.flight,
      desc: "Helicopter joyrides and private charter connectivity.",
    },
    {
      id: "railway",
      name: "Heritage Rail",
      icon: <FaTrain />,
      items: transport.railway,
      desc: "Iconic Toy Train experiences and Vande Bharat express.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img
            src={imghero}
            alt="Logistics"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/40 to-gray-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/20 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="text-white font-black uppercase tracking-[0.3em] text-[10px]">
              Elite Transportation Services
            </p>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8 animate-fade-in-up">
            Transportation <span className="text-primary tracking-widest block md:inline font-light ml-0 md:ml-4">.</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg max-w-2xl leading-relaxed animate-fade-in-up delay-100">
            Seamless connectivity across the most challenging and beautiful
            terrains of India. Providing comfort, safety, and heritage in every journey.
          </p>
        </div>
      </section>

      {/* DETAILED FLEET GRID - ONLY PRIVATE FLEET */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        {categories
          .filter((cat) => cat.id === "taxi")
          .map((cat) => (
            <div key={cat.id} id={cat.id} className="mb-24">
              <div className="flex items-center gap-6 mb-12 border-b border-gray-100 pb-8">
                <span className="text-3xl text-primary">{cat.icon}</span>
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">
                  {cat.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.items.map((item) => (
                  <Link
                    key={item.id}
                    to={`/transport/${cat.id}/${item.id}`}
                    className="group relative bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-2"
                  >
                    <div className="h-72 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={handleImageError}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center">
                        <span className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Explore Vehicle</span>
                      </div>
                    </div>
                    <div className="p-8 bg-white text-center border-t border-gray-50">
                      <h3 className="text-xl font-black text-gray-900 tracking-tighter group-hover:text-primary transition-colors duration-300 uppercase">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        {/* CATEGORIES SUMMARY SECTION */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase mb-2">Our Diverse Fleet</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group relative p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:text-primary transition-all duration-500 scale-150 transform translate-x-4 -translate-y-4">
                  {cat.icon}
                </div>
                <div className="w-14 h-14 bg-gray-50 text-gray-400 group-hover:bg-primary group-hover:text-white rounded-2xl flex items-center justify-center text-2xl mb-8 transition-all duration-500 shadow-inner">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase mb-4 transition-colors group-hover:text-primary leading-none">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED QUOTE FORM SECTION */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Reservation Hub</span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
                Request a <span className="text-primary">Tailored</span> Quote
              </h2>
            </div>
            <p className="text-gray-500 font-medium text-lg max-w-sm border-l-2 border-primary/20 pl-6 mb-2">
              Our travel architects are standing by to design your perfect transit plan.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 md:p-3 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-primary/10 transition-colors">
            <div className="md:col-span-8 p-10 md:p-14 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors text-xl" />
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-gray-100 focus:border-primary outline-none transition-all font-bold text-gray-900 placeholder:font-normal placeholder:text-gray-300"
                  />
                </div>
                <div className="relative group">
                  <FiPhone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors text-xl" />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-gray-100 focus:border-primary outline-none transition-all font-bold text-gray-900 placeholder:font-normal placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <FiMapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors text-xl" />
                  <input
                    type="text"
                    placeholder="Pick-up Location"
                    className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-gray-100 focus:border-primary outline-none transition-all font-bold text-gray-900 placeholder:font-normal placeholder:text-gray-300"
                  />
                </div>
                <div className="relative group">
                  <FiMapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors text-xl" />
                  <input
                    type="text"
                    placeholder="Final Destination"
                    className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-gray-100 focus:border-primary outline-none transition-all font-bold text-gray-900 placeholder:font-normal placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="relative group">
                <FiMessageSquare className="absolute left-0 top-6 text-gray-300 group-focus-within:text-primary transition-colors text-xl" />
                <textarea
                  rows="2"
                  placeholder="Tell us about special requirements..."
                  className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-gray-100 focus:border-primary outline-none transition-all font-bold text-gray-900 placeholder:font-normal placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>
            </div>

            <div className="md:col-span-4 bg-gray-900 rounded-[2.5rem] p-10 flex flex-col justify-between items-center text-center relative overflow-hidden group/btn">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
              <div className="relative z-10 py-10">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mb-8 mx-auto border border-white/10 group-hover/btn:scale-110 transition-transform duration-500">
                  <FiCheck className="text-primary text-4xl" />
                </div>
                <h4 className="text-white text-xl font-bold mb-4 uppercase tracking-tighter">Instant Response</h4>
                <p className="text-gray-400 text-sm px-6">We typically respond within 15 minutes of submission.</p>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-black uppercase tracking-widest py-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(239,68,68,0.3)] hover:scale-[1.02] active:scale-95 transition-all relative z-10"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Transport;
