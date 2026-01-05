import React, { useState, useRef, useEffect } from 'react';
import { FiUsers, FiPlus, FiMinus, FiChevronDown } from 'react-icons/fi';

const GuestSelector = ({ guests, setGuests, variant = "minimal" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const updateCount = (type, delta) => {
        setGuests(prev => {
            const newValue = Math.max(type === 'adults' ? 1 : 0, prev[type] + delta);
            return { ...prev, [type]: newValue };
        });
    };

    const totalGuests = guests.adults + guests.children;

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-2 cursor-pointer flex items-center justify-between group transition-all"
            >
                <div className="flex flex-col">
                    <span className={`text-base font-semibold text-gray-900`}>
                        {totalGuests} Guests, {guests.rooms} {guests.rooms === 1 ? 'Room' : 'Rooms'}
                    </span>
                </div>
                <FiChevronDown className={`text-lg transition-all duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-300'}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full right-0 md:left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-[100]">
                    <div className="space-y-6">
                        {/* Adults */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">Adults</h4>
                                <p className="text-xs text-gray-400">Ages 13+</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={(e) => { e.stopPropagation(); updateCount('adults', -1); }}
                                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                                    disabled={guests.adults <= 1}
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-4 text-center font-bold text-gray-900">{guests.adults}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); updateCount('adults', 1); }}
                                    className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">Children</h4>
                                <p className="text-xs text-gray-400">Ages 2-12</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={(e) => { e.stopPropagation(); updateCount('children', -1); }}
                                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                                    disabled={guests.children <= 0}
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-4 text-center font-bold text-gray-900">{guests.children}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); updateCount('children', 1); }}
                                    className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        {/* Rooms */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">Rooms</h4>
                                <p className="text-xs text-gray-400">Total Rooms</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={(e) => { e.stopPropagation(); updateCount('rooms', -1); }}
                                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                                    disabled={guests.rooms <= 1}
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-4 text-center font-bold text-gray-900">{guests.rooms}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); updateCount('rooms', 1); }}
                                    className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:border-primary hover:text-white transition-all"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-primary text-white w-full py-3 rounded-xl font-bold hover:bg-black transition"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuestSelector;
