import { Link } from "react-router-dom";
import { transport } from "../data/transport";
import { FiArrowRight } from "react-icons/fi";
import { FaPlane } from "react-icons/fa";

const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1559268975-f53851b9e289?w=1920";
};

const FlightBooking = () => {
    const items = transport.flight;

    const createSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="relative h-[50vh] flex items-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920"
                        alt="Aircraft"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <FaPlane className="text-xl text-sky-400" />
                        <span className="font-bold uppercase tracking-widest text-xs">Air Expeditions</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                        Flight <span className="text-sky-500">Booking</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl font-light">
                        Helicopter joyrides and private charter flights for exclusive travel.
                    </p>
                </div>
            </section>

            {/* LISTING */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Aerial Expeditions</h2>
                        <p className="text-gray-500">Exclusive helicopter rides and charter flights for a breathtaking perspective.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            to={`/flight-booking/${createSlug(item.name)}`}
                            className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onError={handleImageError}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {item.type}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-sky-500 transition-colors">
                                    {item.name}
                                </h3>
                                <div className="flex justify-between items-center text-gray-500 text-sm font-medium mb-6">
                                    <span>{item.route}</span>
                                    <span>Starting ₹{item.price.toLocaleString()}</span>
                                </div>
                                <span className="flex items-center gap-2 text-sky-600 font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                                    View Details <FiArrowRight />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 text-2xl mb-6">
                                <FaPlane />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Cut travel time significantly. What takes hours by road takes minutes by air.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 text-2xl mb-6">
                                <FiArrowRight />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Scenic Views</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Witness the majesty of the Himalayas from above. A photography experience like no other.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 text-2xl mb-6">
                                <FaPlane />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">VIP Handing</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Skip the queues with our exclusive ground handling and priority boarding services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CINEMATIC VIDEO SECTION */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920"
                        alt="Aerial View"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Sky High</h2>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10">
                        The ultimate luxury travel experience.
                    </p>
                    <button className="w-20 h-20 bg-white text-sky-500 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 shadow-xl">
                        <FiArrowRight />
                    </button>
                    <p className="mt-4 text-sm font-bold uppercase tracking-widest opacity-80">Take Flight</p>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-sky-500 text-white shadow-2xl shadow-sky-200">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-400/20 transform skew-x-12 translate-x-20"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-20 gap-10">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                                Fly Above <br /> The Ordinary
                            </h2>
                            <p className="text-sky-100 text-lg font-medium max-w-lg">
                                Book your helicopter joyride or charter flight for an exclusive journey.
                            </p>
                        </div>
                        <Link
                            to="/booking"
                            className="bg-white text-sky-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex-shrink-0"
                        >
                            Book Flight
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlightBooking;
