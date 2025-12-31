import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { destinations as destinationsData } from '../data/packages';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTransportOpen, setMobileTransportOpen] = useState(false);
  // Initialize based on current location
  const [showDestinationMenu, setShowDestinationMenu] = useState(() => location.pathname.startsWith('/destinations'));
  const scrollContainerRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Show destination menu when on destination pages, hide on other pages
  useEffect(() => {
    setShowDestinationMenu(location.pathname.startsWith('/destinations'));
    // Close mobile drawers when navigating to keep layout consistent
    setMobileMenuOpen(false);
    setMobileTransportOpen(false);
  }, [location.pathname]);

  // Map destinations from packages data to menu format
  const destinationMenu = Object.values(destinationsData).map(dest => {
    // Use short name for display
    const shortNameMap = {
      'Himachal Pradesh': 'Himachal',
      'Spiti Valley': 'Spiti',
      'Leh Ladakh': 'Leh'
    };
    
    return {
      name: shortNameMap[dest.name] || dest.name,
      slug: dest.slug,
      trending: false
    };
  });

  // Icon component for destinations - matching main header icon style
  const DestinationIcon = ({ slug }) => {
    const iconStyle = { width: 20, height: 20 };
    
    switch(slug) {
      case 'himachal':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <path d="M6 16L12 20L18 16L15 10L12 12L9 10L6 16Z" fill="#8B7355" stroke="#654321" strokeWidth="1.5"/>
            <path d="M9 10L12 8L15 10" stroke="#654321" strokeWidth="1.5"/>
            <path d="M12 8V12" stroke="#654321" strokeWidth="1.5"/>
          </svg>
        );
      case 'spiti':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <path d="M5 16L12 20L19 16L16 9L12 11L8 9L5 16Z" fill="#A0826D" stroke="#654321" strokeWidth="1.5"/>
            <path d="M8 9L12 7L16 9" stroke="#654321" strokeWidth="1.5"/>
          </svg>
        );
      case 'leh':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <ellipse cx="12" cy="14" rx="8" ry="6" fill="#D2B48C" stroke="#8B7355" strokeWidth="1.5"/>
            <path d="M8 10L12 8L16 10" stroke="#8B7355" strokeWidth="1.5" fill="none"/>
            <circle cx="10" cy="12" r="1.5" fill="#654321"/>
            <circle cx="14" cy="12" r="1.5" fill="#654321"/>
            <path d="M12 14L12 16" stroke="#654321" strokeWidth="1.5"/>
          </svg>
        );
      case 'rajasthan':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <path d="M8 8L12 6L16 8V16L12 18L8 16V8Z" fill="#FF69B4" stroke="#C71585" strokeWidth="1.5"/>
            <rect x="10" y="10" width="4" height="6" fill="#FFFFFF" stroke="#FF69B4" strokeWidth="1"/>
            <path d="M11 12H13M11 14H13" stroke="#FF69B4" strokeWidth="1.5"/>
          </svg>
        );
      case 'kashmir':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <circle cx="12" cy="10" r="4" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="1.5"/>
            <circle cx="10" cy="9" r="1" fill="#FF1493"/>
            <circle cx="14" cy="9" r="1" fill="#FF1493"/>
            <path d="M12 11.5C11.5 11.5 11 12 11 12.5" stroke="#FF1493" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 15L11 18L12 20L13 18L12 15Z" fill="#90EE90" stroke="#32CD32" strokeWidth="1"/>
          </svg>
        );
      case 'uttarakhand':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <path d="M7 17L12 20L17 17L14 10L12 12L10 10L7 17Z" fill="#87CEEB" stroke="#4682B4" strokeWidth="1.5"/>
            <path d="M10 10L12 8L14 10" stroke="#4682B4" strokeWidth="1.5"/>
            <ellipse cx="12" cy="14" rx="3" ry="2" fill="#32CD32" stroke="#228B22" strokeWidth="1"/>
          </svg>
        );
      case 'goa':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <path d="M4 14H20V20H4V14Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
            <path d="M10 14L12 10L14 14" fill="#FF6347" stroke="#DC143C" strokeWidth="1.5"/>
            <rect x="11.5" y="14" width="1" height="6" fill="#8B4513"/>
            <path d="M6 18H18" stroke="#87CEEB" strokeWidth="2"/>
          </svg>
        );
      case 'kerala':
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <path d="M8 16L10 13L12 15L14 12L16 14L18 11" stroke="#32CD32" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <circle cx="10" cy="16" r="2" fill="#228B22" stroke="#32CD32" strokeWidth="1"/>
            <ellipse cx="15" cy="13" rx="2.5" ry="1.5" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" style={iconStyle} className="w-5 h-5">
            <circle cx="12" cy="12" r="8" fill="#FFA500" stroke="#FF8C00" strokeWidth="1.5"/>
          </svg>
        );
    }
  };

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
    if (showDestinationMenu) {
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
    }
  }, [showDestinationMenu]);

  // If destination menu is shown, render the destination scrolling menu
  if (showDestinationMenu) {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center gap-1 sm:gap-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden sm:inline">Inventrip</span>
              </Link>
            </div>

            {/* Destination Scrolling Menu */}
            <div className="flex-1 relative ml-2 sm:ml-8 min-w-0">
              <div 
                className={`flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide ${showRightArrow ? 'pr-12 sm:pr-20' : 'pr-4 sm:pr-8'}`}
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onClick={(e) => {
                  // Prevent navigation if clicking on the container itself, not on a link
                  if (e.target === e.currentTarget) {
                    e.preventDefault();
                  }
                }}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                
                {/* Destinations */}
                {destinationMenu.map((destination, index) => {
                  const isActive = location.pathname === `/destinations/${destination.slug}`;
                  return (
                    <Link
                      key={index}
                      to={`/destinations/${destination.slug}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className={`flex items-center gap-1 sm:gap-2 cursor-pointer group relative whitespace-nowrap ${isActive ? '' : ''}`}
                    >
                      {destination.trending && (
                        <div className="absolute -top-1 -right-1 z-10">
                          <span className="bg-orange-500 text-white text-[8px] font-semibold px-1 py-0.5 rounded flex items-center gap-0.5 whitespace-nowrap">
                            <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="hidden sm:inline">Trending</span>
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-center">
                        <DestinationIcon slug={destination.slug} />
                      </div>
                      <span className={`text-xs sm:text-sm transition ${isActive ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-600'}`}>
                        {destination.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              {showRightArrow && (
                <button
                  onClick={scrollRight}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 sm:p-2 shadow-md transition z-10"
                  aria-label="Scroll right"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Default navigation menu
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center gap-1 sm:gap-2">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Inventrip
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Us
            </Link>
            
            <Link 
              to="/booking"
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Booking
            </Link>
            
            <Link 
              to="/transport"
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Transport
            </Link>
            
            <Link 
              to={destinationMenu.length > 0 ? `/destinations/${destinationMenu[0].slug}` : "/"}
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Destinations
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t mt-2 py-4 animate-fade-in">
            <Link 
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Us
            </Link>
            
            <Link 
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Booking
            </Link>
            
            <div className="px-4 py-2">
              <button 
                onClick={() => setMobileTransportOpen(!mobileTransportOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Transport
                </div>
                <svg className={`w-4 h-4 transition-transform ${mobileTransportOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileTransportOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link to="/transport" className="block py-2 px-3 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    View All Transport
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to={destinationMenu.length > 0 ? `/destinations/${destinationMenu[0].slug}` : "/"}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Destinations
            </Link>
            
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
