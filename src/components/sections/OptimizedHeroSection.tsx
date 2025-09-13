import React from 'react';
import { Link } from 'react-router-dom';

const AboutMeSection: React.FC = () => {
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
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pink-200">ABOUT ME</h2>
                <h3 className="text-lg font-semibold text-pink-100">Personal Profile</h3>
                
                <div className="flex gap-4 mb-4">
                  <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 transition-colors">
                    <i className="fab fa-xing fa-lg"></i>
                  </a>
                  <a href="https://www.credly.com/users/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-orange-200 transition-colors">
                    <i className="fas fa-certificate fa-lg"></i>
                  </a>
                </div>
                
                <p className="text-lg text-pink-100 leading-relaxed">
                  As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. This allows clients to achieve their goals and optimize their performance.
                </p>
                
                <p className="text-lg text-pink-100 leading-relaxed">
                  With several years of experience in Operation, Incident Management, Software Development, Cloud Services/Hyperscalar (AWS, Azure, GCP), Kubernetes, Containerization, Microservices, DevSecOps, Backend, and Machine Learning, I'm ready to tackle your most complex challenges. My certifications in AWS, Azure, GCP, Terraform, GenAI, Machine learning and Kubernetes underscore my expertise.
                </p>
                
                <p className="text-lg text-pink-100 leading-relaxed">
                  Previously, I was involved in building digital infrastructure for Uniklinikum Augsburg, a large academic hospital in Germany. I leveraged my expertise in AWS, Azure, DevSecOps, microservices, and web development to create scalable, secure, and efficient systems that support clinical research and data integration. I also worked on IoT and ML projects for the automation and energy sectors, using technologies such as Python, Django, Node.js, TensorFlow, and Grafana.
                </p>
                
                <p className="text-lg text-pink-100 leading-relaxed">
                  I am passionate about learning new skills and exploring new domains, and I am always eager to collaborate with diverse teams and stakeholders.
                </p>
                
                <p className="text-lg text-yellow-300 font-semibold">
                  Curious to see how I can transform your business? Explore my work at my website and let's connect!
                </p>
              </div>
              
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
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
              <img 
                src="/images/profile/profile.png" 
                alt="Abhik Ghosh" 
                className="w-80 h-80 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/20"
              />
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

export default AboutMeSection;