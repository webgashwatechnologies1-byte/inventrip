import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Transport = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const transportTypes = {
    taxi: {
      name: 'Taxi Services',
      description: 'Reliable taxi services for local and outstation travel',
      color: 'from-yellow-500 to-orange-500',
      vehicles: [
        {
          id: 'taxi-sedan',
          name: 'Sedan Taxi',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
          capacity: '4 passengers',
          features: ['AC', 'GPS', 'Professional Driver', '24/7 Available'],
          price: 'Starting from ₹12/km'
        },
        {
          id: 'taxi-suv',
          name: 'SUV Taxi',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
          capacity: '6-7 passengers',
          features: ['Spacious', 'AC', 'Luggage Space', 'Comfortable'],
          price: 'Starting from ₹15/km'
        },
        {
          id: 'taxi-premium',
          name: 'Premium Taxi',
          image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
          capacity: '4 passengers',
          features: ['Luxury', 'AC', 'Wi-Fi', 'Premium Service'],
          price: 'Starting from ₹20/km'
        }
      ]
    },
    volvo: {
      name: 'Volvo Bus Services',
      description: 'Comfortable Volvo buses for long distance travel',
      color: 'from-blue-500 to-blue-600',
      vehicles: [
        {
          id: 'volvo-sleeper',
          name: 'Volvo Sleeper',
          image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop',
          capacity: '40-45 passengers',
          features: ['Reclining Seats', 'AC', 'TV', 'Toilet'],
          price: 'Starting from ₹800/person'
        },
        {
          id: 'volvo-multiaxle',
          name: 'Volvo Multi-Axle',
          image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&h=600&fit=crop',
          capacity: '45-50 passengers',
          features: ['Luxury Seats', 'AC', 'Entertainment', 'Spacious'],
          price: 'Starting from ₹1000/person'
        }
      ]
    },
    flight: {
      name: 'Flight Booking',
      description: 'Book domestic and international flights at best prices',
      color: 'from-purple-500 to-indigo-600',
      vehicles: [
        {
          id: 'flight-domestic',
          name: 'Domestic Flights',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
          capacity: 'All Airlines',
          features: ['Best Prices', 'All Airlines', 'Instant Confirmation', '24/7 Support'],
          price: 'Best Deals Available'
        },
        {
          id: 'flight-international',
          name: 'International Flights',
          image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
          capacity: 'All Destinations',
          features: ['Visa Assistance', 'All Airlines', 'Package Deals', 'Expert Support'],
          price: 'Competitive Prices'
        }
      ]
    },
    railway: {
      name: 'Railway Booking',
      description: 'Book train tickets with ease and convenience',
      color: 'from-green-500 to-teal-600',
      vehicles: [
        {
          id: 'railway-ac',
          name: 'AC Classes',
          image: 'https://images.unsplash.com/photo-1594736797933-d0e4d446d920?w=800&h=600&fit=crop',
          capacity: '1AC, 2AC, 3AC',
          features: ['AC Comfort', 'Bedding', 'Meals', 'Priority Booking'],
          price: 'As per IRCTC'
        },
        {
          id: 'railway-sleeper',
          name: 'Sleeper Class',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
          capacity: 'Sleeper, 3AC',
          features: ['Comfortable', 'Affordable', 'Food Options', 'Easy Booking'],
          price: 'Budget Friendly'
        }
      ]
    }
  };

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const placeholderImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop';

  // Get all vehicle types for slider
  const transportSlides = Object.entries(transportTypes).map(([key, transport]) => ({
    key,
    name: transport.name,
    description: transport.description,
    color: transport.color,
    image: transport.vehicles[0]?.image || placeholderImage
  }));

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transportSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [transportSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <section className="relative text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={transportSlides[currentSlide]?.image || placeholderImage}
            alt={transportSlides[currentSlide]?.name}
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
              {transportSlides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    {slide.name}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto opacity-95 font-light">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {transportSlides.map((_, index) => (
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
        </div>
      </section>

      {/* Transport Types */}
      <section id="vehicles" className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(transportTypes).map(([key, transport]) => (
            <div key={key} className="mb-16 last:mb-0">
              {/* Transport Type Header */}
              <div className={`bg-gradient-to-r ${transport.color} text-white rounded-t-2xl p-8 mb-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">{transport.name}</h2>
                    <p className="text-lg opacity-90">{transport.description}</p>
                  </div>
                </div>
              </div>

              {/* Vehicles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {transport.vehicles.map((vehicle) => (
                  <Link
                    key={vehicle.id}
                    to={`/transport/${key}/${vehicle.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imageErrors[vehicle.id] ? placeholderImage : vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(vehicle.id)}
                        loading="lazy"
                      />
                      <div className={`absolute top-4 right-4 bg-gradient-to-r ${transport.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {vehicle.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <span className="font-semibold">Capacity:</span> {vehicle.capacity}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {vehicle.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className={`mt-4 bg-gradient-to-r ${transport.color} text-white text-center py-2 rounded-lg font-semibold`}>
                        View Details & Book
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Transport;

