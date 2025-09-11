export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  technologies: string[]
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  links: ProjectLinks
  details: ProjectDetails
  metrics?: ProjectMetrics
  timeline?: ProjectTimeline[]
}

export interface ProjectLinks {
  demo?: string
  github?: string
  case_study?: string
  live?: string
}

export interface ProjectDetails {
  duration: string
  team_size: string
  impact: string
  role?: string
  challenges?: string[]
  solutions?: string[]
}

export interface ProjectMetrics {
  performance?: string
  users?: string
  revenue?: string
  satisfaction?: string
}

export interface ProjectTimeline {
  phase: string
  duration: string
  description: string
  completed: boolean
}

export type ProjectCategory = 
  | 'AI/ML' 
  | 'Cloud Architecture' 
  | 'DevSecOps' 
  | 'IoT' 
  | 'Healthcare' 
  | 'FinTech'
  | 'Web Development'
  | 'Mobile Development'

export type ProjectStatus = 
  | 'completed' 
  | 'in_progress' 
  | 'planned' 
  | 'archived'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: number
  icon?: string
  description?: string
  experience?: string
  certifications?: string[]
}

export type SkillCategory = 
  | 'Cloud Platforms'
  | 'DevSecOps'
  | 'Containerization'
  | 'AI/ML'
  | 'Programming Languages'
  | 'Databases'
  | 'Monitoring'
  | 'Security'

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: {
    start: string
    end: string | 'Present'
  }
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'contract' | 'freelance' | 'internship'
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavItem {
  id: string
  label: string
  href: string
  icon?: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: string
  color?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  readTime: number
  featured: boolean
  image?: string
}

// Animation types
export interface AnimationVariants {
  hidden: object
  visible: object
  exit?: object
}

// Three.js types
export interface ParticleSystemProps {
  count?: number
  color?: string
  size?: number
  speed?: number
}

export interface Scene3DProps {
  camera?: {
    position: [number, number, number]
    fov?: number
  }
  lighting?: {
    ambient?: string
    directional?: {
      color: string
      position: [number, number, number]
      intensity?: number
    }
  }
}

// Store types
export interface AppState {
  theme: 'light' | 'dark' | 'system'
  currentSection: string
  isLoading: boolean
  isMobileMenuOpen: boolean
  isContactModalOpen: boolean
}

export interface AppActions {
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  setCurrentSection: (section: string) => void
  setLoading: (loading: boolean) => void
  toggleMobileMenu: () => void
  toggleContactModal: () => void
}

// API types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  code?: string
  details?: any
}

// Performance monitoring
export interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

// SEO types
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  twitterImage?: string
  noindex?: boolean
}
