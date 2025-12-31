import { Link } from 'react-router-dom';

const Footer = () => {
  const destinations = [
    { name: 'Himachal', slug: 'himachal', image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=200&h=200&fit=crop' },
    { name: 'Spiti', slug: 'spiti', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200' },
    { name: 'Leh', slug: 'leh', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200' },
    { name: 'Rajasthan', slug: 'rajasthan', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop' },
    { name: 'Kashmir', slug: 'kashmir', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200' },
    { name: 'Uttarakhand', slug: 'uttarakhand', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=200' },
    { name: 'Goa', slug: 'goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=200' },
    { name: 'Kerala', slug: 'kerala', image: 'https://images.unsplash.com/photo-1580597126189-90fe52c76a5e?w=200' },
    { name: 'India', slug: 'himachal', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=200' }
  ];

  return (
    <footer className="bg-gray-700">
      {/* Upper Section - White Rounded Container */}
      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Column 1: ABOUT INVENTRIP */}
              <div>
                <h3 className="text-gray-800 text-sm font-bold mb-5 uppercase tracking-wide">About Inventrip</h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-gray-800 transition">ABOUT US</Link>
                  </li>
                  <li>
                    <a href="/careers" className="text-gray-600 hover:text-gray-800 transition">WE ARE HIRING</a>
                  </li>
                  <li>
                    <Link to="/testimonials" className="text-gray-600 hover:text-gray-800 transition">INVENTRIP REVIEWS</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-600 hover:text-gray-800 transition">TERMS & CONDITIONS</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-800 transition">PRIVACY POLICIES</Link>
                  </li>
                  <li>
                    <Link to="/disclaimer" className="text-gray-600 hover:text-gray-800 transition">COPYRIGHT POLICIES</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition">SUPPORT</Link>
                  </li>
                  <li>
                    <a href="/fraud-warning" className="text-red-600 hover:text-red-700 transition flex items-center gap-1">
                      <span>BEWARE OF FRAUDS</span>
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Column 2: FOR BRANDS / FOR TRAVELLERS */}
              <div>
                <h3 className="text-gray-800 text-sm font-bold mb-5 uppercase tracking-wide">FOR BRANDS</h3>
                <ul className="space-y-2.5 text-sm mb-8">
                  <li>
                    <a href="/partner" className="text-gray-600 hover:text-gray-800 transition">PARTNER WITH US</a>
                  </li>
                  <li>
                    <a href="/destination-marketing" className="text-gray-600 hover:text-gray-800 transition">DESTINATION MARKETING</a>
                  </li>
                </ul>
                
                <h3 className="text-gray-800 text-sm font-bold mb-5 uppercase tracking-wide">FOR TRAVELLERS</h3>
                <ul className="space-y-2.5 text-sm mb-8">
                  <li>
                    <a href="/gift" className="text-gray-600 hover:text-gray-800 transition">GIFT AN EXPERIENCE</a>
                  </li>
                  <li>
                    <Link to="/booking" className="text-gray-600 hover:text-gray-800 transition">BOOKING</Link>
                  </li>
                  <li>
                    <Link to="/transport" className="text-gray-600 hover:text-gray-800 transition">TRANSPORT</Link>
                  </li>
                </ul>

                <h3 className="text-gray-800 text-sm font-bold mb-5 uppercase tracking-wide">QUICK LINKS</h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link to="/vision-mission" className="text-gray-600 hover:text-gray-800 transition">VISION & MISSION</Link>
                  </li>
                  <li>
                    <Link to="/refund-policy" className="text-gray-600 hover:text-gray-800 transition">REFUND POLICY</Link>
                  </li>
                </ul>
              </div>
              
              {/* Column 3: TRAVEL DESTINATIONS */}
              <div>
                <h3 className="text-gray-800 text-xs sm:text-sm font-bold mb-3 sm:mb-5 uppercase tracking-wide">TRAVEL DESTINATIONS</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {destinations.map((dest, index) => (
                    <Link
                      key={index}
                      to={`/destinations/${dest.slug}`}
                      className="relative group overflow-hidden rounded-md aspect-square"
                    >
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <span className="absolute bottom-1.5 left-1 right-1 text-white text-xs font-bold text-center uppercase">
                          {dest.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Column 4: Empty */}
              <div>
                {/* Empty column as per Thrillophilia design */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower Section - Full Width Dark Gray */}
      <div className="bg-gray-900 text-white py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 mb-4 sm:mb-5">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white text-lg sm:text-xl font-semibold">inventrip.com</span>
            </div>
            
            {/* Separator Line */}
            <div className="w-20 h-px bg-gray-600 mb-4 sm:mb-6"></div>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Copyright and Disclaimer */}
          <div className="text-center space-y-2 sm:space-y-3">
            <p className="text-white text-xs sm:text-sm">&copy; {new Date().getFullYear()} Inventrip.com All rights reserved.</p>
            <p className="text-gray-400 text-[10px] sm:text-xs max-w-4xl mx-auto leading-relaxed px-2">
              All content, images, and materials on this website are protected by copyright laws. 
              Unauthorized reproduction, distribution, or use of any content from this website is strictly 
              prohibited and may result in legal action. All trademarks, logos, and brand names are the 
              property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
