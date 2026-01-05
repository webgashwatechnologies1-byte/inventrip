import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiPhone, FiGift } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';

const PackageCard = ({ pkg, onRequestCallback }) => {
    const savings = pkg.originalPrice - pkg.price;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Link to={`/package/${pkg.slug}`} className="block w-full h-full">
                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </Link>

                {/* Save Badge */}
                <div className="absolute top-4 left-0 bg-[#39a34a] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md rounded-r-md">
                    <span className="mr-1">🏷️</span> Save INR {savings.toLocaleString()}
                </div>

                {/* Decorative Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="p-5 pb-8 flex flex-col flex-grow">
                {/* Meta Row */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 font-medium">{pkg.duration || "6 days & 5 nights"}</span>
                    <div className="flex items-center gap-1">
                        <FiStar className="text-green-500 fill-current w-3 h-3" />
                        <span className="text-sm font-bold text-green-600">{pkg.rating || "5.0"}</span>
                        <span className="text-sm text-gray-400">({pkg.reviews || 200})</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-0.5 line-clamp-2">
                    <Link to={`/package/${pkg.slug}`} className="hover:text-[#39a34a] transition-colors">
                        {pkg.title}
                    </Link>
                </h3>

                {/* Itinerary (Mocked/Static for styling match) */}
                {/* <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-800 mb-3 tracking-tight">
                    <span className="font-extrabold">1D</span> Phuntsholing • <span className="font-extrabold">1D</span> Thimphu • <span className="text-orange-500 font-bold">...+2</span>
                </div> */}

                {/* Sale Badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#39a34a] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
                    <FiGift className="w-3 h-3" /> OFFER PRICE!
                </div>

                {/* Pricing Block */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 rounded">
                            SAVE ₹{savings.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 font-medium">/Adult</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                    <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#39a34a]/20 rounded-lg text-[#39a34a] hover:bg-[#39a34a]/5 transition-colors">
                        <FiPhone className="w-5 h-5" />
                    </button>
                    {onRequestCallback ? (
                        <button
                            onClick={onRequestCallback}
                            className="flex-grow h-12 flex items-center justify-center bg-[#39a34a] text-white text-base font-bold rounded-lg hover:bg-[#2e823b] transition-colors shadow-lg shadow-[#39a34a]/20"
                        >
                            Request Callback
                        </button>
                    ) : (
                        <Link
                            to={`/package/${pkg.slug}`}
                            className="flex-grow h-12 flex items-center justify-center bg-[#39a34a] text-white text-base font-bold rounded-lg hover:bg-[#2e823b] transition-colors shadow-lg shadow-[#39a34a]/20"
                        >
                            Request Callback
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PackageCard;