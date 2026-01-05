import { Link } from 'react-router-dom';
import { tracking } from '../data/tracking';
import { FiMapPin, FiCalendar, FiStar, FiArrowRight, FiTrendingUp } from 'react-icons/fi';

const Tracking = () => {
    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800";
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920"
                        alt="Trekking"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 w-full text-white">
                    <div className="max-w-3xl">
                        <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-6 animate-fade-in">Himalayan Adventures</p>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                            Trekking <span className="text-white italic">Expeditions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                            Explore the most scenic trekking routes in Himachal Pradesh with expert guides, complete packages, and unforgettable experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-black text-primary mb-2">{tracking.length}+</div>
                            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">Trek Routes</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-primary mb-2">500+</div>
                            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">Happy Trekkers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-primary mb-2">100%</div>
                            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">Safety Record</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-primary mb-2">4.8★</div>
                            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tracking Packages Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Choose Your Adventure</p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                        Featured Trekking Packages
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        All-inclusive trekking packages with accommodation, meals, guides, and permits
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tracking.map((trek) => (
                        <Link
                            key={trek.id}
                            to={`/tracking/${trek.slug}`}
                            className="group bg-white rounded-[3rem] border border-gray-100 overflow-hidden hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.15)] transition-all duration-700"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={trek.image}
                                    alt={trek.title}
                                    onError={handleImageError}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Rating Badge */}
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                                    <FiStar className="text-yellow-500" fill="currentColor" />
                                    <span className="font-black text-gray-900 text-sm">{trek.rating}</span>
                                    <span className="text-xs text-gray-500">({trek.reviews})</span>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                                    <div className="flex items-center gap-2 text-primary">
                                        <FiCalendar size={14} />
                                        <span className="text-xs font-bold uppercase tracking-widest">{trek.duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors leading-tight">
                                    {trek.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                    {trek.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Inquiry Required</div>
                                        <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">Price on Request</div>
                                    </div>
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-primary transition-all shadow-sm">
                                        <FiArrowRight fontSize={24} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gray-950 text-white rounded-t-[5rem] mx-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            Why Trek With <span className="text-white italic">Inventrip?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <FiMapPin />, title: "Expert Guides", desc: "Certified trekking guides with local knowledge and safety training" },
                            { icon: <FiTrendingUp />, title: "All-Inclusive", desc: "Accommodation, meals, permits, and equipment - everything covered" },
                            { icon: <FiStar />, title: "Safety First", desc: "First aid kits, emergency protocols, and 24/7 support throughout" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] text-center hover:bg-white/20 transition-all">
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-3xl mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <a
                            href="tel:7832911551"
                            className="inline-block bg-primary text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all shadow-2xl"
                        >
                            Book Your Trek Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tracking;
