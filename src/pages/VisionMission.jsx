import { useState, useEffect } from 'react';

const VisionMission = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visionSlides = [
    {
      title: 'Our Vision',
      description: 'To become India\'s most trusted and preferred travel partner',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop'
    },
    {
      title: 'Our Mission',
      description: 'Providing personalized, high-quality travel services that exceed expectations',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop'
    },
    {
      title: 'Our Values',
      description: 'Integrity, Excellence, Innovation, and Customer Focus at our core',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visionSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visionSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <section className="relative text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={visionSlides[currentSlide]?.image}
            alt={visionSlides[currentSlide]?.title}
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
              {visionSlides.map((slide, index) => (
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
          <div className="flex justify-center gap-2 mt-8">
            {visionSlides.map((_, index) => (
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

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
          
          <div className="prose max-w-none text-gray-700 space-y-8">
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To become India's most trusted and preferred travel partner, known for creating 
                exceptional travel experiences that inspire, delight, and create lasting memories. 
                We envision a world where travel is accessible, sustainable, and transformative 
                for everyone.
              </p>
            </section>
            
            <section className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our mission is to provide personalized, high-quality travel services that exceed 
                customer expectations. We are committed to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Delivering exceptional customer service at every touchpoint</li>
                <li>Offering competitive prices without compromising on quality</li>
                <li>Creating customized travel experiences tailored to individual preferences</li>
                <li>Promoting sustainable and responsible tourism practices</li>
                <li>Building long-term relationships based on trust and reliability</li>
                <li>Supporting local communities and preserving cultural heritage</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Integrity</h3>
                  <p className="text-gray-700">
                    We conduct our business with honesty, transparency, and ethical practices.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in every service we provide and every interaction we have.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously innovate to improve our services and enhance customer experience.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Customer Focus</h3>
                  <p className="text-gray-700">
                    Our customers are at the heart of everything we do. Their satisfaction is our priority.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VisionMission;

