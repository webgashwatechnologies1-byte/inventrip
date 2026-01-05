import { useState } from "react";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiSend,
    FiClock,
    FiCheck,
    FiGlobe,
    FiSmartphone
} from "react-icons/fi";
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

// Reuse a high-quality image from assets if available, or fallback
// Using the trekking image as it gives a nice adventurous vibe fitting for 'Contact' (planning a trip)
// using a high-quality Unsplash image for the contact hero
const contactHeroBg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=100&w=3840&auto=format&fit=crop";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    const contactDetails = [
        {
            icon: <FiPhone className="text-2xl" />,
            title: "Talk to Expert",
            info: "+91 78329-11551",
            sub: "Mon - Sat, 9am - 7pm",
            action: "tel:+917832911551",
            color: "bg-blue-50 text-blue-600 border-blue-100" // Keeping distinct but harmonious colors
        },
        {
            icon: <FiMail className="text-2xl" />,
            title: "Email Support",
            info: "info@inventrip.com",
            sub: "24/7 Online Support",
            action: "mailto:info@inventrip.com",
            color: "bg-[#39a34a]/10 text-[#39a34a] border-[#39a34a]/20" // Primary Green
        },
        {
            icon: <FiMapPin className="text-2xl" />,
            title: "Visit Headquarters",
            info: "New Delhi, India",
            sub: "Serving Global Travelers",
            action: "https://maps.google.com",
            color: "bg-orange-50 text-orange-600 border-orange-100"
        }
    ];

    return (
        <div className="font-poppins text-gray-900 bg-white selection:bg-[#39a34a] selection:text-white">
            {/* HERO SECTION - Parallax & Modern */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={contactHeroBg}
                        alt="Contact Us"
                        className="w-full h-full object-cover transform scale-110 motion-safe:animate-[pulse_30s_ease-in-out_infinite]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-[#39a34a] animate-pulse"></span>
                        <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">24/7 Support Active</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl animate-fade-in-up delay-100">
                        Let's Plan Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39a34a] to-emerald-300">Dream Journey</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        Have a specific destination in mind or need expert guidance?
                        Our travel specialists are ready to craft your perfect itinerary.
                    </p>
                </div>

                {/* Decorative Wave at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <svg className="w-full h-12 md:h-24 text-white fill-current" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* MAIN CONTENT CONTAINER - Floating Card Style */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-30 mb-24">
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12">

                        {/* LEFT: Contact Information & Socials */}
                        <div className="lg:col-span-5 bg-slate-50 p-8 md:p-12 lg:p-16 border-r border-gray-100 relative overflow-hidden">
                            {/* Background Details */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#39a34a]/5 rounded-full blur-[100px] pointer-events-none"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="relative space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Contact Information</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Reach out to us through any of these channels. We promise a prompt response.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {contactDetails.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.action}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#39a34a]/30 transition-all group"
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">{item.title}</h4>
                                                <p className="text-lg font-bold text-gray-800">{item.info}</p>
                                                <p className="text-xs text-gray-400 font-medium mt-1">{item.sub}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Connect With Us</h4>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: <FaFacebookF />, bg: "bg-blue-600" },
                                            { icon: <FaInstagram />, bg: "bg-pink-600" },
                                            { icon: <FaTwitter />, bg: "bg-sky-500" },
                                            { icon: <FaLinkedinIn />, bg: "bg-blue-700" },
                                            { icon: <FaWhatsapp />, bg: "bg-green-500" },
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className={`w-10 h-10 rounded-full ${social.bg} text-white flex items-center justify-center text-sm shadow-lg hover:-translate-y-1 transition-transform`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Contact Form */}
                        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 bg-white relative">
                            <div className="mb-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Send a Message</h3>
                                <p className="text-gray-500">
                                    Fill in the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            {submitStatus === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[400px] animate-fade-in-up">
                                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-[#39a34a] text-5xl mb-2">
                                        <FiCheckCircle />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                                        <p className="text-gray-500 max-w-sm mx-auto">
                                            Thank you for reaching out, {formData.name}. Our travel expert will contact you shortly.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="mt-6 px-8 py-3 bg-gray-100 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
                                            <div className="relative group">
                                                <div
                                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus-within:bg-white focus-within:border-[#39a34a] focus-within:ring-4 focus-within:ring-[#39a34a]/10 transition-all cursor-pointer flex justify-between items-center"
                                                    onClick={() => {
                                                        const el = document.getElementById('subject-dropdown');
                                                        const overlay = document.getElementById('dropdown-overlay');
                                                        el.classList.toggle('hidden');
                                                        overlay.classList.toggle('hidden');
                                                    }}
                                                >
                                                    <span className={`font-medium ${formData.subject ? 'text-gray-900' : 'text-gray-400'}`}>
                                                        {formData.subject
                                                            ? {
                                                                'package': 'Tour Package Booking',
                                                                'custom': 'Custom Itinerary',
                                                                'flight': 'Flight/Train Booking',
                                                                'support': 'Existing Booking Support',
                                                                'other': 'Other'
                                                            }[formData.subject]
                                                            : 'Select Inquiry Type'
                                                        }
                                                    </span>
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>

                                                {/* Hidden Input for Form Logic */}
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                    required
                                                >
                                                    <option value="">Select</option>
                                                    <option value="package">Tour Package Booking</option>
                                                    <option value="custom">Custom Itinerary</option>
                                                    <option value="flight">Flight/Train Booking</option>
                                                    <option value="support">Existing Booking Support</option>
                                                    <option value="other">Other</option>
                                                </select>

                                                {/* Custom Options List */}
                                                <div id="subject-dropdown" className="hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden transform transition-all">
                                                    {[
                                                        { value: 'package', label: 'Tour Package Booking' },
                                                        { value: 'custom', label: 'Custom Itinerary' },
                                                        { value: 'flight', label: 'Flight/Train Booking' },
                                                        { value: 'support', label: 'Existing Booking Support' },
                                                        { value: 'other', label: 'Other' }
                                                    ].map((opt) => (
                                                        <div
                                                            key={opt.value}
                                                            onClick={() => {
                                                                handleChange({ target: { name: 'subject', value: opt.value } });
                                                                document.getElementById('subject-dropdown').classList.add('hidden');
                                                                document.getElementById('dropdown-overlay').classList.add('hidden');
                                                            }}
                                                            className="px-6 py-3 hover:bg-[#39a34a]/5 hover:text-[#39a34a] cursor-pointer transition-colors font-medium text-gray-700 flex items-center justify-between group/item"
                                                        >
                                                            {opt.label}
                                                            {formData.subject === opt.value && (
                                                                <span className="text-[#39a34a]"><FiCheck /></span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Click Overlay to close */}
                                                <div
                                                    className="fixed inset-0 z-10 hidden"
                                                    id="dropdown-overlay"
                                                    onClick={(e) => {
                                                        const dropdown = document.getElementById('subject-dropdown');
                                                        if (!dropdown.classList.contains('hidden')) {
                                                            dropdown.classList.add('hidden');
                                                            e.target.classList.add('hidden');
                                                        }
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            required
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-[#39a34a] focus:ring-4 focus:ring-[#39a34a]/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                                            placeholder="Tell us about your travel plans..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-5 bg-[#39a34a] text-white text-sm font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#2e8a3b] focus:ring-4 focus:ring-[#39a34a]/30 transition-all shadow-lg shadow-[#39a34a]/20 flex items-center justify-center gap-3 active:scale-[0.99]"
                                        >
                                            {isSubmitting ? (
                                                <>Processing...</>
                                            ) : (
                                                <>Send Message <FiSend className="text-lg" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* MAP SECTION - Optional but adds to design */}
            <section className="h-[400px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    title="Inventrip Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754721676!3d28.52728034389635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709664567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            </section>
        </div>
    );
};

export default Contact;
