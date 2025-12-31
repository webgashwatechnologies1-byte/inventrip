import { useParams, Link } from 'react-router-dom';
import { getPackageBySlug, destinations } from '../data/packages';
import { generateDefaultItinerary } from '../data/itineraryTemplates';
import { useState, useEffect } from 'react';
import CallbackForm from '../components/CallbackForm';

const PackageDetail = () => {
  const { slug } = useParams();
  const pkg = getPackageBySlug(slug);
  const [showCallback, setShowCallback] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('itinerary');
  
  const placeholderImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop';

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Package Not Found</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4">The package you're looking for doesn't exist.</p>
          <Link to="/" className="text-blue-600 hover:underline text-sm sm:text-base">Go to Home</Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  const destination = Object.values(destinations).find(dest => 
    dest.packages.some(p => p.id === pkg.id)
  );

  // Create slides from same destination packages
  const packageSlides = destination?.packages.slice(0, 3).map(p => ({
    title: p.title,
    image: p.image || placeholderImage
  })) || [{ title: pkg.title, image: pkg.image || placeholderImage }];

  useEffect(() => {
    if (packageSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % packageSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [packageSlides.length]);

  // Use provided itinerary; if missing, fall back to a sensible default so the tab never feels empty.
  const itinerary =
    pkg.itinerary && pkg.itinerary.length > 0
      ? pkg.itinerary
      : generateDefaultItinerary(pkg.title, destination?.name || 'Destination');

  const tabs = [
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'policies', label: 'Tour Info & Policies' },
    { id: 'description', label: 'Package Description' },
    { id: 'attractions', label: 'Attraction & Activities' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <section className="relative text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={packageSlides[currentSlide]?.image || (imageError ? placeholderImage : (pkg.image || placeholderImage))}
            alt={packageSlides[currentSlide]?.title || pkg.title}
            className="w-full h-full object-cover transition-opacity duration-1000"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out text-center"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {packageSlides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto opacity-95 font-light">
                    {pkg.duration} • {destination?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          {packageSlides.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {packageSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Package Info Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">{pkg.title}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm sm:text-base text-gray-600">{pkg.duration}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm sm:text-base text-gray-700 ml-1">{pkg.rating}</span>
                  <span className="text-xs sm:text-sm text-gray-500 ml-1">({pkg.reviews} reviews)</span>
                </div>
                {destination && (
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="text-sm sm:text-base text-blue-600 hover:underline"
                  >
                    {destination.name}
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</span>
                <span className="text-lg sm:text-xl md:text-2xl text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                <span className="text-base sm:text-lg text-green-600 font-semibold">Save {discount}%</span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <a
                  href="tel:7832911551"
                  className="bg-green-600 text-white text-center py-2.5 sm:py-3 px-6 rounded-md hover:bg-green-700 transition font-semibold text-sm sm:text-base flex items-center justify-center"
                  aria-label="Call Now"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Now
                </a>
                <button
                  onClick={() => setShowCallback(true)}
                  className="bg-blue-600 text-white py-2.5 sm:py-3 px-6 rounded-md hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
                >
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm sm:text-base font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-500 hidden sm:block"></div>
              
              <div className="space-y-8">
                {itinerary.map((day) => (
                  <div key={day.day} className="relative flex items-start gap-6">
                    {/* Timeline Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {day.day}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                          Day {day.day} / ({day.location})
                        </h3>
                        <h4 className="text-lg sm:text-xl font-semibold text-blue-600 mt-1">
                          {day.subtitle}
                        </h4>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                        {day.description}
                      </p>
                      <div className="bg-gray-50 px-4 py-2 rounded-md inline-block">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">
                          {day.meals}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tour Info & Policies Tab */}
        {activeTab === 'policies' && (
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Tour Info & Policies</h2>
            
            {pkg.policies ? (
              <div className="space-y-8">
                {/* Cancellation Policy */}
                <section>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Cancellation Policy</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {pkg.policies.cancellation}
                  </p>
                </section>

                {/* Inclusions */}
                <section>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Package Inclusions</h3>
                  <ul className="space-y-2">
                    {pkg.policies.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Exclusions */}
                <section>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Package Exclusions</h3>
                  <ul className="space-y-2">
                    {pkg.policies.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                        <span className="text-red-600 font-bold mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Important Notes */}
                <section>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Important Notes</h3>
                  <ul className="space-y-2">
                    {pkg.policies.importantNotes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ) : (
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Cancellation Policy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                    <li><strong>30+ days before travel:</strong> Full refund minus 5% processing fee</li>
                    <li><strong>15-30 days before travel:</strong> 50% refund</li>
                    <li><strong>7-14 days before travel:</strong> 25% refund</li>
                    <li><strong>Less than 7 days:</strong> No refund</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Package Inclusions</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Accommodation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Meals (Breakfast & Dinner)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Transportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Guide Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Sightseeing</span>
                    </li>
                  </ul>
                </section>
              </div>
            )}
          </div>
        )}

        {/* Package Description Tab */}
        {activeTab === 'description' && (
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Package Description</h2>
            <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Experience the best of {destination?.name || 'this destination'} with our carefully curated package. 
                This tour includes accommodation, meals, transportation, and guided experiences. 
                Perfect for families, couples, and solo travelers looking for an unforgettable adventure.
              </p>
              <p>
                Our {pkg.duration} package is designed to give you a comprehensive experience of the region's 
                natural beauty, cultural heritage, and adventure activities. You'll stay in comfortable accommodations, 
                enjoy delicious local and international cuisine, and explore the most iconic attractions with 
                experienced guides.
              </p>
              <p>
                Whether you're seeking relaxation, adventure, or cultural immersion, this package offers something 
                for everyone. Book now and create memories that will last a lifetime.
              </p>
            </div>
          </div>
        )}

        {/* Attractions & Activities Tab */}
        {activeTab === 'attractions' && (
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Attractions & Activities</h2>
            
            {pkg.attractions && pkg.attractions.length > 0 && (
              <section className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Attractions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pkg.attractions.map((attraction, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-gray-700 text-sm sm:text-base">{attraction}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {pkg.activities && pkg.activities.length > 0 && (
              <section>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Activities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pkg.activities.map((activity, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <span className="text-gray-700 text-sm sm:text-base font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {(!pkg.attractions || pkg.attractions.length === 0) && (!pkg.activities || pkg.activities.length === 0) && (
              <p className="text-gray-700 text-sm sm:text-base">
                Attraction and activity details will be available soon. Please contact us for more information.
              </p>
            )}
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            
            {pkg.faq && pkg.faq.length > 0 ? (
              <div className="space-y-6">
                {pkg.faq.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    What is included in the package?
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    The package includes accommodation, meals as per itinerary, transportation, guide services, and sightseeing as mentioned in the package details.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    What is the cancellation policy?
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Cancellation charges apply as per policy. 30+ days: Full refund minus 5% processing fee. 15-30 days: 50% refund. 7-14 days: 25% refund. Less than 7 days: No refund.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    How do I book this package?
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    You can book by calling us at <a href="tel:7832911551" className="text-blue-600 hover:underline">+91 7832911551</a> or by requesting a callback using the button above.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <CallbackForm isOpen={showCallback} onClose={() => setShowCallback(false)} />
    </div>
  );
};

export default PackageDetail;
