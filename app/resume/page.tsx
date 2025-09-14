'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Download, Briefcase } from 'lucide-react'

export default function ResumePage() {
  const education = [
    {
      degree: "Master of Science",
      field: "Electrical Engineering and Information Technology",
      institution: "Otto-von-Guericke-Universität",
      location: "Magdeburg, Germany",
      period: "2014–2016",
      specialization: "Energy and Automation & Control subjects",
      details: [
        "Energy optimization, power economics, demand response, smart grid, BESS and renewable energy",
        "Project: Demand Response for heating and cooling purposes in smart houses",
        "Conference: Comparison of power system simulation software PSS-NETOMAC with open source calculation tool Matpower, IEEE Germany Student Conference, 2016"
      ],
      thesis: "Development of an Energy Management System for demand response programs within smart DC houses"
    },
    {
      degree: "Bachelor of Engineering",
      field: "Electrical and Electronics Engineering",
      institution: "Visveswaraiah Technological University",
      location: "Belgaum, India",
      period: "2005–2009",
      thesis: "Design and development of simulator for fuel injection calibrating parameters"
    }
  ]

  const experience = [
    {
      title: "Cloud Architect",
      company: "Capgemini",
      period: "2021 – Present",
      type: "Fulltime",
      projects: [
        {
          customer: "Automotive",
          title: "AWS-Cloud-Migration from Kubernetes-Platform (GO2Cloud)",
          details: [
            "Migration of Global Ordering Platform to AWS EKS",
            "Automation of Deployments (IaC) with Ansible, Terraform, Jenkins, ArgoCD, Gitlab CI/CD",
            "Monitoring and Alerting: Grafana, Loki, Prometheus, Dynatrace"
          ]
        },
        {
          customer: "Public sector",
          title: "Setup & development of a Data platform - Container Platform",
          details: [
            "Development of platform components such as Harbor, Gitea, Fleet, MinIo, Longhorn, Policy engine, Trivy, Rancher, Kubernetes, RedHat, Openshift, VMWARE",
            "Automation of deployments (IaC) with automation technologies Ansible, Terraform, Gitlab CI/CD, Argo CD, Fleet, Bitbucket",
            "Observability: Grafana, Prometheus, Dynatrace, ELK stack"
          ]
        },
        {
          customer: "Automotive",
          title: "Cloud Migration & Private Cloud",
          details: [
            "Hyperscaler/Public Cloud: AWS CDK, EKS, Cloud Migration",
            "Private Cloud: Openstack"
          ]
        }
      ],
      skills: "Openshift, AWS, Rancher, Kubernetes, Podman Harbor, Gitea, Gitlab CI/CD, Terraform, Fleet, Linux, DevOps, IaC",
      aiExperience: {
        title: "Experience in GenAI and ML",
        details: [
          "Developed and deployed conversational GenAI agents on cloud platforms",
          "Trained models for natural language understanding and personalized interactions"
        ],
        skills: "Azure AI, Microsoft Co-pilot, AWS SageMaker, Amazon Bedrock and LangChain, Google Cloud Vertex AI, TensorFlow, Jupyter, Python"
      }
    },
    {
      title: "Research Associate",
      company: "Augsburg University",
      location: "Augsburg, Germany",
      department: "Fakultät für Angewandte Informatik",
      period: "2020–2021",
      type: "Fulltime",
      projects: [
        {
          title: "DIFUTURE – Data Integration for Future Medicine",
          details: [
            "ETL process and data management",
            "System Admin: Linux and Windows",
            "Scrum development"
          ]
        }
      ],
      skills: [
        "Python developer: NumPy, Pandas, matplotlib, scikit-learn, OpenCV",
        "Databases (SQL, PostgreSQL, influxdb)",
        "DevOps: CI/CD, Bash, Docker, GitLab, GitHub, Ansible, Terraform, Heroku, Dokku",
        "Machine learning: TensorFlow, Keras, Data wrangling",
        "Cloud computing: Azure, Openstack, AWS, Docker, Kubernetes, RANCHER, HELM; Docker Swarm",
        "Internet of things and web services: REST API, MQTT, HTTP, JSON, TCP/IP",
        "Computer languages: Python, C/C++, HTML, Javascript, XML",
        "Building automation and monitoring: OPC UA, SCADA, IEC 60870, Modbus, BACnet and DCS"
      ]
    },
    {
      title: "Research Associate/Software Developer",
      company: "RWTH Aachen University",
      location: "Aachen, Germany",
      department: "E.ON Energy Research Center · Institute for Energy Efficient Buildings and Indoor Climate",
      period: "2018–2020",
      type: "Fulltime",
      projects: [
        {
          title: "National 5G Energy Hub",
          details: []
        },
        {
          title: "OpenMUC",
          details: [
            "Cloud computing and Cloud services: Openstack and Fiware",
            "System Admin: Linux and Windows",
            "Scrum development"
          ]
        }
      ]
    },
    {
      title: "Student Assistant",
      company: "Fraunhofer IFF",
      location: "Magdeburg, Germany",
      period: "2016–2017",
      type: "Part-time"
    },
    {
      title: "Energy (System Engineer)",
      company: "JSW Energy",
      location: "Ratnagiri, India",
      period: "2010–2014",
      type: "Fulltime",
      responsibilities: [
        "Distributed Control System (DCS) Operation in Boiler base, Turbine base and CCS mode",
        "Air conditioning system (Klimaanlagen) & HVAC system",
        "Client-server interfaces, protocols: BACnet, MODBUS, IEC 60870, Ethernet TCP/IP",
        "SCADA-Trend, Data quality and Alarm analysis"
      ]
    }
  ]

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
            <h1 className="text-5xl font-bold mb-4">Abhik Ghosh, M.Sc</h1>
            <p className="text-2xl text-pink-200 mb-8">Cloud Architect | AI/ML Expert</p>
            
            <div className="flex justify-center gap-4">
              <motion.a
                href="/Certificates/Lebenslauf_Ghosh_Abhik.pdf"
                download="Abhik_Ghosh_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-pink-50 transition-colors"
              >
                <Download size={20} />
                Download PDF Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-600 mb-1">{edu.degree}</h3>
                    <p className="text-xl font-semibold text-gray-900 mb-2">{edu.field}</p>
                    <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mt-4 lg:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>

                {edu.specialization && (
                  <div className="mb-4">
                    <p className="text-gray-700">
                      <strong>Specialization:</strong> {edu.specialization}
                    </p>
                  </div>
                )}

                {edu.details && (
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {edu.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.thesis && (
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-pink-500">
                    <p className="text-gray-700">
                      <strong>Thesis:</strong> {edu.thesis}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-600 mb-2">{job.title}</h3>
                    <p className="text-xl font-semibold text-gray-900 mb-2">{job.company}</p>
                    {job.department && (
                      <p className="text-gray-600 mb-3">{job.department}</p>
                    )}
                    {job.location && (
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={16} className="mr-2" />
                        {job.location}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{job.period}</span>
                    </div>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>

                {job.projects && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Projects:</h4>
                    <div className="space-y-6">
                      {job.projects.map((project, pIndex) => (
                        <div key={pIndex} className="bg-gray-50 p-4 rounded-lg border-l-4 border-pink-200">
                          {'customer' in project && (
                            <p className="text-sm font-medium text-pink-600 mb-2">Customer: {project.customer}</p>
                          )}
                          <h5 className="font-semibold text-gray-900 mb-3">{project.title}</h5>
                          <ul className="space-y-2">
                            {project.details.map((detail, dIndex) => (
                              <li key={dIndex} className="flex items-start text-gray-700">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {job.responsibilities && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, rIndex) => (
                        <li key={rIndex} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.aiExperience && (
                  <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                    <h4 className="text-lg font-semibold text-purple-900 mb-4">{job.aiExperience.title}</h4>
                    <ul className="space-y-3 mb-6">
                      {job.aiExperience.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/50 p-4 rounded border border-purple-200">
                      <p className="text-sm text-purple-700">
                        <strong>Skills:</strong> {job.aiExperience.skills}
                      </p>
                    </div>
                  </div>
                )}

                {job.skills && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technical Skills:</h4>
                    {Array.isArray(job.skills) ? (
                      <ul className="space-y-1">
                        {job.skills.map((skill, sIndex) => (
                          <li key={sIndex} className="text-sm text-gray-700">• {skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-700">{job.skills}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Research */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Research Publications</h2>
            <motion.a
              href="https://www.researchgate.net/profile/Abhik_Ghosh5/publications"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors"
            >
              <ExternalLink size={20} />
              View Research Publications
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}