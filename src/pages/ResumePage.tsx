import React from 'react';

const ResumePage: React.FC = () => {
  const experience = [
    {
      period: '2021-',
      title: 'Capgemini, Fulltime Cloud Architect',
      location: 'Customer: Automotive',
      description: 'AWS Cloud Advisor/Engineer/Platform (ECS/OS), Migration of Global Onboarding Platform to AWS EKS, Automation of Deployments HCM with Ansible,Terraform, Jenkins, ArgoCD, Gitlab CI/CD, Monitoring and Alerting: Grafana, Loki, Prometheus, Dynatrace.',
      details: [
        'Setup & development of a Data platform',
        'Docker',
        'Container Platform:',
        'Development of platform components such as Harbor, Gitea, Fleet, Minio, Longhorn, Portia engine, Tiny Rancher, Kubernetes, RedHat, OpenShift, VM/Ware',
        'Automation and optimization IaC with the help of automation technologies:Ansible, Terraform, Gitlab CI/CD, ArgoCD, Fleet, BlueOcean',
        'Observability: Grafana, Prometheus, Dynatrace, ELK stack'
      ],
      skills: 'Container Platform, Docker Platform components such as Harbor, Gitea, Fleet, Minio, Longhorn, Portia engine, Tiny Rancher, Kubernetes, RedHat, OpenShift, VM/Ware, Automation and optimization IaC with the help of automation technologies:Ansible, Terraform, Gitlab CI/CD, ArgoCD, Fleet, BlueOcean, Observability: Grafana, Prometheus, Dynatrace, ELK stack'
    },
    {
      period: '',
      title: 'Customer: Automotive',
      location: '',
      description: 'Hyperscaler/Public Cloud: AWS (CDK, EKS, Cloud Migration), Private Cloud: OpenStack',
      details: [
        'Skills: OpenShift: AWS, Rancher, Kubernetes, Postman Harbor, Gitea, Gitlab CI/CD, Terraform, Fleet, Linux, DevSecOps etc'
      ],
      skills: 'Skills: OpenShift: AWS, Rancher, Kubernetes, Postman Harbor, Gitea, Gitlab CI/CD, Terraform, Fleet, Linux, DevSecOps etc'
    },
    {
      period: '',
      title: 'Experience in GenAI and ML',
      location: '',
      description: 'Developed and deployed conversational GenAI agents on cloud platforms, Trained models for natural language understanding and personalized interactions',
      details: [
        'Skills: Active Microsoft Copilot, New SageMaker, Amazon Bedrock and LangChain, Python, Azure, AWS, Azure Container Registry as Tensorflow, Jupyter, R+Python'
      ],
      skills: 'Skills: Active Microsoft Copilot, New SageMaker, Amazon Bedrock and LangChain, Python, Azure, AWS, Azure Container Registry as Tensorflow, Jupyter, R+Python'
    },
    {
      period: '2020-2021',
      title: 'Research Associate, Fulltime',
      location: 'Augsburg University Hospital Germany',
      description: 'Projects Involved',
      details: [
        'EHS process and data management',
        'System Admin Linux and windows',
        'Scrum development'
      ],
      skills: 'Key skills:, Python Developer: Numpy, Pandas, matplotlib, scikit-learn, OpenCV, Machine learning, Cloud computing: Azure, OpenStack, AWS, Docker, Kubernetes, RANCHER, HELM, Docker Swarm, Internet of things: Azure, Terraform, Hands, Docker, GitLab, GitHub, GitHub-gitlab, Operations and Elixir, Building applications OPS-CIS: Modbus, BACnet, DCS'
    },
    {
      period: '2018-2020',
      title: 'RWTH Aachen University, Aachen Germany',
      location: 'Institute for Energy Efficient Buildings and Indoor Climate',
      description: 'Projects Involved',
      details: [
        'Development and deployment of a ML/IoT embedded platform as ML prediction',
        'ETS process and data management',
        'System Admin Linux and windows',
        'Scrum development'
      ],
      skills: 'Key skills:, Python Developer: Numpy, Pandas, matplotlib, scikit-learn, OpenCV, Machine learning, Cloud computing: Azure, OpenStack, AWS, Docker, Kubernetes, RANCHER, HELM, Docker Swarm, Internet of things: Azure, Terraform, Hands, Docker, GitLab, GitHub, GitHub-gitlab, Operations and Elixir, Building applications OPS-CIS: Modbus, BACnet, DCS'
    },
    {
      period: '2016-2017',
      title: 'Student assistant',
      location: 'Hamburg University, Macatronics Germany',
      description: 'Major Tasks',
      details: [
        'Development of an Energy Management System for demand response programs within smart DC',
        'IoT implementation'
      ],
      skills: 'Master thesis:, Development of a ML-HVAC demand response program within smart DC markets.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Pink Gradient Side Panels */}
      <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-[#E91E63] to-transparent"></div>
      <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#E91E63] to-transparent"></div>
      
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">CAREER</h1>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    {job.period && (
                      <div className="text-[#E91E63] font-bold text-lg mb-2">
                        {job.period}
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    
                    {job.location && (
                      <p className="text-[#E91E63] mb-4">{job.location}</p>
                    )}
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    {job.details && job.details.length > 0 && (
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                        {job.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                    
                    {job.skills && (
                      <div className="bg-gray-700 rounded p-4">
                        <p className="text-sm text-gray-300">{job.skills}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;