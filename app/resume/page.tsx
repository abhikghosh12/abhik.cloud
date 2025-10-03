'use client'

import Navbar from '../components/Navbar'
import DynamicResume from '../components/DynamicResume'
import Footer from '../components/Footer'

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Professional Header */}
      <section className="hero-gradient text-white py-16 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
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
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Interview
              </a>
              <a
                href="/Certificates/EN_Ghosh_Abhik_Short.pdf"
                download="Abhik_Ghosh_Resume.pdf"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-gray-50">
        <DynamicResume />
      </div>
      <Footer />
    </main>
  )
}