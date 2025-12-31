import { useParams } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { destinations } from '../data/packages';
import PackageCard from '../components/PackageCard';

const Destination = () => {
  const { slug } = useParams();
  const destination = destinations[slug];
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Calculate min and max price from packages
  const priceBounds = useMemo(() => {
    if (!destination) return [0, 100000];
    const prices = destination.packages.map(pkg => pkg.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, [destination]);

  // Initialize price range with actual bounds
  const [priceRange, setPriceRange] = useState(() => {
    if (destination) {
      const prices = destination.packages.map(pkg => pkg.price);
      return [Math.min(...prices), Math.max(...prices)];
    }
    return [0, 100000];
  });

  // Update price range when destination changes
  useEffect(() => {
    if (destination && priceBounds[0] !== 0 && priceBounds[1] !== 100000) {
      setPriceRange(priceBounds);
    }
  }, [destination, priceBounds]);

  // Filter packages based on selected criteria
  const filteredPackages = useMemo(() => {
    if (!destination) return [];
    
    return destination.packages.filter(pkg => {
      // Price filter
      if (pkg.price < priceRange[0] || pkg.price > priceRange[1]) {
        return false;
      }
      
      // Rating filter
      if (selectedRatings.length > 0) {
        const matchesRating = selectedRatings.some(rating => {
          if (rating === 4) return pkg.rating >= 4 && pkg.rating < 4.5;
          if (rating === 4.5) return pkg.rating >= 4.5 && pkg.rating < 5;
          if (rating === 5) return pkg.rating >= 5;
          return false;
        });
        if (!matchesRating) return false;
      }
      
      return true;
    });
  }, [destination, priceRange, selectedRatings]);

  const handleRatingToggle = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const resetFilters = () => {
    setPriceRange(priceBounds);
    setSelectedRatings([]);
  };

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
          <p className="text-sm sm:text-base text-gray-600">The destination you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Create slides from destination packages
  const destinationSlides = destination.packages.slice(0, 3).map(pkg => ({
    title: destination.name,
    description: `${destination.packages.length} Amazing Packages Available`,
    image: pkg.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop'
  }));

  useEffect(() => {
    if (destinationSlides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % destinationSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [destinationSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      {destinationSlides.length > 0 && (
        <section className="relative text-white py-20 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={destinationSlides[currentSlide]?.image}
              alt={destinationSlides[currentSlide]?.title}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out text-center"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {destinationSlides.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto opacity-95 font-light">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            {destinationSlides.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {destinationSlides.map((_, index) => (
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
      )}

      <div className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">{destination.name} Packages</h2>
              <p className="text-sm sm:text-base text-gray-600">
                {filteredPackages.length} of {destination.packages.length} packages
              </p>
            </div>
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Filter Results</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset All
                </button>
              </div>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase">Price</h3>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">₹{priceRange[0].toLocaleString()}</span>
                    <span className="text-gray-600">₹{priceRange[1].toLocaleString()}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={priceBounds[0]}
                      max={priceBounds[1]}
                      value={priceRange[0]}
                      onChange={(e) => {
                        const newMin = parseInt(e.target.value);
                        setPriceRange([newMin, Math.max(newMin, priceRange[1])]);
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <input
                      type="range"
                      min={priceBounds[0]}
                      max={priceBounds[1]}
                      value={priceRange[1]}
                      onChange={(e) => {
                        const newMax = parseInt(e.target.value);
                        setPriceRange([Math.min(priceRange[0], newMax), newMax]);
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-2"
                    />
                  </div>
                  <button
                    onClick={() => setPriceRange(priceBounds)}
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    Show All
                  </button>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase">Star Rating</h3>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="space-y-3">
                  {[5, 4.5, 4].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => handleRatingToggle(rating)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <div className="ml-3 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < Math.floor(rating)
                                ? 'text-yellow-400'
                                : i < rating
                                ? 'text-yellow-300'
                                : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm text-gray-700">
                          {rating === 5 ? '5.0 & above' : rating === 4.5 ? '4.5 & above' : '4.0 & above'}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="flex-1">
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No packages found matching your filters.</p>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

