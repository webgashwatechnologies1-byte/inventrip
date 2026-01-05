// Navbar Component
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiHome, FiInfo, FiGlobe, FiTruck, FiMapPin, FiMail, FiCompass } from 'react-icons/fi';
import { MdFilterHdr, MdTerrain, MdAcUnit, MdCastle, MdLocalFlorist, MdLandscape, MdBeachAccess, MdDirectionsBoat } from 'react-icons/md';
import { FaTree, FaMountain } from 'react-icons/fa';
import { tracking } from '../data/tracking';
import { expeditions } from '../data/expeditions';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState({});

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu({});
  }, [location.pathname]);

  const toggleMobileSubmenu = (name) => {
    setExpandedMobileMenu(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const defaultNavItems = [
    {
      name: 'Home',
      path: '/',
      type: 'link',
      icon: <FiHome className="w-5 h-5 mb-1" />
    },
    {
      name: 'About',
      path: '/about',
      type: 'link',
      icon: <FiInfo className="w-5 h-5 mb-1" />
    },
    {
      name: 'Destination',
      type: 'dropdown',
      icon: <FiGlobe className="w-5 h-5 mb-1" />,
      items: [
        { name: 'All Destinations', path: '/destination' },
        { name: 'Himachal', path: '/destinations/himachal' },
        { name: 'Spiti', path: '/destinations/spiti' },
        { name: 'Leh', path: '/destinations/leh' },
        { name: 'Rajasthan', path: '/destinations/rajasthan' },
        { name: 'Kashmir', path: '/destinations/kashmir' },
        { name: 'Uttarakhand', path: '/destinations/uttarakhand' },
        { name: 'Goa', path: '/destinations/goa' },
        { name: 'Kerala', path: '/destinations/kerala' }
      ]
    },
    {
      name: 'Transportation',
      type: 'dropdown',
      icon: <FiTruck className="w-5 h-5 mb-1" />,
      items: [
        { name: 'Taxi', path: '/transport' },
        { name: 'Volvo', path: '/transport' },
        { name: 'Flight', path: '/transport' },
        { name: 'Railway', path: '/transport' }
      ]
    },
    {
      name: 'Tracking',
      path: '/tracking',
      type: 'dropdown',
      icon: <FiMapPin className="w-5 h-5 mb-1" />,
      items: tracking.map(trek => ({
        name: trek.title,
        path: `/tracking/${trek.slug}`
      }))
    },
    {
      name: 'Expedition',
      path: '/expedition',
      type: 'dropdown',
      icon: <FiCompass className="w-5 h-5 mb-1" />,
      items: [
        { name: 'Bike Expeditions', path: '/expedition/bike' },
        ...expeditions.bike.map(exp => ({ name: `- ${exp.title}`, path: `/expedition/bike/${exp.slug}` })),
        { name: 'SUV Expeditions', path: '/expedition/suv' },
        ...expeditions.suv.map(exp => ({ name: `- ${exp.title}`, path: `/expedition/suv/${exp.slug}` }))
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      type: 'link',
      icon: <FiMail className="w-5 h-5 mb-1" />
    }
  ];

  const destinationNavItems = [
    {
      name: 'All',
      path: '/destination',
      type: 'link',
      icon: <FiGlobe className="w-5 h-5 mb-1" />
    },
    {
      name: 'Himachal',
      path: '/destinations/himachal',
      type: 'link',
      icon: <FaTree className="w-5 h-5 mb-1" />
    },
    {
      name: 'Spiti',
      path: '/destinations/spiti',
      type: 'link',
      icon: <FaMountain className="w-5 h-5 mb-1" />
    },
    {
      name: 'Leh',
      path: '/destinations/leh',
      type: 'link',
      icon: <MdAcUnit className="w-5 h-5 mb-1" />
    },
    {
      name: 'Rajasthan',
      path: '/destinations/rajasthan',
      type: 'link',
      icon: <MdCastle className="w-5 h-5 mb-1" />
    },
    {
      name: 'Kashmir',
      path: '/destinations/kashmir',
      type: 'link',
      icon: <MdLocalFlorist className="w-5 h-5 mb-1" />
    },
    {
      name: 'Uttarakhand',
      path: '/destinations/uttarakhand',
      type: 'link',
      icon: <MdLandscape className="w-5 h-5 mb-1" />
    },
    {
      name: 'Goa',
      path: '/destinations/goa',
      type: 'link',
      icon: <MdBeachAccess className="w-5 h-5 mb-1" />
    },
    {
      name: 'Kerala',
      path: '/destinations/kerala',
      type: 'link',
      icon: <MdDirectionsBoat className="w-5 h-5 mb-1" />
    }
  ];

  const navItems = (location.pathname.includes('/destinations') || location.pathname === '/destination') ? destinationNavItems : defaultNavItems;

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center gap-1 sm:gap-2">
                <img src={logo} alt="Inventrip Logo" className="h-12 w-auto sm:h-14" />
                {/* <span className="hidden lg:inline text-xl sm:text-2xl font-bold text-primary">Inventrip</span> */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 justify-center">
              {navItems.map((item, index) => {
                const isActive = item.path === location.pathname;

                return (
                  <div
                    key={index}
                    className="relative group flex flex-col items-center justify-center cursor-pointer min-w-[60px]"
                    onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.type === 'link' ? (
                      <Link to={item.path} className={`flex flex-col items-center transition-colors ${isActive ? 'text-[#39a34a] font-bold' : 'text-gray-700 hover:text-black'}`}>
                        <div className={`transform transition-transform group-hover:scale-110 duration-200 ${isActive ? 'text-[#39a34a]' : ''}`}>
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm whitespace-nowrap mt-1">{item.name}</span>
                      </Link>
                    ) : item.path ? (
                      <Link to={item.path} className={`flex flex-col items-center transition-colors ${isActive ? 'text-[#39a34a] font-bold' : 'text-gray-700 hover:text-black'}`}>
                        <div className={`transform transition-transform group-hover:scale-110 duration-200 ${isActive ? 'text-[#39a34a]' : ''}`}>
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm whitespace-nowrap mt-1 flex items-center gap-1">
                          {item.name}
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </Link>
                    ) : (
                      <div className={`flex flex-col items-center transition-colors ${isActive ? 'text-[#39a34a] font-bold' : 'text-gray-700 hover:text-black'}`}>
                        <div className={`transform transition-transform group-hover:scale-110 duration-200 ${isActive ? 'text-[#39a34a]' : ''}`}>
                          {item.icon}
                        </div>
                        <span className="text-xs sm:text-sm whitespace-nowrap mt-1 flex items-center gap-1">
                          {item.name}
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    )}

                    {/* Dropdown Menu */}
                    {item.type === 'dropdown' && (
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-200 z-50 ${activeDropdown === item.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                          }`}
                      >
                        <div className="py-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-black hover:text-primary transition p-2"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-[60] transform lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Content */}
        <div
          className={`absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-primary">Inventrip</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500 hover:text-black transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-64px)] space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-2 last:border-0">
                {item.type === 'link' ? (
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-black hover:bg-gray-100 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-6 h-6">{item.icon}</div>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ) : (
                  <div>
                    {item.path ? (
                      <div className="flex items-center">
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-1 flex items-center gap-3 text-black hover:bg-gray-100 p-2 rounded-lg transition-colors"
                        >
                          <div className="w-6 h-6">{item.icon}</div>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <svg
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedMobileMenu[item.name] ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="w-full flex items-center justify-between text-black hover:bg-gray-100 p-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6">{item.icon}</div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedMobileMenu[item.name] ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}

                    {/* Submenu Accordion */}
                    <div
                      className={`pl-11 pr-2 space-y-1 overflow-hidden transition-all duration-300 ${expandedMobileMenu[item.name] ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}
                    >
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-black border-l-2 border-transparent hover:border-primary pl-3 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
