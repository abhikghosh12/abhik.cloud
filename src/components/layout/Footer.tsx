import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

const ICONS: { [key: string]: React.ReactNode } = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
  Twitter: <Twitter />,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/appointment' },
    { name: 'Privacy', path: '/privacy' },
  ];

  return (
    <footer className="footer bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">{siteConfig.title}</h3>
            <p className="text-gray-300 mb-6">
              {siteConfig.description}
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
                    className="text-gray-300 hover:text-accent-pink transition-colors"
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
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-accent-pink transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-accent-pink transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {siteConfig.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-pink transition-colors"
                >
                  {ICONS[social.name]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            ©{currentYear} by {siteConfig.title}. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-accent-pink text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <a 
              href={siteConfig.socials.find(s => s.name === 'Credly')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-pink text-sm transition-colors"
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
