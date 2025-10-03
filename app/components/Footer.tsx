'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Award, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    'Cloud Architecture',
    'AWS Migration',
    'DevSecOps',
    'AI/ML Solutions'
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Abhik Ghosh</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cloud Architect specializing in DevSecOps, AI/ML, and scalable cloud solutions. 
              Transforming businesses through innovative technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/abhikghosh12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Award size={20} />
              </a>
              <a 
                href="https://medium.com/@abhikghosh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Expertise</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:abhikghosh@outlook.com" className="hover:text-white transition-colors">
                  abhikghosh@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-green-400" />
                <a href="tel:+4917665979446" className="hover:text-white transition-colors">
                  +49 176 65979446
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-orange-400" />
                <span>Germany</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-6">
              <a 
                href="https://calendly.com/abhikghosh87"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={16} />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Abhik Ghosh. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with Next.js & TypeScript • Deployed on GitHub Pages
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}