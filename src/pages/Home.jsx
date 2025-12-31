import { Link } from 'react-router-dom';
import { destinations } from '../data/packages';
import { useState, useEffect } from 'react';

const Home = () => {
  const featuredDestinations = Object.values(destinations).slice(0, 4);
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liveNumber1, setLiveNumber1] = useState(50538);
  const [liveNumber2, setLiveNumber2] = useState(2108);
  const [displayNumber1, setDisplayNumber1] = useState(50538);
  const [displayNumber2, setDisplayNumber2] = useState(2108);
  
  const placeholderImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop';
  
  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
    setImageLoading(prev => ({ ...prev, [key]: false }));
  };

  const handleImageLoad = (key) => {
    setImageLoading(prev => ({ ...prev, [key]: false }));
  };

  // Get all destinations for slider
  const destinationSlides = Object.values(destinations).map(dest => ({
    name: dest.name,
    slug: dest.slug,
    image: dest.packages[0]?.image || placeholderImage,
    packagesCount: dest.packages.length
  }));

  // Initialize loading states
  useEffect(() => {
    const loadingStates = {};
    Object.values(destinations).forEach(dest => {
      loadingStates[`dest-${dest.slug}`] = true;
      dest.packages.forEach(pkg => {
        loadingStates[`pkg-${pkg.id}`] = true;
      });
    });
    setImageLoading(loadingStates);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinationSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [destinationSlides.length]);

  // Animate live numbers with smooth count-up animation
  useEffect(() => {
    const interval = setInterval(() => {
      // First number: between 40000 and 55000
      const newNum1 = Math.floor(40000 + Math.random() * 15000);
      // Second number: between 1500 and 2500
      const newNum2 = Math.floor(1500 + Math.random() * 1000);
      
      setLiveNumber1(newNum1);
      setLiveNumber2(newNum2);
    }, 3000); // Update target every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Smooth count-up animation for number 1
  useEffect(() => {
    const duration = 2500; // 2.5 second animation
    const startTime = Date.now();
    const startValue = displayNumber1;
    const endValue = liveNumber1;
    const difference = endValue - startValue;

    if (difference === 0) return;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (difference * easeOutQuart));
      
      setDisplayNumber1(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayNumber1(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [liveNumber1]);

  // Smooth count-up animation for number 2
  useEffect(() => {
    const duration = 2500; // 2.5 second animation
    const startTime = Date.now();
    const startValue = displayNumber2;
    const endValue = liveNumber2;
    const difference = endValue - startValue;

    if (difference === 0) return;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (difference * easeOutQuart));
      
      setDisplayNumber2(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayNumber2(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [liveNumber2]);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destinationSlides[currentSlide]?.image || placeholderImage}
            alt={destinationSlides[currentSlide]?.name}
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
                    {slide.name}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto opacity-95 font-light">
                    {slide.packagesCount} Amazing Packages Available
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {destinationSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-2'
                }`}
                aria-label={`Go to ${destinationSlides[index].name}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 heading-responsive">Explore Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.values(destinations).map((dest, index) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="w-full h-48 overflow-hidden relative bg-gradient-to-br from-blue-100 to-purple-100">
                  {imageLoading[`dest-${dest.slug}`] !== false && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  {!imageErrors[`dest-${dest.slug}`] ? (
                    <img
                      src={dest.packages[0]?.image || placeholderImage}
                      alt={dest.name}
                      className={`w-full h-full object-cover transition-transform hover:scale-110 duration-300 ${
                        imageLoading[`dest-${dest.slug}`] !== false ? 'opacity-0' : 'opacity-100'
                      }`}
                      onError={() => handleImageError(`dest-${dest.slug}`)}
                      onLoad={() => handleImageLoad(`dest-${dest.slug}`)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{dest.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {dest.packages.length} Packages Available
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-8 sm:py-12 md:py-16 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 heading-responsive">Featured Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredDestinations.flatMap((dest, destIndex) => 
              dest.packages.slice(0, 1).map((pkg, pkgIndex) => {
                const index = destIndex + pkgIndex;
                return (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}>
                  <Link to={`/package/${pkg.slug}`}>
                    <div className="w-full h-48 overflow-hidden relative bg-gradient-to-br from-blue-100 to-purple-100">
                      {imageLoading[`pkg-${pkg.id}`] !== false && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 animate-pulse flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      {!imageErrors[`pkg-${pkg.id}`] ? (
                        <img
                          src={pkg.image || placeholderImage}
                          alt={pkg.title}
                          className={`w-full h-full object-cover transition-transform hover:scale-110 duration-300 ${
                            imageLoading[`pkg-${pkg.id}`] !== false ? 'opacity-0' : 'opacity-100'
                          }`}
                          onError={() => handleImageError(`pkg-${pkg.id}`)}
                          onLoad={() => handleImageLoad(`pkg-${pkg.id}`)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">{pkg.title.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-4">
                    <span className="text-sm text-gray-500">{pkg.duration}</span>
                    <Link to={`/package/${pkg.slug}`}>
                      <h3 className="text-lg font-semibold text-gray-800 mt-2 hover:text-blue-600">
                        {pkg.title}
                      </h3>
                    </Link>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Thrilloverse Live Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 via-blue-50 to-green-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 heading-responsive">
              Thrilloverse Live: Journeys In Motion
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans text-responsive">
              See where the world is travelling right now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2 transition-all duration-300 ease-out">
                {displayNumber1.toLocaleString()}
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-sans">
                Planning with us now
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2 transition-all duration-300 ease-out">
                {displayNumber2.toLocaleString()}
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-sans">
                Planning <span className="text-orange-500 font-semibold">VIETNAM</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

