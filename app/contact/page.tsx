'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Mail, Phone, MessageSquare, Clock, Shield, Award, CheckCircle, Globe, Linkedin, Github } from 'lucide-react'
import Navbar from '../components/layout/Navbar'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const consultationTypes = [
    { value: 'cloud-architecture', label: 'Cloud Architecture & Strategy' },
    { value: 'cloud-migration', label: 'Cloud Migration & Modernization' },
    { value: 'devsecops', label: 'DevSecOps Implementation' },
    { value: 'ai-ml', label: 'AI/ML Platform Development' },
    { value: 'multi-cloud', label: 'Multi-Cloud Strategy' },
    { value: 'assessment', label: 'Infrastructure Assessment' }
  ]

  const budgetRanges = [
    { value: '10k-50k', label: '€10K - €50K' },
    { value: '50k-100k', label: '€50K - €100K' },
    { value: '100k-250k', label: '€100K - €250K' },
    { value: '250k+', label: '€250K+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ]

  const timelines = [
    { value: 'immediate', label: 'Immediate (< 1 month)' },
    { value: 'short', label: 'Short Term (1-3 months)' },
    { value: 'medium', label: 'Medium Term (3-6 months)' },
    { value: 'long', label: 'Long Term (6+ months)' },
    { value: 'planning', label: 'Planning Phase' }
  ]

  const benefits = [
    { icon: CheckCircle, text: "Free 30-minute strategy consultation", color: "text-green-500" },
    { icon: Award, text: "Custom architecture recommendations", color: "text-blue-500" },
    { icon: Shield, text: "Cost optimization analysis", color: "text-purple-500" },
    { icon: Clock, text: "24-hour response guarantee", color: "text-orange-500" }
  ]

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule Directly",
      description: "Book a time that works for you",
      action: "https://calendly.com/abhikghosh87",
      actionText: "Open Calendly",
      color: "bg-blue-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      description: "Quick questions and instant responses",
      action: "https://wa.me/4917665979446",
      actionText: "Start Chat",
      color: "bg-green-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Connect",
      description: "Professional networking and discussions",
      action: "https://www.linkedin.com/in/abhik-ghosh-msc/",
      actionText: "Connect",
      color: "bg-blue-700"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Professional Header */}
      <section className="navbar-top-gradient text-white py-24 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Ready to discuss your cloud transformation? Let&apos;s connect and explore opportunities
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              

              
              {/* Professional Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-pink-600">
                    <img 
                      src="/images/profile/profile.png" 
                      alt="Abhik Ghosh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">
                    <a 
                      href="https://www.linkedin.com/in/abhik-ghosh-msc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      Abhik Ghosh, M.Sc
                    </a>
                  </h3>
                  <p className="text-pink-600 font-semibold">Cloud Architect</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Available for consultation</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-blue-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:abhikghosh@outlook.com" className="text-blue-600 hover:text-blue-800">
                        abhikghosh@outlook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+4917665979446" className="text-green-600 hover:text-green-800">
                        +49 176 65979446
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-gray-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Germany (CEST)</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-900 mb-3">Connect Professionally</p>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" target="_blank" rel="noopener noreferrer" 
                       title="LinkedIn Profile"
                       className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a href="https://github.com/abhikghosh12" target="_blank" rel="noopener noreferrer" 
                       title="GitHub Profile"
                       className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                      <Github size={18} className="text-white" />
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                       title="Credly Badges"
                       className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <img src="/Certificates/c.png" alt="Credly" className="w-8 h-8 object-contain" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Methods */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Quick Contact Options</h4>
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900">{method.title}</h5>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                      <div className="text-blue-600 text-sm font-medium">{method.actionText}</div>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Professional Profile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Professional Profile</h4>
                <div className="flex justify-center">
                  <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="abhik-ghosh-msc" data-version="v1">
                    <a className="badge-base__link LI-simple-link" href="https://de.linkedin.com/in/abhik-ghosh-msc?trk=profile-badge">Abhik Ghosh, M.Sc</a>
                  </div>
                </div>
              </motion.div>
              
              {/* What You Get */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">What You Get</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Free 30-minute strategy consultation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Custom architecture recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Cost optimization analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">24-hour response guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>



      {/* Call to Action Footer */}
      <section className="hero-gradient text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Cloud Journey?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join successful enterprises who have transformed their operations with proven cloud architecture solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/abhikghosh87" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Immediate Consultation
              </a>
              <a 
                href="https://wa.me/4917665979446" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Quick WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}