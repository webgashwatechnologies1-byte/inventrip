import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { tracking } from '../data/tracking';
import { kinnaurTreks } from '../data/kinnaurTreks';
import {
    FiArrowLeft, FiCheck, FiX, FiMapPin, FiCalendar, FiStar,
    FiPhone, FiMail, FiClock, FiUsers, FiShield, FiTruck
} from 'react-icons/fi';

const TrackingDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);

    // Find the trek by slug from all trek data
    const allTreks = [...tracking, ...kinnaurTreks];
    const trek = allTreks.find(t => t.slug === slug);

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800";
    };

    if (!trek) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-6">
                    <div className="text-6xl text-gray-300">🏔️</div>
                    <h2 className="text-2xl font-bold text-gray-900">Trek Not Found</h2>
                    <p className="text-gray-500">The trekking package you're looking for doesn't exist.</p>
                    <Link to="/tracking" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition">
                        Back to Tracking
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb & Back */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/tracking')}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary transition font-medium mb-4"
                    >
                        <FiArrowLeft /> Back to Tracking
                    </button>
                    <div className="flex items-center gap-3 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-primary transition">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link to="/tracking" className="text-gray-500 hover:text-primary transition">Tracking</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-semibold">{trek.title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Images */}
                    <div className="space-y-6">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
                            <img
                                src={trek.images?.[selectedImage] || trek.image}
                                alt={trek.title}
                                onError={handleImageError}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                                <FiStar className="text-yellow-500" fill="currentColor" />
                                <span className="font-black text-gray-900">{trek.rating}</span>
                                <span className="text-sm text-gray-500">({trek.reviews} reviews)</span>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        {trek.images && trek.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {trek.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`aspect-square rounded-2xl overflow-hidden border-2 transition ${selectedImage === idx ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <img src={img} alt={`${trek.title} ${idx + 1}`} onError={handleImageError} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                                    Trekking Package
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{trek.title}</h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {trek.description}
                            </p>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FiCalendar className="text-primary text-xl" />
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase">Duration</div>
                                        <div className="font-bold">{trek.duration}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FiUsers className="text-primary text-xl" />
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase">Group Size</div>
                                        <div className="font-bold">8-15 People</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 relative overflow-hidden group/price">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/price:opacity-10 transition-opacity">
                                <FiShield className="text-primary text-6xl" />
                            </div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Bespoke Quotation</p>
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-4xl font-black text-gray-900 tracking-tighter uppercase">Price on Request</span>
                            </div>
                            <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                Pricing is tailored to your group size, travel dates, and specific luxury requirements.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:7832911551"
                                className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-black transition shadow-lg flex items-center justify-center gap-2"
                            >
                                <FiPhone /> Call to Book
                            </a>
                            <Link
                                to="/contact"
                                className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold text-center hover:bg-gray-800 transition flex items-center justify-center gap-2"
                            >
                                <FiMail /> Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div className="mt-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
                        Day-by-Day Itinerary
                    </h2>

                    <div className="space-y-6">
                        {trek.itinerary.map((day, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-xl">
                                        {day.day}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                                        <p className="text-sm font-bold text-primary mb-3 uppercase tracking-widest">{day.subtitle}</p>
                                        <p className="text-gray-600 leading-relaxed mb-4">{day.description}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <FiClock className="text-primary" />
                                                <span className="font-bold text-gray-700">Meals: {day.meals}</span>
                                            </div>
                                            {day.altitude && (
                                                <div className="flex items-center gap-2">
                                                    <FiMapPin className="text-primary" />
                                                    <span className="font-bold text-gray-700">Altitude: {day.altitude}</span>
                                                </div>
                                            )}
                                            {day.distance && (
                                                <div className="flex items-center gap-2">
                                                    <FiTruck className="text-primary" />
                                                    <span className="font-bold text-gray-700">Distance: {day.distance}</span>
                                                </div>
                                            )}
                                            {day.duration && (
                                                <div className="flex items-center gap-2">
                                                    <FiClock className="text-primary" />
                                                    <span className="font-bold text-gray-700">Duration: {day.duration}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Inclusions */}
                    <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FiCheck className="text-green-600" /> What's Included
                        </h3>
                        <ul className="space-y-3">
                            {trek.inclusions.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <FiCheck className="text-green-600 mt-1 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FiX className="text-red-600" /> What's Not Included
                        </h3>
                        <ul className="space-y-3">
                            {trek.exclusions.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <FiX className="text-red-600 mt-1 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Safety & Support */}
                <div className="mt-24 bg-gray-950 text-white rounded-[3rem] p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety & Support</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Your safety is our top priority on every trek</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <FiShield />, title: "Certified Guides", desc: "All guides are certified and trained in first aid" },
                            { icon: <FiPhone />, title: "24/7 Support", desc: "Emergency support available throughout the trek" },
                            { icon: <FiMapPin />, title: "GPS Tracking", desc: "Real-time location tracking for safety" }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Treks */}
                {/* <div className="mt-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">More Trekking Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tracking.filter(t => t.id !== trek.id).slice(0, 3).map((relatedTrek) => (
                            <Link
                                key={relatedTrek.id}
                                to={`/tracking/${relatedTrek.slug}`}
                                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={relatedTrek.image}
                                        alt={relatedTrek.title}
                                        onError={handleImageError}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <span className="text-xs f
                                    
                                    ont-bold text-primary uppercase tracking-widest">{relatedTrek.duration}</span>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition">{relatedTrek.title}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm font-black text-primary uppercase tracking-widest">Price on Request</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default TrackingDetail;
