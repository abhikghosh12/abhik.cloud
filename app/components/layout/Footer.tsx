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
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <a 
                href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Abhik Ghosh
              </a>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cloud Architect specializing in DevSecOps, AI/ML, and scalable cloud solutions. 
              Transforming businesses through innovative technology.
            </p>
            
            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-3">Connect</h5>
              <div className="flex gap-2">
                <a 
                  href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com/abhikghosh12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="mailto:abhikghosh@outlook.com" 
                  title="Email"
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Credly"
                  className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <img src="/Certificates/c.png" alt="Credly" className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.researchgate.net/profile/Abhik-Ghosh-4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="ResearchGate"
                  className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <img src="/Certificates/logos/researchgate.png" alt="ResearchGate" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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

          {/* LinkedIn Profile */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Profile</h4>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="abhik-ghosh-msc" data-version="v1">
              <a className="badge-base__link LI-simple-link" href="https://de.linkedin.com/in/abhik-ghosh-msc?trk=profile-badge">Abhik Ghosh, M.Sc</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2">
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
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:abhikghosh@outlook.com" className="hover:text-white transition-colors text-sm">
                  abhikghosh@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-green-400" />
                <a href="tel:+4917665979446" className="hover:text-white transition-colors text-sm">
                  +49 176 65979446
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-sm">Germany</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-4 space-y-2">
              <a 
                href="https://calendly.com/abhikghosh87"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full justify-center text-sm"
              >
                <ExternalLink size={14} />
                Schedule Call
              </a>
              <a 
                href="mailto:abhikghosh@outlook.com"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors w-full justify-center text-sm"
              >
                <Mail size={14} />
                Send Email
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
              © {currentYear} <a 
                href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Abhik Ghosh
              </a>. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}