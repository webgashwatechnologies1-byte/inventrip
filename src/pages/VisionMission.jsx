import { FiTarget, FiZap, FiCompass, FiAward, FiShield, FiHeart, FiTrendingUp, FiGlobe, FiEye } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi2';

const VisionMission = () => {
    return (
        <div className="min-h-screen bg-white font-poppins">
            {/* HERO SECTION */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-50 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-fade-in-up">
                        <FiCompass className="text-sm" /> Our Direction
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-none animate-fade-in-up delay-100">
                        Defining the <span className="text-primary italic">Future</span> of <br /> Travel in India
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        We aren't just a travel agency. We are architects of memories, setting new benchmarks for exploration, safety, and immersion in the Indian subcontinent.
                    </p>
                </div>
            </section>

            {/* MISSION & VISION CARDS */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Vision Card */}
                        <div className="group relative bg-white p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <FiEye />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6 flex items-center gap-3">
                                    Our Vision
                                    <span className="h-px flex-1 bg-gray-100"></span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    "To be the undisputed global curator of elite travel experiences in India, where every journey is a masterpiece of precision, safety, and cultural immersion."
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Global Benchmark in Hospitality",
                                        "Sustainable & Responsible Tourism",
                                        "Digital Innovation in Travel"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                                            <div className="w-6 h-6 rounded-full bg-green-50 text-primary flex items-center justify-center text-xs">
                                                <FiAward />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="group relative bg-gray-900 p-10 md:p-14 rounded-[3rem] text-white shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                            {/* Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>

                            <div className="relative">
                                <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <FiTarget />
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-tight mb-6 flex items-center gap-3">
                                    Our Mission
                                    <span className="h-px flex-1 bg-white/20"></span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Precision Planning", desc: "Crafting flawless itineraries with zero margin for error." },
                                        { title: "Local Prosperity", desc: "Ensuring our expeditions benefit remote communities." },
                                        { title: "Elite Safety", desc: "Setting the benchmark for traveler security." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group/item">
                                            <div className="w-1 h-full min-h-[40px] bg-primary/50 rounded-full group-hover/item:bg-primary transition-colors"></div>
                                            <div>
                                                <h4 className="font-bold text-lg text-white mb-1 group-hover/item:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">Elite <span className="text-primary italic">Objectives</span></h2>
                        <p className="text-gray-500 font-medium">The pillars that Uphold our Promise</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Standard of Care", icon: <FiHeart />, desc: "Unrivaled empathy and dedication to every traveler's unique needs.", color: "text-rose-500", bg: "bg-rose-50" },
                            { title: "Innovation", icon: <FiZap />, desc: "Leveraging technology to bridge the gap between wilderness and comfort.", color: "text-amber-500", bg: "bg-amber-50" },
                            { title: "Integrity", icon: <FiShield />, desc: "Absolute transparency in logistics, pricing, and environmental ethics.", color: "text-blue-500", bg: "bg-blue-50" }
                        ].map((obj, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 text-center">
                                <div className={`w-20 h-20 mx-auto ${obj.bg} ${obj.color} rounded-3xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    {obj.icon}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-4">{obj.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{obj.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="py-24 bg-gray-50 mx-4 mb-4 rounded-[4rem]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <HiOutlineSparkles className="text-4xl text-primary mx-auto mb-8 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight italic mb-8">
                        "Travel is the only thing you buy that makes you richer. We make sure that wealth is eternal."
                    </h2>
                    <div className="inline-block px-8 py-3 rounded-full bg-white border border-gray-100 text-xs font-black uppercase tracking-widest text-gray-400 shadow-sm">
                        Team Inventrip
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionMission;
