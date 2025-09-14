'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react'
import Navbar from './components/Navbar'

export default function Home() {
  // Optimization notice
  const showOptimizedLink = true;
  
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
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
      
      {/* Optimization Banner */}
      {showOptimizedLink && (
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 text-center relative z-40">
          <div className="container mx-auto">
            <p className="text-sm md:text-base font-medium">
              🚀 <strong>NEW:</strong> Experience the conversion-optimized version of this portfolio →{' '}
              <a 
                href="/optimized" 
                className="underline hover:no-underline font-bold ml-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-all"
              >
                View Optimized Site
              </a>
            </p>
          </div>
        </div>
      )}

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
                    <p className="text-pink-100 leading-relaxed">
                      With extensive experience in Cloud Services (AWS, Azure, GCP), Kubernetes, DevSecOps, and Machine Learning, 
                      I am ready to tackle your most complex challenges. My certifications in AWS, Azure, GCP, Terraform, and Kubernetes underscore my expertise.
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <motion.a
                      href="https://calendly.com/abhikghosh87"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-pink-600 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-pink-50 transition-colors justify-center shadow-lg"
                    >
                      <Calendar size={18} />
                      Book Consultation
                    </motion.a>
                    <motion.a
                      href="/resume"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent text-white border border-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors justify-center"
                    >
                      <Briefcase size={18} />
                      View Resume
                    </motion.a>
                    <motion.a
                      href="/Certificates/Lebenslauf_Ghosh_Abhik.pdf"
                      download="Abhik_Ghosh_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-white/30 transition-colors justify-center"
                    >
                      <Briefcase size={18} />
                      Download PDF
                    </motion.a>
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
                    <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                      <i className="fab fa-xing text-lg"></i>
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                      <i className="fas fa-certificate text-lg"></i>
                    </a>
                    <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                      <i className="fab fa-github text-lg"></i>
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







      {/* Contact Section */}
      <section id="contact" className="py-20 hero-gradient text-white relative overflow-hidden">
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
              <div className="flex items-center gap-3">
                <Mail className="text-pink-200" />
                <span>abhikghosh@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-pink-200" />
                <span>+49 176 65979446</span>
              </div>
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
    </main>
  )
}