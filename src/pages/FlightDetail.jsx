import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { transport } from '../data/transport';
import {
    FiArrowLeft, FiCheck, FiMapPin, FiUsers, FiShield,
    FiClock, FiPhone, FiMail, FiStar, FiTruck
} from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';
import { usePopup } from '../context/PopupContext';


const FlightDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { openPopup } = usePopup();
    const [selectedImage, setSelectedImage] = useState(0);

    const createSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const item = transport.flight.find(t => createSlug(t.name) === id);

    const branding = {
        name: 'Air Expedition',
        icon: <FaPlane />,
        color: 'text-sky-500',
        bgColor: 'bg-sky-500/10',
        borderColor: 'border-sky-500/20'
    };

    if (!item) {
        return <div className="min-h-screen grid place-items-center">Item not found</div>;
    }

    const features = [
        { icon: <FiShield />, title: 'Premium Safety', desc: 'Highest aviation safety standards' },
        { icon: <FiClock />, title: 'Fast Travel', desc: 'Save time with direct routes' },
        { icon: <FiUsers />, title: 'VIP Service', desc: 'Exclusive ground handling' },
        { icon: <FiMapPin />, title: 'Aerial Views', desc: 'Breathtaking panoramic views' }
    ];

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1559268975-f53851b9e289?w=1920";
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb & Back */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/flight-booking')}
                        className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition font-medium mb-4"
                    >
                        <FiArrowLeft /> Back to Flight Booking
                    </button>
                    <div className="flex items-center gap-3 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-sky-600 transition">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link to="/flight-booking" className="text-gray-500 hover:text-sky-600 transition">Flight</Link>
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
                            <div className={`absolute top-6 left-6 ${branding.bgColor} ${branding.borderColor} backdrop-blur-md px-6 py-2 rounded-xl border flex items-center gap-3`}>
                                <span className={`text-2xl ${branding.color}`}>{branding.icon}</span>
                                <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">{branding.name}</span>
                            </div>
                        </div>
                        {item.images && item.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {item.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`aspect-square rounded-2xl overflow-hidden border-2 transition ${selectedImage === idx ? 'border-sky-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}
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
                                <span className={`px-4 py-1.5 ${branding.bgColor} ${branding.color} text-xs font-bold uppercase tracking-widest rounded-full`}>
                                    {item.type} Class
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" size={16} />)}
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{item.name}</h1>
                            {item.route && (
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <FiMapPin className="text-sky-500" />
                                    <span className="font-semibold">{item.route}</span>
                                </div>
                            )}
                        </div>

                        {/* Pricing */}
                        <div className="bg-gradient-to-br from-sky-500/5 to-sky-500/10 rounded-3xl p-8 border border-sky-500/20">
                            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Starting From</p>
                            <div className="flex items-baseline gap-3">
                                <span className="text-5xl font-bold text-gray-900">
                                    ₹{item.price?.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2 font-medium">Per person, one-way journey</p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                                    <div className="w-12 h-12 bg-sky-500/10 text-sky-500 rounded-xl flex items-center justify-center text-xl">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button
                                onClick={() => openPopup({ destination: item.name })}
                                className="flex-1 bg-white text-gray-900 border-2 border-gray-100 py-4 rounded-xl font-bold text-center hover:bg-gray-50 transition flex items-center justify-center gap-2"
                            >
                                <FiPhone /> Request Callback
                            </button>
                            <Link
                                to="/booking"
                                className="flex-1 bg-sky-600 text-white py-4 rounded-xl font-bold text-center hover:bg-sky-700 transition flex items-center justify-center gap-2 shadow-lg shadow-sky-200"
                            >
                                <FiCheck /> Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetail;
