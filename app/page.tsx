'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'

export default function Home() {
  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '3', label: 'Cloud Platforms' },
    { value: '100%', label: 'Client Success' }
  ]

  const services = [
    {
      icon: '🚀',
      title: 'Cloud Migration & Modernization',
      description: 'Legacy system transformation with minimal downtime',
      outcomes: ['40% cost reduction', '99.9% uptime', '3x faster deployment']
    },
    {
      icon: '🔒',
      title: 'DevSecOps Implementation',
      description: 'Automated security throughout development lifecycle',
      outcomes: ['Zero security incidents', '80% faster releases', 'Compliance automation']
    },
    {
      icon: '🤖',
      title: 'AI/ML Platform Development',
      description: 'Scalable ML infrastructure with automated pipelines',
      outcomes: ['Real-time insights', '10x data processing', 'Automated model deployment']
    }
  ]





  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Professional Hero Section */}
      <section id="home" className="hero-gradient py-20 text-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Professional Content - Takes more space */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {/* Name and Title */}
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      Abhik Ghosh, M.Sc
                    </h1>
                    <h2 className="text-2xl lg:text-3xl text-pink-200 font-semibold mb-6">
                      Cloud Architect | AI/ML Expert
                    </h2>
                    
                    {/* Current Position */}
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 mb-6">
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                          <Briefcase size={16} className="text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-white">Cloud Architect</p>
                          <a 
                            href="https://www.capgemini.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-pink-200 hover:text-white font-medium flex items-center gap-1"
                          >
                            Capgemini <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/30">
                    <h3 className="text-xl font-bold text-white mb-4 text-center lg:text-left">Professional Summary</h3>
                    <p className="text-pink-100 leading-relaxed mb-4">
                      As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                      accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. This allows clients to achieve their goals and optimize their performance.
                    </p>
                    <p className="text-pink-100 leading-relaxed mb-6">
                      With extensive experience in Cloud Services (AWS, Azure, GCP), Kubernetes, DevSecOps, and Machine Learning, 
                      I am ready to tackle your most complex challenges. My certifications in AWS, Azure, GCP, Terraform, and Kubernetes underscore my expertise.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <a
                        href="https://calendly.com/abhikghosh87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent text-white border border-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors justify-center"
                      >
                        <Calendar size={18} />
                        Schedule Call
                      </a>
                      <a
                        href="/resume"
                        className="bg-transparent text-white border border-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors justify-center"
                      >
                        <Briefcase size={18} />
                        View Resume
                      </a>
                      <a
                        href="/Certificates/EN_Ghosh_Abhik_Short.pdf"
                        download="Abhik_Ghosh_Resume.pdf"
                        className="bg-white/20 text-white border border-white/30 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/30 transition-colors justify-center"
                      >
                        <Briefcase size={18} />
                        Download Resume
                      </a>
                    </div>
                  </div>


                </motion.div>
              </div>
              
              {/* Professional Profile - Smaller, cleaner */}
              <div className="lg:col-span-4 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center space-y-6"
                >
                  {/* Professional Headshot */}
                  <div className="relative inline-block">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                      <img 
                        src="/images/profile/profile.png" 
                        alt="Abhik Ghosh - Cloud Architect" 
                        className="w-full h-full object-cover"
                        width={192}
                        height={192}
                        loading="eager"
                        style={{ maxWidth: '192px', maxHeight: '192px' }}
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-pink-100">
                      <MapPin size={16} />
                      <span>Germany</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-pink-100">
                      <Mail size={16} />
                      <a href="mailto:abhikghosh@outlook.com" className="hover:text-white">
                        abhikghosh@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-pink-100">
                      <Phone size={16} />
                      <a href="tel:+4917665979446" className="hover:text-white">
                        +49 176 65979446
                      </a>
                    </div>
                  </div>

                  {/* Professional Links */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                      </svg>
                    </a>
                    <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536L14.408 14.4s7.649-13.619 7.649-13.619c.095-.191.095-.387.006-.535C22.974.078 22.81 0 22.599 0h-4.411zm-11.19 7.691c-.211 0-.375.078-.463.22-.09.151-.09.346.009.536L9.497 13.3s-4.876 8.209-4.876 8.209c-.095.191-.095.387-.006.535.088.167.252.245.463.245h3.454c.517 0 .741-.325.927-.66 0 0 4.876-8.209 4.876-8.209-.015-.024-2.953-5.418-2.953-5.418-.17-.308-.436-.66-.967-.66H6.998z"/>
                      </svg>
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Professional Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-pink-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Excellence That Delivers Results
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>







      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600">Personal Profile</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Profile Image and Social Links */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center space-y-6"
                >
                  {/* Profile Image */}
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-pink-100">
                    <img 
                      src="/images/profile/profile.png" 
                      alt="Abhik Ghosh" 
                      className="w-full h-full object-cover"
                      width={256}
                      height={256}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" target="_blank" rel="noopener noreferrer" 
                       title="LinkedIn" className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                      </svg>
                    </a>
                    <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" 
                       title="Xing" className="w-12 h-12 bg-[#026466] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536L14.408 14.4s7.649-13.619 7.649-13.619c.095-.191.095-.387.006-.535C22.974.078 22.81 0 22.599 0h-4.411zm-11.19 7.691c-.211 0-.375.078-.463.22-.09.151-.09.346.009.536L9.497 13.3s-4.876 8.209-4.876 8.209c-.095.191-.095.387-.006.535.088.167.252.245.463.245h3.454c.517 0 .741-.325.927-.66 0 0 4.876-8.209 4.876-8.209-.015-.024-2.953-5.418-2.953-5.418-.17-.308-.436-.66-.967-.66H6.998z"/>
                      </svg>
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                       title="Credly" className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
              
              {/* About Content */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                      accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. This allows clients to achieve their goals and optimize their performance.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      With several years of experience in Operation, Incident Management, Software Development, Cloud Services/Hyperscalar (AWS, Azure, GCP), 
                      Kubernetes, Containerization, Microservices, DevSecOps, Backend, and Machine Learning, I&apos;m ready to tackle your most complex challenges. 
                      My certifications in AWS, Azure, GCP, Terraform, GenAI, Machine learning and Kubernetes underscore my expertise.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Previously, I was involved in building digital infrastructure for Uniklinikum Augsburg, a large academic hospital in Germany. 
                      I leveraged my expertise in AWS, Azure, DevSecOps, microservices, and web development to create scalable, secure, and efficient systems 
                      that support clinical research and data integration. I also worked on IoT and ML projects for the automation and energy sectors, 
                      using technologies such as Python, Django, Node.js, TensorFlow, and Grafana.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-8">
                      I am passionate about learning new skills and exploring new domains, and I am always eager to collaborate with diverse teams and stakeholders.
                    </p>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
                    <p className="text-gray-800 font-medium text-center">
                      Curious to see how I can transform your business? Explore my work and let&apos;s connect!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 navbar-top-gradient text-white relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your Cloud Transformation Today</h2>
            <p className="text-xl mb-8">Get a free 30-minute strategy consultation</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <a href="mailto:abhikghosh@outlook.com" className="flex items-center gap-3 hover:text-pink-100 transition-colors">
                <Mail className="text-pink-200" />
                <span>abhikghosh@outlook.com</span>
              </a>
              <a href="tel:+4917665979446" className="flex items-center gap-3 hover:text-pink-100 transition-colors">
                <Phone className="text-pink-200" />
                <span>+49 176 65979446</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-200" />
                <span>Germany</span>
              </div>
            </div>
            
            <motion.a
              href="https://calendly.com/abhikghosh87"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-pink-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-50 transition-colors shadow-lg"
            >
              Schedule Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}