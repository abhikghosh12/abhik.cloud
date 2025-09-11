import type { Skill } from '@/types'

export const skills: Skill[] = [
  // Cloud Platforms
  {
    id: 'aws',
    name: 'Amazon Web Services',
    category: 'Cloud Platforms',
    level: 95,
    icon: '☁️',
    description: 'Expert in AWS services including EC2, Lambda, S3, RDS, and advanced architectures',
    experience: '5+ years',
    certifications: ['AWS Solutions Architect Professional', 'AWS DevOps Engineer Professional']
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'Cloud Platforms',
    level: 90,
    icon: '🔵',
    description: 'Proficient in Azure cloud services, ARM templates, and hybrid cloud solutions',
    experience: '4+ years',
    certifications: ['Azure Solutions Architect Expert', 'Azure DevOps Engineer Expert']
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    category: 'Cloud Platforms',
    level: 85,
    icon: '🌐',
    description: 'Experience with GCP services, BigQuery, and Google Kubernetes Engine',
    experience: '3+ years',
    certifications: ['Google Cloud Professional Cloud Architect']
  },

  // DevSecOps
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'DevSecOps',
    level: 92,
    icon: '🏗️',
    description: 'Infrastructure as Code expert with complex multi-cloud deployments',
    experience: '4+ years'
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'DevSecOps',
    level: 88,
    icon: '🔧',
    description: 'CI/CD pipeline design and implementation with advanced workflows',
    experience: '5+ years'
  },
  {
    id: 'gitlab',
    name: 'GitLab CI/CD',
    category: 'DevSecOps',
    level: 85,
    icon: '🦊',
    description: 'GitLab pipelines, security scanning, and DevSecOps practices',
    experience: '3+ years'
  },
  {
    id: 'ansible',
    name: 'Ansible',
    category: 'DevSecOps',
    level: 80,
    icon: '📋',
    description: 'Configuration management and automation across diverse environments',
    experience: '3+ years'
  },

  // Containerization
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containerization',
    level: 90,
    icon: '🐳',
    description: 'Container orchestration, optimization, and security best practices',
    experience: '5+ years'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Containerization',
    level: 88,
    icon: '⚓',
    description: 'Advanced K8s deployments, operators, and cluster management',
    experience: '4+ years',
    certifications: ['Certified Kubernetes Administrator (CKA)']
  },
  {
    id: 'helm',
    name: 'Helm',
    category: 'Containerization',
    level: 82,
    icon: '⛵',
    description: 'Kubernetes package management and chart development',
    experience: '3+ years'
  },

  // AI/ML
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    level: 88,
    icon: '🐍',
    description: 'Advanced Python development for AI/ML, automation, and web applications',
    experience: '6+ years'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI/ML',
    level: 85,
    icon: '🧠',
    description: 'Deep learning model development and deployment at scale',
    experience: '3+ years'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI/ML',
    level: 80,
    icon: '🔥',
    description: 'Neural network development and research-oriented ML projects',
    experience: '2+ years'
  },
  {
    id: 'mlops',
    name: 'MLOps',
    category: 'AI/ML',
    level: 87,
    icon: '🤖',
    description: 'ML pipeline automation, model versioning, and production deployment',
    experience: '3+ years'
  },

  // Programming Languages
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming Languages',
    level: 85,
    icon: '📘',
    description: 'Type-safe JavaScript development for large-scale applications',
    experience: '4+ years'
  },
  {
    id: 'go',
    name: 'Go',
    category: 'Programming Languages',
    level: 78,
    icon: '🐹',
    description: 'High-performance backend services and cloud-native applications',
    experience: '2+ years'
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'Programming Languages',
    level: 70,
    icon: '🦀',
    description: 'Systems programming and performance-critical applications',
    experience: '1+ years'
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    level: 85,
    icon: '🐘',
    description: 'Advanced SQL, performance tuning, and database architecture',
    experience: '5+ years'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    level: 80,
    icon: '🍃',
    description: 'NoSQL database design, sharding, and aggregation pipelines',
    experience: '4+ years'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Databases',
    level: 88,
    icon: '🔴',
    description: 'Caching strategies, pub/sub systems, and data structures',
    experience: '4+ years'
  },

  // Monitoring
  {
    id: 'prometheus',
    name: 'Prometheus',
    category: 'Monitoring',
    level: 85,
    icon: '📊',
    description: 'Metrics collection, alerting, and observability implementation',
    experience: '3+ years'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'Monitoring',
    level: 88,
    icon: '📈',
    description: 'Dashboard creation, data visualization, and monitoring solutions',
    experience: '4+ years'
  },
  {
    id: 'elk',
    name: 'ELK Stack',
    category: 'Monitoring',
    level: 82,
    icon: '🔍',
    description: 'Log aggregation, search, and analysis with Elasticsearch, Logstash, Kibana',
    experience: '3+ years'
  },

  // Security
  {
    id: 'vault',
    name: 'HashiCorp Vault',
    category: 'Security',
    level: 80,
    icon: '🔐',
    description: 'Secrets management, encryption, and identity-based security',
    experience: '2+ years'
  },
  {
    id: 'owasp',
    name: 'OWASP Security',
    category: 'Security',
    level: 85,
    icon: '🛡️',
    description: 'Web application security, vulnerability assessment, and secure coding',
    experience: '4+ years'
  },
  {
    id: 'sonarqube',
    name: 'SonarQube',
    category: 'Security',
    level: 78,
    icon: '🔎',
    description: 'Code quality analysis, security vulnerability detection',
    experience: '3+ years'
  }
]

export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category)
}

export const getSkillCategories = (): string[] => {
  return Array.from(new Set(skills.map(skill => skill.category)))
}

export const getTopSkills = (count: number = 10): Skill[] => {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, count)
}
