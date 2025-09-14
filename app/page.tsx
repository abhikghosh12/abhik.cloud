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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized cloud architecture and AI/ML solutions that drive business transformation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-xl mb-8 text-gray-300">Let's discuss your project and explore how I can help</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/abhikghosh87"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}