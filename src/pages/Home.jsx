import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePopup } from "../context/PopupContext";
import { destinations } from "../data/packages";
import {
  FiMapPin,
  FiArrowRight,
  FiStar,
  FiMail,
  FiPhone,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiActivity,
  FiArrowUpRight,
  FiMap,
} from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import CustomCalendar from "../components/CustomCalendar";
import GuestSelector from "../components/GuestSelector";
import DestinationSelector from "../components/DestinationSelector";
import PackageCard from "../components/PackageCard";

// Hero Images
import rainforestHero from "../assets/images/rainforest_hero_banner.png";
import snowHero from "../assets/images/destinations/kashmir.jpg";
import snowHero2 from "../assets/images/destinations/snoww.jpg";
import desertHero from "../assets/images/hero_desert_safari.png";
import beachHero from "../assets/images/hero_beach_sunset.png";
import trekkingHero from "../assets/images/destinations/uttrakhand.jpg";
import cultureHero from "../assets/images/spiritual-journeys.jpg";
import rainforestWild from "../assets/images/rainforest_wild_asia.png";



// Destination Images
import himachalImg from "../assets/images/destinations/himachalneww.jpg";
import spitiImg from "../assets/images/destinations/spitislider.jpg";
import lehImg from "../assets/images/destinations/ladakh.jpg";
import rajasthanImg from "../assets/images/destinations/rajasthan.jpg";

import logo from "../assets/sliderlogo.png";

const Home = () => {
  const navigate = useNavigate();
  const { openPopup } = usePopup();

  // Open popup on page load
  useEffect(() => {
    // Small delay to ensure smooth loading
    const timer = setTimeout(() => {
      openPopup();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const featuredDestinations = Object.values(destinations).slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [promoSlide, setPromoSlide] = useState(0);

  // Live Stats State
  const [liveCount, setLiveCount] = useState(51974);
  const [locationCount, setLocationCount] = useState(2654);
  const [cyclingLocation, setCyclingLocation] = useState("BALI");
  const [recentBookings, setRecentBookings] = useState([
    "Delhi to Bali booked 2m ago",
    "Mumbai to Leh Package sold",
    "Flight to Dubai confirmed",
    "Haridwar Tour - 4 Pax",
  ]);
  const [currentBookingIdx, setCurrentBookingIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    { name: "Anya Sharma", loc: "Delhi", text: "Exceptional service and handpicked stays. Inventrip made our family trip truly special." },
    { name: "Mark Evans", loc: "New York", text: "The Bali expedition was seamless. From luxury villas to local guides, everything was elite." },
    { name: "Rahul Varma", loc: "Mumbai", text: "Best budget-friendly yet premium packages I've found in India. Highly recommended!" },
    { name: "Priya Singh", loc: "Bangalore", text: "Leh Ladakh was a dream come true. The logistics were handled with professional precision." },
    { name: "David Chen", loc: "Singapore", text: "Inventrip is now my go-to for all Asian tours. Their local network is unbeatable." },
    { name: "Elena Rossi", loc: "Rome", text: "A stunning desert safari experience in Rajasthan. The heritage hotels were breathtaking." },
    { name: "Sam Wilson", loc: "London", text: "Reliable, professional, and very helpful 24/7 concierge. Made our tracking trip easy." },
    { name: "Aisha Kahn", loc: "Dubai", text: "The Kerala backwaters package was pure magic. Perfect for our anniversary getaway." },
    { name: "Kenji Tanaka", loc: "Tokyo", text: "Efficiency at its best. No hidden costs and very transparent booking process." },
    { name: "Sophie Martin", loc: "Paris", text: "From Paris to Himachal - every detail was flawless. The mountain views were divine." },
    { name: "Arjun Nair", loc: "Kochi", text: "Unbeatable local knowledge and authentic experiences. Not just a tour, but a journey." },
    { name: "Maria Garcia", loc: "Madrid", text: "The best travel partner I've ever used. Their attention to detail is world-class." }
  ];

  // Search Bar State
  const [selectedDestination, setSelectedDestination] = useState("");
  const [travelDate, setTravelDate] = useState(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });

  const heroSlides = [
    {
      id: 1,
      image: cultureHero,
      title: "Complete Travel",
      highlight: "SOLUTIONS",
      subtitle:
        "Book tour packages, buses, taxis, trains & flights - all in one place",
      location: "Pan India",
      brand: "Inventrip Travel Services",
    },
    {
      id: 7,
      image: beachHero,
      title: "Curated Tour",
      highlight: "PACKAGES",
      subtitle:
        "Explore handpicked destinations with all-inclusive travel packages",
      location: "India & Beyond",
      brand: "Inventrip Tours",
    },
    {
      id: 2,
      image: snowHero,
      title: "Himalayan",
      highlight: "ADVENTURES",
      subtitle:
        "Book complete tour packages with transport, stay & sightseeing",
      location: "Himachal & Uttarakhand",
      brand: "Inventrip Packages",
    },
    {
      id: 3,
      image: desertHero,
      title: "Rajasthan",
      highlight: "HERITAGE TOURS",
      subtitle:
        "Experience royal Rajasthan with our all-inclusive travel packages",
      location: "Jaisalmer & Udaipur",
      brand: "Inventrip Heritage",
    },
    {
      id: 4,
      image: beachHero,
      title: "Beach",
      highlight: "GETAWAYS",
      subtitle: "Book coastal tour packages with flights, hotels & activities",
      location: "Goa & Kerala",
      brand: "Inventrip Holidays",
    },
    {
      id: 5,
      image: trekkingHero,
      title: "Trekking",
      highlight: "EXPEDITIONS",
      subtitle: "Complete trekking packages with transport, guides & equipment",
      location: "Himalayas",
      brand: "Inventrip Adventures",
    },
    {
      id: 6,
      image: rainforestHero,
      title: "Spiritual",
      highlight: "JOURNEYS",
      subtitle: "Book pilgrimage packages with bus, train & flight options",
      location: "Varanasi & Haridwar",
      brand: "Inventrip Pilgrimages",
    },
  ];

  const promoSlides = [
    {
      id: 1,
      image: himachalImg,
      title: "Magical Himachal",
      subtitle:
        "Experience the serene valleys and majestic peaks of the Himalayas.",
      location: "HIMACHAL",
      brand: "Inventrip | Mountains",
    },
    {
      id: 2,
      image: spitiImg,
      title: "Mystical Spiti",
      subtitle:
        "Explore the middle land with its rugged terrains and ancient monasteries.",
      location: "SPITI VALLEY",
      brand: "Inventrip | Expedition",
    },
    {
      id: 3,
      image: lehImg,
      title: "Leh - Ladakh",
      subtitle:
        "Ride through the land of high passes and breathtaking landscapes.",
      location: "LADAKH",
      brand: "Inventrip | Adventure",
    },
    {
      id: 4,
      image: snowHero,
      title: "Paradise Kashmir",
      subtitle:
        "Discover the heaven on earth with houseboats and snow-capped mountains.",
      location: "KASHMIR",
      brand: "Inventrip | Paradise",
    },
    {
      id: 5,
      image: trekkingHero,
      title: "Devbhoomi Uttarakhand",
      subtitle:
        "Embark on a spiritual and adventurous journey in the land of gods.",
      location: "UTTARAKHAND",
      brand: "Inventrip | Pilgrimage",
    },
    {
      id: 6,
      image: rajasthanImg,
      title: "Royal Rajasthan",
      subtitle:
        "Immerse yourself in the grandeur of forts, palaces and desert safaris.",
      location: "RAJASTHAN",
      brand: "Inventrip | Heritage",
    },
    {
      id: 7,
      image: rainforestHero,
      title: "God's Own Kerala",
      subtitle: "Relax in the backwaters and experience nature at its best.",
      location: "KERALA",
      brand: "Inventrip | Nature",
    },
    {
      id: 8,
      image: beachHero,
      title: "Party in Goa",
      subtitle:
        "Sun, sand, and sea. The perfect getaway for fun and relaxation.",
      location: "GOA",
      brand: "Inventrip | Beaches",
    },
  ];

  // Auto-rotate Promo Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoSlide((prev) => (prev + 1) % promoSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promoSlides.length]);

  const nextPromo = () =>
    setPromoSlide((prev) => (prev + 1) % promoSlides.length);
  const prevPromo = () =>
    setPromoSlide(
      (prev) => (prev - 1 + promoSlides.length) % promoSlides.length
    );

  // Auto-rotate Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Live Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 3));
      setLocationCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycling Location Text
  useEffect(() => {
    const locations = [
      "NORTH EAST",
      "VIETNAM",
      "KASHMIR",
      "LADAKH",
      "BALI",
      "DUBAI",
      "EUROPE",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % locations.length;
      setCyclingLocation(locations[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Cycling Recent Bookings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookingIdx((prev) => (prev + 1) % recentBookings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [recentBookings.length]);

  // Testimonials Auto-rotate (cycles 4 at a time)
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="font-poppins text-gray-900 bg-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* SECTION 1: RESTORED HERO SLIDER */}
      <section className="relative h-[600px] md:h-[750px] overflow-hidden group">

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 text-white">
              <div className="flex items-center space-x-4 mb-6 opacity-90 animate-fade-in">
                <div className="font-bold text-sm tracking-wider border-r pr-4 border-white/20">
                  inventrip.com
                </div>
                <div className="text-[10px] font-black tracking-[0.2em] uppercase text-white/80 whitespace-nowrap">
                  {slide.brand}
                </div>
                <div className="hidden sm:flex flex-row items-center gap-2 text-white font-bold tracking-widest text-[10px] uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <FiMapPin className="text-sm text-white" />
                  <span>{slide.location}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-2 leading-tight drop-shadow-lg animate-fade-in-up">
                {slide.title}{" "}
                <span className="text-white italic">{slide.highlight}</span>
              </h1>

              <p className="text-lg sm:text-2xl text-gray-100 font-light max-w-2xl mb-10 drop-shadow-md animate-fade-in-up leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up">
                <Link
                  to="/booking"
                  className="px-8 py-4 bg-[#39a34a] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#2e853c] transition-all transform hover:scale-105 shadow-xl shadow-[#39a34a]/20"
                >
                  View More details <FiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  Contact us <FiPhone />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center items-center space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                ? "w-8 bg-primary"
                : "bg-white/50 hover:bg-white"
                }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition hidden md:block text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition hidden md:block text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* SECTION 2: SEARCH BAR - Clean & Professional */}
      <section className="-mt-16 relative z-30 px-4 max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 mb-12">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/20 p-6 md:p-10 ring-1 ring-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:border-r border-gray-100 pr-4">
              <label className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3 block">
                Destination
              </label>
              <DestinationSelector
                selectedDestination={selectedDestination}
                onSelect={setSelectedDestination}
              />
            </div>
            <div className="md:border-r border-gray-100 md:px-4">
              <label className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3 block">
                Travel Date
              </label>
              <CustomCalendar
                selectedDate={travelDate}
                onDateSelect={setTravelDate}
                label=""
              />
            </div>
            <div className="md:border-r border-gray-100 md:px-4">
              <label className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3 block">
                Guests
              </label>
              <GuestSelector guests={guests} setGuests={setGuests} />
            </div>
            <div className="flex ">
              <button
                onClick={() => selectedDestination && navigate(`/destinations/${selectedDestination.toLowerCase()}`)}
                className="w-full bg-[#39a34a] text-white py-4  rounded-xl font-bold hover:bg-[#2d823b] transition shadow-lg uppercase text-xs tracking-widest">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ABOUT US - Professional & Polished */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#39a34a]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#39a34a]/10 border border-[#39a34a]/20">
                <span className="w-2 h-2 rounded-full bg-[#39a34a] animate-ping"></span>
                <span className="text-[#39a34a] text-[10px] font-black uppercase tracking-widest">About Inventrip</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Your Gateway to <br />
                <span className="text-[#39a34a]">Next-Level</span> Exploration.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                At Inventrip, we don't just book trips—we engineer experiences. Combining cutting-edge technology with deep-rooted local expertise, we provide seamless travel solutions for the modern explorer.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col h-full space-y-3 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-[#39a34a]/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#39a34a] shadow-sm group-hover:scale-110 transition-transform">
                    <FiAward className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-slate-900">Elite Standards</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Curated luxury and safety standards across all destinations.</p>
                </div>
                <div className="flex flex-col h-full space-y-3 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
                    <FiGlobe className="text-2xl" />
                  </div>
                  <h4 className="font-bold text-slate-900">Global Network</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Direct partnerships with 2,400+ verified travel suppliers.</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link to="/about" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-black transition-all transform hover:scale-105 shadow-xl shadow-slate-200">
                  View More Details <FiArrowRight />
                </Link>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center">
                      <FiUsers className="text-slate-400 text-xs" />
                    </div>
                  ))}
                  <div className="pl-6 text-xs font-bold text-slate-500 self-center uppercase tracking-widest">+50k Members</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000 hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#39a34a]/20 to-blue-500/20 rounded-[4rem] blur-2xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white rounded-[3.5rem] p-4 shadow-2xl overflow-hidden border border-slate-100">
              <img
                src={snowHero2}
                alt="About us"
                className="w-full h-[600px] object-cover rounded-[2.5rem] brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-12 left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl animate-fade-in">
                <div className="text-5xl font-black text-white italic tracking-tighter">10+</div>
                <div className="text-[10px] font-black text-white/70 uppercase tracking-[0.3em]">Years Excellence</div>
              </div>
              <div className="absolute bottom-12 right-12 bg-[#39a34a] p-8 rounded-3xl shadow-2xl animate-fade-in transition-transform group-hover:rotate-3">
                <div className="text-3xl font-black text-white italic tracking-tighter shrink-0">98%</div>
                <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] whitespace-nowrap">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: POPULAR DESTINATIONS */}
      <section className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-gray-500 text-sm">
              Most searched locations this week
            </p>
          </div>
          <Link
            to="/booking"
            className="text-primary font-bold text-sm hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(destinations)
            .slice(0, 4)
            .map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg"
              >
                <img
                  src={dest.packages[0]?.image}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  alt={dest.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                  <div className="h-0.5 w-12 bg-primary mb-3 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                  <p className="text-xs text-white/80 uppercase tracking-widest font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore Packages <FiArrowRight />
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* NEW PROMO SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 my-16">
        <div className="relative h-[400px] md:h-[400px] bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl group">
          {promoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === promoSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${index === promoSlide ? "scale-110" : "scale-100"
                  }`}
              />

              {/* Professional Gradient Overlay - readable text without boxy look */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-4xl">
                {/* Brand Tag */}
                <div className="flex items-center gap-4 mb-6 animate-fade-in">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-3">
                    <img src={logo} alt="Inventrip" className="h-6 w-auto" />
                    <span className="text-white font-bold tracking-widest text-[10px] uppercase">
                      Inventrip
                    </span>
                    <span className="w-px h-3 bg-white/40"></span>
                    <span className="text-[#39a34a] font-bold tracking-widest text-[10px] uppercase">
                      {slide.brand.split("|")[1]}
                    </span>
                  </div>
                </div>

                {/* Main Title - Huge & Impactful */}
                <h2 className="text-4xl md:text-7xl font-serif text-white font-bold mb-4 tracking-tight leading-[1] drop-shadow-2xl animate-fade-in-up">
                  {slide.title}
                </h2>

                {/* Subtitle */}
                <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-xl mb-10 leading-relaxed animate-fade-in-up delay-75">
                  {slide.subtitle}
                </p>

                {/* Action Area */}
                <div className="flex items-center gap-8 animate-fade-in-up delay-150">
                  <Link
                    to="/booking"
                    className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-primary/50 flex items-center gap-3 group/btn"
                  >
                    Book Experience
                    <FiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <div className="hidden md:flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                    <FiMapPin className="text-[#39a34a] text-lg" />
                    <span>{slide.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Minimalist Navigation */}
          <div className="absolute bottom-10 right-10 z-20 flex items-center gap-6 hidden md:flex">
            <button
              onClick={prevPromo}
              className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group/nav"
            >
              <FiArrowRight className="rotate-180 text-lg group-hover/nav:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextPromo}
              className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group/nav"
            >
              <FiArrowRight className="text-lg group-hover/nav:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Progress Bar - Slim & Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-20">
            <div
              key={promoSlide}
              className="h-full bg-primary origin-left animate-[progress_6s_linear]"
            ></div>
          </div>

          {/* Mobile Pagination */}
          <div className="absolute bottom-8 left-8 z-20 flex gap-2 md:hidden">
            {promoSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPromoSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === promoSlide ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BEST SELLING PACKAGES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Best Selling Tour Packages
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              Complete travel packages including accommodation, transport
              (bus/taxi/train/flight), and sightseeing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDestinations
              .flatMap((d) => d.packages)
              .slice(0, 3)
              .map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onRequestCallback={() => openPopup({ destination: pkg.title })}
                />
              ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/destination"
              className="inline-block bg-primary text-white px-12 py-4 rounded-full font-bold hover:shadow-xl transition-all uppercase text-xs tracking-widest focus:scale-95"
            >
              Explore All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: ULTRA-PREMIUM LIVE BOOKINGS DASHBOARD */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Animated Background Travel Paths */}
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M-100 500 Q 500 100 1100 500" stroke="#39a34a" strokeWidth="0.8" fill="none" className="animate-[dash_10s_linear_infinite]" />
            <path d="M-100 200 Q 500 800 1100 200" stroke="#39a34a" strokeWidth="0.8" fill="none" className="animate-[dash_15s_linear_infinite_reverse]" />
            <path d="M-100 800 Q 500 200 1100 800" stroke="#39a34a" strokeWidth="0.8" fill="none" className="animate-[dash_12s_linear_infinite]" />
          </svg>
        </div>

        {/* Dynamic Glows & Floating Particles */}
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#39a34a]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 relative">
            {/* Floating Activity Chips */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-xs transition-all duration-1000 h-8 flex justify-center items-center overflow-hidden pointer-events-none">
              <div
                key={currentBookingIdx}
                className="bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-1.5 rounded-full flex items-center gap-2 animate-fade-in-up shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest whitespace-nowrap">
                  {recentBookings[currentBookingIdx]}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#39a34a]/10 border border-[#39a34a]/20 mb-8 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39a34a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39a34a]"></span>
              </div>
              <span className="text-[#39a34a] text-[10px] font-black uppercase tracking-[0.3em]">System Status: Live Online</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">
              Inventrip <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39a34a] to-blue-600">Live Connect</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Real-time synchronization with 2,400+ travel networks. Monitoring every booking, inquiry, and adventure unfolding right now across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto mb-16">
            {/* Active Explorers Card */}
            <div className="group relative perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#39a34a] to-blue-500 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-slate-200 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-slate-200/50">
                {/* Holographic Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#39a34a]/10 flex items-center justify-center text-[#39a34a] border border-[#39a34a]/20 relative">
                      <FiUsers className="text-3xl" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#39a34a] rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg">Active Explorers</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Real-time Traffic</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-2 text-green-600 bg-green-500/10 px-3 py-1 rounded-lg">
                      <FiArrowUpRight className="text-sm" />
                      <span className="text-xs font-bold">2.4k/hr</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[4rem] font-black text-slate-900 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500">
                    {liveCount.toLocaleString()}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex-grow max-w-[70%]">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#39a34a] to-[#39a34a]/40 w-[92%] animate-[progress_3s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                    <span className="text-slate-600 text-sm font-bold ml-4">92% Capacity</span>
                  </div>
                </div>


              </div>
            </div>

            {/* Card 2: Hot Destinations */}
            <div className="group relative perspective-1000 text-right">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-[#39a34a] rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-slate-200 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 text-left"></div>

                <div className="flex items-center justify-between mb-12 flex-row-reverse">
                  <div className="flex items-center gap-6 flex-row-reverse">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 border border-blue-500/20 relative">
                      <FiGlobe className="text-3xl" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg">Hottest Trends</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-right">Live Heatmap</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-2 text-blue-600 bg-blue-500/10 px-3 py-1 rounded-lg">
                      <FiMap className="text-sm" />
                      <span className="text-xs font-bold">GLOBAL</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[4rem] font-black text-[#39a34a] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#39a34a] to-[#39a34a]/40">
                    {locationCount.toLocaleString()}
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-slate-900 text-sm font-bold whitespace-nowrap">Now in <span className="text-blue-600">{cyclingLocation}</span></span>
                    <div className="flex-grow">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-[#39a34a]/40 w-[78%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 mb-20">
            <div className="flex items-center gap-3">
              <FiAward className="text-2xl text-slate-400" />
              <span className="text-slate-400 font-bold tracking-widest text-[10px] uppercase">ISO Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <FiUsers className="text-2xl text-slate-400" />
              <span className="text-slate-400 font-bold tracking-widest text-[10px] uppercase">50k+ Members</span>
            </div>
            <div className="flex items-center gap-3">
              <FiGlobe className="text-2xl text-slate-400" />
              <span className="text-slate-400 font-bold tracking-widest text-[10px] uppercase">120 Destinations</span>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="relative mt-20 pt-20 border-t border-slate-100">
            <div className="text-center mb-12">
              <h3 className="text-[#39a34a] font-black uppercase tracking-[0.4em] text-[10px] mb-2">Verified Feedback</h3>
              <p className="text-slate-400 text-xs font-medium">Real stories from our global travel community</p>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${(testimonialIdx % 9) * (100 / 4)}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-4">
                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 h-full flex flex-col justify-between group">
                      <div>
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="text-amber-400 text-xs fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-slate-600 italic text-sm leading-relaxed mb-8 line-clamp-4 group-hover:text-slate-900 transition-colors">
                          "{t.text}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#39a34a]/20 to-blue-500/20 flex items-center justify-center text-[#39a34a] font-bold text-xs uppercase">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="text-slate-900 font-bold text-sm tracking-tight">{t.name}</h5>
                          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{t.loc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${(testimonialIdx % 9) === i ? "w-8 bg-[#39a34a]" : "w-2 bg-slate-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
