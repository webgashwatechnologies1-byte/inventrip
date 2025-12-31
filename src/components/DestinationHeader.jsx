import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DestinationHeader = () => {
  const scrollContainerRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const destinations = [
    { name: 'Europe', slug: 'europe', icon: '🏛️', trending: false },
    { name: 'Dubai', slug: 'dubai', icon: '🏨', trending: true },
    { name: 'Rajasthan', slug: 'rajasthan', icon: '🏰', trending: true },
    { name: 'Japan', slug: 'japan', icon: '⛩️', trending: true },
    { name: 'Singapore', slug: 'singapore', icon: '🦁', trending: false },
    { name: 'Bhutan', slug: 'bhutan', icon: '🏯', trending: true },
    { name: 'Thailand', slug: 'thailand', icon: '🛕', trending: false },
    { name: 'North East India', slug: 'north-east-india', icon: '🏛️', trending: false },
    { name: 'Bali', slug: 'bali', icon: '🚪', trending: false },
    { name: 'Maldives', slug: 'maldives', icon: '🏝️', trending: false },
  ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = () => {
    checkScroll();
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide ${showRightArrow ? 'pr-12' : ''}`}
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* Explore - Active State */}
          <Link 
            to="/" 
            className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group relative pb-2"
          >
            <div className="text-3xl">🔥</div>
            <span className="text-sm font-medium text-orange-500 group-hover:text-orange-600 transition">
              Explore
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
          </Link>

          {/* Destinations */}
          {destinations.map((destination, index) => (
            <Link
              key={index}
              to={`/destinations/${destination.slug}`}
              className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group relative"
            >
              {destination.trending && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-orange-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-0.5 whitespace-nowrap">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Trending
                  </span>
                </div>
              )}
              <div className="text-3xl group-hover:scale-110 transition-transform">
                {destination.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition text-center">
                {destination.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Right Arrow Button */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-md transition z-10"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default DestinationHeader;

