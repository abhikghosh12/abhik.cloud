'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react'

export default function OptimizedHeroSection() {
  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '3', label: 'Cloud Platforms' },
    { value: '100%', label: 'Client Success' }
  ]

  return (
    <section id="home" className="navbar-top-gradient pt-24 md:pt-32 pb-16 md:pb-20 text-white relative overflow-hidden">
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
            
            {/* Professional Content */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
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
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                        <img 
                          src="/Certificates/logos/capgemini.jpg" 
                          alt="Capgemini" 
                          className="w-full h-full object-contain"
                        />
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
                  <p className="text-pink-100 leading-relaxed mb-4">
                    With extensive experience in Cloud Services (AWS, Azure, GCP), Kubernetes, DevSecOps, and Machine Learning, 
                    I am ready to tackle your most complex challenges. My certifications in AWS, Azure, GCP, Terraform, and Kubernetes underscore my expertise.
                  </p>
                  
                  {/* Services Provided */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Services Provided:</h4>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center text-pink-100">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                        Cloud Migration & Modernization
                      </div>
                      <div className="flex items-center text-pink-100">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        DevSecOps Implementation
                      </div>
                      <div className="flex items-center text-pink-100">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        AI/ML Platform Development
                      </div>
                    </div>
                  </div>
                  
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
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Professional Profile */}
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
                    />
                  </div>
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
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-pink-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}