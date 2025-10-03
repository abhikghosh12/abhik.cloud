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
    { name: 'Blog', href: 'https://medium.com/@abhikghosh_46536' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center space-x-8">
            <div className="flex flex-col">
              <a href="/" className="font-bold text-white hover:text-blue-200 transition-colors text-xl">
                Abhik Ghosh
              </a>
              <span className="text-xs text-white/80 font-medium">Cloud Architect</span>
            </div>
            
            {/* Social Icons - Below Name */}
            <div className="flex flex-wrap gap-1 mt-1">
              <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" target="_blank" rel="noopener noreferrer" 
                 title="LinkedIn" className="w-6 h-6 bg-[#0077B5] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" 
                 title="Xing" className="w-6 h-6 bg-[#026466] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536L14.408 14.4s7.649-13.619 7.649-13.619c.095-.191.095-.387.006-.535C22.974.078 22.81 0 22.599 0h-4.411zm-11.19 7.691c-.211 0-.375.078-.463.22-.09.151-.09.346.009.536L9.497 13.3s-4.876 8.209-4.876 8.209c-.095.191-.095.387-.006.535.088.167.252.245.463.245h3.454c.517 0 .741-.325.927-.66 0 0 4.876-8.209 4.876-8.209-.015-.024-2.953-5.418-2.953-5.418-.17-.308-.436-.66-.967-.66H6.998z"/>
                </svg>
              </a>
              <a href="tel:+4917665979446" title="Mobile" className="w-6 h-6 bg-[#25D366] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer" 
                 title="WhatsApp" className="w-6 h-6 bg-[#25D366] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>
              <a href="mailto:abhikghosh@outlook.com" title="Email" className="w-6 h-6 bg-[#0078D4] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                 title="Credly" className="w-6 h-6 bg-[#FF6B35] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
              <a href="https://medium.com/@abhikghosh_46536" target="_blank" rel="noopener noreferrer" 
                 title="Medium" className="w-6 h-6 bg-[#000] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer" 
                 title="GitHub" className="w-6 h-6 bg-[#333] rounded flex items-center justify-center hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
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
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 text-sm shadow-sm hover:shadow-md"
              >
                Schedule Call
              </a>
              <a
                href="/contact"
                className="border border-white/30 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-sm backdrop-blur-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
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
            className="md:hidden mt-4 pb-4 border-t border-white/20 bg-white/10 backdrop-blur-lg rounded-lg"
          >
            <div className="pt-4 space-y-1 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-white/20 text-white'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/20 mt-4 space-y-3">
                {/* Social Icons Mobile */}
                <div className="flex items-center justify-center space-x-3 pb-3">
                  <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" target="_blank" rel="noopener noreferrer" 
                     title="LinkedIn" className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer" 
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
                     className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-3 rounded-lg text-center text-sm font-medium">
                    Schedule Call
                  </a>
                  <a href="/contact"
                     className="flex-1 border border-white/30 text-white px-4 py-3 rounded-lg text-center text-sm font-medium hover:bg-white/10">
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
                  className="block border-2 border-white/30 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-white/10 transition-colors backdrop-blur-sm"
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