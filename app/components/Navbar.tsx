'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center space-x-8">
            <div className="flex flex-col">
              <a href="/" className="font-bold text-gray-900 hover:text-blue-600 transition-colors text-xl">
                Abhik Ghosh
              </a>
              <span className="text-xs text-gray-500 font-medium">Cloud Architect</span>
            </div>
            
            {/* Social Icons - Professional */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" 
                 title="LinkedIn" className="w-8 h-8 bg-[#0077B5] rounded-md flex items-center justify-center hover:bg-[#005885] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" 
                 title="GitHub" className="w-8 h-8 bg-[#333] rounded-md flex items-center justify-center hover:bg-[#24292e] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                 title="Credly" className="w-8 h-8 bg-[#FF6B35] rounded-md flex items-center justify-center hover:bg-[#e55a2b] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Navigation and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="flex items-center space-x-3">
              <a
                href="https://calendly.com/abhikghosh87"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
              >
                Schedule Call
              </a>
              <a
                href="/contact"
                className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
          >
            <div className="pt-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                {/* Social Icons Mobile */}
                <div className="flex items-center justify-center space-x-3 pb-3">
                  <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" 
                     title="LinkedIn" className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" 
                     title="GitHub" className="w-10 h-10 bg-[#333] rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                     title="Credly" className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Quick Contact */}
                <div className="flex space-x-2">
                  <a href="https://calendly.com/abhikghosh87" target="_blank" rel="noopener noreferrer"
                     className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg text-center text-sm font-medium">
                    Schedule Call
                  </a>
                  <a href="/contact"
                     className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg text-center text-sm font-medium">
                    Contact
                  </a>
                </div>
                
                <a
                  href="https://calendly.com/abhikghosh87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule Consultation
                </a>
                
                <a
                  href="/contact"
                  className="block border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Form
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}