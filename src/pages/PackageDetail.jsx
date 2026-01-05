import { useParams, Link } from 'react-router-dom';
import { getPackageBySlug, destinations } from '../data/packages';
import { generateDefaultItinerary } from '../data/itineraryTemplates';
import { useState, useEffect } from 'react';
import {
    FiClock, FiMapPin, FiCheck, FiX, FiInfo, FiChevronDown,
    FiStar, FiCalendar, FiUsers, FiMail, FiPhone, FiTruck,
    FiHome, FiCoffee, FiCamera, FiImage, FiZap
} from 'react-icons/fi';
import CallbackForm from '../components/CallbackForm';

const PackageDetail = () => {
    const { slug } = useParams();
    const pkg = getPackageBySlug(slug);
    const [activeTab, setActiveTab] = useState('itinerary');
    const [showCallback, setShowCallback] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        travelDate: '',
        travellerCount: '',
        message: ''
    });

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-black mb-4">Package Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Go to Home</Link>
                </div>
            </div>
        );
    }

    const destination = Object.values(destinations).find(dest =>
        dest.packages.some(p => p.id === pkg.id)
    );

    const saveAmount = pkg.originalPrice - pkg.price;

    // Images Logic
    const placeholderImage = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200';
    const images = pkg.images && pkg.images.length > 0 ? pkg.images : [pkg.image || placeholderImage];
    // Ensure we have at least a few images for the thumbnails
    const displayImages = [...images];
    while (displayImages.length < 5) displayImages.push(placeholderImage);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Enquiry Sent! We will contact you shortly.");
    };

    const itinerary = pkg.itinerary && pkg.itinerary.length > 0
        ? pkg.itinerary
        : generateDefaultItinerary(pkg.title, destination?.name || 'Destination');

    const tabs = [
        { id: 'itinerary', label: 'Itinerary' },
        { id: 'inclusions', label: 'Inclusions' },
        { id: 'exclusions', label: 'Exclusions' },
        { id: 'policies', label: 'Policies' },
        { id: 'description', label: 'Description' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-poppins">
            {/* Banner Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={displayImages[0]}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 w-full text-center sm:text-left">
                    <div className="flex flex-wrap items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        {destination && (
                            <>
                                <Link to={`/destination/${destination.name.toLowerCase()}`} className="hover:text-white">
                                    {destination.name}
                                </Link>
                                <span>/</span>
                            </>
                        )}
                        <span className="text-tertiary">{pkg.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                        {pkg.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-tertiary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                            <FiClock /> {pkg.duration}
                        </span>
                        {destination && (
                            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 flex items-center gap-2">
                                <FiMapPin /> {destination.name}
                            </span>
                        )}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-20 relative z-10">

                {/* 1. Image Gallery Section (Main + Thumbnails Below) */}
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 mb-10">
                    <div className="h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden mb-4 relative group">
                        <img
                            src={displayImages[currentImage]}
                            alt={pkg.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 transition-all">
                            <FiImage /> View Gallery
                        </button>
                    </div>

                    {/* Thumbnails Row */}
                    <div className="grid grid-cols-4 gap-2 sm:gap-4">
                        {displayImages.slice(0, 4).map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentImage(idx)}
                                className={`h-16 sm:h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${currentImage === idx ? 'border-tertiary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT COLUMN: Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Highlights / Quick Info */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { icon: FiTruck, label: 'Transfers' },
                                { icon: FiHome, label: 'Stays' },
                                { icon: FiCoffee, label: 'Meals' },
                                { icon: FiMapPin, label: 'Sightseeing' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                    <item.icon className="text-gray-400 group-hover:text-tertiary w-6 h-6 mb-2 transition-colors" />
                                    <span className="text-xs font-bold text-gray-500 group-hover:text-primary uppercase tracking-wide text-center transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tabs Navigation */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24 z-10">
                            <div className="flex overflow-x-auto border-b border-gray-100 no-scrollbar">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex-shrink-0 ${activeTab === tab.id
                                            ? 'bg-primary text-white'
                                            : 'text-gray-500 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                            {activeTab === 'itinerary' && (
                                <div className="relative border-l-2 border-dashed border-primary/20 ml-4 space-y-8">
                                    {itinerary.map((day) => (
                                        <div key={day.day} className="relative pl-8">
                                            {/* Dot */}
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm ring-1 ring-gray-200"></div>

                                            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 border-b border-gray-50 pb-3">
                                                    <span className="text-tertiary font-black text-lg">Day {day.day}</span>
                                                    <span className="hidden sm:inline text-gray-300">|</span>
                                                    <h4 className="font-bold text-primary">{day.subtitle || day.location}</h4>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{day.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-gray-50 text-gray-500 text-[10px] font-bold px-2 py-1 rounded border border-gray-100 uppercase tracking-wide flex items-center gap-1">
                                                        <FiCoffee size={10} className="text-secondary" /> Meals Included
                                                    </span>
                                                    <span className="bg-gray-50 text-gray-500 text-[10px] font-bold px-2 py-1 rounded border border-gray-100 uppercase tracking-wide flex items-center gap-1">
                                                        <FiHome size={10} className="text-secondary" /> Stay Included
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'inclusions' && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                                        <FiCheck className="text-secondary" /> Package Inclusions
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(pkg.policies?.inclusions || ['Accommodation in Deluxe Hotels', 'Daily Breakfast & Dinner', 'Private Transfers', 'Sightseeing as per Itinerary', 'Driver Allowances', 'Toll Taxes & Parking']).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                <div className="bg-secondary/10 p-1 rounded-full text-secondary mt-0.5">
                                                    <FiCheck size={14} />
                                                </div>
                                                <span className="text-gray-700 text-sm font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'exclusions' && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-tertiary flex items-center gap-2">
                                        <FiX className="text-tertiary" /> Package Exclusions
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(pkg.policies?.exclusions || ['Airfare / Train fare', 'Personal Expenses', 'Entrance Fees', 'Anything not mentioned in Inclusions', 'GST 5%']).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
                                                <div className="bg-red-100 p-1 rounded-full text-red-500 mt-0.5">
                                                    <FiX size={14} />
                                                </div>
                                                <span className="text-gray-700 text-sm font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'policies' && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-primary">Policies & Guidelines</h3>
                                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
                                        <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                                            <FiInfo /> Cancellation Policy
                                        </h4>
                                        <p className="text-yellow-900/80 text-sm leading-relaxed">
                                            {pkg.policies?.cancellation || "Standard cancellation charges apply. 30 Days prior: 0% charges. 15-30 Days: 50% charges. 0-15 Days: 100% charges."}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-3">Important Notes</h4>
                                        <ul className="space-y-2">
                                            {(pkg.policies?.importantNotes || ['ID Proof is mandatory for all guests', 'Check-in time is 12:00 PM', 'Check-out time is 11:00 AM']).map((note, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                                                    <span className="text-primary font-bold mt-1">•</span>
                                                    <span>{note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'description' && (
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-primary">About the Tour</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Experience the best of {destination?.name || 'this destination'} with our {pkg.duration} package.
                                        Immerse yourself in the local culture, witness breathtaking landscapes, and create unforgettable memories.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our packages are crafted with care to ensure a hassle-free experience. From premium stays to reliable transfers, we take care of everything so you can focus on enjoying your holiday.
                                    </p>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    <div className="lg:col-span-1 space-y-6 relative">
                        <div className="sticky top-24 space-y-6">

                            {/* Card 1: Price Summary */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Starting From</p>
                                        <h2 className="text-3xl font-black text-primary">₹{pkg.price.toLocaleString()}</h2>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-center gap-1 text-secondary font-bold text-sm mb-1">
                                            <FiStar className="fill-current" /> {pkg.rating}
                                        </div>
                                        <span className="bg-tertiary text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">
                                            LIMITED OFFER
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-6 flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                    <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                                    <span className="text-xs font-bold text-secondary">You Save ₹{saveAmount.toLocaleString()}</span>
                                </div>
                                <button className="w-full bg-tertiary hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2">
                                    <FiZap className="w-5 h-5" /> Book Now
                                </button>
                            </div>

                            {/* Card 2: Detailed Enquiry Form */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                <div className="mb-6 pb-6 border-b border-gray-100">
                                    <h3 className="text-lg font-bold text-primary mb-1">Quick Enquiry</h3>
                                    <p className="text-xs text-gray-500">Fill your details and our expert will call you back.</p>
                                </div>

                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name *"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        onChange={handleFormChange}
                                        value={formData.fullName}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        onChange={handleFormChange}
                                        value={formData.email}
                                    />
                                    <div className="flex gap-2">
                                        <select className="bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg outline-none w-20 text-gray-600">
                                            <option>+91</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Mobile Number *"
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            onChange={handleFormChange}
                                            value={formData.phone}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="travelDate"
                                            placeholder="Travel Date"
                                            onFocus={(e) => e.target.type = 'date'}
                                            onBlur={(e) => e.target.type = 'text'}
                                            className="w-full bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            onChange={handleFormChange}
                                            value={formData.travelDate}
                                        />
                                        <input
                                            type="number"
                                            name="travellerCount"
                                            placeholder="Pax"
                                            min="1"
                                            className="w-full bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            onChange={handleFormChange}
                                            value={formData.travellerCount}
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Specific requirements..."
                                        rows="3"
                                        className="w-full bg-gray-50 border border-gray-200 text-sm p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        onChange={handleFormChange}
                                        value={formData.message}
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-black text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wide mt-2"
                                    >
                                        Request Callback
                                    </button>
                                </form>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                                <FiPhone />
                                <span>Need Help? Call </span>
                                <a href="tel:7832911551" className="text-primary font-bold hover:underline">7832911551</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <CallbackForm isOpen={showCallback} onClose={() => setShowCallback(false)} />
        </div>
    );
};

export default PackageDetail;
