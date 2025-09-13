import React, { useState } from 'react';

const OptimizedContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-br from-[#E91E63] to-[#9C27B0] py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Value Proposition */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold">
                Start Your Cloud Transformation Today
              </h2>
              <p className="text-xl text-pink-100">
                Get a free 30-minute strategy consultation and custom architecture assessment
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Custom architecture recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Cost optimization analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>ROI projection and timeline</span>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6">
                <h3 className="font-bold mb-3">Response Time Guarantee</h3>
                <p className="text-pink-100">
                  All consultation requests receive a response within 24 hours, 
                  with priority given to enterprise transformation projects.
                </p>
              </div>
            </div>

            {/* Optimized Contact Form - 4 fields maximum */}
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Schedule Your Cloud Strategy Session
                </h3>
                <p className="text-gray-600">
                  Free 30-minute consultation • No sales pressure
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent resize-none"
                    placeholder="Briefly describe your cloud transformation goals and current challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E91E63] text-white py-4 rounded-lg font-medium hover:bg-[#AD1457] transition-all duration-300 btn-animate"
                  style={{ minHeight: '44px' }}
                >
                  Get Your Free Cloud Strategy Session
                </button>
              </form>

              {/* Security badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🛡️</span>
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>No Spam Policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="text-center mt-12 text-white">
            <p className="mb-4">Prefer to schedule directly?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+491234567890" 
                className="bg-white bg-opacity-10 backdrop-blur px-6 py-3 rounded-lg hover:bg-opacity-20 transition-all"
              >
                📞 Call: +49 123 456 7890
              </a>
              <a 
                href="mailto:abhik@example.com" 
                className="bg-white bg-opacity-10 backdrop-blur px-6 py-3 rounded-lg hover:bg-opacity-20 transition-all"
              >
                ✉️ Email: abhik@example.com
              </a>
              <a 
                href="https://linkedin.com/in/abhikghosh" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 backdrop-blur px-6 py-3 rounded-lg hover:bg-opacity-20 transition-all"
              >
                💼 LinkedIn Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedContactSection;