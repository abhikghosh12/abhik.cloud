import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'multi-agent-ai-system',
    title: 'Multi-Agent AI System',
    description: 'Advanced AI system with multiple intelligent agents working collaboratively to solve complex business problems and automate decision-making processes.',
    longDescription: 'This cutting-edge AI system leverages multiple specialized agents that work in harmony to tackle complex business challenges. Each agent is designed with specific expertise areas, from data analysis to decision optimization, creating a robust ecosystem capable of handling enterprise-level automation tasks.',
    image: '/images/projects/ai-system.jpg',
    images: [
      '/images/projects/ai-system-1.jpg',
      '/images/projects/ai-system-2.jpg',
      '/images/projects/ai-system-3.jpg'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'AWS', 'Redis', 'FastAPI'],
    category: 'AI/ML',
    status: 'completed',
    featured: true,
    links: {
      case_study: '/case-studies/multi-agent-ai',
      github: 'https://github.com/abhikghosh12/multi-agent-ai',
      demo: 'https://ai-demo.abhik.cloud'
    },
    details: {
      duration: '8 months',
      team_size: '4 engineers',
      impact: '65% reduction in decision-making time, 40% improvement in accuracy',
      role: 'Lead AI Architect',
      challenges: [
        'Inter-agent communication protocols',
        'Scalable distributed processing',
        'Real-time decision synchronization'
      ],
      solutions: [
        'Implemented event-driven architecture',
        'Designed custom message queuing system',
        'Built comprehensive monitoring dashboard'
      ]
    },
    metrics: {
      performance: '99.9% uptime',
      users: '10,000+ daily active agents',
      satisfaction: '4.8/5 user rating'
    },
    timeline: [
      {
        phase: 'Research & Planning',
        duration: '2 months',
        description: 'Architecture design and technology selection',
        completed: true
      },
      {
        phase: 'Core Development',
        duration: '4 months', 
        description: 'Agent framework and communication layer',
        completed: true
      },
      {
        phase: 'Testing & Optimization',
        duration: '1.5 months',
        description: 'Performance tuning and reliability testing',
        completed: true
      },
      {
        phase: 'Deployment & Monitoring',
        duration: '0.5 months',
        description: 'Production deployment and monitoring setup',
        completed: true
      }
    ]
  },
  {
    id: 'scalable-cloud-infrastructure',
    title: 'Enterprise Cloud Infrastructure',
    description: 'Highly scalable, secure cloud infrastructure on AWS with automated scaling, comprehensive monitoring, and disaster recovery for healthcare applications.',
    longDescription: 'A comprehensive cloud infrastructure solution built for a major healthcare provider, handling sensitive patient data with strict compliance requirements. The system automatically scales based on demand, maintains 99.99% uptime, and includes comprehensive backup and disaster recovery mechanisms.',
    image: '/images/projects/cloud-infra.jpg',
    images: [
      '/images/projects/cloud-infra-1.jpg',
      '/images/projects/cloud-infra-2.jpg',
      '/images/projects/cloud-infra-3.jpg'
    ],
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Jenkins', 'Vault'],
    category: 'Cloud Architecture',
    status: 'completed',
    featured: true,
    links: {
      case_study: '/case-studies/cloud-infrastructure',
      demo: 'https://cloud-demo.abhik.cloud'
    },
    details: {
      duration: '10 months',
      team_size: '6 engineers',
      impact: '99.99% uptime achieved, 50% cost reduction, HIPAA compliant',
      role: 'Cloud Architect',
      challenges: [
        'HIPAA compliance requirements',
        'Multi-region disaster recovery',
        'Cost optimization at scale'
      ],
      solutions: [
        'Implemented infrastructure as code',
        'Designed automated backup systems',
        'Created cost monitoring dashboards'
      ]
    },
    metrics: {
      performance: '99.99% uptime',
      users: '50,000+ healthcare professionals',
      revenue: '50% cost savings vs previous infrastructure'
    }
  },
  {
    id: 'devsecops-pipeline',
    title: 'Automated DevSecOps Pipeline',
    description: 'Complete CI/CD pipeline with integrated security scanning, automated testing, vulnerability assessment, and multi-environment deployment.',
    longDescription: 'A comprehensive DevSecOps pipeline that integrates security at every stage of the development lifecycle. Features automated vulnerability scanning, code quality checks, dependency analysis, and seamless deployment across multiple environments with approval workflows.',
    image: '/images/projects/devsecops.jpg',
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'SonarQube', 'OWASP ZAP', 'Terraform', 'Ansible', 'AWS'],
    category: 'DevSecOps',
    status: 'completed',
    featured: true,
    links: {
      case_study: '/case-studies/devsecops-pipeline',
      github: 'https://github.com/abhikghosh12/devsecops-pipeline'
    },
    details: {
      duration: '6 months',
      team_size: '5 engineers',
      impact: '80% faster deployments, 90% reduction in security vulnerabilities',
      role: 'DevSecOps Lead'
    }
  },
  {
    id: 'iot-energy-management',
    title: 'Smart IoT Energy Management',
    description: 'Intelligent energy management system using IoT sensors, machine learning algorithms, and real-time analytics to optimize industrial energy consumption.',
    image: '/images/projects/iot-energy.jpg',
    technologies: ['Python', 'TensorFlow', 'InfluxDB', 'Grafana', 'MQTT', 'Kubernetes', 'React'],
    category: 'IoT',
    status: 'completed',
    featured: false,
    links: {
      case_study: '/case-studies/iot-energy',
      demo: 'https://energy-demo.abhik.cloud'
    },
    details: {
      duration: '7 months',
      team_size: '4 engineers',
      impact: '35% energy cost reduction, predictive maintenance alerts',
      role: 'IoT Solutions Architect'
    }
  },
  {
    id: 'hospital-digital-platform',
    title: 'Hospital Digital Platform',
    description: 'Comprehensive digital infrastructure for Uniklinikum Augsburg supporting clinical research, patient data management, and healthcare analytics.',
    image: '/images/projects/hospital-platform.jpg',
    technologies: ['Azure', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    category: 'Healthcare',
    status: 'completed',
    featured: false,
    links: {
      case_study: '/case-studies/hospital-platform'
    },
    details: {
      duration: '14 months',
      team_size: '8 engineers',
      impact: 'Improved patient data accessibility, enhanced research capabilities',
      role: 'Technical Lead'
    }
  },
  {
    id: 'fintech-analytics',
    title: 'Real-time Financial Analytics',
    description: 'High-performance financial data analytics platform with machine learning-powered insights, fraud detection, and automated reporting.',
    image: '/images/projects/fintech.jpg',
    technologies: ['Python', 'Apache Kafka', 'Apache Spark', 'PostgreSQL', 'React', 'Docker', 'AWS'],
    category: 'FinTech',
    status: 'in_progress',
    featured: false,
    links: {
      demo: 'https://fintech-demo.abhik.cloud'
    },
    details: {
      duration: 'Ongoing',
      team_size: '6 engineers',
      impact: 'Real-time fraud detection, automated compliance reporting',
      role: 'Senior Backend Engineer'
    }
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getProjectsByStatus = (status: string): Project[] => {
  return projects.filter(project => project.status === status)
}
