'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Mail, Phone, MessageSquare, Clock, Shield, Award, CheckCircle, Globe, Linkedin, Github } from 'lucide-react'
import Navbar from '../components/Navbar'

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
      action: "https://www.linkedin.com/in/abhik-ghosh-cloud",
      actionText: "Connect",
      color: "bg-blue-700"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Professional Header */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let&apos;s Transform Your Cloud Infrastructure
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Partner with an experienced Cloud Architect to accelerate your digital transformation journey
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <Shield className="text-green-400" size={24} />
                <span className="text-blue-100">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" size={24} />
                <span className="text-blue-100">Certified Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-blue-300" size={24} />
                <span className="text-blue-100">Global Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information & Methods */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Professional Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Abhik Ghosh, M.Sc</h3>
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
                    <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                      <Github size={18} className="text-white" />
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                      <Award size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-gray-900">Quick Contact Options</h4>
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

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">What You Get</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.text} className="flex items-start gap-3">
                      <benefit.icon size={20} className={`${benefit.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-700 leading-relaxed">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Professional Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Request Your Cloud Strategy Consultation
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Share your project details below and I&apos;ll provide personalized recommendations 
                    for your cloud transformation journey. All consultations include a custom architecture assessment.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+49 xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Consultation Type *
                        </label>
                        <select
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select service</option>
                          {consultationTypes.map((type) => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>{range.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Please describe your current infrastructure, challenges, and transformation goals. Include any specific requirements or constraints..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Processing Request...
                        </div>
                      ) : (
                        'Request Strategy Consultation'
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Received!</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Thank you for your interest. I&apos;ll review your requirements and respond within 24 hours 
                      with a personalized consultation proposal.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg max-w-md mx-auto">
                      <p className="text-sm text-blue-800">
                        <strong>Next Steps:</strong> Check your email for confirmation and 
                        expect a detailed response with consultation options and calendar availability.
                      </p>
                    </div>
                  </div>
                )}

                {/* Security & Privacy */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Shield size={16} className="text-green-500" />
                      <span>Enterprise Security</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield size={16} className="text-blue-500" />
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-orange-500" />
                      <span>24hr Response</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Your information is secure and confidential. No spam, no third-party sharing.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
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