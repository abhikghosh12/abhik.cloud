'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react'
import Navbar from './components/Navbar'

export default function Home() {
  // Optimization notice
  const showOptimizedLink = true;
  
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '3', label: 'Cloud Platforms' },
    { value: '100%', label: 'Client Success' }
  ]

  const services = [
    {
      icon: '🚀',
      title: 'Cloud Migration & Modernization',
      description: 'Legacy system transformation with minimal downtime',
      outcomes: ['40% cost reduction', '99.9% uptime', '3x faster deployment']
    },
    {
      icon: '🔒',
      title: 'DevSecOps Implementation',
      description: 'Automated security throughout development lifecycle',
      outcomes: ['Zero security incidents', '80% faster releases', 'Compliance automation']
    },
    {
      icon: '🤖',
      title: 'AI/ML Platform Development',
      description: 'Scalable ML infrastructure with automated pipelines',
      outcomes: ['Real-time insights', '10x data processing', 'Automated model deployment']
    }
  ]

  const experiences = [
    {
      title: 'Cloud Architect',
      company: 'Capgemini',
      companyUrl: 'https://www.capgemini.com/',
      duration: '2021 - Present',
      type: 'Fulltime',
      description: 'Leading cloud transformation initiatives across automotive and public sector clients, specializing in AWS cloud migration, container platforms, and GenAI/ML solutions.',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Ansible', 'GitLab CI/CD', 'Prometheus', 'Grafana']
    },
    {
      title: 'Research Associate',
      company: 'Universitätsklinikum Augsburg',
      duration: '2020 - 2021',
      type: 'Fulltime',
      description: 'Research in data integration for future medicine with focus on ETL processes, system administration, and Scrum development.',
      technologies: ['Python', 'PostgreSQL', 'Azure', 'Docker', 'GitLab']
    },
    {
      title: 'Research Associate/Software Developer',
      company: 'RWTH Aachen University',
      companyUrl: 'https://www.eonerc.rwth-aachen.de/go/id/dmud/?lidx=1',
      duration: '2018 - 2020',
      description: 'Research and development in energy systems with focus on cloud computing, system administration, and Scrum development.',
      technologies: ['OpenStack', 'FIWARE', 'Python', 'Linux']
    },
    {
      title: 'Energy System Engineer',
      company: 'JSW Energy',
      companyUrl: 'https://www.jsw.in/energy',
      duration: '2010 - 2014',
      type: 'Fulltime',
      description: 'Distributed Control System (DCS) operation and maintenance in power generation facility.',
      technologies: ['SCADA', 'DCS', 'BACnet', 'MODBUS']
    }
  ]

  const education = [
    {
      degree: 'Master of Science',
      field: 'Electrical Engineering and Information Technology',
      institution: 'Otto-von-Guericke-Universität',
      institutionUrl: 'https://www.ovgu.de/Otto_von_Guericke_Universit%C3%A4t+Magdeburg-p-1.html',
      location: 'Magdeburg, Germany',
      duration: '2014 - 2016',
      specialization: 'Energy and Automation & Control subjects',
      thesis: 'Development of an Energy Management System for demand response programs within smart DC houses',
      thesisUrl: 'https://www.researchgate.net/publication/324363680_Development_of_an_Energy_Management_System_for_demand_response_programs_within_smart_DC_houses_Master_thesis',
      projects: [
        'Demand Response for heating and cooling purposes in smart houses',
        'Comparison of power system simulation software PSS-NETOMAC with open source calculation tool Matpower, IEEE Germany Student Conference, 2016'
      ],
      projectUrls: [
        'https://www.researchgate.net/publication/313608794_Demand_Response_for_heating_and_cooling_purposes_in_smart_houses',
        'https://www.researchgate.net/publication/300013546_Comparison_of_power_system_simulation_software_PSS-NETOMAC_with_open_source_calculation_tool_Matpower'
      ]
    },
    {
      degree: 'Bachelor of Engineering',
      field: 'Electrical and Electronics Engineering',
      institution: 'Visveswaraiah Technological University',
      institutionUrl: 'https://vtu.ac.in/',
      location: 'Belgaum, India',
      duration: '2005 - 2009',
      thesis: 'Design and development of simulator for fuel injection calibrating parameters'
    }
  ]

  const certifications = [
    { name: 'AWS Solutions Architect Professional', level: 'Professional', year: '2024', file: '/Certificates/AWS certified Solution Architect- Associate.pdf' },
    { name: 'Azure Solutions Architect Expert', level: 'Expert', year: '2024', file: '/Certificates/Exam AZ-900  Microsoft Azure Fundamentals.pdf' },
    { name: 'Google Cloud Professional Architect', level: 'Professional', year: '2023', file: '/Certificates/1690817489161.pdf' },
    { name: 'Kubernetes CKA', level: 'Certified', year: '2024', file: '/Certificates/Certified Kubernetes Administrator (CKA).pdf' },
    { name: 'Terraform Associate', level: 'Associate', year: '2023', file: '/Certificates/Terraform Associate.pdf' },
    { name: 'Docker Certified Associate', level: 'Associate', year: '2023', file: '/Certificates/AWS Certified Cloud Practitioner.pdf' }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Optimization Banner */}
      {showOptimizedLink && (
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 text-center relative z-40">
          <div className="container mx-auto">
            <p className="text-sm md:text-base font-medium">
              🚀 <strong>NEW:</strong> Experience the conversion-optimized version of this portfolio →{' '}
              <a 
                href="/optimized" 
                className="underline hover:no-underline font-bold ml-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-all"
              >
                View Optimized Site
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Professional Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Professional Content - Takes more space */}
              <div className="lg:col-span-8 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {/* Name and Title */}
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      Abhik Ghosh, M.Sc
                    </h1>
                    <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold mb-6">
                      Cloud Architect | AI/ML Expert
                    </h2>
                    
                    {/* Current Position */}
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 mb-6">
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Briefcase size={16} className="text-blue-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">Cloud Architect</p>
                          <a 
                            href="https://www.capgemini.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                          >
                            Capgemini <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">Professional Summary</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                      accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML. This allows clients to achieve their goals and optimize their performance.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      With extensive experience in Cloud Services (AWS, Azure, GCP), Kubernetes, DevSecOps, and Machine Learning, 
                      I'm ready to tackle your most complex challenges. My certifications in AWS, Azure, GCP, Terraform, and Kubernetes underscore my expertise.
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <motion.a
                      href="https://calendly.com/abhikghosh87"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors justify-center"
                    >
                      <Calendar size={18} />
                      Book Consultation
                    </motion.a>
                    <motion.a
                      href="/resume"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors justify-center"
                    >
                      <Briefcase size={18} />
                      View Resume
                    </motion.a>
                    <motion.a
                      href="/Certificates/Lebenslauf_Ghosh_Abhik.pdf"
                      download="Abhik_Ghosh_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors justify-center"
                    >
                      <Briefcase size={18} />
                      Download PDF
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              {/* Professional Profile - Smaller, cleaner */}
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
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span>Germany</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Mail size={16} />
                      <a href="mailto:abhikghosh@outlook.com" className="hover:text-blue-600">
                        abhikghosh@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Phone size={16} />
                      <a href="tel:+4917665979446" className="hover:text-blue-600">
                        +49 176 65979446
                      </a>
                    </div>
                  </div>

                  {/* Professional Links */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors">
                      <i className="fab fa-xing text-lg"></i>
                    </a>
                    <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                      <i className="fas fa-certificate text-lg"></i>
                    </a>
                    <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                      <i className="fab fa-github text-lg"></i>
                    </a>
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
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-white p-4 rounded-lg shadow-md text-center border-l-4 border-blue-600">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Excellence That Delivers Results
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="flex justify-center">
              <a 
                href="/resume" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                View Detailed Resume <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600 mb-1">{exp.title}</h3>
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-900 hover:text-blue-600 underline">{exp.company}</a>
                    ) : (
                      <p className="text-lg font-semibold text-gray-900">{exp.company}</p>
                    )}
                    {exp.type && <p className="text-sm text-blue-600 font-medium">{exp.type}</p>}
                  </div>
                  <span className="text-blue-600 font-semibold">{exp.duration}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-600 mb-1">{edu.degree}</h3>
                    <p className="text-lg font-semibold text-gray-900">{edu.field}</p>
                    {edu.institutionUrl ? (
                      <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{edu.institution}</a>
                    ) : (
                      <p className="text-gray-700">{edu.institution}</p>
                    )}
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <span className="text-green-600 font-semibold">{edu.duration}</span>
                </div>
                
                {edu.specialization && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialization:</h4>
                    <p className="text-gray-700">{edu.specialization}</p>
                  </div>
                )}
                
                {edu.thesis && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Thesis:</h4>
                    {edu.thesisUrl ? (
                      <a href={edu.thesisUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline italic">{edu.thesis}</a>
                    ) : (
                      <p className="text-gray-700 italic">{edu.thesis}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                Professional Certifications
              </a>
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" title="View Credly Profile" className="hover:scale-110 transition-transform">
                <img src="/Site Files-download/Credly.PNG" alt="Credly" className="w-8 h-8" />
              </a>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200"
              >
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{cert.level}</p>
                <p className="text-xs text-blue-600 font-medium mb-3">Achieved {cert.year}</p>
                {cert.file && (
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Start Your Cloud Transformation Today</h2>
            <p className="text-xl mb-8">Get a free 30-minute strategy consultation</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-200" />
                <span>abhikghosh@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-200" />
                <span>+49 176 65979446</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-200" />
                <span>Germany</span>
              </div>
            </div>
            
            <motion.a
              href="https://calendly.com/abhikghosh87"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}