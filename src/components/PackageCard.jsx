import { Link } from 'react-router-dom';
import { useState } from 'react';
import CallbackForm from './CallbackForm';

const PackageCard = ({ pkg }) => {
  const [showCallback, setShowCallback] = useState(false);
  const [imageError, setImageError] = useState(false);
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  // Fallback placeholder image
  const placeholderImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <Link to={`/package/${pkg.slug}`}>
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img
              src={imageError ? placeholderImage : (pkg.image || placeholderImage)}
              alt={pkg.title}
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="lazy"
            />
          </div>
        </Link>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{pkg.duration}</span>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-700 ml-1">{pkg.rating}</span>
              <span className="text-sm text-gray-500 ml-1">({pkg.reviews})</span>
            </div>
          </div>
          
          <Link to={`/package/${pkg.slug}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
              {pkg.title}
            </h3>
          </Link>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xl sm:text-2xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</span>
            <span className="text-base sm:text-lg text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
            <span className="text-xs sm:text-sm text-green-600 font-semibold">Save {discount}%</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <a
              href="tel:7832911551"
              className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition text-sm sm:text-base flex items-center justify-center"
              aria-label="Call Now"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
            <button
              onClick={() => setShowCallback(true)}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Request Callback
            </button>
          </div>
        </div>
      </div>
      
      <CallbackForm isOpen={showCallback} onClose={() => setShowCallback(false)} />
    </>
  );
};

export default PackageCard;

