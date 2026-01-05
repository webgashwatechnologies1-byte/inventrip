import { FiTarget, FiZap, FiCompass, FiAward, FiShield, FiHeart, FiTrendingUp, FiGlobe } from 'react-icons/fi';

const VisionMission = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* HERO */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920"
                        alt="Mountain Range"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 w-full text-center">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8">Our Foundation</p>
                    <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-none italic mb-8">
                        Beyond <span className="text-white tracking-widest">Travel.</span>
                    </h1>
                    <p className="text-gray-300 font-bold text-lg max-w-2xl mx-auto italic">Defining the standards for modern exploration in the Indian subcontinent.</p>
                </div>
            </section>

            {/* MISSION & VISION GRID */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Vision */}
                    <div className="bg-gray-50 p-12 md:p-24 rounded-[4rem] border border-gray-100 space-y-8 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                        <div className="w-20 h-20 bg-primary/5 text-primary rounded-[2rem] flex items-center justify-center text-4xl border border-primary/10 group-hover:scale-110 transition-transform">
                            <FiCompass />
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Our Vision</h2>
                        <p className="text-xl text-gray-700 font-bold leading-relaxed italic">
                            "To be the undisputed global curator of elite travel experiences in India, where every journey is a masterpiece of precision, safety, and cultural immersion."
                        </p>
                        <div className="pt-8 border-t border-gray-100 flex gap-6 grayscale opacity-30">
                            <FiGlobe className="text-2xl" />
                            <FiTrendingUp className="text-2xl" />
                            <FiAward className="text-2xl" />
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="bg-gray-900 p-12 md:p-24 rounded-[4rem] text-white space-y-8 group hover:shadow-2xl transition-all duration-700">
                        <div className="w-20 h-20 bg-white/10 text-tertiary rounded-[2rem] flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                            <FiTarget />
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Our Mission</h2>
                        <ul className="space-y-6">
                            {[
                                { label: "Precision Planning", desc: "Crafting flawless itineraries with zero margin for error." },
                                { label: "Local Prosperity", desc: "Ensuring our expeditions benefit the remote communities we visit." },
                                { label: "Elite Safety", desc: "Setting the benchmark for high-altitude and offroad traveler security." },
                                { label: "Storytelling", desc: "Creating memories that resonate far beyond the final checkout." }
                            ].map((m, i) => (
                                <li key={i} className="flex gap-4 group/item">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white">{m.label}</p>
                                        <p className="text-gray-300 text-sm font-bold italic">{m.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CORE OBJECTIVES */}
            <section className="py-24 bg-white border-t border-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Elite Objectives</h2>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Standard of Care", icon: <FiHeart />, desc: "Unrivaled empathy and dedication to every traveler's unique needs." },
                        { title: "Innovation", icon: <FiZap />, desc: "Leveraging technology to bridge the gap between wilderness and comfort." },
                        { title: "Integrity", icon: <FiShield />, desc: "Absolute transparency in logistics, pricing, and environmental ethics." }
                    ].map((obj, i) => (
                        <div key={i} className="p-12 text-center space-y-6 hover:-translate-y-4 transition-transform duration-500">
                            <div className="text-4xl text-primary flex justify-center">{obj.icon}</div>
                            <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">{obj.title}</h3>
                            <p className="text-gray-700 text-sm font-bold italic leading-relaxed">{obj.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CLOSING STRIP */}
            <section className="py-32 bg-gray-50 text-center rounded-t-[5rem] mx-4">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight italic mb-8">"Travel is the only thing you buy that makes you richer. We make sure that wealth is eternal."</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default VisionMission;
