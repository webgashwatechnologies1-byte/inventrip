import { useState } from 'react';
import CallbackForm from '../components/CallbackForm';

const Contact = () => {
  const [showCallback, setShowCallback] = useState(false);
  const heroImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '55vh' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(8,47,73,0.82), rgba(37,99,235,0.72)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex items-center">
          <div className="space-y-6 text-white max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              Talk with a travel expert
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              Let&apos;s plan your next perfect getaway
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl">
              We respond quickly—share your plans and we&apos;ll craft a tailored itinerary,
              sort transport, and handle the details so you can just enjoy the trip.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowCallback(true)}
                className="bg-white text-blue-700 font-semibold px-5 py-3 rounded-md shadow-lg hover:shadow-xl transition"
              >
                Request a callback
              </button>
              <a
                href="tel:7832911551"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-2 4a16 16 0 006 6l4-2 7 3v2" />
                </svg>
                +91 7832911551
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 pb-16 pt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-2 4a16 16 0 006 6l4-2 7 3v2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <a href="tel:7832911551" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    +91 7832911551
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon–Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@inventrip.com" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    info@inventrip.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We reply within a few hours</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex gap-3 sm:col-span-2">
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2M5 9h14l-1 11H6L5 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit us</p>
                  <p className="text-lg font-semibold text-gray-900">Inventrip Travel Services</p>
                  <p className="text-sm text-gray-600">123 Travel Street, New Delhi - 110001, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Quick contact</h2>
                  <p className="text-gray-600 mt-1">
                    Share your details and our travel expert will call you back shortly.
                  </p>
                </div>
                <button
                  onClick={() => setShowCallback(true)}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-2 4a16 16 0 006 6l4-2 7 3v2" />
                  </svg>
                  Request callback
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Dedicated travel consultant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Custom itineraries within your budget</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>24/7 support during travel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Trusted transport & stays</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Prefer WhatsApp? Call us and we&apos;ll switch to your preferred channel.
              </p>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business hours</h3>
              <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
              <div className="mt-4 p-3 rounded-lg bg-blue-50 text-blue-800 text-sm">
                We can schedule a call at your preferred time.
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl text-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Need help right now?</h3>
              <p className="text-white/90 mb-4">
                Tap below and we&apos;ll connect you to a live travel expert within minutes.
              </p>
              <button
                onClick={() => setShowCallback(true)}
                className="w-full bg-white text-blue-700 font-semibold py-2.5 rounded-md hover:shadow-lg transition"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <CallbackForm isOpen={showCallback} onClose={() => setShowCallback(false)} />
    </div>
  );
};

export default Contact;

