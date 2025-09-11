import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function CertificatesPage() {
  const certificates = [
    { name: 'Curriculum vitae', type: 'pdf', file: '/certificates/cv.pdf' },
    { name: 'Cover letter', type: 'pdf', file: '/certificates/cover-letter.pdf' },
    { name: 'M.Sc. Certificates', type: 'pdf', file: '/certificates/msc-certificate.pdf' },
    { name: 'Reference letter', type: 'pdf', file: '/certificates/reference-letter.pdf' },
    { name: 'Certificates Kubernetes', type: 'pdf', file: '/certificates/kubernetes-cert.pdf' },
    { name: 'Certificates AWS', type: 'pdf', file: '/certificates/aws-cert.pdf' },
    { name: 'Certificates Terraform', type: 'pdf', file: '/certificates/terraform-cert.pdf' },
    { name: 'Certificates Azure', type: 'pdf', file: '/certificates/azure-cert.pdf' },
    { name: 'Excellence Award', type: 'pdf', file: '/certificates/excellence-award.pdf' },
    { name: 'Credly Profile', type: 'link', url: 'https://www.credly.com/users/abhik-ghosh' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-black text-white"
    >
      <Helmet>
        <title>Certificates & Downloads | Abhik Ghosh</title>
        <meta name="description" content="Professional certificates, CV, and credentials of Abhik Ghosh" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">CERTIFICATES & DOWNLOADS</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${cert.type === 'pdf' ? 'bg-red-600' : 'bg-blue-600'}`}>
                      {cert.type === 'pdf' ? 'PDF' : 'LINK'}
                    </span>
                  </div>
                  
                  {cert.type === 'pdf' ? (
                    <a 
                      href={cert.file} 
                      download
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium transition-colors"
                    >
                      📥 Download
                    </a>
                  ) : (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition-colors"
                    >
                      🔗 View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/certificates/all-certificates.zip" 
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl inline-block"
            >
              📦 Download All Certificates
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}