import React, { useState, useEffect } from 'react';
import { FiX, FiMapPin, FiUser, FiPhone, FiMail } from 'react-icons/fi';
import { usePopup } from '../context/PopupContext';

const GlobalPopup = () => {
    const { isOpen, closePopup, initialData } = usePopup();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        destination: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen && initialData?.destination) {
            setFormData(prev => ({ ...prev, destination: initialData.destination }));
        }
    }, [isOpen, initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log('Form Submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            closePopup();
            setFormData({ name: '', phone: '', email: '', destination: '' });
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl transform transition-all animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
                >
                    <FiX className="text-xl" />
                </button>

                {/* Header Image/Banner */}
                <div className="bg-[#39a34a] h-32 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <div className="text-center relative z-10 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">Plan Your Dream Trip</h3>
                        <p className="text-white/80 text-xs uppercase tracking-widest font-medium">Get a Customized Quote</p>
                    </div>
                </div>

                <div className="p-8 pt-6">
                    {isSubmitted ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h4>
                            <p className="text-gray-500 text-sm">Our travel expert will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiUser className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39a34a] focus:border-transparent transition-all text-sm font-medium"
                                        placeholder="Jon Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Phone Number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiPhone className="text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39a34a] focus:border-transparent transition-all text-sm font-medium"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMail className="text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39a34a] focus:border-transparent transition-all text-sm font-medium"
                                        placeholder="jon@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Destination</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMapPin className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39a34a] focus:border-transparent transition-all text-sm font-medium"
                                        placeholder="Where do you want to go?"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#39a34a] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#39a34a]/30 hover:bg-[#2e853c] hover:shadow-[#39a34a]/40 transform hover:-translate-y-0.5 transition-all duration-200 mt-4 uppercase text-xs tracking-widest"
                            >
                                Send Enquiry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GlobalPopup;
