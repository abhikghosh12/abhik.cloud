import React from 'react';
import { Link } from 'react-router-dom';

const OptimizedHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300 bg-opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Professional content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur rounded-full px-4 py-2 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for Cloud Architecture Consulting
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Abhik Ghosh</span>
                <span className="block text-pink-200 text-3xl lg:text-4xl font-normal mt-2">
                  Cloud Architect | AI/ML Expert
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-pink-100 leading-relaxed">
                Providing solutions for <span className="text-yellow-300 font-semibold">IoT infrastructure</span>, 
                <span className="text-yellow-300 font-semibold"> machine learning</span>, and 
                <span className="text-yellow-300 font-semibold"> data analytics</span>. 
                Specializing in AWS, Azure, and GCP platforms.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur px-3 py-2 rounded-full">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Cloud Solutions Architect
                </div>
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur px-3 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  DevSecOps Expert
                </div>
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur px-3 py-2 rounded-full">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  AI/ML Specialist
                </div>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/appointment"
                className="inline-flex items-center justify-center bg-white text-[#E91E63] hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </Link>
              
              <Link 
                to="/projects"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#E91E63] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Portfolio
              </Link>
            </div>

            {/* Contact information */}
            <div className="flex flex-col sm:flex-row gap-6 text-pink-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                abhikghosh@outlook.com
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 176 65979446
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Germany
              </div>
            </div>
          </div>

          {/* Professional image and certifications */}
          <div className="text-center lg:text-right">
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-6xl font-bold text-[#E91E63] shadow-2xl">
                AG
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Key achievements */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-300">15+</div>
                <div className="text-sm text-pink-100">Years Experience</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-pink-100">Projects Delivered</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-300">3</div>
                <div className="text-sm text-pink-100">Cloud Platforms</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-300">100%</div>
                <div className="text-sm text-pink-100">Client Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;