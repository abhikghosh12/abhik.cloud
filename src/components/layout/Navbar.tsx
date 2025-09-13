import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dynamic resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Schedule an Appointment', path: '/appointment' },
    { name: 'Blogs Post', path: '/blogs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Privacy', path: '/privacy' },
  ];

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100;
    
    setIsScrolled(currentScrollY > 50);
    setIsVisible(currentScrollY <= scrollThreshold || 
      currentScrollY < (handleScroll as any).lastScrollY);
    
    (handleScroll as any).lastScrollY = currentScrollY;
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Auto-close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  const isActivePath = useCallback((path: string) => location.pathname === path, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo + Social Icons Stack */}
          <div className="flex flex-col justify-center">
            <Link
              to="/"
              className="text-3xl font-black text-gradient mb-1 leading-none"
              style={{ fontFamily: 'cursive' }}
            >
              Abhik Ghosh
            </Link>
            
            {/* Social Icons - Tight Row */}
            <div className="flex">
              <a href="https://www.linkedin.com/in/abhik-ghosh-m-sc-61539425/" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-6 h-6 bg-[#0077B5] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="LinkedIn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              
              <a href="https://www.xing.com/profile/Abhik_Ghosh?sc_o=mxb_p" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-6 h-6 bg-[#006567] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="Xing">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.52 4.56 8.668 4.56 8.668.183.328.397.595.957.595h4.283c.609 0 .776-.407.617-.771 0 0-4.52-8.585-4.56-8.688 0 0 7.644-13.632 7.693-13.73.164-.403-.056-.75-.573-.75h-4.348z"/>
                </svg>
              </a>
              
              <a href="tel:+4917665979446"
                 className="w-6 h-6 bg-[#4CAF50] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="Phone">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              
              <a href="https://wa.me/4917665979446" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-6 h-6 bg-[#25D366] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="WhatsApp">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </a>
              
              <a href="mailto:abhikghosh@outlook.com"
                 className="w-6 h-6 bg-[#EA4335] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="Email">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.764L12 12.312l9.6-8.491h.764A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
              
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-6 h-6 bg-[#FF6B00] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="Credly">
                <span className="text-white text-xs font-bold">C</span>
              </a>
              
              <a href="https://medium.com/@abhikghosh_46536" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-6 h-6 bg-[#000000] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="Medium">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12z"/>
                </svg>
              </a>
              
              <a href="https://github.com/abhikghosh12" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-6 h-6 bg-[#333333] rounded-sm flex items-center justify-center hover:scale-105 transition-transform"
                 aria-label="GitHub">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Navigation Tabs - Tight Alignment */}
          <div className="hidden lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'bg-[#E91E63] text-white rounded'
                    : 'text-gray-700 hover:text-[#E91E63] hover:bg-pink-50 rounded'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#E91E63] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm transition-colors ${
                    isActivePath(item.path)
                      ? 'bg-[#E91E63] text-white rounded'
                      : 'text-gray-700 hover:bg-gray-50 rounded'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;