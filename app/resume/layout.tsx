import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abhik Ghosh - Professional Resume | Cloud Architect & AI/ML Expert',
  description: 'Comprehensive professional resume of Abhik Ghosh - Cloud Architect at Capgemini. Expert in AWS, Azure, GCP, Kubernetes, DevSecOps, and AI/ML with 15+ years of experience in enterprise cloud transformation.',
  keywords: 'Abhik Ghosh Resume, Cloud Architect, AWS Expert, Azure Architect, Kubernetes Specialist, DevSecOps Professional, AI/ML Engineer, Capgemini, Cloud Migration, Infrastructure Automation',
  openGraph: {
    title: 'Abhik Ghosh - Professional Resume | Cloud Architect & AI/ML Expert',
    description: 'Comprehensive professional resume with detailed career experience and technical expertise',
    images: ['/images/profile/profile.png'],
    type: 'profile',
    url: 'https://abhik.cloud/resume'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhik Ghosh - Professional Resume | Cloud Architect & AI/ML Expert',
    description: 'Comprehensive professional resume with detailed career experience and technical expertise',
    images: ['/images/profile/profile.png']
  },
  alternates: {
    canonical: 'https://abhik.cloud/resume'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}