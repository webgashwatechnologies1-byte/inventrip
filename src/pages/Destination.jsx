import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { destinations } from "../data/packages";
import PackageCard from "../components/PackageCard";
import {
  FiFilter,
  FiChevronDown,
  FiStar,
  FiRotateCcw,
  FiMapPin,
  FiArrowRight,
  FiActivity,
  FiZap,
  FiCompass,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { usePopup } from "../context/PopupContext";

const handleImageError = (e) => {
  e.target.src =
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920";
};

const Destination = () => {
  const { openPopup } = usePopup();

  const { slug } = useParams();
  const destination = destinations[slug];
  const [activeSort, setActiveSort] = useState("popular");
  const [priceRange, setPriceRange] = useState(100000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredPackages = useMemo(() => {
    if (!destination) return [];
    let items = [...destination.packages];

    // Simple sort
    if (activeSort === "low") items.sort((a, b) => a.price - b.price);
    if (activeSort === "high") items.sort((a, b) => b.price - a.price);
    if (activeSort === "rating") items.sort((a, b) => b.rating - a.rating);

    return items.filter((p) => p.price <= priceRange);
  }, [destination, activeSort, priceRange]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/5 text-primary rounded-full flex items-center justify-center text-4xl mx-auto mb-8 animate-spin-slow">
            <FiCompass />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-4 italic">
            Terra Incognito
          </h1>
          <p className="text-gray-600 font-bold mb-8 uppercase tracking-widest text-xs">
            Region not identified in our global registry
          </p>
          <Link
            to="/"
            className="text-primary font-black uppercase tracking-widest text-[10px] border-b-2 border-primary pb-1"
          >
            Return to Grid
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* IMMERSIVE HEADER */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destination.image}
            alt={destination.name}
            onError={handleImageError}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 w-full text-center sm:text-left">
          <p className="text-tertiary font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center justify-center sm:justify-start gap-4">
            <span className="w-8 h-px bg-tertiary" /> Global Registry
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-4">
            {destination.name}
          </h1>
          <div className="flex items-center justify-center sm:justify-start gap-6 text-white/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <FiZap className="text-tertiary" /> {destination.packages.length}{" "}
              Packages
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <FiActivity className="text-tertiary" /> Verified
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & CONTENT GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* LEFT: FILTERS (Bottom on Mobile) */}
          <div className="lg:w-1/4 space-y-8 mt-8 lg:mt-0 lg:sticky lg:top-8 lg:h-fit">
            <div className="hidden lg:block">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6 border-l-4 border-[#39a34a] pl-3">
                Refine Search
              </h3>
              <div className="space-y-8">
                {/* Sort */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Sort By
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "popular", label: "Popularity" },
                      { id: "low", label: "Low to High" },
                      { id: "high", label: "High to Low" },
                      { id: "rating", label: "Top Rated" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSort(s.id)}
                        className={`text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                          activeSort === s.id
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Max Price
                    </label>
                    <span className="text-sm font-bold text-primary">
                      ₹{priceRange.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-primary h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                    <span>min</span>
                    <span>100k+</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPriceRange(100000);
                    setActiveSort("popular");
                  }}
                  className="w-full py-3 border border-gray-200 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                  <FiRotateCcw /> Reset Filters
                </button>
              </div>
            </div>

            {/* Support Box (Based on User Image) */}
            <div className="bg-[#0D2137] p-8 rounded-3xl text-white space-y-6 relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-2">
                  Need Help?
                </p>
                <h4 className="text-xl font-bold leading-tight mb-4">
                  Talk to a Certified Expert
                </h4>
                <a
                  href="tel:7832911551"
                  className="block text-2xl font-black tracking-tight hover:text-orange-500 transition-colors"
                >
                  +91 78329 11551
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: PACKAGE GRID */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md">
                  {filteredPackages.length}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                    Available Packages
                  </h2>
                </div>
              </div>

              {/* Mobile Filter Trigger */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-gray-200 transition"
              >
                <FiFilter /> Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onRequestCallback={() =>
                    openPopup({ destination: pkg.title })
                  }
                />
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="py-24 text-center space-y-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <div className="text-4xl text-gray-300 flex justify-center">
                  <FiFilter />
                </div>
                <h3 className="text-xl font-bold text-gray-600">
                  No Packages Found
                </h3>
                <button
                  onClick={() => setPriceRange(100000)}
                  className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-0.5"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Sheet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileFilterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileFilterOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 transition-transform duration-300 max-h-[85vh] overflow-y-auto ${
            isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">Filters</h3>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="space-y-8">
            {/* Sort */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Sort By
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: "popular", label: "Popularity" },
                  { id: "low", label: "Low to High" },
                  { id: "high", label: "High to Low" },
                  { id: "rating", label: "Top Rated" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSort(s.id)}
                    className={`text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
                      activeSort === s.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Max Price
                </label>
                <span className="text-sm font-bold text-primary">
                  ₹{priceRange.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-primary h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg"
            >
              Show {filteredPackages.length} Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
