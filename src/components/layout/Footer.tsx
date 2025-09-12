import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Abhik Ghosh</h3>
          <p className="text-gray-400 mb-4">
            Cloud Architect | DevSecOps Expert | AI/ML Specialist
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:abhikghosh@outlook.com" className="text-gray-400 hover:text-blue-400">📧</a>
            <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" className="text-gray-400 hover:text-blue-400">💼</a>
            <a href="https://github.com/abhikghosh12" className="text-gray-400 hover:text-blue-400">💻</a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Abhik Ghosh. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
