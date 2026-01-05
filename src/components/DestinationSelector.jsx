import React, { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DestinationSelector = ({ selectedDestination, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const destinations = [
        { name: 'Himachal', path: '/destinations/himachal' },
        { name: 'Spiti', path: '/destinations/spiti' },
        { name: 'Leh', path: '/destinations/leh' },
        { name: 'Rajasthan', path: '/destinations/rajasthan' },
        { name: 'Kashmir', path: '/destinations/kashmir' },
        { name: 'Uttarakhand', path: '/destinations/uttarakhand' },
        { name: 'Goa', path: '/destinations/goa' },
        { name: 'Kerala', path: '/destinations/kerala' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-2 cursor-pointer flex items-center justify-between group transition-all"
            >
                <div className="flex flex-col">
                    <span className={`text-base font-semibold ${selectedDestination ? 'text-gray-900' : 'text-gray-400'}`}>
                        {selectedDestination || "Select Place"}
                    </span>
                </div>
                <FiMapPin className={`text-lg transition-colors ${isOpen ? 'text-primary' : 'text-gray-300'}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-[100]">
                    <div className="grid grid-cols-1 gap-1">
                        {destinations.map((dest) => (
                            <button
                                key={dest.name}
                                onClick={() => {
                                    onSelect(dest.name);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-3 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-xl transition-all text-left"
                            >
                                <FiGlobe className="text-gray-300" />
                                {dest.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DestinationSelector;
