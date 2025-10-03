'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import DynamicResume from '../components/DynamicResume'
import Footer from '../components/Footer'

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Professional Header */}
      <section className="navbar-top-gradient text-white py-16 pt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional Experience
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              A comprehensive overview of my career journey and achievements
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/abhikghosh87"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                Schedule Call
              </a>
              <a
                href="/resume"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                View Resume
              </a>
              <a
                href="/Certificates/EN_Ghosh_Abhik_Short.pdf"
                download="Abhik_Ghosh_Resume.pdf"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <div className="bg-gray-50">
        <DynamicResume />
      </div>
      <Footer />
    </main>
  )
}