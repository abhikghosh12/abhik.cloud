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
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
      className={`fixed top-0 left-0 right-0 z-50 h-12 transition-all duration-300 ${
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
            <Link to="/" className="text-lg font-bold text-gradient">
              Abhik Ghosh
            </Link>
          </div>

          {/* Center Navigation - Only show on desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs font-medium transition-colors px-2 py-1 rounded whitespace-nowrap ${
                  isActivePath(item.path) 
                    ? 'bg-[#E91E63] text-white' 
                    : 'text-gray-700 hover:text-[#E91E63] hover:bg-pink-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Very Compact Social Icons */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            
            {/* Tiny Social Icons - Text Only */}
            <div className="flex items-center space-x-1">
              <a href="https://www.linkedin.com/in/abhik-ghosh-m-sc-61539425/" target="_blank" rel="noopener noreferrer" 
                 className="w-5 h-5 bg-[#0077B5] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="LinkedIn">
                Li
              </a>
              
              <a href="https://www.xing.com/profile/Abhik_Ghosh?sc_o=mxb_p" target="_blank" rel="noopener noreferrer"
                 className="w-5 h-5 bg-[#006567] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="Xing">
                X
              </a>
              
              <a href="tel:+4917665979446"
                 className="w-5 h-5 bg-[#4CAF50] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="Phone">
                📞
              </a>
              
              <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer"
                 className="w-5 h-5 bg-[#25D366] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="WhatsApp">
                W
              </a>
              
              <a href="mailto:abhikghosh@outlook.com"
                 className="w-5 h-5 bg-[#EA4335] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="Email">
                @
              </a>
              
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38" target="_blank" rel="noopener noreferrer"
                 className="w-5 h-5 bg-[#FF6B00] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="Credly">
                Cr
              </a>
              
              <a href="https://medium.com/@abhikghosh_46536" target="_blank" rel="noopener noreferrer"
                 className="w-5 h-5 bg-[#000000] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="Medium">
                M
              </a>
              
              <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer"
                 className="w-5 h-5 bg-[#333333] text-white rounded text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform" title="GitHub">
                Git
              </a>
            </div>

            {/* Contact Button */}
            <Link
              to="/appointment"
              className="bg-[#E91E63] text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-[#AD1457] transition-colors whitespace-nowrap"
            >
              Contact me!
            </Link>

            {/* Language Selector */}
            <div className="flex items-center space-x-1 text-xs">
              <span className="px-1 py-1 bg-blue-100 text-blue-800 rounded text-xs">EN</span>
              <span className="px-1 py-1 bg-red-100 text-red-800 rounded text-xs">DE</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#E91E63] w-6 h-6 flex items-center justify-center"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
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