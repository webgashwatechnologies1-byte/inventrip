import { FiStar, FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400";
};

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "Ananya Kapoor",
            role: "Luxury Trekker",
            location: "Mumbai",
            content: "Inventrip took our Spiti expedition to a level I didn't think was possible in India. The glamping setups and the precision of the logistics were absolutely elite.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
            stats: "12 Days / Spiti Circuit"
        },
        {
            id: 2,
            name: "Vikram Seth",
            role: "Adventure Photographer",
            location: "Bangalore",
            content: "The SUV expedition in Ladakh was life-changing. Our driver was not just a driver but a survivalist and an expert local guide. Highly recommend their premium packages.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            stats: "10 Days / Zanskar Valley"
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Solo Traveler",
            location: "London",
            content: "I'm always cautious about safety as a solo traveler. Inventrip's 24/7 concierge and verified homestays in Kerala made me feel like royalty and completely safe.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
            stats: "15 Days / Kerala Backwaters"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* HEADER */}
            <section className="py-24 bg-gray-950 text-white rounded-b-[4rem] text-center overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8">Verified Voices</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none italic mb-8">
                        The <span className="text-white">Elite</span> Travel Community.
                    </h1>
                    <p className="text-gray-200 font-bold text-lg max-w-2xl mx-auto italic">Real stories from travelers who demand nothing but perfection from their Himalayan and coastal escapes.</p>
                </div>
            </section>

            {/* FEATURED STORY */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="bg-white border border-gray-100 rounded-[4rem] p-10 md:p-24 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <div className="absolute top-12 left-12 text-gray-50 text-9xl -z-0 opacity-20"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-tertiary/10 rounded-[4rem] rotate-3 -z-10"></div>
                            <img
                                src={reviews[activeIndex].image}
                                alt={reviews[activeIndex].name}
                                onError={handleImageError}
                                className="w-full aspect-square object-cover rounded-[3.5rem] shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-gray-950 p-8 rounded-3xl text-white shadow-2xl">
                                <div className="text-3xl font-black tracking-tighter text-white">{reviews[activeIndex].stats}</div>
                                <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">Expedition Detail</div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="flex gap-1 text-amber-500 text-2xl">
                                {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
                            </div>
                            <p className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight italic">
                                "{reviews[activeIndex].content}"
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">{reviews[activeIndex].name}</h3>
                                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">{reviews[activeIndex].role} &bull; {reviews[activeIndex].location}</p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setActiveIndex(prev => (prev - 1 + reviews.length) % reviews.length)}
                                        className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-primary transition-all shadow-sm"
                                    >
                                        <FiArrowLeft fontSize={24} />
                                    </button>
                                    <button
                                        onClick={() => setActiveIndex(prev => (prev + 1) % reviews.length)}
                                        className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-primary hover:bg-primary transition-all shadow-xl"
                                    >
                                        <FiArrowRight fontSize={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <div className="text-6xl font-black text-gray-900 tracking-tighter italic">5.0</div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Google Average</p>
                    </div>
                    <div>
                        <div className="text-6xl font-black text-gray-900 tracking-tighter italic">12K+</div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Happy Explorers</p>
                    </div>
                    <div>
                        <div className="text-6xl font-black text-gray-900 tracking-tighter italic">98%</div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Return Clients</p>
                    </div>
                    <div>
                        <div className="text-6xl font-black text-gray-900 tracking-tighter italic">24/7</div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Concierge Support</p>
                    </div>
                </div>
            </section>

            {/* CTA GRID */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-950 rounded-full"></div>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none relative z-10 italic">Your Review is the <br /> <span className="text-gray-950">Missing Piece.</span></h2>
                    <Link to="/booking" className="inline-flex relative z-10 bg-white text-gray-900 text-[11px] font-black uppercase tracking-widest px-12 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all">
                        Start Your Story <FiArrowRight className="ml-3" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
