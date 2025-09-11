export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Cloud Architect',
      company: 'Capgemini',
      period: '2021 - Present',
      type: 'Full-time',
      projects: [
        {
          customer: 'Automotive',
          title: 'AWS-Cloud-Migration from Kubernetes-Platform (GO2Cloud)',
          tasks: [
            'Migration of Global Ordering Platform to AWS EKS',
            'Automation of Deployments (IaC) with Ansible, Terraform, Jenkins, ArgoCD, Gitlab CI/CD',
            'Monitoring and Alerting: Grafana, Loki, Prometheus, Dynatrace'
          ]
        },
        {
          customer: 'Public sector',
          title: 'Setup & development of a Data platform',
          tasks: [
            'Container Platform: Harbor, Gitea, Fleet, MinIo, Longhorn, Policy engine, Trivy, Rancher, Kubernetes, RedHat, Openshift, VMWARE',
            'Automation: IaC with Ansible, Terraform, Gitlab CI/CD, Argo CD, Fleet, Bitbucket',
            'Observability: Grafana, Prometheus, Dynatrace, ELK stack'
          ]
        },
        {
          customer: 'Automotive',
          title: 'Cloud Infrastructure',
          tasks: [
            'Hyperscaler/Public Cloud: AWS CDK, EKS, Cloud Migration',
            'Private Cloud: Openstack'
          ]
        }
      ],
      skills: 'Openshift, AWS, Rancher, Kubernetes, Podman Harbor, Gitea, Gitlab CI/CD, Terraform, Fleet, Linux, DevOps, IaC',
      genai: {
        title: 'Experience in GenAI and ML',
        tasks: [
          'Developed and deployed conversational GenAI agents on cloud platforms',
          'Trained models for natural language understanding and personalized interactions'
        ],
        skills: 'Azure AI, Microsoft Co-pilot, AWS SageMaker, Amazon Bedrock, LangChain, Google Cloud Vertex AI, TensorFlow, Jupyter, Python'
      }
    },
    {
      title: 'Research Associate',
      company: 'Augsburg University, Germany',
      department: 'Fakultät für Angewandte Informatik',
      period: '2020 - 2021',
      type: 'Full-time',
      projects: 'DIFUTURE – Data Integration for Future Medicine',
      responsibilities: [
        'ETL process and data management',
        'System Admin: Linux and Windows',
        'Scrum development'
      ],
      skills: [
        'Python: NumPy, Pandas, matplotlib, scikit-learn, OpenCV',
        'Databases: SQL, PostgreSQL, influxdb',
        'DevOps: CI/CD, Bash, Docker, GitLab, GitHub, Ansible, Terraform, Heroku, Dokku',
        'Machine learning: TensorFlow, Keras, Data wrangling',
        'Cloud computing: Azure, Openstack, AWS, Docker, Kubernetes, RANCHER, HELM, Docker Swarm',
        'IoT & Web services: REST API, MQTT, HTTP, JSON, TCP/IP',
        'Languages: Python, C/C++, HTML, Javascript, XML',
        'Building automation: OPC UA, SCADA, IEC 60870, Modbus, BACnet, DCS'
      ]
    },
    {
      title: 'Research Associate/Software Developer',
      company: 'RWTH Aachen University, Germany',
      department: 'E.ON Energy Research Center',
      period: '2018 - 2020',
      type: 'Full-time',
      projects: ['National 5G Energy Hub', 'OpenMUC'],
      responsibilities: [
        'Cloud computing and Cloud services: Openstack and Fiware',
        'System Admin: Linux and Windows',
        'Scrum development'
      ]
    },
    {
      title: 'Student Assistant',
      company: 'Fraunhofer IFF, Magdeburg, Germany',
      period: '2016 - 2017',
      thesis: 'Development of an Energy Management System for demand response programs within smart DC houses'
    },
    {
      title: 'Energy System Engineer',
      company: 'JSW Energy, Ratnagiri, India',
      period: '2010 - 2014',
      type: 'Full-time',
      responsibilities: [
        'Distributed Control System (DCS) Operation in Boiler base, Turbine base and CCS mode',
        'Air conditioning system (HVAC) system management',
        'Client-server interfaces, protocols: BACnet, MODBUS, IEC 60870, Ethernet TCP/IP',
        'SCADA-Trend, Data quality and Alarm analysis'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-white/5 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-white font-medium text-lg">{exp.company}</p>
                    {exp.department && <p className="text-gray-400">{exp.department}</p>}
                  </div>
                  <div className="text-right">
                    <span className="text-purple-400 font-semibold">{exp.period}</span>
                    {exp.type && <p className="text-gray-400 text-sm">{exp.type}</p>}
                  </div>
                </div>
                
                {/* Projects for Capgemini */}
                {exp.projects && Array.isArray(exp.projects) && exp.projects.length > 0 && typeof exp.projects[0] === 'object' && 'customer' in exp.projects[0] && (
                  <div className="mb-6">
                    {(exp.projects as any[]).map((project: any, pIndex: number) => (
                      <div key={pIndex} className="mb-6 bg-gray-800/50 p-4 rounded">
                        <h4 className="font-bold text-green-400 mb-2">Customer: {project.customer}</h4>
                        <h5 className="font-semibold text-white mb-3">{project.title}</h5>
                        <ul className="space-y-1">
                          {project.tasks.map((task: string, tIndex: number) => (
                            <li key={tIndex} className="flex items-start text-gray-300">
                              <span className="text-blue-400 mr-2">▪</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* GenAI section for Capgemini */}
                {exp.genai && (
                  <div className="mb-6 bg-purple-900/30 p-4 rounded">
                    <h4 className="font-bold text-purple-400 mb-3">{exp.genai.title}</h4>
                    <ul className="space-y-1 mb-3">
                      {exp.genai.tasks.map((task, tIndex) => (
                        <li key={tIndex} className="flex items-start text-gray-300">
                          <span className="text-purple-400 mr-2">▪</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-400"><strong>Skills:</strong> {exp.genai.skills}</p>
                  </div>
                )}
                
                {/* Regular projects array */}
                {exp.projects && Array.isArray(exp.projects) && typeof exp.projects[0] === 'string' && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Projects:</h4>
                    <ul className="space-y-1">
                      {exp.projects.map((project, pIndex) => (
                        <li key={pIndex} className="text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Single project string */}
                {exp.projects && typeof exp.projects === 'string' && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Projects:</h4>
                    <p className="text-gray-300">{exp.projects as string}</p>
                  </div>
                )}
                
                {/* Responsibilities */}
                {exp.responsibilities && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, rIndex) => (
                        <li key={rIndex} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2">▪</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Skills array */}
                {exp.skills && Array.isArray(exp.skills) && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Skills:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.skills.map((skill, sIndex) => (
                        <div key={sIndex} className="text-gray-300 text-sm">
                          <span className="text-green-400 mr-2">▪</span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Skills string */}
                {exp.skills && typeof exp.skills === 'string' && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Skills:</h4>
                    <p className="text-gray-300 text-sm">{exp.skills}</p>
                  </div>
                )}
                
                {/* Thesis */}
                {exp.thesis && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Master Thesis:</h4>
                    <p className="text-gray-300">{exp.thesis}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}