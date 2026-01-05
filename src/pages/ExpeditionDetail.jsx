import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { expeditions } from '../data/expeditions';
import {
    FiArrowLeft, FiMapPin, FiCalendar, FiStar,
    FiPhone, FiMail, FiClock, FiShield, FiTruck,
    FiArrowRight
} from 'react-icons/fi';
import { FaMotorcycle, FaCar } from 'react-icons/fa';

const ExpeditionDetail = () => {
    const { type, slug } = useParams(); // type: 'bike' or 'suv', slug: expedition slug
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);

    // Find the expedition by type and slug
    const expedition = expeditions[type]?.find(exp => exp.slug === slug);

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";
    };

    if (!expedition) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-6">
                    <div className="text-6xl text-gray-300">🏔️</div>
                    <h2 className="text-2xl font-bold text-gray-900">Expedition Not Found</h2>
                    <p className="text-gray-500">The expedition you're looking for doesn't exist.</p>
                    <Link to="/expedition" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition">
                        Back to Expeditions
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* Breadcrumb & Back */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <button
                        onClick={() => navigate(`/expedition/${type}`)}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary transition font-bold text-xs uppercase tracking-widest mb-3"
                    >
                        <FiArrowLeft /> Back to {type === 'bike' ? 'Bike' : 'SUV'} Expeditions
                    </button>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400 font-medium">
                        <Link to="/" className="hover:text-primary transition">Home</Link>
                        <span>/</span>
                        <Link to="/expedition" className="hover:text-primary transition">Expedition</Link>
                        <span>/</span>
                        <Link to={`/expedition/${type}`} className="hover:text-primary transition">
                            {type === 'bike' ? 'Bike' : 'SUV'}
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 font-bold line-clamp-1">{expedition.title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left: Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                            <img
                                src={expedition.images?.[selectedImage] || expedition.image}
                                alt={expedition.title}
                                onError={handleImageError}
                                className="w-full h-full object-cover"
                            />

                            {/* Type Badge */}
                            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                {type === 'bike' ? <FaMotorcycle className="text-white text-xs" /> : <FaCar className="text-white text-xs" />}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                    {type === 'bike' ? 'Bike Expedition' : 'SUV Expedition'}
                                </span>
                            </div>

                            {/* Rating Badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                                <FiStar className="text-yellow-500 text-xs" fill="currentColor" />
                                <span className="font-bold text-gray-900 text-sm">{expedition.rating}</span>
                                <span className="text-[10px] text-gray-500 font-bold">({expedition.reviews} reviews)</span>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        {expedition.images && expedition.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-3">
                                {expedition.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`aspect-square rounded-xl overflow-hidden border-2 transition ${selectedImage === idx ? 'border-primary shadow-md' : 'border-gray-100 hover:border-gray-200'
                                            }`}
                                    >
                                        <img src={img} alt={`${expedition.title} ${idx + 1}`} onError={handleImageError} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">{expedition.title}</h1>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary text-lg">
                                        <FiCalendar />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Duration</div>
                                        <div className="font-bold text-sm">{expedition.duration}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary text-lg">
                                        <FiTruck />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Vehicle</div>
                                        <div className="font-bold text-sm">{expedition.vehicle}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 relative overflow-hidden group">
                            <FiShield className="absolute top-4 right-4 text-primary opacity-5 text-4xl group-hover:opacity-10 transition-opacity" />
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Bespoke Expedition</p>
                            <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-3xl font-black text-gray-900 tracking-tight uppercase">Price on Request</span>
                            </div>
                            <p className="text-[10px] text-gray-600 font-medium leading-relaxed italic">
                                Final investment depends on team size, route complexity, and support requirements.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: <FiShield />, title: "Safety First", desc: "Backup vehicle & first aid" },
                                { icon: <FiMapPin />, title: "Expert Guides", desc: "Experienced road captains" },
                                { icon: <FiClock />, title: "24/7 Support", desc: "Round-the-clock assistance" },
                                { icon: <FiTruck />, title: "Premium Vehicles", desc: "Well-maintained fleet" }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2 hover:bg-white hover:shadow-md transition-all">
                                    <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center text-lg shadow-sm border border-gray-100">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-0.5">{feature.title}</h4>
                                        <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="tel:7832911551"
                                className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-center hover:bg-black transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <FiPhone /> Call to Book
                            </a>
                            <Link
                                to="/contact"
                                className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-center hover:bg-gray-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <FiMail /> Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight">
                        Day-by-Day Itinerary
                    </h2>

                    <div className="space-y-4">
                        {expedition.itinerary.map((day, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all group">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md group-hover:scale-110 transition-transform">
                                        {day.day}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{day.title}</h3>
                                        <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">{day.subtitle}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{day.description}</p>
                                        <div className="flex items-center gap-2 text-xs bg-white px-3 py-1.5 rounded-lg border border-gray-100 inline-flex">
                                            <FiClock className="text-primary" />
                                            <span className="font-bold text-gray-700">Meals: {day.meals}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What's Included */}
                <div className="mt-16 bg-green-50 rounded-2xl p-8 border border-green-100">
                    <h3 className="text-xl font-black text-gray-900 mb-6 text-center tracking-tight">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            `${type === 'bike' ? 'Royal Enfield Bike' : '4x4 SUV'} with fuel`,
                            'Accommodation (Hotels/Camps)',
                            'Breakfast & Dinner',
                            'Experienced Road Captain',
                            'Backup Support Vehicle',
                            'Mechanic & First Aid Kit',
                            'All Permits & Tolls',
                            '24/7 Emergency Support'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-xl border border-green-100/50">
                                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FiArrowRight className="text-white text-[10px]" />
                                </div>
                                <span className="font-bold text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Expeditions */}
                <div className="mt-16">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">More {type === 'bike' ? 'Bike' : 'SUV'} Expeditions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {expeditions[type].filter(exp => exp.id !== expedition.id).slice(0, 3).map((relatedExp) => (
                            <Link
                                key={relatedExp.id}
                                to={`/expedition/${type}/${relatedExp.slug}`}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={relatedExp.image}
                                        alt={relatedExp.title}
                                        onError={handleImageError}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{relatedExp.duration}</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-3">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition leading-tight line-clamp-2">{relatedExp.title}</h3>
                                    <div className="flex items-baseline gap-1 border-t border-gray-50 pt-3">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mt-1">Price on Request</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpeditionDetail;
