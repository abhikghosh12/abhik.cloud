import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/appointment' },
    { name: 'Privacy', path: '/privacy' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">Abhik Ghosh</h3>
            <p className="text-gray-300 mb-6">
              Cloud Architect at Capgemini specializing in DevSecOps, AI/ML, and cloud transformation. 
              Passionate about building scalable, secure, and innovative cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#E91E63] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <a 
                  href="mailto:abhikghosh@outlook.com"
                  className="hover:text-[#E91E63] transition-colors"
                >
                  abhikghosh@outlook.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+4917665979446"
                  className="hover:text-[#E91E63] transition-colors"
                >
                  (+49) 0176-65979446
                </a>
              </p>
              <p>Augsburg, Germany</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            ©{currentYear} by Abhik Ghosh. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-[#E91E63] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <a 
              href="https://www.credly.com/users/abhik-ghosh.941f4a38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E91E63] text-sm transition-colors"
            >
              Credly Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;