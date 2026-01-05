import { useState } from 'react';

const CallbackForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        travelDate: '',
        travellerCount: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Inventrip expert will contact you shortly.');
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            travelDate: '',
            travellerCount: '',
            message: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative border border-gray-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-3xl font-bold text-black mb-6">Request Callback</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50 border border-gray-200 text-black rounded-lg focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50 border border-gray-200 text-black rounded-lg focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-50 border border-gray-200 text-black rounded-lg focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Travel Date
                        </label>
                        <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 text-black rounded-lg focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Traveller Count
                        </label>
                        <input
                            type="number"
                            name="travellerCount"
                            value={formData.travellerCount}
                            onChange={handleChange}
                            min="1"
                            className="w-full bg-gray-50 border border-gray-200 text-black rounded-lg focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            className="w-full bg-gray-50 border border-gray-200 text-black rounded-lg focus:bg-white transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent-teal transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CallbackForm;

