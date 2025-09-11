import React, { useState } from 'react';

const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    appointmentType: 'consultation'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
      {/* Background Cloud Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Information */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-bold text-gray-900">Abhik Ghosh</h3>
                <p className="text-gray-600">Cloud Architect</p>
                <p className="text-gray-600">Maximilianstraße 6</p>
                <p className="text-gray-600">86150 Augsburg</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Skype:</h4>
                <p className="text-gray-600">abhik.cloud</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Email:</h4>
                <a 
                  href="mailto:abhikghosh@outlook.com" 
                  className="text-[#E91E63] hover:text-[#AD1457] transition-colors"
                >
                  abhikghosh@outlook.com
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Mobile:</h4>
                <a 
                  href="tel:+4917665979446" 
                  className="text-[#E91E63] hover:text-[#AD1457] transition-colors"
                >
                  (+49) 0176-65979446
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mb-6">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhik-ghosh-m-sc-61539425/', bg: 'bg-[#0077B5]' },
                { name: 'Xing', url: 'https://www.xing.com/profile/Abhik_Ghosh?sc_o=mxb_p', bg: 'bg-[#006567]' },
                { name: 'GitHub', url: 'https://github.com/abhikghosh12', bg: 'bg-[#333333]' },
                { name: 'Medium', url: 'https://medium.com/@abhikghosh_46536', bg: 'bg-[#000000]' },
                { name: 'WhatsApp', url: 'https://wa.me/4917665979446', bg: 'bg-[#25D366]' },
                { name: 'Twitter', url: '#', bg: 'bg-[#1DA1F2]' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 ${social.bg} text-white rounded flex items-center justify-center hover:scale-110 transition-transform`}
                  title={social.name}
                >
                  <span className="text-xs">•</span>
                </a>
              ))}
            </div>

            <button className="btn-secondary w-full">
              Schedule Appointment
            </button>
          </div>

          {/* Right Side - Calendly Integration */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/api/placeholder/100/30" 
                  alt="Calendly" 
                  className="h-8"
                />
              </div>
              <p className="text-center text-gray-600">Choose time</p>
              <p className="text-center text-gray-500 text-sm">Europe</p>
            </div>
            
            <div className="p-6">
              {/* Calendar placeholder - In real implementation, integrate with Calendly */}
              <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E91E63] mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading calendar...</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Calendly integration will be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Alternative */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Type
                </label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                >
                  <option value="consultation">Cloud Architecture Consultation</option>
                  <option value="project">Project Discussion</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-secondary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;