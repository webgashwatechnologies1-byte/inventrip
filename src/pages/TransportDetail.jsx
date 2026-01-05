import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { transport } from '../data/transport';
import {
    FiArrowLeft, FiCheck, FiMapPin, FiUsers, FiShield,
    FiClock, FiPhone, FiMail, FiStar, FiTruck
} from 'react-icons/fi';
import { FaTaxi, FaBus, FaPlane, FaTrain } from 'react-icons/fa';

const TransportDetail = () => {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);

    // Get the transport item from data
    const categoryData = transport[category];
    const item = categoryData?.find(t => t.id === id);

    // Category metadata
    const categoryInfo = {
        taxi: {
            name: 'Private Fleet',
            icon: <FaTaxi />,
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/20'
        },
        bus: {
            name: 'Luxury Coaches',
            icon: <FaBus />,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20'
        },
        flight: {
            name: 'Air Expeditions',
            icon: <FaPlane />,
            color: 'text-sky-500',
            bgColor: 'bg-sky-500/10',
            borderColor: 'border-sky-500/20'
        },
        railway: {
            name: 'Heritage Rail',
            icon: <FaTrain />,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20'
        }
    };

    const currentCategory = categoryInfo[category];

    if (!item || !currentCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-6">
                    <div className="text-6xl text-gray-300">🚫</div>
                    <h2 className="text-2xl font-bold text-gray-900">Transport Not Found</h2>
                    <p className="text-gray-500">The transport option you're looking for doesn't exist.</p>
                    <Link to="/transport" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition">
                        Back to Transport
                    </Link>
                </div>
            </div>
        );
    }

    const features = [
        { icon: <FiShield />, title: 'Verified & Insured', desc: 'All vehicles are fully insured and safety certified' },
        { icon: <FiClock />, title: '24/7 Support', desc: 'Round-the-clock assistance during your journey' },
        { icon: <FiUsers />, title: 'Expert Drivers', desc: 'Experienced drivers with local terrain knowledge' },
        { icon: <FiMapPin />, title: 'GPS Tracking', desc: 'Real-time location tracking for safety' }
    ];

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800";
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb & Back */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/transport')}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary transition font-medium mb-4"
                    >
                        <FiArrowLeft /> Back to Transport
                    </button>
                    <div className="flex items-center gap-3 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-primary transition">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link to="/transport" className="text-gray-500 hover:text-primary transition">Transport</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-semibold">{item.name}</span>
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
                                src={item.images?.[selectedImage] || item.image}
                                alt={item.name}
                                onError={handleImageError}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute top-6 left-6 ${currentCategory.bgColor} ${currentCategory.borderColor} backdrop-blur-md px-6 py-2 rounded-xl border flex items-center gap-3`}>
                                <span className={`text-2xl ${currentCategory.color}`}>{currentCategory.icon}</span>
                                <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">{currentCategory.name}</span>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        {item.images && item.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {item.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`aspect-square rounded-2xl overflow-hidden border-2 transition ${selectedImage === idx ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <img src={img} alt={`${item.name} ${idx + 1}`} onError={handleImageError} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`px-4 py-1.5 ${currentCategory.bgColor} ${currentCategory.color} text-xs font-bold uppercase tracking-widest rounded-full`}>
                                    {item.type} Class
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" size={16} />)}
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{item.name}</h1>

                            {/* Route Info */}
                            {item.route && (
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <FiMapPin className="text-primary" />
                                    <span className="font-semibold">{item.route}</span>
                                </div>
                            )}

                            {/* Seats Info */}
                            {item.seats && (
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <FiUsers className="text-primary" />
                                    <span className="font-semibold">Capacity: {item.seats} Passengers</span>
                                </div>
                            )}
                        </div>

                        {/* Pricing */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
                            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Starting From</p>
                            <div className="flex items-baseline gap-3">
                                <span className="text-5xl font-bold text-gray-900">
                                    ₹{item.pricePerKm ? item.pricePerKm : item.price?.toLocaleString()}
                                </span>
                                {item.pricePerKm && <span className="text-xl text-gray-600 font-semibold">/km</span>}
                            </div>
                            {!item.pricePerKm && <p className="text-sm text-gray-600 mt-2 font-medium">Per person, one-way journey</p>}
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
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

                {/* Additional Info Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiCheck className="text-primary" /> What's Included
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>Professional driver with local expertise</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>Fuel and toll charges included</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>24/7 customer support</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>GPS tracking for safety</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiShield className="text-primary" /> Safety Standards
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>Regular vehicle maintenance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>Comprehensive insurance coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>Verified and trained drivers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-primary mt-1 flex-shrink-0" />
                                <span>Emergency support system</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiTruck className="text-primary" /> Booking Process
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                                <span>Contact us via phone or email</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                                <span>Share your travel details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                                <span>Receive instant confirmation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                                <span>Enjoy your comfortable journey</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Related Transport Options */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">More {currentCategory.name} Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categoryData.filter(t => t.id !== id).slice(0, 3).map((relatedItem) => (
                            <Link
                                key={relatedItem.id}
                                to={`/transport/${category}/${relatedItem.id}`}
                                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={relatedItem.image}
                                        alt={relatedItem.name}
                                        onError={handleImageError}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{relatedItem.type}</span>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition">{relatedItem.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-gray-900">
                                            ₹{relatedItem.pricePerKm ? relatedItem.pricePerKm : relatedItem.price?.toLocaleString()}
                                        </span>
                                        {relatedItem.pricePerKm && <span className="text-sm text-gray-600">/km</span>}
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

export default TransportDetail;
