'use client'

import { motion } from 'framer-motion'

export default function OptimizedContactSection() {
  return (
    <section id="contact" className="py-20 navbar-top-gradient text-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let&apos;s discuss how I can help accelerate your cloud transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/abhikghosh87"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="mailto:abhikghosh@outlook.com"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}