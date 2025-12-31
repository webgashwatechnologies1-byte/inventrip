import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const TransportDetail = () => {
  const { type, vehicleId } = useParams();
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    pickupLocation: '',
    dropLocation: '',
    travellerCount: '',
    message: ''
  });

  const transportData = {
    taxi: {
      name: 'Taxi Services',
      color: 'from-yellow-500 to-orange-500',
      vehicles: {
        'taxi-sedan': {
          name: 'Sedan Taxi',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
          capacity: '4 passengers',
          features: ['AC', 'GPS', 'Professional Driver', '24/7 Available'],
          price: 'Starting from ₹12/km',
          description: 'Comfortable sedan taxis perfect for city travel and short outstation trips. Well-maintained vehicles with professional drivers ensuring a safe and pleasant journey.',
          benefits: [
            'Professional and verified drivers',
            'Well-maintained vehicles',
            'GPS enabled for easy navigation',
            '24/7 availability for your convenience',
            'Flexible payment options'
          ]
        },
        'taxi-suv': {
          name: 'SUV Taxi',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
          capacity: '6-7 passengers',
          features: ['Spacious', 'AC', 'Luggage Space', 'Comfortable'],
          price: 'Starting from ₹15/km',
          description: 'Spacious SUV taxis ideal for families and groups. Ample legroom and luggage space make it perfect for long journeys and airport transfers.',
          benefits: [
            'Extra space for passengers and luggage',
            'Perfect for family trips',
            'Comfortable long-distance travel',
            'Ideal for airport transfers',
            'Premium comfort features'
          ]
        },
        'taxi-premium': {
          name: 'Premium Taxi',
          image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
          capacity: '4 passengers',
          features: ['Luxury', 'AC', 'Wi-Fi', 'Premium Service'],
          price: 'Starting from ₹20/km',
          description: 'Premium luxury taxis with top-notch amenities. Experience the ultimate comfort with Wi-Fi, premium interiors, and exceptional service for special occasions.',
          benefits: [
            'Luxury vehicles with premium interiors',
            'Complimentary Wi-Fi',
            'Bottled water and refreshments',
            'Executive class service',
            'Perfect for business travel'
          ]
        }
      }
    },
    volvo: {
      name: 'Volvo Bus Services',
      color: 'from-blue-500 to-blue-600',
      vehicles: {
        'volvo-sleeper': {
          name: 'Volvo Sleeper',
          image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop',
          capacity: '40-45 passengers',
          features: ['Reclining Seats', 'AC', 'TV', 'Toilet'],
          price: 'Starting from ₹800/person',
          description: 'Comfortable Volvo sleeper buses for overnight journeys. Reclining seats, entertainment system, and clean facilities ensure a restful travel experience.',
          benefits: [
            'Fully reclining seats for comfortable sleep',
            'Individual TV screens',
            'Clean washroom facilities',
            'AC throughout the journey',
            'Safe and secure travel'
          ]
        },
        'volvo-multiaxle': {
          name: 'Volvo Multi-Axle',
          image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&h=600&fit=crop',
          capacity: '45-50 passengers',
          features: ['Luxury Seats', 'AC', 'Entertainment', 'Spacious'],
          price: 'Starting from ₹1000/person',
          description: 'Premium Volvo multi-axle buses with luxury seating and advanced amenities. Perfect for long-distance travel with maximum comfort and safety.',
          benefits: [
            'Luxury seats with extra legroom',
            'Advanced entertainment system',
            'USB charging ports',
            'Onboard refreshments',
            'Professional staff service'
          ]
        }
      }
    },
    flight: {
      name: 'Flight Booking',
      color: 'from-purple-500 to-indigo-600',
      vehicles: {
        'flight-domestic': {
          name: 'Domestic Flights',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
          capacity: 'All Airlines',
          features: ['Best Prices', 'All Airlines', 'Instant Confirmation', '24/7 Support'],
          price: 'Best Deals Available',
          description: 'Book domestic flights across India with the best prices. We offer flights from all major airlines with instant confirmation and round-the-clock support.',
          benefits: [
            'Best price guarantee',
            'All major airlines available',
            'Instant booking confirmation',
            'Flexible cancellation policies',
            '24/7 customer support'
          ]
        },
        'flight-international': {
          name: 'International Flights',
          image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
          capacity: 'All Destinations',
          features: ['Visa Assistance', 'All Airlines', 'Package Deals', 'Expert Support'],
          price: 'Competitive Prices',
          description: 'International flight booking to destinations worldwide. Get visa assistance, best deals, and expert guidance for your international travel needs.',
          benefits: [
            'Visa application assistance',
            'Multi-city flight bookings',
            'Best international deals',
            'Travel insurance options',
            'Expert travel consultation'
          ]
        }
      }
    },
    railway: {
      name: 'Railway Booking',
      color: 'from-green-500 to-teal-600',
      vehicles: {
        'railway-ac': {
          name: 'AC Classes',
          image: 'https://images.unsplash.com/photo-1594736797933-d0e4d446d920?w=800&h=600&fit=crop',
          capacity: '1AC, 2AC, 3AC',
          features: ['AC Comfort', 'Bedding', 'Meals', 'Priority Booking'],
          price: 'As per IRCTC',
          description: 'Book AC class train tickets with ease. Enjoy air-conditioned comfort with bedding, meals, and priority booking for 1AC, 2AC, and 3AC classes.',
          benefits: [
            'Priority booking assistance',
            'AC comfort throughout journey',
            'Clean bedding provided',
            'Meal options available',
            'Secure and confirmed bookings'
          ]
        },
        'railway-sleeper': {
          name: 'Sleeper Class',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
          capacity: 'Sleeper, 3AC',
          features: ['Comfortable', 'Affordable', 'Food Options', 'Easy Booking'],
          price: 'Budget Friendly',
          description: 'Affordable sleeper class bookings for budget-conscious travelers. Comfortable seating and easy booking process for your train journeys.',
          benefits: [
            'Budget-friendly option',
            'Easy booking process',
            'Food vendors available',
            'Flexible travel dates',
            'Group booking discounts'
          ]
        }
      }
    }
  };

  const transport = transportData[type];
  const vehicle = transport?.vehicles[vehicleId];

  if (!transport || !vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-4">The vehicle you're looking for doesn't exist.</p>
          <Link to="/transport" className="text-blue-600 hover:underline">Go to Transport</Link>
        </div>
      </div>
    );
  }

  const placeholderImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We have received your booking request for ${vehicle.name}. Our expert will contact you shortly.`);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      travelDate: '',
      pickupLocation: '',
      dropLocation: '',
      travellerCount: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r ${transport.color} text-white py-16 sm:py-20 md:py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("${imageError ? placeholderImage : vehicle.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/transport" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Transport
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{vehicle.name}</h1>
          <p className="text-xl sm:text-2xl max-w-3xl opacity-90">{vehicle.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Vehicle Image */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 sm:h-96">
                  <img
                    src={imageError ? placeholderImage : vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Vehicle Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Capacity</h3>
                    <p className="text-gray-600">{vehicle.capacity}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Price</h3>
                    <p className="text-gray-600 font-bold">{vehicle.price}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Features</h3>
                  <div className="flex flex-wrap gap-3">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 bg-gradient-to-r ${transport.color} bg-opacity-10 text-gray-800 rounded-lg font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {vehicle.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Now</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Travel Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Pickup address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Drop Location
                    </label>
                    <input
                      type="text"
                      name="dropLocation"
                      value={formData.dropLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Drop address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      name="travellerCount"
                      value={formData.travellerCount}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      placeholder="Any special requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full bg-gradient-to-r ${transport.color} text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    Book {vehicle.name}
                  </button>

                  <a
                    href="tel:7832911551"
                    className={`w-full bg-white border-2 border-current text-gray-800 py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Call Now</span>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportDetail;

