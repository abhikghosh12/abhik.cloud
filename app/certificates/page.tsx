'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, Award, Filter } from 'lucide-react'
import { useState } from 'react'
import JSZip from 'jszip'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const downloadAllDocuments = async () => {
    const zip = new JSZip()
    
    try {
      // Fetch all PDF files from documents and add to ZIP
      for (const doc of documents) {
        const response = await fetch(doc.file)
        const blob = await response.blob()
        zip.file(`${doc.title}.pdf`, blob)
      }
      
      // Fetch all certification PDFs and add to ZIP
      for (const cert of certifications) {
        if (cert.pdf) {
          const response = await fetch(cert.pdf)
          const blob = await response.blob()
          zip.file(`${cert.title}.pdf`, blob)
        }
      }
      
      // Generate ZIP file and download
      const zipBlob = await zip.generateAsync({ type: 'blob' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(zipBlob)
      link.download = 'Abhik_Ghosh_All_Documents.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error('Error creating ZIP file:', error)
      alert('Error downloading files. Please try again.')
    }
  }

  const filters = [
    'All', 'Cloud Architecture', 'Container Orchestration', 'Infrastructure as Code', 
    'AI/ML', 'Security', 'Programming', 'DevOps', 'Project Management'
  ]

  const documents = [
    { title: 'Curriculum vitae (German)', description: 'Complete professional resume in German', size: '2.1 MB', icon: '📄', file: '/Certificates/Lebenslauf_Ghosh_Abhik.pdf' },
    { title: 'Curriculum vitae (English)', description: 'Complete professional resume in English', size: '2.8 MB', icon: '📄', file: '/Certificates/EN_Ghosh_Abhik.pdf' },
    { title: 'Cover letter', description: 'Professional cover letter template', size: '1.2 MB', icon: '📝', file: '/Certificates/50477187_EN_Ghosh_Abhik_Short.pdf' },
    { title: 'M.Sc. Certificates', description: 'Master of Science degree certificates', size: '3.5 MB', icon: '🎓', file: '/Certificates/M.SC.pdf' },
    { title: 'Excellence Award Capgemini', description: 'Professional excellence and achievement awards', size: '1.5 MB', icon: '🏆', file: '/Certificates/excellence_award.pdf' }
  ]

  const certifications = [
    { title: 'HashiCorp Certified: Terraform Associate (003)', issuer: 'HashiCorp', year: '2024', category: 'Infrastructure as Code', expires: 'Aug 2, 2026', icon: '/Certificates/terraform.png', pdf: '/Certificates/Terraform Associate.pdf' },
    { title: 'CKA: Certified Kubernetes Administrator', issuer: 'The Linux Foundation', year: '2023', category: 'Container Orchestration', expires: 'Aug 3, 2026', icon: '/Certificates/cka-certified-kubernetes-administrator.png', pdf: '/Certificates/Certified Kubernetes Administrator (CKA).pdf' },
    { title: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2023', category: 'Cloud Architecture', expires: 'Feb 28, 2026', icon: '/Certificates/aws-solutions-architect-associate.png', pdf: '/Certificates/AWS certified Solution Architect- Associate.pdf' },
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023', category: 'Cloud Architecture', expires: 'Feb 28, 2026', icon: '/Certificates/aws-cloud-practitioner.png', pdf: '/Certificates/AWS Certified Cloud Practitioner.pdf' },
    { title: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', year: '2021', category: 'Cloud Architecture', expires: 'Never', icon: '/Certificates/azure-fundamentals.png', pdf: '/Certificates/Exam AZ-900  Microsoft Azure Fundamentals.pdf' },
    { title: 'Certified SAFe® 6 Architect', issuer: 'Scaled Agile, Inc.', year: '2024', category: 'Project Management', expires: 'May 4, 2025', icon: '/Certificates/safe-6-architect.png', pdf: null },
    { title: 'Integrate Vertex AI Search and Conversation', issuer: 'Google Cloud', year: '2024', category: 'AI/ML', expires: 'Never', icon: '/Certificates/google-cloud.svg', pdf: null },
    { title: 'Text Prompt Engineering Techniques', issuer: 'Google Cloud', year: '2024', category: 'AI/ML', expires: 'Never', icon: '/Certificates/google-cloud.svg', pdf: null }
  ]

  const filteredCertifications = activeFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Professional Header */}
      <section className="navbar-top-gradient text-white py-20 pt-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional Certifications & Digital Badges
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Verified expertise across cloud platforms, security, and emerging technologies
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" size={24} />
                <span className="text-blue-100">11 Active Certifications</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="text-green-400" size={24} />
                <span className="text-blue-100">100% Verified Badges</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="text-blue-300" size={24} />
                <span className="text-blue-100">Instant Downloads</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Badges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeFilter === 'All' ? 'All verified certifications' : `${activeFilter} certifications`} ({filteredCertifications.length})
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {cert.category}
                    </span>
                    <span className="text-gray-500 text-sm">{cert.year}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                      <img src={cert.icon} alt={cert.issuer} className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                      <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs">Expires: {cert.expires}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1 flex-1 justify-center"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    )}
                    <a
                      href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-orange-600 transition-colors flex items-center gap-1 flex-1 justify-center"
                    >
                      <img src="/Site Files-download/Credly.PNG" alt="Credly" className="w-3 h-3" />
                      Credly
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download comprehensive documentation of qualifications, experience, achievements, and certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">PDF • {doc.size}</span>
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={downloadAllDocuments}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download All Documents (ZIP)
            </button>
          </div>
        </div>
      </section>



      {/* Credly Verification Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-4xl mx-auto border border-gray-100">
            <div className="mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl border border-gray-200 flex items-center justify-center mx-auto mb-6 p-3">
                <img src="/Site Files-download/Credly.PNG" alt="Credly Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Verify My Credentials</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                All certifications are verified and can be independently validated through my Credly digital badge profile
              </p>
              <a
                href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <ExternalLink size={20} />
                View Credly Profile
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">11</div>
                <div className="text-sm text-gray-600 font-medium">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5</div>
                <div className="text-sm text-gray-600 font-medium">Cloud Providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm text-gray-600 font-medium">Technology Areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Verified Badges</div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Staying current with emerging technologies and industry best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Currently Pursuing</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-blue-800">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="font-medium">AWS Solutions Architect Professional</span>
                </li>
                <li className="flex items-center text-blue-800">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="font-medium">Kubernetes Security Specialist</span>
                </li>
                <li className="flex items-center text-blue-800">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="font-medium">Google Cloud AI Engineer</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Planning to Achieve</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-green-800">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="font-medium">Google Cloud Security Engineer</span>
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="font-medium">Azure AI Engineer Associate</span>
                </li>
                <li className="flex items-center text-green-800">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="font-medium">CISSP Security Certification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-50 p-8 rounded-2xl max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Need verification or want to discuss expertise?
              </h4>
              <p className="text-gray-600 mb-6">
                Contact me to discuss how my certified expertise can accelerate your cloud transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                </a>
                <a
                  href="mailto:abhikghosh@outlook.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}