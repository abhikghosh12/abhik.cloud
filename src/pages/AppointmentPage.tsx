import React from 'react';

const AppointmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Abhik Ghosh</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
              <i className="fab fa-xing fa-2x"></i>
            </a>
            <a href="tel:+4917665979446" className="text-white hover:text-pink-200 transition-colors">
              <i className="fas fa-mobile-alt fa-2x"></i>
            </a>
            <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a href="mailto:abhikghosh@outlook.com" className="text-white hover:text-pink-200 transition-colors">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a href="https://www.credly.com/users/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
              <i className="fas fa-certificate fa-2x"></i>
            </a>
            <a href="https://medium.com/@abhikghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
              <i className="fab fa-medium fa-2x"></i>
            </a>
            <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-xl text-pink-100 mb-8">
            Schedule a consultation to discuss your cloud architecture needs
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Abhik Ghosh</h3>
                    <p className="text-gray-600">Cloud Architect | AI/ML Expert</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Morellstraße 6</p>
                    <p className="text-gray-600">86159 Augsburg, Germany</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:abhikghosh@outlook.com" className="text-[#E91E63] hover:underline">
                      abhikghosh@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile</h3>
                    <a href="tel:+4917665979446" className="text-[#E91E63] hover:underline">
                      (+49) 017665979446
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.31-.623-.31-1.544c0-1.446.839-2.525 1.883-2.525.888 0 1.317.666 1.317 1.466 0 .893-.568 2.229-.861 3.467-.245 1.04.522 1.887 1.549 1.887 1.857 0 3.285-1.958 3.285-4.789 0-2.503-1.799-4.253-4.37-4.253-2.977 0-4.727 2.234-4.727 4.546 0 .9.347 1.863.78 2.388.085.104.098.195.072.301-.079.329-.255 1.045-.289 1.193-.045.189-.147.229-.339.138-1.273-.593-2.068-2.456-2.068-3.956 0-3.298 2.397-6.325 6.913-6.325 3.628 0 6.447 2.584 6.447 6.043 0 3.604-2.273 6.505-5.42 6.505-1.058 0-2.055-.549-2.394-1.275l-.651 2.482c-.235.915-.872 2.062-1.297 2.76.977.302 2.008.461 3.065.461 6.621 0 11.99-5.367 11.99-11.988C24.007 5.367 18.637.001 12.017.001z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Skype</h3>
                    <p className="text-gray-600">abhik.tukai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/abhik-ghosh-m-sc-61539425/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-[#0077B5] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>

                <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-[#333333] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">GitHub</span>
                </a>

                <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-[#25D366] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>

                <a href="https://www.credly.com/users/abhik-ghosh.941f4a38" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="w-8 h-8 bg-[#FF6B00] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Cr</span>
                  </div>
                  <span className="text-sm font-medium">Credly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Appointment Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  placeholder="+49 xxx xxx xxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent">
                  <option value="">Select consultation type</option>
                  <option value="cloud-architecture">Cloud Architecture Review</option>
                  <option value="aws-migration">AWS Migration Strategy</option>
                  <option value="devops-implementation">DevOps Implementation</option>
                  <option value="ai-ml-consultation">AI/ML Solutions</option>
                  <option value="security-assessment">Security Assessment</option>
                  <option value="general">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date & Time</label>
                <input 
                  type="datetime-local" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                  placeholder="Please describe your project requirements and goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Schedule Appointment
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">What to expect:</p>
                  <ul className="space-y-1 text-blue-600">
                    <li>• Initial consultation (30-60 minutes)</li>
                    <li>• Architecture assessment and recommendations</li>
                    <li>• Customized solution roadmap</li>
                    <li>• Follow-up support and implementation guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;