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
          <div className="flex flex-col">
            <div className="flex items-center">
              <a href="/" className="font-bold text-gray-900 hover:text-blue-600 transition-colors text-2xl">
                Abhik Ghosh
              </a>
              <span className="ml-3 text-sm text-gray-500 font-medium">Cloud Architect</span>
            </div>
            
            {/* Social Icons under brand - Compact */}
            <div className="flex items-center space-x-1 mt-1">
              <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" 
                 title="LinkedIn" className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" 
                 title="Xing" className="w-6 h-6 bg-green-600 rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536L14.408 14.4s7.649-13.619 7.649-13.619c.095-.191.095-.387.006-.535C22.974.078 22.81 0 22.599 0h-4.411zm-11.19 7.691c-.211 0-.375.078-.463.22-.09.151-.09.346.009.536L9.497 13.3s-4.876 8.209-4.876 8.209c-.095.191-.095.387-.006.535.088.167.252.245.463.245h3.454c.517 0 .741-.325.927-.66 0 0 4.876-8.209 4.876-8.209-.015-.024-2.953-5.418-2.953-5.418-.17-.308-.436-.66-.967-.66H6.998z"/>
                </svg>
              </a>
              <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" 
                 title="GitHub" className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                 title="Credly" className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-17h2v8h-2V5zm0 10h2v2h-2v-2z"/>
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
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                Schedule Call
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
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
                {/* Quick Contact */}
                <div className="flex space-x-2">
                  <a href="tel:+4917665979446" 
                     className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg text-center text-sm font-medium">
                    Call
                  </a>
                  <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer"
                     className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium">
                    WhatsApp
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