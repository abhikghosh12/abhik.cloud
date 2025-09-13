import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: 'Gallery', path: '/gallery' },
    { name: 'Privacy', path: '/privacy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left: Name + Icons stacked */}
        <div className="flex flex-col items-start leading-tight">
          <Link 
            to="/" 
            className="text-3xl font-black text-gradient" 
            style={{ fontFamily: 'cursive' }}
          >
            Abhik Ghosh
          </Link>

          <div className="flex mt-0.5">
            <a href="https://www.linkedin.com/in/abhik-ghosh-m-sc-61539425/" target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 bg-[#0077B5] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">in</span>
            </a>
            <a href="https://www.xing.com/profile/Abhik_Ghosh?sc_o=mxb_p" target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 bg-[#006567] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">X</span>
            </a>
            <a href="tel:+4917665979446" className="w-4 h-4 bg-[#4CAF50] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">📞</span>
            </a>
            <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 bg-[#25D366] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">💬</span>
            </a>
            <a href="mailto:abhikghosh@outlook.com" className="w-4 h-4 bg-[#EA4335] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">@</span>
            </a>
            <a href="https://www.credly.com/users/abhik-ghosh.941f4a38" target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 bg-[#FF6B00] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">C</span>
            </a>
            <a href="https://medium.com/@abhikghosh_46536" target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px]">M</span>
            </a>
            <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 bg-[#333333] rounded flex items-center justify-center">
              <span className="text-white text-[10px]">Git</span>
            </a>
          </div>
        </div>

        {/* Right: Nav Items */}
        <div className="hidden lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-2 py-1 text-xs font-medium rounded ${
                location.pathname === item.path
                  ? 'bg-[#E91E63] text-white'
                  : 'text-gray-700 hover:text-[#E91E63] hover:bg-pink-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 text-sm ${
                location.pathname === item.path ? 'bg-[#E91E63] text-white' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;