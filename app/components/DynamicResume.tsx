'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Mail, Phone, Calendar, Download, Globe, Award } from 'lucide-react'

export default function DynamicResume() {
  const careerData = [
    {
      period: '2021 - Present',
      position: 'Cloud Architect',
      company: 'Capgemini',
      type: 'Full-time',
      companyUrl: 'https://www.capgemini.com/',
      location: 'Germany',
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
          title: 'Data Platform & Container Platform Development',
          achievements: [
            'Development of platform components: Harbor, Gitea, Fleet, MinIO, Longhorn, Policy engine, Trivy, Rancher, Kubernetes, RedHat OpenShift, VMware',
            'Automation of deployments (IaC) with Ansible, Terraform, GitLab CI/CD, Argo CD, Fleet, Bitbucket',
            'Observability: Grafana, Prometheus, Dynatrace, ELK stack'
          ]
        },
        {
          customer: 'Automotive',
          title: 'Hyperscaler & Private Cloud Solutions',
          achievements: [
            'Hyperscaler/Public Cloud: AWS CDK, EKS, Cloud Migration',
            'Private Cloud: OpenStack'
          ]
        }
      ],
      genaiExperience: {
        title: 'GenAI and Machine Learning',
        achievements: [
          'Developed and deployed conversational GenAI agents on cloud platforms',
          'Trained models for natural language understanding and personalized interactions'
        ],
        skills: ['Azure AI', 'Microsoft Copilot', 'AWS SageMaker', 'Amazon Bedrock', 'LangChain', 'Google Cloud Vertex AI', 'TensorFlow', 'Jupyter', 'Python']
      },
      skills: ['OpenShift', 'AWS', 'Rancher', 'Kubernetes', 'Podman', 'Harbor', 'Gitea', 'GitLab CI/CD', 'Terraform', 'Fleet', 'Linux', 'DevOps', 'IaC']
    },
    {
      period: '2020 - 2021',
      position: 'Research Associate',
      company: 'Universitätsklinikum Augsburg',
      department: 'Fakultät für Angewandte Informatik',
      departmentUrl: 'https://www.uk-augsburg.de/',
      type: 'Full-time',
      location: 'Augsburg, Germany',
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
      keySkills: {
        'Python Development': 'NumPy, Pandas, matplotlib, scikit-learn, OpenCV',
        'Databases': 'SQL, PostgreSQL, InfluxDB',
        'DevOps': 'CI/CD, Bash, Docker, GitLab, GitHub, Ansible, Terraform, Heroku, Dokku',
        'Machine Learning': 'TensorFlow, Keras, Data wrangling',
        'Cloud Computing': 'Azure, OpenStack, AWS, Docker, Kubernetes, Rancher, Helm, Docker Swarm',
        'IoT & Web Services': 'REST API, MQTT, HTTP, JSON, TCP/IP',
        'Programming Languages': 'Python, C/C++, HTML, JavaScript, XML',
        'Building Automation': 'OPC UA, SCADA, IEC 60870, Modbus, BACnet, DCS'
      }
    },
    {
      period: '2018 - 2020',
      position: 'Research Associate/Software Developer',
      company: 'RWTH Aachen University',
      department: 'E.ON Energy Research Center · Institute for Energy Efficient Buildings and Indoor Climate',
      departmentUrl: 'https://www.eonerc.rwth-aachen.de/go/id/dmud/?lidx=1',
      type: 'Full-time',
      location: 'Aachen, Germany',
      description: 'Research and development in energy systems with focus on cloud computing, system administration, and Scrum development.',
      projects: [
        {
          title: 'National 5G Energy Hub',
          url: 'https://n5geh.com/'
        },
        {
          title: 'OpenMUC',
          url: 'https://www.openmuc.org/'
        }
      ],
      responsibilities: [
        'Cloud computing and Cloud services: OpenStack and Fiware',
        'System Admin: Linux and Windows',
        'Scrum development'
      ]
    },
    {
      period: '2016 - 2017',
      position: 'Student Assistant',
      company: 'Fraunhofer IFF',
      companyUrl: 'https://www.iff.fraunhofer.de/',
      location: 'Magdeburg, Germany',
      description: 'Support in research projects and master thesis development.',
      thesis: {
        title: 'Development of an Energy Management System for demand response programs within smart DC houses',
        url: 'https://www.researchgate.net/publication/324363680_Development_of_an_Energy_Management_System_for_demand_response_programs_within_smart_DC_houses_Master_thesis'
      }
    },
    {
      period: '2010 - 2014',
      position: 'Energy System Engineer',
      company: 'JSW Energy',
      companyUrl: 'https://www.jsw.in/energy',
      type: 'Full-time',
      location: 'Ratnagiri, India',
      description: 'Distributed Control System (DCS) operation and maintenance in power generation facility.',
      responsibilities: [
        'Distributed Control System (DCS) Operation in Boiler base, Turbine base and CCS mode',
        'Air conditioning system (Klimaanlagen) & HVAC system',
        'Client-server interfaces, protocols: BACnet, MODBUS, IEC 60870, Ethernet TCP/IP',
        'SCADA-Trend, Data quality and Alarm analysis'
      ]
    }
  ]

  const educationData = [
    {
      period: '2014 - 2016',
      degree: 'Master of Science',
      field: 'Electrical Engineering and Information Technology',
      institution: 'Otto-von-Guericke-Universität',
      location: 'Magdeburg, Germany',
      institutionUrl: 'https://www.ovgu.de/Otto_von_Guericke_Universit%C3%A4t+Magdeburg-p-1.html',
      specialization: 'Energy and Automation & Control subjects',
      focus: 'Energy optimization, power economics, demand response, smart grid, BESS and renewable energy',
      projects: [
        {
          title: 'Demand Response for heating and cooling purposes in smart houses',
          url: 'https://www.researchgate.net/publication/313608794_Demand_Response_for_heating_and_cooling_purposes_in_smart_houses'
        },
        {
          title: 'Comparison of power system simulation software PSS-NETOMAC with open source calculation tool Matpower, IEEE Germany Student Conference, 2016',
          url: 'https://www.researchgate.net/publication/300013546_Comparison_of_power_system_simulation_software_PSS-NETOMAC_with_open_source_calculation_tool_Matpower'
        }
      ]
    },
    {
      period: '2005 - 2009',
      degree: 'Bachelor of Engineering',
      field: 'Electrical and Electronics Engineering',
      institution: 'Visveswaraiah Technological University',
      location: 'Belgaum, India',
      institutionUrl: 'https://vtu.ac.in/',
      thesis: 'Design and development of simulator for fuel injection calibrating parameters'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              
              {/* Profile Section */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center border-4 border-gray-200 mb-4">
                  <span className="text-white font-bold text-4xl">AG</span>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Header Info */}
              <div className="flex-1">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    Abhik Ghosh, M.Sc
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold mb-4">
                    Cloud Architect | AI/ML Expert
                  </h2>
                  
                  {/* Current Position */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award size={16} className="text-blue-600" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900">Cloud Architect</p>
                        <a 
                          href="https://www.capgemini.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                        >
                          Capgemini <ExternalLink size={14} />
                        </a>
                        <p className="text-sm text-gray-600">2021 - Present</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <Mail size={16} className="text-gray-500" />
                      <a href="mailto:abhikghosh@outlook.com" className="text-gray-700 hover:text-blue-600 text-sm">
                        abhikghosh@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <Phone size={16} className="text-gray-500" />
                      <a href="tel:+4917665979446" className="text-gray-700 hover:text-blue-600 text-sm">
                        +49 176 65979446
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <MapPin size={16} className="text-gray-500" />
                      <span className="text-gray-700 text-sm">Germany</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a
                      href="https://calendly.com/abhikghosh87"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
                    >
                      <Calendar size={18} />
                      Schedule Interview
                    </a>
                    <a
                      href="/Certificates/Lebenslauf_Ghosh_Abhik.pdf"
                      download="Abhik_Ghosh_Resume.pdf"
                      className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
                    >
                      <Download size={18} />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Professional Experience Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600"
            >
              Professional Experience
            </motion.h2>
            
            <div className="space-y-8">
              {careerData.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    {/* Job Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                          {job.type && (
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {job.type}
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          {job.companyUrl ? (
                            <a 
                              href={job.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-lg font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                            >
                              {job.company} <ExternalLink size={16} />
                            </a>
                          ) : (
                            <p className="text-lg font-semibold text-gray-800">{job.company}</p>
                          )}
                          
                          {job.department && (
                            <div>
                              {job.departmentUrl ? (
                                <a 
                                  href={job.departmentUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                                >
                                  {job.department} <ExternalLink size={14} />
                                </a>
                              ) : (
                                <p className="text-sm text-gray-600">{job.department}</p>
                              )}
                            </div>
                          )}
                          
                          {job.location && <p className="text-sm text-gray-600">{job.location}</p>}
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0">
                        <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-lg">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    {/* Job Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

                    {/* Projects */}
                    {job.projects && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Key Projects</h4>
                        <div className="grid gap-6">
                          {job.projects.map((project, pIndex) => (
                            <div key={pIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                              {'customer' in project && (
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                                  {project.customer}
                                </span>
                              )}
                              
                              <h5 className="text-lg font-bold text-gray-900 mb-3">
                                {'url' in project ? (
                                  <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                                  >
                                    {project.title} <ExternalLink size={16} />
                                  </a>
                                ) : (
                                  project.title
                                )}
                              </h5>
                              
                              {'achievements' in project && project.achievements && (
                                <ul className="space-y-2">
                                  {project.achievements.map((achievement, aIndex) => (
                                    <li key={aIndex} className="flex items-start gap-3">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Responsibilities */}
                    {job.responsibilities && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, rIndex) => (
                            <li key={rIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* GenAI Experience */}
                    {job.genaiExperience && (
                      <div className="mb-6">
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                          <h4 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                            <Award className="text-purple-600" size={20} />
                            {job.genaiExperience.title}
                          </h4>
                          <ul className="space-y-2 mb-4">
                            {job.genaiExperience.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-purple-800 leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {job.genaiExperience.skills.map((skill, sIndex) => (
                              <span key={sIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Key Skills */}
                    {job.keySkills && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Technical Expertise</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(job.keySkills).map(([category, skills]) => (
                            <div key={category} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <h5 className="font-bold text-blue-900 mb-2 text-sm">{category}</h5>
                              <p className="text-blue-800 text-sm leading-relaxed">{skills}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {job.skills && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, sIndex) => (
                            <span key={sIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Thesis */}
                    {job.thesis && (
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-bold text-green-900 mb-2">Master Thesis</h4>
                        <a 
                          href={job.thesis.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-700 hover:text-green-900 font-medium flex items-center gap-2"
                        >
                          {job.thesis.title} <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-green-600"
            >
              Education
            </motion.h2>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-green-600 mb-2">{edu.degree}</h3>
                        <p className="text-xl font-semibold text-gray-900 mb-1">{edu.field}</p>
                        
                        <a 
                          href={edu.institutionUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                        >
                          {edu.institution} <ExternalLink size={16} />
                        </a>
                        <p className="text-gray-600">{edu.location}</p>
                      </div>
                      
                      <div className="mt-4 lg:mt-0">
                        <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-lg">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {edu.specialization && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2">Specialization</h4>
                        <p className="text-gray-700">{edu.specialization}</p>
                      </div>
                    )}

                    {edu.focus && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2">Focus Areas</h4>
                        <p className="text-gray-700">{edu.focus}</p>
                      </div>
                    )}

                    {edu.projects && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-3">Research Projects & Publications</h4>
                        <ul className="space-y-2">
                          {edu.projects.map((project, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 leading-relaxed flex items-start gap-1"
                              >
                                {project.title} <ExternalLink size={14} className="mt-1 flex-shrink-0" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.thesis && (
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-bold text-green-900 mb-2">Thesis</h4>
                        <p className="text-green-800 italic">{edu.thesis}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Research Publications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Additional Research & Publications</h3>
              <p className="text-lg mb-6 text-blue-100">
                Explore my complete research portfolio and academic contributions
              </p>
              <a 
                href="https://www.researchgate.net/profile/Abhik_Ghosh5/publications" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <Globe size={20} />
                View ResearchGate Profile
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}