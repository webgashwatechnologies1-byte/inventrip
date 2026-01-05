import { Link } from 'react-router-dom';
import { FiCheckCircle, FiDollarSign, FiHeadphones, FiCalendar, FiGlobe, FiRepeat, FiHome, FiShield, FiFileText, FiPhone, FiAward, FiSettings, FiTarget, FiZap, FiCheck, FiArrowRight } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineSparkles, HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineGlobeAlt, HiMiniTrophy, HiMiniRocketLaunch, HiMiniHandThumbUp } from 'react-icons/hi2';

const handleImageError = (e) => {
  e.target.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"; // High-quality travel fallback
};

const About = () => {
  const features = [
    {
      icon: <FiCheckCircle />,
      title: "Complete Travel Solutions",
      description: "Tour packages, bus/taxi/train/flight bookings - all your travel needs in one platform"
    },
    {
      icon: <FiSettings />,
      title: "Customized Tour Packages",
      description: "Tailored itineraries with flexible transport options (bus, taxi, train, flight)"
    },
    {
      icon: <FiDollarSign />,
      title: "Best Price Guarantee",
      description: "Transparent pricing with competitive rates and no hidden costs"
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: <FiShield />,
      title: "Verified Transport Partners",
      description: "Trusted buses, taxis, trains & flights with verified service providers"
    },
    {
      icon: <FiCalendar />,
      title: "Flexible Policies",
      description: "Easy booking and hassle-free cancellation options"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers", icon: <HiMiniHandThumbUp />, color: 'text-amber-500', bg: 'bg-amber-50/50' },
    { number: "50+", label: "Destinations", icon: <FiGlobe />, color: 'text-indigo-500', bg: 'bg-indigo-50/50' },
    { number: "500+", label: "Tour Packages & Routes", icon: <HiMiniRocketLaunch />, color: 'text-rose-500', bg: 'bg-rose-50/50' },
    { number: "24/7", label: "Support Available", icon: <FiHeadphones />, color: 'text-emerald-500', bg: 'bg-emerald-50/50' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: CLEAN HERO (No Slider) */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920"
            alt="About Banner"
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-3xl">
            <p className="text-tertiary font-black uppercase tracking-[0.4em] mb-4 animate-fade-in">Discover Our Story</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
              Crafting <span className="text-tertiary italic">Memorable</span> <br /> Journeys Since 2018
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Inventrip is your one-stop platform for all travel needs - from complete tour packages to individual bus, taxi, train, and flight bookings across India.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION & STATS */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] rotate-3 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000"
                alt="Our Vision"
                onError={handleImageError}
                className="relative rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
                <div className="text-5xl font-black text-primary mb-1 tracking-tighter">7+</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none">Years Excellence</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary">Our Legacy</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Your Trusted <span className="text-primary italic">Travel Partner</span> Across India
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Inventrip offers comprehensive travel solutions including curated tour packages, bus bookings, taxi rentals, railway tickets, flight reservations, and hotel accommodations. Whether you need a complete package or just transport, we've got you covered with verified services and competitive pricing.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                    <FiCheck />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Tour Packages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                    <FiCheck />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Bus Bookings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shadow-sm border border-amber-100">
                    <FiCheck />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Taxi & Cab Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shadow-sm border border-rose-100">
                    <FiCheck />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Train & Flight Tickets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar (Home Theme Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((item, idx) => (
              <div key={idx} className="group relative bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 text-center flex flex-col items-center">
                <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white`}>
                  {item.icon}
                </div>
                <h4 className="text-gray-900 font-black tracking-tighter text-3xl mb-1">{item.number}</h4>
                <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </p>
                <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-20 rounded-[2rem] -z-10 blur-2xl transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20 text-center md:text-left">
            <p className="text-primary font-black uppercase tracking-[0.3em] mb-4">Our Values</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none mb-8">
              The Principles That <span className="text-primary italic">Define Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trust", desc: "Transparent pricing for all tour packages and transport bookings with no hidden charges.", icon: <FiShield />, color: 'text-indigo-500' },
              { title: "Excellence", desc: "Premium quality in every service - from luxury buses to verified hotels and expert guides.", icon: <HiMiniTrophy />, color: 'text-amber-500' },
              { title: "Innovation", desc: "Easy online booking platform for buses, taxis, trains, flights & complete tour packages.", icon: <FiZap />, color: 'text-rose-500' },
              { title: "Flexibility", desc: "Book complete packages or individual services - customize your trip exactly how you want.", icon: <FiTarget />, color: 'text-emerald-500' }
            ].map((value, index) => (
              <div key={index} className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className={`text-4xl ${value.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>{value.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase tracking-widest text-sm">{value.title}</h3>
                <p className="text-gray-700 font-bold text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US - GRID */}
      <section className="py-24 bg-gray-900 text-white rounded-[4rem] mx-4 mb-12 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              The <span className="text-tertiary underline decoration-primary underline-offset-8">Inventrip</span> Edge
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">Experience global standards with local warmth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] hover:bg-white/20 transition-all group">
                <div className="w-16 h-16 bg-tertiary/20 rounded-2xl flex items-center justify-center text-tertiary text-3xl mb-8 group-hover:rotate-12 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">{feature.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-4 py-1 bg-tertiary rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 mb-8 shadow-xl shadow-tertiary/20">Let's Explore</div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-10">
            Ready to Start Your <br /> <span className="text-primary italic">Everlasting</span> Journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:7832911551" className="bg-primary text-white text-sm font-black uppercase tracking-widest px-10 py-5 rounded-2xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center justify-center gap-3 group">
              <FiPhone className="text-xl group-hover:rotate-12 transition-transform" /> Talk to Expert
            </a>
            <Link to="/contact" className="bg-white text-gray-900 border-2 border-gray-100 text-sm font-black uppercase tracking-widest px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
              Request Callback <FiArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
