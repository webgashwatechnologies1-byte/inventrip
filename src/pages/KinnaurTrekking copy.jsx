import { Link } from "react-router-dom";
import { kinnaurTreks } from "../data/kinnaurTreks";
import imgknrtreaking from "../assets/images/tracking/knrtrking.jpg";
import imgkinnaurr from "../assets/images/tracking/knrr.jpg";
import {
  FiMapPin,
  FiCalendar,
  FiStar,
  FiArrowRight,
  FiTrendingUp,
  FiShield,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const KinnaurTrekking = () => {
  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img
            src={imgknrtreaking}
            alt="Kinnaur Trekking"
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/40 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="text-white font-black uppercase tracking-[0.3em] text-[10px]">
              Sacred Himalayan Trails
            </p>
          </div>
          <h1 className="text-6xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8 animate-fade-in-up">
            Kinnaur{" "}
            <span className="text-white tracking-widest block md:inline font-light ml-0 md:ml-4">
              Trekking.
            </span>
          </h1>
          <p className="text-gray-300 font-medium text-lg max-w-2xl leading-relaxed animate-fade-in-up delay-100">
            Journey through the land of gods, where ancient traditions meet
            towering peaks. Experience the most sacred and dramatic trekking
            routes of the Himalayas.
          </p>
        </div>
      </section>

      {/* Trekking Packages Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
              Exclusive Selection
            </span>
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
              Select Your <span className="text-primary">Expedition</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-lg max-w-sm border-l-2 border-primary/20 pl-6 mb-2">
            Exactly 4 curated routes for the true mountain explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {kinnaurTreks.map((trek) => (
            <Link
              key={trek.id}
              to={`/tracking/${trek.slug}`}
              className="group relative bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-primary/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                  <FiStar
                    className="text-yellow-500 text-xs"
                    fill="currentColor"
                  />
                  <span className="font-black text-gray-900 text-sm">
                    {trek.rating}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-primary/95 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="text-white text-xs" />
                    <span className="text-white text-[10px] font-black uppercase tracking-wider">
                      {trek.duration}
                    </span>
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-2">
                    {trek.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
                  {trek.description}
                </p>

                {/* Price & CTA Section */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">
                        Custom Quote
                      </p>
                      <p className="text-base font-black text-gray-900 uppercase tracking-tight">
                        Price on Request
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiArrowRight className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Kinnaur */}
      <section className="py-32 bg-gray-50 mb-24 rounded-[5rem] mx-6 border border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
                The Land of Gods
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-tight mb-8">
                Why Trek In <span className="text-primary">Kinnaur?</span>
              </h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10">
                Kinnaur offers a unique blend of Hinduism and Buddhism, with
                trails that pass through high-altitude lakes, sacred peaks, and
                ancient villages. It's not just a trek; it's a pilgrimage into
                the soul of the Himalayas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <FiShield />,
                    title: "Sacred Routes",
                    desc: "Experience trails that have been walked for centuries.",
                  },
                  {
                    icon: <FiTrendingUp />,
                    title: "Dramatic Flux",
                    desc: "Transition from lush forests to cold mountain deserts.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 uppercase tracking-tighter mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl rotate-3 group hover:rotate-0 transition-transform duration-700">
                <img
                  src={imgkinnaurr}
                  alt="Kinnaur Trekking"
                  className="w-full h-full object-cover scale-105 animate-slow-zoom"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-[3rem] p-8 text-white flex flex-col justify-center -rotate-6 shadow-2xl">
                <span className="text-4xl font-black mb-1">4.9</span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80">
                  Safety Score
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KinnaurTrekking;
