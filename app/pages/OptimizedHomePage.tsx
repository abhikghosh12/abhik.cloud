'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import OptimizedHeroSection from '../components/sections/OptimizedHeroSection'
import ValuePropositionSection from '../components/sections/ValuePropositionSection'
import OptimizedContactSection from '../components/sections/OptimizedContactSection'

export default function OptimizedHomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <OptimizedHeroSection />
      <ValuePropositionSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Provided</h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Cloud Migration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Migration & Modernization</h3>
              <p className="text-gray-600 mb-6">Legacy system transformation with minimal downtime</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  40% cost reduction
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  99.9% uptime
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  3x faster deployment
                </div>
              </div>
            </motion.div>

            {/* DevSecOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevSecOps Implementation</h3>
              <p className="text-gray-600 mb-6">Automated security throughout development lifecycle</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Zero security incidents
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  80% faster releases
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Compliance automation
                </div>
              </div>
            </motion.div>

            {/* AI/ML Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI/ML Platform Development</h3>
              <p className="text-gray-600 mb-6">Scalable ML infrastructure with automated pipelines</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Real-time insights
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  10x data processing
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Automated model deployment
                </div>
              </div>
            </motion.div>
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <OptimizedContactSection />
      <Footer />
    </main>
  )
}