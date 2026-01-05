import { Link, useParams } from 'react-router-dom';
import { expeditions } from '../data/expeditions';
import { FiMapPin, FiCalendar, FiStar, FiArrowRight, FiTruck } from 'react-icons/fi';
import { FaMotorcycle, FaCar } from 'react-icons/fa';

const Expedition = () => {
    const { type } = useParams(); // 'bike' or 'suv'

    // If no type specified, default to showing both
    const expeditionData = type ? expeditions[type] : [...expeditions.bike, ...expeditions.suv];
    const pageTitle = type === 'bike' ? 'Bike Expeditions' : type === 'suv' ? 'SUV Expeditions' : 'All Expeditions';
    const pageIcon = type === 'bike' ? <FaMotorcycle /> : type === 'suv' ? <FaCar /> : <FiTruck />;

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";
    };

    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
                        alt="Expedition"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 w-full text-white text-center sm:text-left">
                    <div className="max-w-3xl sm:mx-0 mx-auto">
                        <p className="text-tertiary font-bold uppercase tracking-[0.2em] text-xs mb-4 animate-fade-in">
                            Adventure Awaits
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-4 flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-6 justify-center sm:justify-start">
                            <span className="text-4xl md:text-5xl text-primary">{pageIcon}</span>
                            <span className="text-white italic">{pageTitle}</span>
                        </h1>
                        <p className="text-sm text-gray-300 font-medium max-w-2xl leading-relaxed sm:mx-0 mx-auto">
                            {type === 'bike'
                                ? 'Epic motorcycle journeys through the Himalayas with Royal Enfield bikes'
                                : type === 'suv'
                                    ? 'Comfortable 4x4 SUV expeditions to remote mountain destinations'
                                    : 'Choose your adventure - Bike or SUV expeditions to Spiti and Ladakh'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-4 bg-gray-50 border-b border-gray-100 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-center gap-2">
                        <Link
                            to="/expedition"
                            className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${!type ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            All
                        </Link>
                        <Link
                            to="/expedition/bike"
                            className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${type === 'bike' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <FaMotorcycle /> Bike
                        </Link>
                        <Link
                            to="/expedition/suv"
                            className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${type === 'suv' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <FaCar /> SUV
                        </Link>
                    </div>
                </div>
            </section>


            {/* Expedition Packages Grid */}
            <section className="py-12 max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2">Choose Your Journey</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                        Featured Expedition Packages
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        All-inclusive expeditions with vehicle, accommodation, meals, and expert support crew
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expeditionData.map((expedition) => {
                        const expeditionType = expeditions.bike.includes(expedition) ? 'bike' : 'suv';
                        return (
                            <Link
                                key={expedition.id}
                                to={`/expedition/${expeditionType}/${expedition.slug}`}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={expedition.image}
                                        alt={expedition.title}
                                        onError={handleImageError}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    {/* Type Badge */}
                                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                                        {expeditionType === 'bike' ? <FaMotorcycle className="text-white text-xs" /> : <FaCar className="text-white text-xs" />}
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                            {expeditionType === 'bike' ? 'Bike' : 'SUV'}
                                        </span>
                                    </div>

                                    {/* Rating Badge */}
                                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <FiStar className="text-yellow-500 text-xs" fill="currentColor" />
                                        <span className="font-bold text-gray-900 text-xs">{expedition.rating}</span>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg">
                                        <div className="flex items-center gap-1 text-gray-900">
                                            <FiCalendar size={10} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{expedition.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 space-y-3">
                                    <h3 className="text-lg font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors leading-tight">
                                        {expedition.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <FiTruck className="text-primary" />
                                        <span className="font-bold">{expedition.vehicle}</span>
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                        <div>
                                            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Custom Quote</div>
                                            <div className="text-base font-black text-gray-900 tracking-tight uppercase">Price on Request</div>
                                        </div>
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <FiArrowRight fontSize={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 bg-gray-950 text-white rounded-t-3xl mx-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                            Why Expedition With <span className="text-white italic">Inventrip?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <FaMotorcycle />, title: "Premium Vehicles", desc: "Well-maintained Royal Enfield bikes and 4x4 SUVs for ultimate comfort" },
                            { icon: <FiMapPin />, title: "Expert Road Captains", desc: "Experienced leaders who know every turn and hidden gem" },
                            { icon: <FiStar />, title: "Complete Support", desc: "Backup vehicle, mechanic, first aid, and 24/7 assistance" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:bg-white/20 transition-all">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-2xl mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-black mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="tel:7832911551"
                            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all shadow-lg"
                        >
                            Book Your Expedition Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Expedition;
