export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">ABHIK GHOSH</h1>
        
        {/* Career Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">CAREER</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-2">2021–Present: Capgemini (Full-time)</h3>
              <p className="text-lg mb-4"><strong>Role:</strong> Cloud Architect</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Customer: Automotive</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Project: AWS-Cloud-Migration from Kubernetes-Platform (GO2Cloud)</li>
                    <li>Migration of Global Ordering Platform to AWS EKS</li>
                    <li>Automation of Deployments (IaC) with Ansible, Terraform, Jenkins, ArgoCD, Gitlab CI/CD</li>
                    <li>Monitoring and Alerting: Grafana, Loki, Prometheus, Dynatrace</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Project: Setup & development of a Data platform</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Container Platform: Harbor, Gitea, Fleet, MinIo, Longhorn, Policy engine, Trivy, Rancher, Kubernetes</li>
                    <li>Automation: IaC with Ansible, Terraform, Gitlab CI/CD, Argo CD, Fleet, Bitbucket</li>
                    <li>Observability: Grafana, Prometheus, Dynatrace, ELK stack</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Experience in GenAI and ML</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Developed and deployed conversational GenAI agents on cloud platforms</li>
                    <li>Trained models for natural language understanding and personalized interactions</li>
                    <li>Skills: Azure AI, Microsoft Co-pilot, AWS SageMaker, Amazon Bedrock, LangChain, Google Cloud Vertex AI</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-2">2020–2021: Research Associate (Full-time)</h3>
              <p className="text-gray-300 mb-2">Augsburg University, Augsburg, Germany</p>
              <p className="text-gray-400 mb-4">Projects: DIFUTURE – Data Integration for Future Medicine</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Key Skills:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Python: NumPy, Pandas, matplotlib, scikit-learn, OpenCV</li>
                    <li>Databases: SQL, PostgreSQL, influxdb</li>
                    <li>DevOps: CI/CD, Bash, Docker, GitLab, GitHub, Ansible, Terraform</li>
                    <li>Machine Learning: TensorFlow, Keras, Data wrangling</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Cloud Computing: Azure, Openstack, AWS, Docker, Kubernetes</li>
                    <li>IoT & Web Services: REST API, MQTT, HTTP, JSON, TCP/IP</li>
                    <li>Languages: Python, C/C++, HTML, Javascript, XML</li>
                    <li>Building Automation: OPC UA, SCADA, IEC 60870, Modbus, BACnet</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-2">2018–2020: Research Associate/Software Developer</h3>
              <p className="text-gray-300 mb-2">RWTH Aachen University, Aachen, Germany</p>
              <p className="text-gray-400">Projects: National 5G Energy Hub, OpenMUC</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-2">2010–2014: Energy System Engineer</h3>
              <p className="text-gray-300 mb-2">JSW Energy, Ratnagiri, India</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Distributed Control System (DCS) Operation</li>
                <li>Air conditioning (HVAC) system management</li>
                <li>Client-server interfaces: BACnet, MODBUS, IEC 60870, Ethernet TCP/IP</li>
                <li>SCADA trend, data quality, and alarm analysis</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">EDUCATION</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-2">2014–2016: Master of Science</h3>
              <p className="text-gray-300 mb-2">Electrical Engineering and Information Technology</p>
              <p className="text-gray-400 mb-2">Otto-von-Guericke-Universität, Magdeburg, Germany</p>
              <p className="text-gray-400">Specialization: Energy and Automation & Control</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-2">2005–2009: Bachelor of Engineering</h3>
              <p className="text-gray-300 mb-2">Electrical and Electronics Engineering</p>
              <p className="text-gray-400">Visveswaraiah Technological University, Belgaum, India</p>
            </div>
          </div>
        </section>
        
        {/* Research Link */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">MORE RESEARCH</h2>
          <a href="https://www.researchgate.net/profile/Abhik_Ghosh5/publications" 
             className="text-blue-400 hover:text-blue-300 underline">
            ResearchGate Publications
          </a>
        </section>
      </div>
    </div>
  );
}