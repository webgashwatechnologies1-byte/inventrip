import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiCalendar } from 'react-icons/fi';

const CustomCalendar = ({ selectedDate, onDateSelect, label = "Select Date", variant = "minimal" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const dropdownRef = useRef(null);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const startOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateClick = (day) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        onDateSelect(date);
        setIsOpen(false);
    };

    const renderDays = () => {
        const days = [];
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const totalDays = getDaysInMonth(year, month);
        const startDay = startOfMonth(year, month);

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-9 w-9"></div>);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(year, month, i);
            const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
            const isToday = today.toDateString() === date.toDateString();
            const isPast = date < today;

            days.push(
                <button
                    key={i}
                    disabled={isPast}
                    onClick={() => handleDateClick(i)}
                    className={`h-9 w-9 flex items-center justify-center rounded-lg text-xs font-medium transition-all
                        ${isSelected ? 'bg-primary text-white shadow-md' : ''}
                        ${!isSelected && isToday ? 'text-primary border border-primary/30' : ''}
                        ${!isSelected && !isToday && !isPast ? 'hover:bg-gray-50 text-gray-700' : ''}
                        ${isPast ? 'text-gray-200 cursor-not-allowed' : ''}
                    `}
                >
                    {i}
                </button>
            );
        }

        return days;
    };

    const formatDate = (date) => {
        if (!date) return "Choose Date";
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-2 cursor-pointer flex items-center justify-between group transition-all"
            >
                <div className="flex flex-col">
                    <span className={`text-base font-semibold ${selectedDate ? 'text-gray-900' : 'text-gray-400'}`}>
                        {formatDate(selectedDate)}
                    </span>
                </div>
                <FiCalendar className={`text-lg transition-colors ${isOpen ? 'text-primary' : 'text-gray-300'}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[100]">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900 text-sm">
                            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h3>
                        <div className="flex gap-1">
                            <button onClick={handlePrevMonth} className="p-1.5 hover:bg-gray-50 rounded-lg"><FiChevronLeft size={16} /></button>
                            <button onClick={handleNextMonth} className="p-1.5 hover:bg-gray-50 rounded-lg"><FiChevronRight size={16} /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {daysOfWeek.map(day => (
                            <div key={day} className="h-9 w-9 flex items-center justify-center text-[10px] font-bold text-gray-400 uppercase">
                                {day[0]}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {renderDays()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;
