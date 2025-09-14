'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, Award, Filter } from 'lucide-react'
import { useState } from 'react'

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = [
    'All', 'Cloud Architecture', 'Container Orchestration', 'Infrastructure as Code', 
    'AI/ML', 'Security', 'Programming', 'DevOps', 'Project Management'
  ]

  const documents = [
    { title: 'Curriculum vitae', description: 'Complete professional resume with detailed experience', size: '2.1 MB', icon: '📄', file: '/Certificates/Lebenslauf_Ghosh_Abhik.pdf' },
    { title: 'Cover letter', description: 'Professional cover letter template', size: '1.2 MB', icon: '📝', file: '/Certificates/EN_Ghosh_Abhik.pdf' },
    { title: 'M.Sc. Certificates', description: 'Master of Science degree certificates', size: '3.5 MB', icon: '🎓', file: '/Certificates/1690817489161.pdf' },
    { title: 'Reference letter', description: 'Professional reference letters from employers', size: '2.8 MB', icon: '📋', file: '/Certificates/50477187_EN_Ghosh_Abhik_Short.pdf' },
    { title: 'Certificates Kubernetes', description: 'Kubernetes certification documents', size: '2.2 MB', icon: '☸️', file: '/Certificates/Certified Kubernetes Administrator (CKA).pdf' },
    { title: 'Certificates AWS', description: 'Amazon Web Services certification documents', size: '3.1 MB', icon: '☁️', file: '/Certificates/AWS certified Solution Architect- Associate.pdf' },
    { title: 'Certificates Terraform', description: 'Terraform Infrastructure as Code certifications', size: '1.8 MB', icon: '🏗️', file: '/Certificates/Terraform Associate.pdf' },
    { title: 'Certificates Azure', description: 'Microsoft Azure certification documents', size: '2.5 MB', icon: '🔷', file: '/Certificates/Exam AZ-900  Microsoft Azure Fundamentals.pdf' },
    { title: 'Excellence Award', description: 'Professional excellence and achievement awards', size: '1.5 MB', icon: '🏆', file: '/Certificates/AWS Certified Cloud Practitioner.pdf' }
  ]

  const certifications = [
    { title: 'Kubernetes Certifications', issuer: 'Cloud Native Computing Foundation', year: '2023', category: 'Container Orchestration', badge: true },
    { title: 'AWS Certifications', issuer: 'Amazon Web Services', year: '2023', category: 'Cloud Architecture', badge: true },
    { title: 'Terraform Certifications', issuer: 'HashiCorp', year: '2022', category: 'Infrastructure as Code', badge: true },
    { title: 'Azure Certifications', issuer: 'Microsoft', year: '2023', category: 'Cloud Architecture', badge: true },
    { title: 'Azure Solutions Architect Expert', issuer: 'Microsoft', year: '2023', category: 'Cloud Architecture', badge: true },
    { title: 'Google Cloud Professional Cloud Architect', issuer: 'Google Cloud', year: '2022', category: 'Cloud Architecture', badge: true },
    { title: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: '2023', category: 'Container Orchestration', badge: true },
    { title: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2022', category: 'Infrastructure as Code', badge: true },
    { title: 'Docker Certified Associate', issuer: 'Docker', year: '2022', category: 'Container Orchestration', badge: true },
    { title: 'Machine Learning Engineer', issuer: 'Google Cloud', year: '2023', category: 'AI/ML', badge: true },
    { title: 'DevSecOps Foundation', issuer: 'DevOps Institute', year: '2022', category: 'Security', badge: true },
    { title: 'Python Developer', issuer: 'Python Institute', year: '2021', category: 'Programming', badge: true },
    { title: 'Certified ScrumMaster', issuer: 'Scrum Alliance', year: '2021', category: 'Project Management', badge: true },
    { title: 'AWS Security Specialty', issuer: 'Amazon Web Services', year: '2023', category: 'Security', badge: true },
    { title: 'Azure DevOps Engineer Expert', issuer: 'Microsoft', year: '2022', category: 'DevOps', badge: true }
  ]

  const filteredCertifications = activeFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Professional Certifications and Digital Badges</h1>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Documents */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Documents</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">PDF • {doc.size}</span>
                  <a
                    href={doc.file}
                    download
                    className="bg-pink-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-pink-700 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              All Downloads
            </button>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-pink-600" size={24} />
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                    {cert.category}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-pink-600 hover:text-pink-700 text-xs font-medium">
                      View Badge
                    </button>
                    <button className="text-pink-600 hover:text-pink-700 text-xs font-medium">
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credly Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 rounded-xl shadow-lg text-center">
            <div className="mb-8">
              <img src="/Site Files-download/Credly.PNG" alt="Credly Logo" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verify My Credentials</h3>
              <p className="text-gray-600 mb-8">All my certifications are verified and can be viewed on my Credly profile</p>
              <a
                href="https://www.credly.com/users/abhik-ghosh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={16} />
                View Credly Profile
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Cloud Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Technology Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Verified Badges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Continuous Learning Journey</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Currently Pursuing</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-800">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AWS Solutions Architect Professional
                </li>
                <li className="flex items-center text-blue-800">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Kubernetes Security Specialist
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">Planning to Achieve</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Google Cloud Security Engineer
                </li>
                <li className="flex items-center text-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AI Engineering Certification
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Need verification of my credentials or want to discuss my expertise?
            </p>
            <a
              href="/contact"
              className="bg-pink-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors"
            >
              Contact me!
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}