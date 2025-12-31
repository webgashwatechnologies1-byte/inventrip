import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialSlides = [
    {
      title: 'Client Testimonials',
      description: 'See what our happy travelers say about their experiences with us',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop'
    },
    {
      title: 'Real Experiences',
      description: 'Authentic reviews from travelers who have journeyed with Inventrip',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop'
    },
    {
      title: 'Trusted by Thousands',
      description: 'Join 10K+ satisfied travelers who have chosen Inventrip for their journeys',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&h=1080&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialSlides.length]);
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      package: "Leh Adventure Tour",
      rating: 5,
      text: "Amazing experience with Inventrip! The Leh tour was perfectly organized, and the team was very helpful throughout. Highly recommended!"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      package: "Kashmir Honeymoon",
      rating: 5,
      text: "Our honeymoon in Kashmir was magical thanks to Inventrip. Everything was well-planned, and the accommodations were excellent. Thank you!"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      package: "Rajasthan Royal Tour",
      rating: 4,
      text: "Great service and value for money. The Rajasthan tour covered all major attractions, and our guide was knowledgeable and friendly."
    },
    {
      name: "Sneha Reddy",
      location: "Bangalore",
      package: "Kerala Backwaters",
      rating: 5,
      text: "Kerala trip was unforgettable! The backwater cruise was the highlight. Inventrip made our vacation stress-free and enjoyable."
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      package: "Spiti Valley Adventure",
      rating: 5,
      text: "Adventure of a lifetime! The Spiti Valley tour exceeded all expectations. Professional team and excellent arrangements."
    },
    {
      name: "Anjali Mehta",
      location: "Kolkata",
      package: "Goa Beach Holiday",
      rating: 4,
      text: "Perfect beach vacation in Goa. The package was well-priced, and all activities were enjoyable. Will book again!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <section className="relative text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={testimonialSlides[currentSlide]?.image}
            alt={testimonialSlides[currentSlide]?.title}
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
              {testimonialSlides.map((slide, index) => (
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
            {testimonialSlides.map((_, index) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-blue-600 mt-1">{testimonial.package}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Have you traveled with us? Share your experience!
          </p>
          <a
            href="mailto:testimonials@inventrip.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition inline-block"
          >
            Submit Your Testimonial
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

