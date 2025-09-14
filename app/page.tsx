'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react'
import Navbar from './components/Navbar'

export default function Home() {
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
      duration: '2021 - Present',
      description: 'Leading cloud transformation initiatives across automotive and public sector clients, specializing in AWS cloud migration, container platforms, and GenAI/ML solutions.',
      projects: [
        {
          customer: 'Automotive',
          title: 'AWS Cloud Migration from Kubernetes Platform (GO2Cloud)',
          achievements: [
            'Migration of Global Ordering Platform to AWS EKS',
            'Automation of Deployments (IaC) with Ansible, Terraform, Jenkins, ArgoCD, GitLab CI/CD',
            'Monitoring and Alerting: Grafana, Loki, Prometheus, Dynatrace'
          ]
        },
        {
          customer: 'Public Sector',
          title: 'Setup & Development of Data Platform - Container Platform',
          achievements: [
            'Development of platform components: Harbor, Gitea, Fleet, MinIO, Longhorn, Policy engine, Trivy, Rancher, Kubernetes, RedHat OpenShift, VMware',
            'Automation of deployments (IaC) with Ansible, Terraform, GitLab CI/CD, Argo CD, Fleet, Bitbucket',
            'Observability: Grafana, Prometheus, Dynatrace, ELK stack'
          ]
        },
        {
          customer: 'Automotive',
          title: 'Hyperscaler/Public Cloud & Private Cloud Solutions',
          achievements: [
            'Hyperscaler/Public Cloud: AWS CDK, EKS, Cloud Migration',
            'Private Cloud: OpenStack'
          ]
        }
      ],
      genai: {
        title: 'Experience in GenAI and ML',
        achievements: [
          'Developed and deployed conversational GenAI agents on cloud platforms',
          'Trained models for natural language understanding and personalized interactions'
        ],
        technologies: ['Azure AI', 'Microsoft Copilot', 'AWS SageMaker', 'Amazon Bedrock', 'LangChain', 'Google Cloud Vertex AI', 'TensorFlow', 'Jupyter', 'Python']
      },
      technologies: ['OpenShift', 'AWS', 'Rancher', 'Kubernetes', 'Podman', 'Harbor', 'Gitea', 'GitLab CI/CD', 'Terraform', 'Fleet', 'Linux', 'DevOps', 'IaC'],
      researchUrl: 'https://www.researchgate.net/profile/Abhik_Ghosh5/publications'
    },
    {
      title: 'Research Associate/Software Developer',
      company: 'RWTH Aachen University',
      companyUrl: 'https://www.eonerc.rwth-aachen.de/go/id/dmud/?lidx=1',
      department: 'E.ON Energy Research Center · Institute for Energy Efficient Buildings and Indoor Climate',
      duration: '2018 - 2020',
      description: 'Research and development in energy systems with focus on cloud computing, system administration, and Scrum development.',
      projects: [
        {
          title: 'National 5G Energy Hub',
          url: 'https://n5geh.com/',
          achievements: [
            'Cloud computing and Cloud services: OpenStack and Fiware',
            'System Admin: Linux and Windows',
            'Scrum development'
          ]
        },
        {
          title: 'OpenMUC',
          url: 'https://www.openmuc.org/',
          achievements: [
            'Development and implementation of energy management solutions'
          ]
        }
      ],
      technologies: ['OpenStack', 'FIWARE']
    },
    {
      title: 'Student Assistant',
      company: 'Fraunhofer IFF',
      companyUrl: 'https://www.iff.fraunhofer.de/',
      location: 'Magdeburg, Germany',
      duration: '2016 - 2017',
      description: 'Support in research projects and master thesis development.',
      thesis: 'Development of an Energy Management System for demand response programs within smart DC houses',
      thesisUrl: 'https://www.researchgate.net/publication/324363680_Development_of_an_Energy_Management_System_for_demand_response_programs_within_smart_DC_houses_Master_thesis'
    },
    {
      title: 'Research Associate',
      company: 'Augsburg University',
      companyUrl: 'https://www.uk-augsburg.de/',
      department: 'Fakultät für Angewandte Informatik',
      duration: '2020 - 2021',
      description: 'Research in data integration for future medicine with focus on ETL processes, system administration, and Scrum development.',
      projects: [
        {
          title: 'DIFUTURE – Data Integration for Future Medicine',
          url: 'https://www.difuture.de/',
          achievements: [
            'ETL process and data management',
            'System Admin: Linux and Windows',
            'Scrum development'
          ]
        }
      ],
      skills: {
        python: 'NumPy, Pandas, matplotlib, scikit-learn, OpenCV',
        databases: 'SQL, PostgreSQL, InfluxDB',
        devops: 'CI/CD, Bash, Docker, GitLab, GitHub, Ansible, Terraform, Heroku, Dokku',
        ml: 'TensorFlow, Keras, Data wrangling',
        cloud: 'Azure, OpenStack, AWS, Docker, Kubernetes, Rancher, Helm, Docker Swarm'
      },
      technologies: ['OpenStack', 'FIWARE']
    },
    {
      title: 'Energy System Engineer',
      company: 'JSW Energy',
      companyUrl: 'https://www.jsw.in/energy',
      location: 'Ratnagiri, India',
      duration: '2010 - 2014',
      description: 'Distributed Control System (DCS) operation and maintenance in power generation facility.',
      achievements: [
        'Distributed Control System (DCS) Operation in Boiler base, Turbine base and CCS mode',
        'Air conditioning system (Klimaanlagen) & HVAC system',
        'Client-server interfaces, protocols: BACnet, MODBUS, IEC 60870, Ethernet TCP/IP',
        'SCADA-Trend, Data quality and Alarm analysis'
      ]
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
      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{fontSize: '32px'}} className="font-bold mb-6 italic font-serif">
                Abhik Ghosh, M.Sc
              </h1>
              <p style={{fontSize: '32px'}} className="text-pink-200 mb-6 italic font-serif">
                Cloud Architect | AI/ML Expert
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="https://www.linkedin.com/in/abhik-ghosh-cloud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.xing.com/profile/Abhik_Ghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fab fa-xing fa-2x"></i>
                </a>
                <a href="tel:+4917665979446" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fas fa-mobile-alt fa-2x"></i>
                </a>
                <a href="https://wa.me/4917665979446" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </a>
                <a href="mailto:abhikghosh@outlook.com" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
                <a href="https://www.credly.com/users/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fas fa-certificate fa-2x"></i>
                </a>
                <a href="https://medium.com/@abhikghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fab fa-medium fa-2x"></i>
                </a>
                <a href="https://github.com/abhik-ghosh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              
              <p className="text-lg mb-6 text-pink-100">
                As a Cloud Architect at Capgemini, I design and shape the future with innovative cloud solutions, 
                accelerating Cloud transformation through FinOps, Cyber Security, Automation and AI/ML.
              </p>
              <p className="text-lg mb-8 text-pink-100">
                With several years of experience in AWS, Azure, GCP, Kubernetes, DevSecOps, and Machine Learning, 
                I&apos;m ready to tackle your most complex challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://calendly.com/abhikghosh87"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-pink-700 transition-colors"
                >
                  <Calendar size={20} />
                  Schedule Consultation
                </motion.a>
                <motion.a
                  href="/Certificates/Lebenslauf_Ghosh_Abhik.pdf"
                  download="Abhik_Ghosh_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Briefcase size={20} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block mb-8">
                <img 
                  src="/images/profile/profile.png" 
                  alt="Abhik Ghosh" 
                  className="w-80 h-80 rounded-full border-4 border-white/30 shadow-2xl"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-sm text-pink-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Education
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-600 mb-1">{edu.degree}</h3>
                    <p className="text-xl font-semibold text-gray-900">{edu.field}</p>
                    {edu.institutionUrl ? (
                      <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:text-blue-800 underline">{edu.institution}</a>
                    ) : (
                      <p className="text-lg text-gray-700">{edu.institution}</p>
                    )}
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <span className="text-pink-600 font-semibold text-lg">{edu.duration}</span>
                </div>
                
                {edu.specialization && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialization:</h4>
                    <p className="text-gray-700">{edu.specialization}</p>
                  </div>
                )}
                
                {edu.projects && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Projects:</h4>
                    <ul className="space-y-2">
                      {edu.projects.map((project, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                          {edu.projectUrls && edu.projectUrls[pIndex] ? (
                            <a href={edu.projectUrls[pIndex]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{project}</a>
                          ) : (
                            <span className="text-gray-700">{project}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {edu.thesis && (
                  <div className="bg-pink-50 p-4 rounded-lg">
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
      <section id="certifications" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                Proven Cloud Expertise
              </a>
              <a href="https://www.credly.com/users/abhik-ghosh.941f4a38/badges#credly" target="_blank" rel="noopener noreferrer" title="View Credly Profile" className="hover:scale-110 transition-transform">
                <img src="/Site Files-download/Credly.PNG" alt="Credly" className="w-12 h-12" />
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
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center relative"
              >
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{cert.level}</p>
                <p className="text-xs text-pink-600 font-medium mb-3">Achieved {cert.year}</p>
                {cert.file && (
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
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
      <section id="contact" className="py-20 hero-gradient text-white">
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
                <Mail className="text-pink-200" />
                <span>abhikghosh@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-pink-200" />
                <span>+49 176 65979446</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-pink-200" />
                <span>Germany</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
                <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-100 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <motion.a
              href="https://calendly.com/abhikghosh87"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors"
            >
              Get Your Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}