import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dynamic resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Schedule an Appointment', path: '/appointment' },
    { name: 'Blogs Post', path: '/blogs' },
    { name: 'gallery', path: '/gallery' },
    { name: 'Privacy', path: '/privacy' },
  ];

  // Handle scroll for auto-hide and transparency
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set transparency after scrolling 50px
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-8 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-xs font-bold text-gradient">
              Abhik Ghosh
            </Link>
          </div>

          {/* Center Navigation - Only show on desktop */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-medium transition-colors px-1 py-0 rounded whitespace-nowrap ${
                  isActivePath(item.path) 
                    ? 'bg-[#E91E63] text-white' 
                    : 'text-gray-700 hover:text-[#E91E63] hover:bg-pink-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Contact Button Only */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/appointment"
              className="bg-[#E91E63] text-white px-2 py-0.5 rounded text-xs font-medium hover:bg-[#AD1457] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#E91E63] text-xs font-bold"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded text-sm ${
                    isActivePath(item.path)
                      ? 'text-[#E91E63] bg-pink-50'
                      : 'text-gray-700 hover:text-[#E91E63] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="block bg-[#E91E63] text-white px-3 py-2 rounded text-center text-sm font-medium hover:bg-[#AD1457] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact me!
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;